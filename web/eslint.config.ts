import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, type Config } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

type LayerOptions = {
  allowDeepImport?: boolean;
};
type Layer = "lib" | "foundation" | "features" | "views";

const layerBoundaries: Record<Layer, LayerOptions> = {
  lib: {
    allowDeepImport: true,
  },
  foundation: {},
  features: {},
  views: {},
};
const layerBoundaryOrder = Object.keys(layerBoundaries) as Layer[];

const layerBoundaryConfigs = layerBoundaryOrder.map<Config>((layer, index) => {
  const patterns = [];

  // Lower layers cannot import from higher layers.
  const deniedLayers = layerBoundaryOrder.slice(index + 1);
  if (deniedLayers.length > 0) {
    patterns.push({
      group: deniedLayers.map((it) => `~/${it}/**`),
      message: `'${layer}' layer must not import from higher layers ('${deniedLayers.join("', '")}').`,
    });
  }

  // Unless specified, slices cannot import from within other slices of the same layer, only their public APIs.
  if (!layerBoundaries[layer].allowDeepImport) {
    patterns.push({
      group: [`~/${layer}/*/**`],
      message: `Cross-importing from another '${layer}' slice is forbidden. Use the slice's public 'index.ts' exports.`,
    });
  }

  // Unless allowed by the lower layer, higher layers cannot import from the internal modules of the lower layer, only their public APIs.
  const lowerLayers = layerBoundaryOrder
    .slice(0, index)
    .reduce<string[]>((acc, it) => {
      if (!layerBoundaries[it].allowDeepImport) {
        acc.push(`~/${it}/*/**`);
      }

      return acc;
    }, []);

  if (lowerLayers.length > 0) {
    patterns.push({
      group: lowerLayers,
      message: `Deep imports from a lower layer may not be imported. Use the slice's public 'index.ts' exports.`,
    });
  }

  return {
    name: `${layer}-boundary`,
    files: [`src/${layer}/**/*`],
    rules: {
      "@typescript-eslint/no-restricted-imports": ["warn", { patterns }],
    },
  };
});

export default defineConfig(
  js.configs.recommended,
  {
    files: ["**/*.tsx"],
    extends: [reactRefresh.configs.recommended],
  },
  {
    name: "root",
    extends: [
      reactHooks.configs.flat.recommended,
      tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
  ...layerBoundaryConfigs,
  { ignores: ["dist"] },
);

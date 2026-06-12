import { NavBar } from "~/features/NavBar";
import { createTabRouter } from "~/foundation/TabRouter";
import { DecodeView, ModListApplyView, ModListExtractView } from "~/views";

const AppTab = {
  MODLIST_APPLY: "modlist-apply",
  MODLIST_CREATE: "modlist-create",
  FIND_PROFILE: "find-profile",
  DECODE: "decode",
} as const;
export type AppTab = (typeof AppTab)[keyof typeof AppTab];

const [Tab, useActiveTab] = createTabRouter<AppTab>(
  AppTab,
  AppTab.MODLIST_APPLY,
);

function App() {
  const [activeTab, setActiveTab] = useActiveTab();
  return (
    <main className="app-shell">
      <NavBar
        title="SCS ModList Utility"
        activeItem={activeTab}
        onChange={setActiveTab}
      >
        <NavBar.Button tab={AppTab.MODLIST_APPLY} title="Apply ModList" />
        <NavBar.Button tab={AppTab.MODLIST_CREATE} title="Create ModList" />
        <NavBar.Button tab={AppTab.DECODE} title="SII Decoder" />
      </NavBar>

      <Tab.Router>
        <Tab.View
          tab={AppTab.MODLIST_APPLY}
          title="Apply ModList"
          Component={ModListApplyView}
        />
        <Tab.View
          tab={AppTab.MODLIST_CREATE}
          title="Create ModList"
          Component={ModListExtractView}
        />
        <Tab.View
          tab={AppTab.DECODE}
          title="SII Decoder"
          Component={DecodeView}
        />
      </Tab.Router>

      <p className="footer">
        {
          "Your files are never uploaded to any server. Everything is processed entirely within your browser."
        }
        <br />
        {"This tool is "}
        <a href="https://github.com/uncleclapton/scs-mltu/">{"open source"}</a>
        {". If you encounter any issues, please report them "}
        <a href="https://github.com/uncleclapton/scs-mltu/issues">
          {"on GitHub"}
        </a>
        {"."}
        <br />
        {"Forked with ❤️ from "}
        <a href="https://github.com/fangyi-zhou/sii-decode-rs/issues">
          {"fangyi-zhou/sii-decode-rs"}
        </a>
        {"."}
      </p>
    </main>
  );
}

export default App;

export async function getBase64Hash(input: string): Promise<string> {
  const hashBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input),
  );
  const base64 = new Uint8Array(hashBuffer).toBase64();
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

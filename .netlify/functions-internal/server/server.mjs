export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nitro@3.0.1-20260227-181935-bfbb207c",
  path: "/*",
  nodeBundler: "none",
  includedFiles: ["**"],
  excludedPath: ["/.netlify/*"],
  preferStatic: true,
};
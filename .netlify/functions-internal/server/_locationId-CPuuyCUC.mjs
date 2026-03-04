import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { R as Route$1 } from "./_ssr/router-BLCddtJi.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/tiny-invariant.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tiny-warning.mjs";
import "./_libs/react-icons.mjs";
function RouteComponent() {
  const params = Route$1.useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    "Hello from parameter ",
    params.locationId,
    " "
  ] });
}
export {
  RouteComponent as component
};

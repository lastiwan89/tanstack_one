import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as BsTwitterX, F as FaInstagram, a as FaGithub } from "../_libs/react-icons.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tiny-warning.mjs";
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-20 border-t border-(--line) px-4 pb-14 pt-10 text-(--sea-ink-soft)", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "m-0 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "build year" }),
        "© ",
        year,
        " Jagotrip Travel Agency. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "island-kicker m-0", children: [
        "Built with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "http://", target: "_blank", rel: "noopener noreferrer", children: "chillrains_" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://x.com/tan_stack",
          target: "_blank",
          rel: "noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Follow TanStack on X" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BsTwitterX, { size: 26 })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://github.com/TanStack",
          target: "_blank",
          rel: "noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Go to TanStack GitHub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, { size: 28 })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://github.com/TanStack",
          target: "_blank",
          rel: "noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "View on instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { size: 28 })
          ]
        }
      )
    ] })
  ] });
}
function getInitialMode() {
  if (typeof window === "undefined") {
    return "auto";
  }
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }
  return "auto";
}
function applyThemeMode(mode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
  if (mode === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", mode);
  }
  document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
  const [mode, setMode] = reactExports.useState("auto");
  reactExports.useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyThemeMode(initialMode);
  }, []);
  reactExports.useEffect(() => {
    if (mode !== "auto") {
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeMode("auto");
    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [mode]);
  function toggleMode() {
    const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
    setMode(nextMode);
    applyThemeMode(nextMode);
    window.localStorage.setItem("theme", nextMode);
  }
  const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: toggleMode,
      "aria-label": label,
      title: label,
      className: "rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm font-semibold text-(--sea-ink) shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5",
      children: mode === "auto" ? "Auto" : mode === "dark" ? "Dark" : "Light"
    }
  );
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "m-0 shrink-0 text-base font-semibold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm text-(--sea-ink) no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" }),
          "JagoJalan Nusantara"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://x.com/tan_stack",
          target: "_blank",
          rel: "noreferrer",
          className: "hidden rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink) sm:block",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Follow TanStack on X" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BsTwitterX, { size: 26 })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://github.com/TanStack",
          target: "_blank",
          rel: "noreferrer",
          className: "hidden rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink) sm:block",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Go to Jagojalan Official Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { size: 28 })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0", children: [
      ["Home", "/"],
      ["Location", "/location"],
      ["Work", "/work"],
      ["Paket", "/paket"],
      ["Blog", "/blog"],
      ["About", "/about"],
      ["Contact", "/contact"]
    ].map(([title, href], index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: href,
        className: "nav-link",
        activeProps: { className: "nav-link is-active" },
        children: title
      },
      index
    )) })
  ] }) });
}
const appCss = "/assets/styles-CRRbYQwx.css";
const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Jago Jalan Nusantara | Tour & Travel Guide"
      },
      {
        description: "Tour & Travel Guide Agency | Destination Lombok Island"
      },
      {
        keyword: [
          "lombok island",
          "gili island",
          "pink beach",
          "rinjani mountain",
          "mandalika international circuit"
        ]
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "font-sans antialiased wrap:anywhere selection:bg-[rgba(79,184,178,0.24)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "root", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$9 = () => import("./contact-mndJYpIQ.mjs");
const Route$9 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-CTyJOB3z.mjs");
const Route$8 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-D6VKOjAL.mjs");
const Route$7 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-7C9_dJCE.mjs");
const Route$6 = createFileRoute("/work/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-FGvD09DC.mjs");
const Route$5 = createFileRoute("/paket/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CtwgTTf7.mjs");
const Route$4 = createFileRoute("/location/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-CZeJqZp9.mjs");
const Route$3 = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_workId-96Jhjv8Z.mjs");
const Route$2 = createFileRoute("/work/$workId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_locationId-CPuuyCUC.mjs");
const Route$1 = createFileRoute("/location/$locationId")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_slug-bkf0DuJp.mjs");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const WorkIndexRoute = Route$6.update({
  id: "/work/",
  path: "/work/",
  getParentRoute: () => Route$a
});
const PaketIndexRoute = Route$5.update({
  id: "/paket/",
  path: "/paket/",
  getParentRoute: () => Route$a
});
const LocationIndexRoute = Route$4.update({
  id: "/location/",
  path: "/location/",
  getParentRoute: () => Route$a
});
const BlogIndexRoute = Route$3.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$a
});
const WorkWorkIdRoute = Route$2.update({
  id: "/work/$workId",
  path: "/work/$workId",
  getParentRoute: () => Route$a
});
const LocationLocationIdRoute = Route$1.update({
  id: "/location/$locationId",
  path: "/location/$locationId",
  getParentRoute: () => Route$a
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  BlogSlugRoute,
  LocationLocationIdRoute,
  WorkWorkIdRoute,
  BlogIndexRoute,
  LocationIndexRoute,
  PaketIndexRoute,
  WorkIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  router as r
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Location } from "./location-BKHP8xKC.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "page-wrap px-4 pb-8 pt-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "island-kicker mb-3", children: "JagoJalan Nusantara" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl", children: "Lets start your journey with us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg", children: "Explore the natural beauty of the Lombok Island." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/location", className: "rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]", children: "Explore Locations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]", children: "Get in touch" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [["Type-Safe Routing", "Routes and links stay in sync across every page."], ["Server Functions", "Call server code from your UI without creating API boilerplate."], ["Streaming by Default", "Ship progressively rendered responses for faster experiences."], ["Tailwind Native", "Design quickly with utility-first styling and reusable tokens."]].map(([title, desc], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "island-shell feature-card rise-in rounded-2xl p-5", style: {
      animationDelay: `${index * 90 + 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-2 text-base font-semibold text-(--sea-ink)", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 text-sm text-(--sea-ink-soft)", children: desc })
    ] }, title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "island-shell rise-in relative overflow-hidden my-8 rounded-4xl px-6 py-10 sm:px-10 sm:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl", children: "Recomended locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg", children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni repudiandae voluptas?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative overflow-hidden", children: Location.map((items, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "island-shell feature-card rise-in rounded-2xl p-3", style: {
        animationDelay: `${index * 90 + 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: items.src, alt: items.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/location/$locationId", params: {
          locationId: items.name
        }, className: "mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-transparent bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text", children: items.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Rating :",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-100", children: items.rating }),
            " ",
            "/ 10"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: items.description })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/location", className: "rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]", children: "Discover more" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "island-shell mt-8 rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "island-kicker mb-2", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "island-shell mt-8 rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "island-kicker mb-2", children: "Quick Start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "m-0 list-disc space-y-2 pl-5 text-sm text-(--sea-ink-soft)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Edit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/routes/index.tsx" }),
          " to customize the home page."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Update ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/components/Header.tsx" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/components/Footer.tsx" }),
          " for brand links."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Add routes in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/routes" }),
          " and tweak visual tokens in",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/styles.css" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos iusto laboriosam aliquam sit, hic unde dolore dolores eligendi officiis adipisci!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptatibus commodi debitis sint dolore quam nisi. Sunt hic voluptatem unde." })
      ] })
    ] })
  ] });
}
export {
  App as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as FaWhatsapp } from "../_libs/react-icons.mjs";
import { F as FieldsetRoot, a as FieldsetLegend$1, u as useRender, b as FieldRoot, c as FieldLabel$1, I as Input$1, d as FieldError$1, C as CheckboxRoot, e as CheckboxIndicator, B as Button$1 } from "../_libs/base-ui__react.mjs";
import "../_libs/base-ui__utils.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  [
    "relative font-medium select-none cursor-pointer",
    "inline-flex justify-center items-center gap-2.5 transition-colors",
    "after:absolute after:inset-0 after:bg-white/15 after:opacity-0 hover:not-[[data-disabled]]:after:opacity-100",
    "active:not-[[data-disabled]]:after:opacity-100 data-popup-open:after:opacity-100 after:transition-opacity",
    "focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2",
    "before:size-4.5 before:bg-spinner before:-mr-7 before:opacity-0 before:scale-20 before:transition-[opacity,scale,margin-right]",
    "[&>svg]:opacity-100 [&>svg]:transition-[opacity,scale,margin-right] [&>svg:not([class*=text-])]:text-current",
    "data-disabled:cursor-not-allowed data-disabled:opacity-70"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          "ring ring-primary-border",
          "inset-shadow-2xs inset-shadow-white/15 shadow",
          "after:rounded outline-primary"
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "ring ring-secondary-border",
          "inset-shadow-2xs inset-shadow-white/15 shadow",
          "after:rounded outline-secondary"
        ],
        tertiary: [
          "bg-tertiary text-tertiary-foreground",
          "ring ring-tertiary-border",
          "inset-shadow-2xs inset-shadow-background/15 shadow",
          "after:rounded after:bg-background/10 focus-visible:outline-tertiary"
        ],
        danger: [
          "bg-danger text-danger-foreground",
          "ring ring-danger-border",
          "inset-shadow-2xs inset-shadow-white/15 shadow",
          "after:rounded outline-danger"
        ],
        outline: [
          "text-foreground shadow",
          "ring ring-border hover:not-[[data-disabled]]:bg-accent data-popup-open:bg-accent active:not-[[data-disabled]]:bg-accent",
          "after:content-none outline-primary"
        ],
        plain: [
          "text-foreground hover:not-[[data-disabled]]:bg-accent data-popup-open:bg-accent active:not-[[data-disabled]]:bg-accent",
          "after:content-none outline-primary"
        ]
      },
      size: {
        xs: "h-7 px-2 rounded-sm after:rounded-sm [&>svg:not([class*=size-])]:size-4 gap-1.5 before:-mr-6",
        "xs-icon": "size-7.5 rounded-sm after:rounded-sm [&>svg:not([class*=size-])]:size-4",
        sm: "h-8.5 px-3 rounded after:rounded [&>svg:not([class*=size-])]:size-4.5",
        "sm-icon": "size-8.5 rounded after:rounded [&>svg:not([class*=size-])]:size-4.5",
        md: "h-9.5 px-4 rounded [&>svg:not([class*=size-])]:size-4.5",
        icon: "size-9.5 rounded [&>svg:not([class*=size-])]:size-4.5",
        lg: "h-11.5 px-5.5 rounded-lg after:rounded-lg [&>svg:not([class*=size-])]:size-4.5",
        "lg-icon": "size-11.5 rounded-lg after:rounded-lg [&>svg:not([class*=size-])]:size-4.5"
      },
      pill: {
        true: "rounded-full after:rounded-full"
      },
      block: {
        true: "w-full"
      },
      progress: {
        true: [
          "cursor-progress pointer-events-none opacity-70 [&>svg]:opacity-0 [&>svg]:scale-0 [&>svg]:-mr-7",
          "before:size-4.5 before:bg-spinner before:animate-spin before:mr-0 before:opacity-100 before:scale-100"
        ]
      }
    },
    compoundVariants: [
      {
        variant: "tertiary",
        progress: true,
        className: "before:bg-spinner-dark"
      },
      {
        size: "xs",
        progress: true,
        className: "[&>svg]:-mr-6 before:size-4"
      },
      {
        size: "sm",
        progress: true,
        className: "before:size-4.5"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function Button({
  variant,
  size,
  pill,
  progress,
  block,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      "data-slot": "button",
      "data-size": size,
      focusableWhenDisabled: true,
      ...props,
      className: cn(
        buttonVariants({ variant, size, pill, progress, block, className })
      )
    }
  );
}
function Checkbox({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxRoot,
    {
      "data-slot": "checkbox",
      ...props,
      className: cn(
        "size-4 shrink-0 flex items-center justify-center rounded-xs border border-input-border bg-input shadow-input cursor-pointer",
        "focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 outline-primary",
        "data-[checked]:bg-primary data-[checked]:border-primary",
        "transition-colors duration-75 hover:border-input-accent-border",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        props.className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          className: "data-[unchecked]:hidden flex",
          render: (props2, state) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...props2, children: state.indeterminate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "size-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "3",
              className: "size-3 text-primary-foreground",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6 9 17l-5-5" })
            }
          ) })
        }
      )
    }
  );
}
function Field({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldRoot,
    {
      "data-slot": "field",
      className: cn("flex gap-2 flex-col", className),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldLabel$1,
    {
      "data-slot": "field-label",
      className: cn("text-foreground flex items-center gap-3", className),
      ...props
    }
  );
}
function FieldError({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldError$1,
    {
      "data-slot": "field-error",
      className: cn("text-danger", className),
      ...props
    }
  );
}
function Fieldset({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldsetRoot,
    {
      "data-slot": "fieldset",
      className: cn(
        "flex flex-col gap-0",
        "*:data-[slot=text]:text-muted",
        "*:data-[slot=text]:mb-6",
        '[&_[data-slot="field"]:not([data-layout="inline"])]:not-last:mb-6',
        className
      ),
      ...props
    }
  );
}
function FieldsetLegend({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FieldsetLegend$1,
    {
      "data-slot": "fieldset-legend",
      className: cn("font-semibold text-foreground text-lg mb-2", className),
      ...props
    }
  );
}
const inputVariants = cva(
  [
    "h-9.5 px-3.5 w-full text-foreground rounded placeholder:text-dimmed transition-[color,box-shadow] shadow-input",
    "ring ring-input-border hover:not-[[data-disabled]]:not-[:focus]:ring-input-accent-border focus:outline-0 focus:ring-primary focus:ring-2",
    '[&[type="file"]]:py-2 [&[type="file"]]:text-dimmed file:-ml-1.5',
    "file:h-5.5 file:px-1.5 file:rounded-sm file:text-secondary-foreground file:ring file:ring-input-accent-border file:bg-secondary file:text-sm file:mr-2",
    "data-disabled:opacity-70 data-disabled:cursor-not-allowed"
  ],
  {
    variants: {
      variant: {
        default: "bg-input",
        subtle: "bg-input/60"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Input({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input$1,
    {
      "data-slot": "input",
      className: cn(inputVariants({ variant, className })),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "text-foreground flex items-center gap-3",
        "cursor-pointer has-[>[disabled],>[data-disabled]]:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}
function Text({
  className,
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "p",
    render,
    props: {
      "data-slot": "text",
      className: cn(
        "text-base/6 text-foreground",
        "has-[svg]:inline-flex has-[svg]:items-center has-[svg]:gap-2",
        "[&_svg:not([class*=size-])]:size-3 *:[svg]:shrink-0",
        className
      ),
      ...props
    }
  });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "page-wrap px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "island-shell rounded-2xl p-6 sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "island-kicker mb-2", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl", children: "Andalkan kami kalau untuk urusan perjalanan wisata anda." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)", children: "TanStack Start gives you type-safe routing, server functions, and modern SSR defaults. Use this as a clean foundation, then layer in your own routes, styling, and add-ons." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "island-shell rounded-2xl p-6 sm:p-8 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Fieldset, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldsetLegend, { children: "Personal Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "This information will be used to create your account. You can always change this information later." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "name", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Enter your full name", id: "fullname", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { match: "valueMissing", children: "Your full name is required" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "email", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Enter your email address", id: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { match: "valueMissing", children: "Email is required" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "I agree that Liverpool is the best football club in the world." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-6", variant: "primary", type: "submit", children: "Submit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg px-4 font-medium", children: "or" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { nativeButton: false, variant: "secondary", render: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, {}),
          "WhatsApp"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};

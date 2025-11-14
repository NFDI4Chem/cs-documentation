import { useSlots, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot as ssrRenderSlot$1 } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-Dymlno82.js";
import { u as useAppConfig, t as tv, g as _sfc_main$1, _ as _sfc_main$2 } from "../server.mjs";
import "./node-Ta6SvKQA.js";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "vue-router";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/devalue@5.5.0/node_modules/devalue/index.js";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@unhead+vue@2.0.19_vue@3.5.24_typescript@5.9.3_/node_modules/@unhead/vue/dist/index.mjs";
import "unhead/plugins";
import "tailwindcss/colors";
import "@iconify/vue";
import "reka-ui";
import "@vueuse/core";
import "tailwind-variants";
import "@iconify/utils/lib/css/icon";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
import "vaul-vue";
import "reka-ui/namespaced";
import "/home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs";
import "minimark/hast";
const theme = {
  "slots": {
    "base": [
      "group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default",
      "transition-colors"
    ],
    "icon": "size-6 mb-2 block",
    "title": "text-highlighted font-semibold",
    "description": "text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1",
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 text-dimmed pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "icon": "text-primary"
      },
      "secondary": {
        "icon": "text-secondary"
      },
      "success": {
        "icon": "text-success"
      },
      "info": {
        "icon": "text-info"
      },
      "warning": {
        "icon": "text-warning"
      },
      "error": {
        "icon": "text-error"
      },
      "neutral": {
        "icon": "text-highlighted"
      }
    },
    "to": {
      "true": ""
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "to": true,
      "class": {
        "base": "hover:bg-primary/10 hover:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "secondary",
      "to": true,
      "class": {
        "base": "hover:bg-secondary/10 hover:border-secondary",
        "externalIcon": "group-hover:text-secondary"
      }
    },
    {
      "color": "success",
      "to": true,
      "class": {
        "base": "hover:bg-success/10 hover:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "info",
      "to": true,
      "class": {
        "base": "hover:bg-info/10 hover:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "warning",
      "to": true,
      "class": {
        "base": "hover:bg-warning/10 hover:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error",
      "to": true,
      "class": {
        "base": "hover:bg-error/10 hover:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:bg-elevated/50 hover:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCard",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    icon: { type: [String, Object], required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.card || {} })({
      color: props.color,
      to: !!props.to,
      title: !!props.title
    }));
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    const ariaLabel = computed(() => (props.title || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.to) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: target.value, ..._ctx.$attrs }, {
          class: "focus:outline-none",
          tabindex: "-1",
          raw: ""
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$2, {
          name: __props.icon,
          class: ui.value.icon({ class: props.ui?.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!!__props.to && target.value === "_blank") {
        _push(ssrRenderComponent(_sfc_main$2, {
          name: unref(appConfig).ui.icons.external,
          class: ui.value.externalIcon({ class: props.ui?.externalIcon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.title || !!slots.title) {
        _push(`<p class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}">`);
        ssrRenderSlot(_ctx.$slots, "title", { mdcUnwrap: "p" }, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!!slots.default) {
        _push(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}">`);
        ssrRenderSlot$1(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Card-BOmD4N1y.js.map

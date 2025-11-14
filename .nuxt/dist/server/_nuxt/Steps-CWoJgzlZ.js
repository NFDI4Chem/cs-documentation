import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { u as useAppConfig, t as tv } from "../server.mjs";
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
  "base": "ms-4 border-s border-default ps-8 [counter-reset:step]",
  "variants": {
    "level": {
      "2": "[&>h2]:[counter-increment:step] [&>h2]:relative [&>h2]:before:absolute [&>h2]:before:size-8 [&>h2]:before:bg-elevated [&>h2]:before:rounded-full [&>h2]:before:font-semibold [&>h2]:before:text-sm [&>h2]:before:tabular-nums [&>h2]:before:inline-flex [&>h2]:before:items-center [&>h2]:before:justify-center [&>h2]:before:ring-4 [&>h2]:before:ring-bg [&>h2]:before:-ms-[48.5px] [&>h2]:before:-mt-0 [&>h2]:before:content-[counter(step)] [&>h2>a>span.absolute]:hidden",
      "3": "[&>h3]:[counter-increment:step] [&>h3]:relative [&>h3]:before:absolute [&>h3]:before:size-7 [&>h3]:before:inset-x-0.5 [&>h3]:before:bg-elevated [&>h3]:before:rounded-full [&>h3]:before:font-semibold [&>h3]:before:text-sm [&>h3]:before:tabular-nums [&>h3]:before:inline-flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:ring-4 [&>h3]:before:ring-bg [&>h3]:before:-ms-[48.5px] [&>h3]:before:content-[counter(step)] [&>h3>a>span.absolute]:hidden",
      "4": "[&>h4]:[counter-increment:step] [&>h4]:relative [&>h4]:before:absolute [&>h4]:before:size-7 [&>h4]:before:inset-x-0.5 [&>h4]:before:bg-elevated [&>h4]:before:rounded-full [&>h4]:before:font-semibold [&>h4]:before:text-sm [&>h4]:before:tabular-nums [&>h4]:before:inline-flex [&>h4]:before:items-center [&>h4]:before:justify-center [&>h4]:before:ring-4 [&>h4]:before:ring-bg [&>h4]:before:-ms-[48.5px] [&>h4]:before:content-[counter(step)] [&>h4>a>span.absolute]:hidden"
    }
  },
  "defaultVariants": {
    "level": "3"
  }
};
const _sfc_main = {
  __name: "ProseSteps",
  __ssrInlineRender: true,
  props: {
    level: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.steps || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value({ class: props.class, level: props.level })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/prose/Steps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Steps-CWoJgzlZ.js.map

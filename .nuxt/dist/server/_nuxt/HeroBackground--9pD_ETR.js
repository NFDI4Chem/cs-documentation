import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { S as useLoadingIndicator } from "../server.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroBackground",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoading } = useLoadingIndicator();
    const appear = ref(false);
    const appeared = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute w-full -top-px transition-all text-primary shrink-0", [
          unref(isLoading) ? "animate-pulse" : unref(appear) ? "" : "opacity-0",
          unref(appeared) ? "duration-[400ms]" : "duration-1000"
        ]]
      }, _attrs))}><svg viewBox="0 0 1440 181" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none"><mask id="path-1-inside-1_414_5526" fill="white"><path d="M0 0H1440V181H0V0Z"></path></mask><path d="M0 0H1440V181H0V0Z" fill="url(#paint0_linear_414_5526)" fill-opacity="0.22"></path><path d="M0 2H1440V-2H0V2Z" fill="url(#paint1_linear_414_5526)" mask="url(#path-1-inside-1_414_5526)"></path><defs><linearGradient id="paint0_linear_414_5526" x1="720" y1="0" x2="720" y2="181" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_414_5526" x1="0" y1="90.5" x2="1440" y2="90.5" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity="0"></stop><stop offset="0.395" stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/HeroBackground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeroBackground = Object.assign(_sfc_main, { __name: "HeroBackground" });
export {
  HeroBackground as default
};
//# sourceMappingURL=HeroBackground--9pD_ETR.js.map

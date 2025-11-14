import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { U as _export_sfc, T as useState } from './server.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unhead@2.0.19/node_modules/unhead/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/node-mock-http@1.0.3/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unstorage@1.17.2_db0@0.3.4_better-sqlite3@12.4.1__ioredis@5.8.2/node_modules/unstorage/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unstorage@1.17.2_db0@0.3.4_better-sqlite3@12.4.1__ioredis@5.8.2/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unstorage@1.17.2_db0@0.3.4_better-sqlite3@12.4.1__ioredis@5.8.2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unstorage@1.17.2_db0@0.3.4_better-sqlite3@12.4.1__ioredis@5.8.2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/minimark@0.2.0/node_modules/minimark/dist/hast.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@unocss+core@66.5.6/node_modules/@unocss/core/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@unocss+preset-wind3@66.5.6/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/devalue@5.5.0/node_modules/devalue/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unhead@2.0.19/node_modules/unhead/dist/server.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unhead@2.0.19/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unhead@2.0.19/node_modules/unhead/dist/utils.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+utils@3.0.2/node_modules/@iconify/utils/lib/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/db0@0.3.4_better-sqlite3@12.4.1/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ipx@2.1.1_db0@0.3.4_better-sqlite3@12.4.1__ioredis@5.8.2/node_modules/ipx/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue-router@4.6.3_vue@3.5.24_typescript@5.9.3_/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/tailwindcss@4.1.17/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+vue@5.0.0_vue@3.5.24_typescript@5.9.3_/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/tailwind-variants@3.1.1_tailwind-merge@3.4.0_tailwindcss@4.1.17/node_modules/tailwind-variants/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+utils@3.0.2/node_modules/@iconify/utils/lib/css/icon.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/utils/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vaul-vue@0.4.1_reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3___vue@3.5.24_typescript@5.9.3_/node_modules/vaul-vue/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/namespaced/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StarsBg",
  __ssrInlineRender: true,
  props: {
    starCount: { default: 300 },
    color: { default: "var(--ui-primary)" },
    speed: { default: "normal" },
    size: { default: () => ({
      min: 1,
      max: 2
    }) }
  },
  setup(__props) {
    const props = __props;
    const generateStars = (count) => {
      return Array.from({ length: count }, () => ({
        x: Math.floor(Math.random() * 2e3),
        y: Math.floor(Math.random() * 2e3),
        size: typeof props.size === "number" ? props.size : Math.random() * (props.size.max - props.size.min) + props.size.min
      }));
    };
    const speedMap = {
      slow: { duration: 200, opacity: 0.5, ratio: 0.3 },
      normal: { duration: 150, opacity: 0.75, ratio: 0.3 },
      fast: { duration: 100, opacity: 1, ratio: 0.4 }
    };
    const stars = useState("stars", () => {
      return {
        slow: generateStars(Math.floor(props.starCount * speedMap.slow.ratio)),
        normal: generateStars(Math.floor(props.starCount * speedMap.normal.ratio)),
        fast: generateStars(Math.floor(props.starCount * speedMap.fast.ratio))
      };
    });
    const starLayers = computed(() => [
      { stars: stars.value.fast, ...speedMap.fast },
      { stars: stars.value.normal, ...speedMap.normal },
      { stars: stars.value.slow, ...speedMap.slow }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute pointer-events-none z-[-1] inset-y-0 inset-x-5 sm:inset-x-7 lg:inset-x-9 overflow-hidden" }, _attrs))} data-v-3111de60><svg class="absolute inset-0 pointer-events-none" viewBox="0 0 1017 181" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3111de60><g opacity="0.5" data-v-3111de60><mask id="path-1-inside-1_846_160841" fill="white" data-v-3111de60><path d="M0 0H1017V181H0V0Z" data-v-3111de60></path></mask><path d="M0 0H1017V181H0V0Z" fill="url(#paint0_radial_846_160841)" fill-opacity="0.22" data-v-3111de60></path></g><defs data-v-3111de60><radialGradient id="paint0_radial_846_160841" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(508.999 19.5) rotate(90.177) scale(161.501 509.002)" data-v-3111de60><stop stop-color="var(--ui-primary)" data-v-3111de60></stop><stop offset="1" stop-color="var(--ui-primary)" stop-opacity="0" data-v-3111de60></stop></radialGradient><linearGradient id="paint1_linear_846_160841" x1="10.9784" y1="91" x2="1017" y2="90.502" gradientUnits="userSpaceOnUse" data-v-3111de60><stop stop-color="var(--ui-primary)" stop-opacity="0" data-v-3111de60></stop><stop offset="0.395" stop-color="var(--ui-primary)" data-v-3111de60></stop><stop offset="1" stop-color="var(--ui-primary)" stop-opacity="0" data-v-3111de60></stop></linearGradient></defs></svg><div class="stars size-full absolute inset-x-0 top-0" data-v-3111de60><!--[-->`);
      ssrRenderList(unref(starLayers), (layer, index) => {
        _push(`<div class="star-layer" style="${ssrRenderStyle({
          "--star-duration": `${layer.duration}s`,
          "--star-opacity": layer.opacity,
          "--star-color": __props.color
        })}" data-v-3111de60><!--[-->`);
        ssrRenderList(layer.stars, (star, starIndex) => {
          _push(`<div class="star absolute rounded-full" style="${ssrRenderStyle({
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "var(--star-color)",
            opacity: "var(--star-opacity)"
          })}" data-v-3111de60></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/StarsBg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StarsBg = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-3111de60"]]), { __name: "StarsBg" });

export { StarsBg as default };
//# sourceMappingURL=StarsBg-Dvs_nbeE.mjs.map

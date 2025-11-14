import { useSlots, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, createTextVNode, toDisplayString, Fragment, renderList, createVNode, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { Primitive } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import { u as useAppConfig, t as tv, P as _sfc_main$n, n as _sfc_main$t } from './server.mjs';
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
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/tailwind-variants@3.1.1_tailwind-merge@3.4.0_tailwindcss@4.1.17/node_modules/tailwind-variants/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+utils@3.0.2/node_modules/@iconify/utils/lib/css/icon.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/utils/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vaul-vue@0.4.1_reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3___vue@3.5.24_typescript@5.9.3_/node_modules/vaul-vue/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/namespaced/index.mjs';

const theme = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
    "wrapper": "",
    "header": "",
    "headline": "mb-4",
    "title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-lg sm:text-xl/8 text-muted",
    "body": "mt-10",
    "footer": "mt-10",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "wrapper": "text-center",
        "description": "text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-primary flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  }
};
const _sfc_main = {
  __name: "UPageHero",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.pageHero) || {} })({
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$n, {
              class: ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  if (!!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (((_a3 = __props.links) == null ? void 0 : _a3.length) || !!slots.links)) {
                    _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_b2 = props.ui) == null ? void 0 : _b2.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.header({ class: (_c = props.ui) == null ? void 0 : _c.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        var _a4, _b3, _c2;
                        if (__props.headline || !!slots.headline) {
                          _push3(`<div class="${ssrRenderClass(ui.value.headline({ class: (_a4 = props.ui) == null ? void 0 : _a4.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${ssrInterpolate(__props.headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.title || !!slots.title) {
                          _push3(`<h1 class="${ssrRenderClass(ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h1>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div class="${ssrRenderClass(ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.body) {
                      _push3(`<div class="${ssrRenderClass(ui.value.body({ class: (_d = props.ui) == null ? void 0 : _d.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        var _a4, _b3;
                        if (((_a4 = __props.links) == null ? void 0 : _a4.length) || !!slots.links) {
                          _push3(`<div class="${ssrRenderClass(ui.value.links({ class: (_b3 = props.ui) == null ? void 0 : _b3.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.links, (link, index) => {
                              _push3(ssrRenderComponent(_sfc_main$t, mergeProps({
                                key: index,
                                size: "xl"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (__props.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (((_g = __props.links) == null ? void 0 : _g.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
                    }, [
                      !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.header({ class: (_i = props.ui) == null ? void 0 : _i.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => {
                          var _a4, _b3, _c2;
                          return [
                            __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.headline({ class: (_a4 = props.ui) == null ? void 0 : _a4.headline, headline: !slots.headline })
                            }, [
                              renderSlot(_ctx.$slots, "headline", {}, () => [
                                createTextVNode(toDisplayString(__props.headline), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                              key: 1,
                              class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                            }, [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                            }, [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.body({ class: (_j = props.ui) == null ? void 0 : _j.body })
                      }, [
                        renderSlot(_ctx.$slots, "body")
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (((_k = __props.links) == null ? void 0 : _k.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.footer({ class: (_l = props.ui) == null ? void 0 : _l.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => {
                          var _a4, _b3;
                          return [
                            ((_a4 = __props.links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.links({ class: (_b3 = props.ui) == null ? void 0 : _b3.links })
                            }, [
                              renderSlot(_ctx.$slots, "links", {}, () => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                                  return openBlock(), createBlock(_sfc_main$t, mergeProps({
                                    key: index,
                                    size: "xl"
                                  }, { ref_for: true }, link), null, 16);
                                }), 128))
                              ])
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$n, {
                class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c, _d, _e, _f;
                  return [
                    !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || !!slots.footer || (((_a3 = __props.links) == null ? void 0 : _a3.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: (_b2 = props.ui) == null ? void 0 : _b2.wrapper })
                    }, [
                      !!slots.header || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.header({ class: (_c = props.ui) == null ? void 0 : _c.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => {
                          var _a4, _b3, _c2;
                          return [
                            __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.headline({ class: (_a4 = props.ui) == null ? void 0 : _a4.headline, headline: !slots.headline })
                            }, [
                              renderSlot(_ctx.$slots, "headline", {}, () => [
                                createTextVNode(toDisplayString(__props.headline), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                              key: 1,
                              class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                            }, [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                            }, [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.body({ class: (_d = props.ui) == null ? void 0 : _d.body })
                      }, [
                        renderSlot(_ctx.$slots, "body")
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => {
                          var _a4, _b3;
                          return [
                            ((_a4 = __props.links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.links({ class: (_b3 = props.ui) == null ? void 0 : _b3.links })
                            }, [
                              renderSlot(_ctx.$slots, "links", {}, () => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                                  return openBlock(), createBlock(_sfc_main$t, mergeProps({
                                    key: index,
                                    size: "xl"
                                  }, { ref_for: true }, link), null, 16);
                                }), 128))
                              ])
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PageHero-BO1grwiQ.mjs.map

import { ref, computed, useId, unref, withCtx, createVNode, resolveDynamicComponent, mergeProps, createBlock, openBlock, createCommentVNode, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderClass } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { withLeadingSlash, withTrailingSlash, joinURL } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { DialogRoot, DialogTrigger, DialogPortal } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import { Motion, AnimatePresence } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/motion-v@1.7.4_@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3___vue@3.5.24_typescript@5.9.3_/node_modules/motion-v/dist/es/index.mjs';
import { createReusableTemplate, useEventListener } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
import { u as useAppConfig, t as tv, M as useRuntimeConfig, O as ImageComponent } from './server.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/unhead@2.0.19/node_modules/unhead/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/node-mock-http@1.0.3/node_modules/node-mock-http/dist/index.mjs';
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
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/tailwind-variants@3.1.1_tailwind-merge@3.4.0_tailwindcss@4.1.17/node_modules/tailwind-variants/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+utils@3.0.2/node_modules/@iconify/utils/lib/css/icon.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/utils/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vaul-vue@0.4.1_reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3___vue@3.5.24_typescript@5.9.3_/node_modules/vaul-vue/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/namespaced/index.mjs';

const theme = {
  "slots": {
    "base": "rounded-md w-full",
    "overlay": "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity",
    "content": "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none",
    "zoomedImage": "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
  },
  "variants": {
    "zoom": {
      "true": "will-change-transform"
    },
    "open": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "zoom": true,
      "open": false,
      "class": "cursor-zoom-in"
    }
  ]
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    class: { type: null, required: false },
    zoom: { type: Boolean, required: false, default: true },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineImageTemplate, ReuseImageTemplate] = createReusableTemplate();
    const [DefineZoomedImageTemplate, ReuseZoomedImageTemplate] = createReusableTemplate();
    const open = ref(false);
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.img) || {} })({
        zoom: props.zoom,
        open: open.value
      });
    });
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    const layoutId = computed(() => `${refinedSrc.value}::${useId()}`);
    if (props.zoom) {
      useEventListener(void 0, "scroll", () => {
        open.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: __props.alt,
              width: __props.width,
              height: __props.height
            }, _ctx.$attrs, {
              class: ui.value.base({ class: [(_a = props.ui) == null ? void 0 : _a.base, props.class] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: __props.alt,
                width: __props.width,
                height: __props.height
              }, _ctx.$attrs, {
                class: ui.value.base({ class: [(_b = props.ui) == null ? void 0 : _b.base, props.class] })
              }), null, 16, ["src", "alt", "width", "height", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(DefineZoomedImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: __props.alt
            }, _ctx.$attrs, {
              class: ui.value.zoomedImage({ class: [(_a = props.ui) == null ? void 0 : _a.zoomedImage] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: __props.alt
              }, _ctx.$attrs, {
                class: ui.value.zoomedImage({ class: [(_b = props.ui) == null ? void 0 : _b.zoomedImage] })
              }), null, 16, ["src", "alt", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.zoom) {
        _push(ssrRenderComponent(unref(DialogRoot), {
          open: open.value,
          "onUpdate:open": ($event) => open.value = $event,
          modal: false
        }, {
          default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DialogTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseImageTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Motion), {
                        "layout-id": layoutId.value,
                        "as-child": "",
                        transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ReuseImageTemplate))
                        ]),
                        _: 1
                      }, 8, ["layout-id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DialogPortal), null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AnimatePresence), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a, _b, _c, _d;
                        if (_push4) {
                          if (open.value) {
                            _push4(ssrRenderComponent(unref(Motion), {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [(_a = props.ui) == null ? void 0 : _a.overlay] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (open.value) {
                            _push4(`<div class="${ssrRenderClass(ui.value.content({ class: [(_b = props.ui) == null ? void 0 : _b.content] }))}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(ReuseZoomedImageTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(ReuseZoomedImageTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            open.value ? (openBlock(), createBlock(unref(Motion), {
                              key: 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [(_c = props.ui) == null ? void 0 : _c.overlay] })
                            }, null, 8, ["class"])) : createCommentVNode("", true),
                            open.value ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.content({ class: [(_d = props.ui) == null ? void 0 : _d.content] }),
                              onClick: close
                            }, [
                              createVNode(unref(Motion), {
                                "as-child": "",
                                "layout-id": layoutId.value,
                                transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseZoomedImageTemplate))
                                ]),
                                _: 1
                              }, 8, ["layout-id"])
                            ], 10, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(AnimatePresence), null, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            open.value ? (openBlock(), createBlock(unref(Motion), {
                              key: 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [(_a = props.ui) == null ? void 0 : _a.overlay] })
                            }, null, 8, ["class"])) : createCommentVNode("", true),
                            open.value ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.content({ class: [(_b = props.ui) == null ? void 0 : _b.content] }),
                              onClick: close
                            }, [
                              createVNode(unref(Motion), {
                                "as-child": "",
                                "layout-id": layoutId.value,
                                transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseZoomedImageTemplate))
                                ]),
                                _: 1
                              }, 8, ["layout-id"])
                            ], 10, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DialogTrigger), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseImageTemplate))
                      ]),
                      _: 1
                    }, 8, ["layout-id"])
                  ]),
                  _: 1
                }),
                createVNode(unref(DialogPortal), null, {
                  default: withCtx(() => [
                    createVNode(unref(AnimatePresence), null, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          open.value ? (openBlock(), createBlock(unref(Motion), {
                            key: 0,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            class: ui.value.overlay({ class: [(_a = props.ui) == null ? void 0 : _a.overlay] })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          open.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.content({ class: [(_b = props.ui) == null ? void 0 : _b.content] }),
                            onClick: close
                          }, [
                            createVNode(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseZoomedImageTemplate))
                              ]),
                              _: 1
                            }, 8, ["layout-id"])
                          ], 10, ["onClick"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Img-DfCZlTbX.mjs.map

import { u as useAppConfig, t as tv, P as _sfc_main$2, Q as _sfc_main$4 } from "../server.mjs";
import { _ as _sfc_main$3 } from "./Page-Ii0Auzaf.js";
import { useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, renderSlot, openBlock, useSSRContext, defineComponent, inject } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { Primitive } from "reka-ui";
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
    "root": "hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5",
    "container": "relative",
    "top": "sticky -top-8 -mt-8 pointer-events-none z-[1]",
    "topHeader": "h-8 bg-default -mx-4 px-4",
    "topBody": "bg-default relative pointer-events-auto flex flex-col -mx-4 px-4",
    "topFooter": "h-8 bg-gradient-to-b from-default -mx-4 px-4"
  }
};
const _sfc_main$1 = {
  __name: "UPageAside",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "aside" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageAside || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: props.ui?.top }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.topHeader({ class: props.ui?.topHeader }))}"${_scopeId}></div><div class="${ssrRenderClass(ui.value.topBody({ class: props.ui?.topBody }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.topFooter({ class: props.ui?.topFooter }))}"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: props.ui?.top })
                }, [
                  createVNode("div", {
                    class: ui.value.topHeader({ class: props.ui?.topHeader })
                  }, null, 2),
                  createVNode("div", {
                    class: ui.value.topBody({ class: props.ui?.topBody })
                  }, [
                    renderSlot(_ctx.$slots, "top")
                  ], 2),
                  createVNode("div", {
                    class: ui.value.topFooter({ class: props.ui?.topFooter })
                  }, null, 2)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default"),
                renderSlot(_ctx.$slots, "bottom")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageAside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = inject("navigation");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$2;
      const _component_UPage = _sfc_main$3;
      const _component_UPageAside = _sfc_main$1;
      const _component_UContentNavigation = _sfc_main$4;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPage, null, {
              left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageAside, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UContentNavigation, {
                          highlight: "",
                          navigation: unref(navigation)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UContentNavigation, {
                            highlight: "",
                            navigation: unref(navigation)
                          }, null, 8, ["navigation"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageAside, null, {
                      default: withCtx(() => [
                        createVNode(_component_UContentNavigation, {
                          highlight: "",
                          navigation: unref(navigation)
                        }, null, 8, ["navigation"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPage, null, {
                left: withCtx(() => [
                  createVNode(_component_UPageAside, null, {
                    default: withCtx(() => [
                      createVNode(_component_UContentNavigation, {
                        highlight: "",
                        navigation: unref(navigation)
                      }, null, 8, ["navigation"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=docs-ZPmFjdWn.js.map

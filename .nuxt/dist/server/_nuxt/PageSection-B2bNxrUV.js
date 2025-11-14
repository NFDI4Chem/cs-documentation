import { useSlots, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, createTextVNode, toDisplayString, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Primitive } from "reka-ui";
import { u as useAppConfig, t as tv, P as _sfc_main$1, _ as _sfc_main$2, n as _sfc_main$4 } from "../server.mjs";
import _sfc_main$3 from "./PageFeature-DiT9skX-.js";
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
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "leading": "flex items-center mb-6",
    "leadingIcon": "size-10 shrink-0 text-primary",
    "headline": "mb-3",
    "title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "features": "grid",
    "footer": "mt-8",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty",
        "features": "gap-4"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "leading": "justify-center",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center",
        "features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
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
    },
    "description": {
      "true": ""
    },
    "body": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "vertical",
      "title": true,
      "class": {
        "body": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "description": true,
      "class": {
        "body": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "body": true,
      "class": {
        "footer": "mt-16"
      }
    }
  ]
};
const _sfc_main = {
  __name: "UPageSection",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "section" },
    headline: { type: String, required: false },
    icon: { type: [String, Object], required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    features: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageSection || {} })({
      orientation: props.orientation,
      reverse: props.reverse,
      title: !!props.title || !!slots.title,
      description: !!props.description || !!slots.description,
      body: !!slots.body || (!!props.features?.length || !!slots.features)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links)) {
                    _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (__props.icon || !!slots.leading) {
                          _push3(`<div class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                            if (__props.icon) {
                              _push3(ssrRenderComponent(_sfc_main$2, {
                                name: __props.icon,
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, _parent3, _scopeId2));
                            } else {
                              _push3(`<!---->`);
                            }
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.headline || !!slots.headline) {
                          _push3(`<div class="${ssrRenderClass(ui.value.headline({ class: props.ui?.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${ssrInterpolate(__props.headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.title || !!slots.title) {
                          _push3(`<h2 class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h2>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
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
                    if (!!slots.body || (__props.features?.length || !!slots.features)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                        if (__props.features?.length || !!slots.features) {
                          _push3(`<ul class="${ssrRenderClass(ui.value.features({ class: props.ui?.features }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.features, (feature, index) => {
                              _push3(ssrRenderComponent(_sfc_main$3, mergeProps({
                                key: index,
                                as: "li"
                              }, { ref_for: true }, feature), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</ul>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (__props.links?.length || !!slots.links)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        if (__props.links?.length || !!slots.links) {
                          _push3(`<div class="${ssrRenderClass(ui.value.links({ class: props.ui?.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.links, (link, index) => {
                              _push3(ssrRenderComponent(_sfc_main$4, mergeProps({
                                key: index,
                                size: "lg"
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
                    !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.header({ class: props.ui?.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => [
                          __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.leading({ class: props.ui?.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                              __props.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                key: 0,
                                name: __props.icon,
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                          }, [
                            renderSlot(_ctx.$slots, "headline", {}, () => [
                              createTextVNode(toDisplayString(__props.headline), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                            key: 2,
                            class: ui.value.title({ class: props.ui?.title })
                          }, [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 3,
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body || (__props.features?.length || !!slots.features) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.body({ class: props.ui?.body })
                      }, [
                        renderSlot(_ctx.$slots, "body", {}, () => [
                          __props.features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: ui.value.features({ class: props.ui?.features })
                          }, [
                            renderSlot(_ctx.$slots, "features", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature, index) => {
                                return openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: index,
                                  as: "li"
                                }, { ref_for: true }, feature), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ui.value.footer({ class: props.ui?.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => [
                          __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.links({ class: props.ui?.links })
                          }, [
                            renderSlot(_ctx.$slots, "links", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                                return openBlock(), createBlock(_sfc_main$4, mergeProps({
                                  key: index,
                                  size: "lg"
                                }, { ref_for: true }, link), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
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
              createVNode(_sfc_main$1, {
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.wrapper({ class: props.ui?.wrapper })
                  }, [
                    !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.header({ class: props.ui?.header })
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.leading({ class: props.ui?.leading })
                        }, [
                          renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                            __props.icon ? (openBlock(), createBlock(_sfc_main$2, {
                              key: 0,
                              name: __props.icon,
                              class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                        }, [
                          renderSlot(_ctx.$slots, "headline", {}, () => [
                            createTextVNode(toDisplayString(__props.headline), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                          key: 2,
                          class: ui.value.title({ class: props.ui?.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.body || (__props.features?.length || !!slots.features) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.body({ class: props.ui?.body })
                    }, [
                      renderSlot(_ctx.$slots, "body", {}, () => [
                        __props.features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: ui.value.features({ class: props.ui?.features })
                        }, [
                          renderSlot(_ctx.$slots, "features", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature, index) => {
                              return openBlock(), createBlock(_sfc_main$3, mergeProps({
                                key: index,
                                as: "li"
                              }, { ref_for: true }, feature), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.footer({ class: props.ui?.footer })
                    }, [
                      renderSlot(_ctx.$slots, "footer", {}, () => [
                        __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.links({ class: props.ui?.links })
                        }, [
                          renderSlot(_ctx.$slots, "links", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                              return openBlock(), createBlock(_sfc_main$4, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "hidden lg:block"
                  })) : createCommentVNode("", true)
                ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PageSection-B2bNxrUV.js.map

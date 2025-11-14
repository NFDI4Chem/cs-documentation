import { useSlots, computed, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { u as useAppConfig, t as tv, w as transformUI, _ as _sfc_main$z, k as get } from './server.mjs';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import { reactivePick } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
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
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/tailwind-variants@3.1.1_tailwind-merge@3.4.0_tailwindcss@4.1.17/node_modules/tailwind-variants/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@iconify+utils@3.0.2/node_modules/@iconify/utils/lib/css/icon.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/utils/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vaul-vue@0.4.1_reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3___vue@3.5.24_typescript@5.9.3_/node_modules/vaul-vue/dist/index.js';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/namespaced/index.mjs';

const theme$1 = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: [String, Object], required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.accordion) || {} })({
        disabled: props.disabled
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        type: __props.type,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              var _a2, _b;
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c2, _d2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a5, _b4, _c3, _d3;
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  var _a6, _b5;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$z, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  var _a6, _b5;
                                  _push5(ssrRenderComponent(_sfc_main$z, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_c3 = props.ui) == null ? void 0 : _c3.label, (_d3 = item.ui) == null ? void 0 : _d3.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$z, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_c2 = props.ui) == null ? void 0 : _c2.trigger, (_d2 = item.ui) == null ? void 0 : _d2.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$z, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a4, _b3;
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                      item,
                                      index,
                                      open,
                                      ui: ui.value
                                    }, () => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ])
                                  ], 2)
                                ];
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_e = props.ui) == null ? void 0 : _e.header, (_f = item.ui) == null ? void 0 : _f.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$z, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_g = props.ui) == null ? void 0 : _g.content, (_h = item.ui) == null ? void 0 : _h.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                var _a2, _b;
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
                }, {
                  default: withCtx(({ open }) => {
                    var _a3, _b2, _c, _d;
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$z, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": "text-base"
  }
};
const _sfc_main = {
  __name: "ProseAccordion",
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false, default: "multiple" },
    class: { type: null, required: false },
    ui: { type: void 0, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordion) || {} });
    });
    const rerenderCount = ref(1);
    const items = computed(() => {
      var _a, _b;
      rerenderCount.value;
      return ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? void 0 : _a.map(transformSlot);
      }
      return {
        index,
        label: ((_b = slot.props) == null ? void 0 : _b.label) || `${index}`,
        description: (_c = slot.props) == null ? void 0 : _c.description,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        type: __props.type,
        items: items.value,
        "unmount-on-hide": false,
        class: props.class,
        ui: unref(transformUI)(ui.value(), props.ui)
      }, _attrs), {
        content: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.component), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(item.component)))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Accordion-K_LO7yP1.mjs.map

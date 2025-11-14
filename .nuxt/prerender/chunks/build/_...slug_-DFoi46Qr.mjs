import { _ as _sfc_main$8 } from './Page-Ii0Auzaf.mjs';
import { defineComponent, inject, withAsyncContext, computed, unref, createSlots, withCtx, mergeProps, createBlock, createVNode, openBlock, Fragment, renderList, createCommentVNode, useSlots, renderSlot, createTextVNode, toDisplayString, withModifiers, ref, toValue, resolveComponent, watch, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { Primitive, useForwardProps, Separator, useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import { A as useRoute, u as useAppConfig, x as useAsyncData, y as queryCollection, c as createError, L as queryCollectionItemSurroundings, z as useSeoMeta, n as _sfc_main$t, t as tv, _ as _sfc_main$z, e as _sfc_main$w, g as _sfc_main$u, f as useLocale, E as useRouter, F as useNuxtApp, p as pickLinkProps, h as _sfc_main$v, G as useOgImageRuntimeConfig, H as setHeadOgImagePrebuilt, I as getOgImagePath, J as useRequestEvent, K as createOgImageMeta, B as useToast, C as useSiteConfig, D as _sfc_main$c } from './server.mjs';
import { reactivePick, createReusableTemplate, useClipboard } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
import { _ as __nuxt_component_5 } from './ContentRenderer-CRCWOE1E.mjs';
import { appendHeader } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
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
import 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js';
import './node-Ta6SvKQA.mjs';

const theme$5 = {
  "slots": {
    "root": "relative border-b border-default py-8",
    "container": "",
    "wrapper": "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
    "headline": "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5",
    "title": "text-3xl sm:text-4xl text-pretty font-bold text-highlighted",
    "description": "text-lg text-pretty text-muted",
    "links": "flex flex-wrap items-center gap-1.5"
  },
  "variants": {
    "title": {
      "true": {
        "description": "mt-4"
      }
    }
  }
};
const _sfc_main$7 = {
  __name: "UPageHeader",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$5), ...((_a = appConfig.ui) == null ? void 0 : _a.pageHeader) || {} })({
        title: !!props.title || !!slots.title
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (__props.headline || !!slots.headline) {
              _push2(`<div class="${ssrRenderClass(ui.value.headline({ class: (_a2 = props.ui) == null ? void 0 : _a2.headline }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                _push2(`${ssrInterpolate(__props.headline)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
            if (__props.title || !!slots.title) {
              _push2(`<h1 class="${ssrRenderClass(ui.value.title({ class: (_d = props.ui) == null ? void 0 : _d.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</h1>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_e = __props.links) == null ? void 0 : _e.length) || !!slots.links) {
              _push2(`<div class="${ssrRenderClass(ui.value.links({ class: (_f = props.ui) == null ? void 0 : _f.links }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_sfc_main$t, mergeProps({
                    key: index,
                    color: "neutral",
                    variant: "outline"
                  }, { ref_for: true }, link), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_g = props.ui) == null ? void 0 : _g.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.headline({ class: (_h = props.ui) == null ? void 0 : _h.headline })
              }, [
                renderSlot(_ctx.$slots, "headline", {}, () => [
                  createTextVNode(toDisplayString(__props.headline), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                createVNode("div", {
                  class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
                }, [
                  __props.title || !!slots.title ? (openBlock(), createBlock("h1", {
                    key: 0,
                    class: ui.value.title({ class: (_k = props.ui) == null ? void 0 : _k.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  ((_l = __props.links) == null ? void 0 : _l.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: ui.value.links({ class: (_m = props.ui) == null ? void 0 : _m.links })
                  }, [
                    renderSlot(_ctx.$slots, "links", {}, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                        return openBlock(), createBlock(_sfc_main$t, mergeProps({
                          key: index,
                          color: "neutral",
                          variant: "outline"
                        }, { ref_for: true }, link), null, 16);
                      }), 128))
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 2),
                __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.description({ class: (_n = props.ui) == null ? void 0 : _n.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageHeaderLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const toast = useToast();
    const { copy, copied } = useClipboard();
    const site = useSiteConfig();
    const isCopying = ref(false);
    console.log(site);
    const mdPath = computed(() => `${site.url}/raw${route.path}.md`);
    const items = [
      {
        label: "Copy Markdown link",
        icon: "i-lucide-link",
        onSelect() {
          copy(mdPath.value);
          toast.add({
            title: "Copied to clipboard",
            icon: "i-lucide-check-circle"
          });
        }
      },
      {
        label: "View as Markdown",
        icon: "i-simple-icons:markdown",
        target: "_blank",
        to: `/raw${route.path}.md`
      },
      {
        label: "Open in ChatGPT",
        icon: "i-simple-icons:openai",
        target: "_blank",
        to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`
      },
      {
        label: "Open in Claude",
        icon: "i-simple-icons:anthropic",
        target: "_blank",
        to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`
      }
    ];
    async function copyPage() {
      isCopying.value = true;
      copy(await $fetch(`/raw${route.path}.md`));
      isCopying.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButtonGroup = resolveComponent("UButtonGroup");
      const _component_UButton = _sfc_main$t;
      const _component_UDropdownMenu = _sfc_main$c;
      _push(ssrRenderComponent(_component_UButtonGroup, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Copy page",
              icon: unref(copied) ? "i-lucide-copy-check" : "i-lucide-copy",
              color: "neutral",
              variant: "outline",
              loading: unref(isCopying),
              ui: {
                leadingIcon: [unref(copied) ? "text-primary" : "text-neutral", "size-3.5"]
              },
              onClick: copyPage
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDropdownMenu, {
              items,
              content: {
                align: "end",
                side: "bottom",
                sideOffset: 8
              },
              ui: {
                content: "w-48"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "i-lucide-chevron-down",
                    size: "sm",
                    color: "neutral",
                    variant: "outline"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "i-lucide-chevron-down",
                      size: "sm",
                      color: "neutral",
                      variant: "outline"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Copy page",
                icon: unref(copied) ? "i-lucide-copy-check" : "i-lucide-copy",
                color: "neutral",
                variant: "outline",
                loading: unref(isCopying),
                ui: {
                  leadingIcon: [unref(copied) ? "text-primary" : "text-neutral", "size-3.5"]
                },
                onClick: copyPage
              }, null, 8, ["icon", "loading", "ui"]),
              createVNode(_component_UDropdownMenu, {
                items,
                content: {
                  align: "end",
                  side: "bottom",
                  sideOffset: 8
                },
                ui: {
                  content: "w-48"
                }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: "i-lucide-chevron-down",
                    size: "sm",
                    color: "neutral",
                    variant: "outline"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeaderLinks.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$6, { __name: "PageHeaderLinks" });
const theme$4 = {
  "base": "mt-8 pb-24 space-y-12"
};
const _sfc_main$5 = {
  __name: "UPageBody",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.pageBody) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageBody.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-default flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-primary"
      },
      "secondary": {
        "border": "border-secondary"
      },
      "success": {
        "border": "border-success"
      },
      "info": {
        "border": "border-info"
      },
      "warning": {
        "border": "border-warning"
      },
      "error": {
        "border": "border-error"
      },
      "neutral": {
        "border": "border-default"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};
const _sfc_main$4 = {
  __name: "USeparator",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    icon: { type: [String, Object], required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    type: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    decorative: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.separator) || {} })({
        color: props.color,
        orientation: props.orientation,
        size: props.size,
        type: props.type
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.border({ class: (_a2 = props.ui) == null ? void 0 : _a2.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                var _a3, _b2, _c2, _d2;
                if (__props.label) {
                  _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$z, {
                    name: __props.icon,
                    class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$w, mergeProps({
                    size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, __props.avatar, {
                    class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.border({ class: (_c = props.ui) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.border({ class: (_d = props.ui) == null ? void 0 : _d.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                    var _a3, _b2, _c2, _d2;
                    return [
                      __props.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                      }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$z, {
                        key: 1,
                        name: __props.icon,
                        class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$w, mergeProps({
                        key: 2,
                        size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, __props.avatar, {
                        class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  class: ui.value.border({ class: (_f = props.ui) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "grid grid-cols-1 sm:grid-cols-2 gap-8",
    "link": [
      "group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary",
      "transition-colors"
    ],
    "linkLeading": [
      "inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50",
      "transition"
    ],
    "linkLeadingIcon": [
      "size-5 shrink-0 text-highlighted group-hover:text-primary",
      "transition-[color,translate]"
    ],
    "linkTitle": "font-medium text-[15px] text-highlighted mb-1 truncate",
    "linkDescription": "text-sm text-muted line-clamp-2"
  },
  "variants": {
    "direction": {
      "left": {
        "linkLeadingIcon": [
          "group-active:-translate-x-0.5"
        ]
      },
      "right": {
        "link": "text-right",
        "linkLeadingIcon": [
          "group-active:translate-x-0.5"
        ]
      }
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UContentSurround",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prevIcon: { type: [String, Object], required: false },
    nextIcon: { type: [String, Object], required: false },
    surround: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate({
      props: {
        link: Object,
        icon: String,
        direction: String
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.contentSurround) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ link, icon, direction }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            if (link) {
              _push2(ssrRenderComponent(_sfc_main$u, {
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [(_a2 = props.ui) == null ? void 0 : _a2.link, (_b = link.ui) == null ? void 0 : _b.link, link.class], direction })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "link", {
                      link,
                      ui: ui.value
                    }, () => {
                      var _a3, _b2, _c2, _d2, _e, _f;
                      _push3(`<div class="${ssrRenderClass(ui.value.linkLeading({ class: [(_a3 = props.ui) == null ? void 0 : _a3.linkLeading, (_b2 = link.ui) == null ? void 0 : _b2.linkLeading] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-leading", {
                        link,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3;
                        _push3(ssrRenderComponent(_sfc_main$z, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = link.ui) == null ? void 0 : _b3.linkLeadingIcon], direction })
                        }, null, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div><p class="${ssrRenderClass(ui.value.linkTitle({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTitle, (_d2 = link.ui) == null ? void 0 : _d2.linkTitle] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-title", {
                        link,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(link.title)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p><p class="${ssrRenderClass(ui.value.linkDescription({ class: [(_e = props.ui) == null ? void 0 : _e.linkDescription, (_f = link.ui) == null ? void 0 : _f.linkDescription] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-description", {
                        link,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(link.description)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "link", {
                        link,
                        ui: ui.value
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e, _f;
                        return [
                          createVNode("div", {
                            class: ui.value.linkLeading({ class: [(_a3 = props.ui) == null ? void 0 : _a3.linkLeading, (_b2 = link.ui) == null ? void 0 : _b2.linkLeading] })
                          }, [
                            renderSlot(_ctx.$slots, "link-leading", {
                              link,
                              ui: ui.value
                            }, () => {
                              var _a4, _b3;
                              return [
                                createVNode(_sfc_main$z, {
                                  name: link.icon || icon,
                                  class: ui.value.linkLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = link.ui) == null ? void 0 : _b3.linkLeadingIcon], direction })
                                }, null, 8, ["name", "class"])
                              ];
                            })
                          ], 2),
                          createVNode("p", {
                            class: ui.value.linkTitle({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTitle, (_d2 = link.ui) == null ? void 0 : _d2.linkTitle] })
                          }, [
                            renderSlot(_ctx.$slots, "link-title", {
                              link,
                              ui: ui.value
                            }, () => [
                              createTextVNode(toDisplayString(link.title), 1)
                            ])
                          ], 2),
                          createVNode("p", {
                            class: ui.value.linkDescription({ class: [(_e = props.ui) == null ? void 0 : _e.linkDescription, (_f = link.ui) == null ? void 0 : _f.linkDescription] })
                          }, [
                            renderSlot(_ctx.$slots, "link-description", {
                              link,
                              ui: ui.value
                            }, () => [
                              createTextVNode(toDisplayString(link.description), 1)
                            ])
                          ], 2)
                        ];
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span class="hidden lg:block"${_scopeId}>\xA0</span>`);
            }
          } else {
            return [
              link ? (openBlock(), createBlock(_sfc_main$u, {
                key: 0,
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [(_c = props.ui) == null ? void 0 : _c.link, (_d = link.ui) == null ? void 0 : _d.link, link.class], direction })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "link", {
                    link,
                    ui: ui.value
                  }, () => {
                    var _a3, _b2, _c2, _d2, _e, _f;
                    return [
                      createVNode("div", {
                        class: ui.value.linkLeading({ class: [(_a3 = props.ui) == null ? void 0 : _a3.linkLeading, (_b2 = link.ui) == null ? void 0 : _b2.linkLeading] })
                      }, [
                        renderSlot(_ctx.$slots, "link-leading", {
                          link,
                          ui: ui.value
                        }, () => {
                          var _a4, _b3;
                          return [
                            createVNode(_sfc_main$z, {
                              name: link.icon || icon,
                              class: ui.value.linkLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = link.ui) == null ? void 0 : _b3.linkLeadingIcon], direction })
                            }, null, 8, ["name", "class"])
                          ];
                        })
                      ], 2),
                      createVNode("p", {
                        class: ui.value.linkTitle({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTitle, (_d2 = link.ui) == null ? void 0 : _d2.linkTitle] })
                      }, [
                        renderSlot(_ctx.$slots, "link-title", {
                          link,
                          ui: ui.value
                        }, () => [
                          createTextVNode(toDisplayString(link.title), 1)
                        ])
                      ], 2),
                      createVNode("p", {
                        class: ui.value.linkDescription({ class: [(_e = props.ui) == null ? void 0 : _e.linkDescription, (_f = link.ui) == null ? void 0 : _f.linkDescription] })
                      }, [
                        renderSlot(_ctx.$slots, "link-description", {
                          link,
                          ui: ui.value
                        }, () => [
                          createTextVNode(toDisplayString(link.description), 1)
                        ])
                      ], 2)
                    ];
                  })
                ]),
                _: 2
              }, 1032, ["to", "class"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "hidden lg:block"
              }, "\xA0"))
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.surround) {
        _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
          class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[0],
                icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                direction: "left"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[1],
                icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                direction: "right"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[0],
                  icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                  direction: "left"
                }, null, 8, ["link", "icon"]),
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[1],
                  icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                  direction: "right"
                }, null, 8, ["link", "icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/content/ContentSurround.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useScrollspy() {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  function updateHeadings(headings) {
    headings.forEach((heading) => {
      if (!observer.value) {
        return;
      }
      observer.value.observe(heading);
    });
  }
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
}
const theme$1 = {
  "slots": {
    "root": "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
    "container": "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col",
    "top": "",
    "bottom": "hidden lg:flex lg:flex-col gap-6",
    "trigger": "group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary",
    "title": "truncate",
    "trailing": "ms-auto inline-flex gap-1.5 items-center",
    "trailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "list": "min-w-0",
    "listWithChildren": "ms-3",
    "item": "min-w-0",
    "itemWithChildren": "",
    "link": "group relative text-sm flex items-center focus-visible:outline-primary py-1",
    "linkText": "truncate",
    "indicator": "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "highlightColor": {
      "primary": {
        "indicator": "bg-primary"
      },
      "secondary": {
        "indicator": "bg-secondary"
      },
      "success": {
        "indicator": "bg-success"
      },
      "info": {
        "indicator": "bg-info"
      },
      "warning": {
        "indicator": "bg-warning"
      },
      "error": {
        "indicator": "bg-error"
      },
      "neutral": {
        "indicator": "bg-inverted"
      }
    },
    "active": {
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    },
    "highlight": {
      "true": {
        "list": "ms-2.5 ps-4 border-s border-default",
        "item": "-ms-px"
      }
    },
    "body": {
      "true": {
        "bottom": "mt-6"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error"
      }
    },
    {
      "color": "neutral",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UContentToc",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    trailingIcon: { type: [String, Object], required: false },
    title: { type: String, required: false },
    color: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false }
  },
  emits: ["update:open", "move"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "open", "defaultOpen"), emits);
    const { t } = useLocale();
    const router = useRouter();
    const appConfig = useAppConfig();
    const { activeHeadings, updateHeadings } = useScrollspy();
    const [DefineListTemplate, ReuseListTemplate] = createReusableTemplate({
      props: {
        links: Array,
        level: Number
      }
    });
    const [DefineTriggerTemplate, ReuseTriggerTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.contentToc) || {} })({
        color: props.color,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    function scrollToHeading(id) {
      const encodedId = encodeURIComponent(id);
      router.push(`#${encodedId}`);
      emits("move", id);
    }
    function flattenLinks(links) {
      return links.flatMap((link) => [link, ...link.children ? flattenLinks(link.children) : []]);
    }
    const indicatorStyle = computed(() => {
      var _a;
      if (!((_a = activeHeadings.value) == null ? void 0 : _a.length)) {
        return;
      }
      const flatLinks = flattenLinks(props.links || []);
      const activeIndex = flatLinks.findIndex((link) => activeHeadings.value.includes(link.id));
      const linkHeight = 28;
      const gapSize = 0;
      return {
        "--indicator-size": `${linkHeight * activeHeadings.value.length + gapSize * (activeHeadings.value.length - 1)}px`,
        "--indicator-position": activeIndex >= 0 ? `${activeIndex * (linkHeight + gapSize)}px` : "0px"
      };
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.hook("page:loading:end", () => {
      const headings = Array.from((void 0).querySelectorAll("h2, h3"));
      updateHeadings(headings);
    });
    nuxtApp.hooks.hook("page:transition:finish", () => {
      const headings = Array.from((void 0).querySelectorAll("h2, h3"));
      updateHeadings(headings);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineListTemplate), null, {
        default: withCtx(({ links, level }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<ul class="${ssrRenderClass(level > 0 ? ui.value.listWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.listWithChildren }) : ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(links, (link, index) => {
              var _a3, _b2, _c2, _d2, _e, _f, _g;
              _push2(`<li class="${ssrRenderClass(link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: [(_a3 = props.ui) == null ? void 0 : _a3.itemWithChildren, (_b2 = link.ui) == null ? void 0 : _b2.itemWithChildren] }) : ui.value.item({ class: [(_c2 = props.ui) == null ? void 0 : _c2.item, (_d2 = link.ui) == null ? void 0 : _d2.item] }))}"${_scopeId}><a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass(ui.value.link({ class: [(_e = props.ui) == null ? void 0 : _e.link, (_f = link.ui) == null ? void 0 : _f.link, link.class], active: unref(activeHeadings).includes(link.id) }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "link", { link }, () => {
                var _a4, _b3;
                _push2(`<span class="${ssrRenderClass(ui.value.linkText({ class: [(_a4 = props.ui) == null ? void 0 : _a4.linkText, (_b3 = link.ui) == null ? void 0 : _b3.linkText] }))}"${_scopeId}>${ssrInterpolate(link.text)}</span>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</a>`);
              if ((_g = link.children) == null ? void 0 : _g.length) {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: link.children,
                  level: level + 1
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", {
                class: level > 0 ? ui.value.listWithChildren({ class: (_c = props.ui) == null ? void 0 : _c.listWithChildren }) : ui.value.list({ class: (_d = props.ui) == null ? void 0 : _d.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(links, (link, index) => {
                  var _a3, _b2, _c2, _d2, _e, _f, _g;
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: link.children && link.children.length > 0 ? ui.value.itemWithChildren({ class: [(_a3 = props.ui) == null ? void 0 : _a3.itemWithChildren, (_b2 = link.ui) == null ? void 0 : _b2.itemWithChildren] }) : ui.value.item({ class: [(_c2 = props.ui) == null ? void 0 : _c2.item, (_d2 = link.ui) == null ? void 0 : _d2.item] })
                  }, [
                    createVNode("a", {
                      href: `#${link.id}`,
                      class: ui.value.link({ class: [(_e = props.ui) == null ? void 0 : _e.link, (_f = link.ui) == null ? void 0 : _f.link, link.class], active: unref(activeHeadings).includes(link.id) }),
                      onClick: withModifiers(($event) => scrollToHeading(link.id), ["prevent"])
                    }, [
                      renderSlot(_ctx.$slots, "link", { link }, () => {
                        var _a4, _b3;
                        return [
                          createVNode("span", {
                            class: ui.value.linkText({ class: [(_a4 = props.ui) == null ? void 0 : _a4.linkText, (_b3 = link.ui) == null ? void 0 : _b3.linkText] })
                          }, toDisplayString(link.text), 3)
                        ];
                      })
                    ], 10, ["href", "onClick"]),
                    ((_g = link.children) == null ? void 0 : _g.length) ? (openBlock(), createBlock(unref(ReuseListTemplate), {
                      key: 0,
                      links: link.children,
                      level: level + 1
                    }, null, 8, ["links", "level"])) : createCommentVNode("", true)
                  ], 2);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineTriggerTemplate), null, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {
              open,
              ui: ui.value
            }, null, _push2, _parent2, _scopeId);
            _push2(`<span class="${ssrRenderClass(ui.value.title({ class: (_a2 = props.ui) == null ? void 0 : _a2.title }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { open }, () => {
              _push2(`${ssrInterpolate(__props.title || unref(t)("contentToc.title"))}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span><span class="${ssrRenderClass(ui.value.trailing({ class: (_b = props.ui) == null ? void 0 : _b.trailing }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "trailing", {
              open,
              ui: ui.value
            }, () => {
              var _a3;
              _push2(ssrRenderComponent(_sfc_main$z, {
                name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {
                open,
                ui: ui.value
              }),
              createVNode("span", {
                class: ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title })
              }, [
                renderSlot(_ctx.$slots, "default", { open }, () => [
                  createTextVNode(toDisplayString(__props.title || unref(t)("contentToc.title")), 1)
                ])
              ], 2),
              createVNode("span", {
                class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", {
                  open,
                  ui: ui.value
                }, () => {
                  var _a3;
                  return [
                    createVNode(_sfc_main$z, {
                      name: __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                    }, null, 8, ["name", "class"])
                  ];
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps({ ...unref(rootProps), ..._ctx.$attrs }, {
        "default-open": __props.defaultOpen,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: (_b = props.ui) == null ? void 0 : _b.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = __props.links) == null ? void 0 : _c.length) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), {
                class: ui.value.trigger({ class: "lg:hidden" })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(CollapsibleContent), {
                class: ui.value.content({ class: [(_d = props.ui) == null ? void 0 : _d.content, "lg:hidden"] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    if (__props.highlight) {
                      _push3(`<div class="${ssrRenderClass(ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                      _push3(ssrRenderComponent(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      __props.highlight ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                        style: indicatorStyle.value
                      }, null, 6)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                        createVNode(unref(ReuseListTemplate), {
                          links: __props.links,
                          level: 0
                        }, null, 8, ["links"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="${ssrRenderClass(ui.value.trigger({ class: "hidden lg:flex" }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseTriggerTemplate), { open }, null, _parent2, _scopeId));
              _push2(`</p><div class="${ssrRenderClass(ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, "hidden lg:flex"] }))}"${_scopeId}>`);
              if (__props.highlight) {
                _push2(`<div class="${ssrRenderClass(ui.value.indicator({ class: (_f = props.ui) == null ? void 0 : _f.indicator }))}" style="${ssrRenderStyle(indicatorStyle.value)}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "content", { links: __props.links }, () => {
                _push2(ssrRenderComponent(unref(ReuseListTemplate), {
                  links: __props.links,
                  level: 0
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.bottom) {
              _push2(`<div class="${ssrRenderClass(ui.value.bottom({ class: (_g = props.ui) == null ? void 0 : _g.bottom, body: !!slots.top || !!((_h = __props.links) == null ? void 0 : _h.length) }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", { links: __props.links }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                !!slots.top ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.top({ class: (_j = props.ui) == null ? void 0 : _j.top })
                }, [
                  renderSlot(_ctx.$slots, "top", { links: __props.links })
                ], 2)) : createCommentVNode("", true),
                ((_k = __props.links) == null ? void 0 : _k.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(unref(CollapsibleTrigger), {
                    class: ui.value.trigger({ class: "lg:hidden" })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  createVNode(unref(CollapsibleContent), {
                    class: ui.value.content({ class: [(_l = props.ui) == null ? void 0 : _l.content, "lg:hidden"] })
                  }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        __props.highlight ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                          style: indicatorStyle.value
                        }, null, 6)) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                          createVNode(unref(ReuseListTemplate), {
                            links: __props.links,
                            level: 0
                          }, null, 8, ["links"])
                        ])
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]),
                  createVNode("p", {
                    class: ui.value.trigger({ class: "hidden lg:flex" })
                  }, [
                    createVNode(unref(ReuseTriggerTemplate), { open }, null, 8, ["open"])
                  ], 2),
                  createVNode("div", {
                    class: ui.value.content({ class: [(_m = props.ui) == null ? void 0 : _m.content, "hidden lg:flex"] })
                  }, [
                    __props.highlight ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.indicator({ class: (_n = props.ui) == null ? void 0 : _n.indicator }),
                      style: indicatorStyle.value
                    }, null, 6)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "content", { links: __props.links }, () => [
                      createVNode(unref(ReuseListTemplate), {
                        links: __props.links,
                        level: 0
                      }, null, 8, ["links"])
                    ])
                  ], 2)
                ], 64)) : createCommentVNode("", true),
                !!slots.bottom ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.bottom({ class: (_o = props.ui) == null ? void 0 : _o.bottom, body: !!slots.top || !!((_p = __props.links) == null ? void 0 : _p.length) })
                }, [
                  renderSlot(_ctx.$slots, "bottom", { links: __props.links })
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/content/ContentToc.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "flex flex-col gap-3",
    "title": "text-sm font-semibold flex items-center gap-1.5",
    "list": "flex flex-col gap-2",
    "item": "relative",
    "link": "group text-sm flex items-center gap-1.5 focus-visible:outline-primary",
    "linkLeadingIcon": "size-5 shrink-0",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "size-3 absolute top-0 text-dimmed"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-medium"
      },
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageLinks",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    title: { type: String, required: false },
    links: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.pageLinks) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            if (__props.title || !!slots.title) {
              _push2(`<p class="${ssrRenderClass(ui.value.title({ class: (_a2 = props.ui) == null ? void 0 : _a2.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(__props.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="${ssrRenderClass(ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.links, (link, index) => {
              var _a3, _b2;
              _push2(`<li class="${ssrRenderClass(ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, (_b2 = link.ui) == null ? void 0 : _b2.item] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$u, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  var _a4, _b3, _c2, _d2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$v, mergeProps({ ref_for: true }, slotProps, {
                      class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, (_b3 = link.ui) == null ? void 0 : _b3.link, link.class], active })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "link", {
                            link,
                            active,
                            ui: ui.value
                          }, () => {
                            var _a5, _b4, _c3, _d3;
                            ssrRenderSlot(_ctx.$slots, "link-leading", {
                              link,
                              active,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5;
                              if (link.icon) {
                                _push4(ssrRenderComponent(_sfc_main$z, {
                                  name: link.icon,
                                  class: ui.value.linkLeadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = link.ui) == null ? void 0 : _b5.linkLeadingIcon], active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (link.label || !!slots["link-label"]) {
                              _push4(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: [(_a5 = props.ui) == null ? void 0 : _a5.linkLabel, (_b4 = link.ui) == null ? void 0 : _b4.linkLabel], active }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, "link-label", {
                                link,
                                active
                              }, () => {
                                _push4(`${ssrInterpolate(link.label)}`);
                              }, _push4, _parent4, _scopeId3);
                              if (link.target === "_blank") {
                                _push4(ssrRenderComponent(_sfc_main$z, {
                                  name: unref(appConfig).ui.icons.external,
                                  class: ui.value.linkLabelExternalIcon({ class: [(_c3 = props.ui) == null ? void 0 : _c3.linkLabelExternalIcon, (_d3 = link.ui) == null ? void 0 : _d3.linkLabelExternalIcon], active })
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, "link-trailing", {
                              link,
                              active
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "link", {
                              link,
                              active,
                              ui: ui.value
                            }, () => {
                              var _a5, _b4, _c3, _d3;
                              return [
                                renderSlot(_ctx.$slots, "link-leading", {
                                  link,
                                  active,
                                  ui: ui.value
                                }, () => {
                                  var _a6, _b5;
                                  return [
                                    link.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                      key: 0,
                                      name: link.icon,
                                      class: ui.value.linkLeadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = link.ui) == null ? void 0 : _b5.linkLeadingIcon], active })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.linkLabel({ class: [(_a5 = props.ui) == null ? void 0 : _a5.linkLabel, (_b4 = link.ui) == null ? void 0 : _b4.linkLabel], active })
                                }, [
                                  renderSlot(_ctx.$slots, "link-label", {
                                    link,
                                    active
                                  }, () => [
                                    createTextVNode(toDisplayString(link.label), 1)
                                  ]),
                                  link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$z, {
                                    key: 0,
                                    name: unref(appConfig).ui.icons.external,
                                    class: ui.value.linkLabelExternalIcon({ class: [(_c3 = props.ui) == null ? void 0 : _c3.linkLabelExternalIcon, (_d3 = link.ui) == null ? void 0 : _d3.linkLabelExternalIcon], active })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "link-trailing", {
                                  link,
                                  active
                                })
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$v, mergeProps({ ref_for: true }, slotProps, {
                        class: ui.value.link({ class: [(_c2 = props.ui) == null ? void 0 : _c2.link, (_d2 = link.ui) == null ? void 0 : _d2.link, link.class], active })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "link", {
                            link,
                            active,
                            ui: ui.value
                          }, () => {
                            var _a5, _b4, _c3, _d3;
                            return [
                              renderSlot(_ctx.$slots, "link-leading", {
                                link,
                                active,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                return [
                                  link.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                    key: 0,
                                    name: link.icon,
                                    class: ui.value.linkLeadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = link.ui) == null ? void 0 : _b5.linkLeadingIcon], active })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ];
                              }),
                              link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.linkLabel({ class: [(_a5 = props.ui) == null ? void 0 : _a5.linkLabel, (_b4 = link.ui) == null ? void 0 : _b4.linkLabel], active })
                              }, [
                                renderSlot(_ctx.$slots, "link-label", {
                                  link,
                                  active
                                }, () => [
                                  createTextVNode(toDisplayString(link.label), 1)
                                ]),
                                link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$z, {
                                  key: 0,
                                  name: unref(appConfig).ui.icons.external,
                                  class: ui.value.linkLabelExternalIcon({ class: [(_c3 = props.ui) == null ? void 0 : _c3.linkLabelExternalIcon, (_d3 = link.ui) == null ? void 0 : _d3.linkLabelExternalIcon], active })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "link-trailing", {
                                link,
                                active
                              })
                            ];
                          })
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              __props.title || !!slots.title ? (openBlock(), createBlock("p", {
                key: 0,
                class: ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title })
              }, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("ul", {
                class: ui.value.list({ class: (_d = props.ui) == null ? void 0 : _d.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                  var _a3, _b2;
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, (_b2 = link.ui) == null ? void 0 : _b2.item] })
                  }, [
                    createVNode(_sfc_main$u, mergeProps({ ref_for: true }, unref(pickLinkProps)(link), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a4, _b3;
                        return [
                          createVNode(_sfc_main$v, mergeProps({ ref_for: true }, slotProps, {
                            class: ui.value.link({ class: [(_a4 = props.ui) == null ? void 0 : _a4.link, (_b3 = link.ui) == null ? void 0 : _b3.link, link.class], active })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "link", {
                                link,
                                active,
                                ui: ui.value
                              }, () => {
                                var _a5, _b4, _c2, _d2;
                                return [
                                  renderSlot(_ctx.$slots, "link-leading", {
                                    link,
                                    active,
                                    ui: ui.value
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      link.icon ? (openBlock(), createBlock(_sfc_main$z, {
                                        key: 0,
                                        name: link.icon,
                                        class: ui.value.linkLeadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = link.ui) == null ? void 0 : _b5.linkLeadingIcon], active })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  link.label || !!slots["link-label"] ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.linkLabel({ class: [(_a5 = props.ui) == null ? void 0 : _a5.linkLabel, (_b4 = link.ui) == null ? void 0 : _b4.linkLabel], active })
                                  }, [
                                    renderSlot(_ctx.$slots, "link-label", {
                                      link,
                                      active
                                    }, () => [
                                      createTextVNode(toDisplayString(link.label), 1)
                                    ]),
                                    link.target === "_blank" ? (openBlock(), createBlock(_sfc_main$z, {
                                      key: 0,
                                      name: unref(appConfig).ui.icons.external,
                                      class: ui.value.linkLabelExternalIcon({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkLabelExternalIcon, (_d2 = link.ui) == null ? void 0 : _d2.linkLabelExternalIcon], active })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "link-trailing", {
                                    link,
                                    active
                                  })
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1040)
                  ], 2);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/PageLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function findPageHeadline(navigation, path, options) {
  var _a;
  if (!(navigation == null ? void 0 : navigation.length) || !path) {
    return;
  }
  for (const link of navigation) {
    {
      if (link.children) {
        for (const child of link.children) {
          const isIndex = (_a = child.stem) == null ? void 0 : _a.endsWith("/index");
          if (child.path === path && !isIndex) {
            return link.title;
          }
        }
        const headline = findPageHeadline(link.children, path);
        if (headline) {
          return headline;
        }
      }
    }
  }
}
function defineOgImage(_options = {}) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  if (options === false) {
    return;
  }
  const validOptions = options;
  for (const key in defaults) {
    if (validOptions[key] === void 0)
      validOptions[key] = defaults[key];
  }
  if (route.query)
    validOptions._query = route.query;
  if (validOptions.url) {
    setHeadOgImagePrebuilt(validOptions);
    return;
  }
  const path = getOgImagePath(basePath, validOptions);
  {
    appendHeader(useRequestEvent(nuxtApp), "x-nitro-prerender", path);
  }
  createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const { toc } = useAppConfig();
    const navigation = inject("navigation");
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => queryCollection("docs").path(route.path).first(), "$BPopkF1nvN")), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    }
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`${route.path}-surround`, () => {
      return queryCollectionItemSurroundings("docs", route.path, {
        fields: ["description"]
      });
    })), __temp = await __temp, __restore(), __temp);
    const title = ((_a = page.value.seo) == null ? void 0 : _a.title) || page.value.title;
    const description = ((_b = page.value.seo) == null ? void 0 : _b.description) || page.value.description;
    useSeoMeta({
      title,
      ogTitle: title,
      description,
      ogDescription: description
    });
    const headline = computed(() => {
      var _a2;
      return findPageHeadline(navigation == null ? void 0 : navigation.value, (_a2 = page.value) == null ? void 0 : _a2.path);
    });
    defineOgImageComponent("Docs", {
      headline: headline.value
    });
    const links = computed(() => {
      var _a2, _b2, _c, _d;
      const links2 = [];
      if ((_a2 = toc == null ? void 0 : toc.bottom) == null ? void 0 : _a2.edit) {
        links2.push({
          icon: "i-lucide-external-link",
          label: "Edit this page",
          to: `${toc.bottom.edit}/${(_b2 = page == null ? void 0 : page.value) == null ? void 0 : _b2.stem}.${(_c = page == null ? void 0 : page.value) == null ? void 0 : _c.extension}`,
          target: "_blank"
        });
      }
      return [...links2, ...((_d = toc == null ? void 0 : toc.bottom) == null ? void 0 : _d.links) || []].filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d;
      const _component_UPage = _sfc_main$8;
      const _component_UPageHeader = _sfc_main$7;
      const _component_UButton = _sfc_main$t;
      const _component_PageHeaderLinks = __nuxt_component_3;
      const _component_UPageBody = _sfc_main$5;
      const _component_ContentRenderer = __nuxt_component_5;
      const _component_USeparator = _sfc_main$4;
      const _component_UContentSurround = _sfc_main$3;
      const _component_UContentToc = _sfc_main$2;
      const _component_UPageLinks = _sfc_main$1;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, createSlots({
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPageHeader, {
                title: unref(page).title,
                description: unref(page).description,
                headline: unref(headline)
              }, {
                links: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(page).links, (link, index) => {
                      _push3(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ref_for: true }, link), null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_PageHeaderLinks, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(page).links, (link, index) => {
                        return openBlock(), createBlock(_component_UButton, mergeProps({ key: index }, { ref_for: true }, link), null, 16);
                      }), 128)),
                      createVNode(_component_PageHeaderLinks)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    if (unref(page)) {
                      _push3(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_a3 = unref(surround)) == null ? void 0 : _a3.length) {
                      _push3(ssrRenderComponent(_component_USeparator, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                        key: 0,
                        value: unref(page)
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      ((_b3 = unref(surround)) == null ? void 0 : _b3.length) ? (openBlock(), createBlock(_component_USeparator, { key: 1 })) : createCommentVNode("", true),
                      createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPageHeader, {
                  title: unref(page).title,
                  description: unref(page).description,
                  headline: unref(headline)
                }, {
                  links: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(page).links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({ key: index }, { ref_for: true }, link), null, 16);
                    }), 128)),
                    createVNode(_component_PageHeaderLinks)
                  ]),
                  _: 1
                }, 8, ["title", "description", "headline"]),
                createVNode(_component_UPageBody, null, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                        key: 0,
                        value: unref(page)
                      }, null, 8, ["value"])) : createCommentVNode("", true),
                      ((_a3 = unref(surround)) == null ? void 0 : _a3.length) ? (openBlock(), createBlock(_component_USeparator, { key: 1 })) : createCommentVNode("", true),
                      createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                    ];
                  }),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, [
          ((_d = (_c = (_b2 = (_a2 = unref(page)) == null ? void 0 : _a2.body) == null ? void 0 : _b2.toc) == null ? void 0 : _c.links) == null ? void 0 : _d.length) ? {
            name: "right",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3, _c2, _d2, _e, _f, _g, _h;
              if (_push2) {
                _push2(ssrRenderComponent(_component_UContentToc, {
                  title: (_a3 = unref(toc)) == null ? void 0 : _a3.title,
                  links: (_c2 = (_b3 = unref(page).body) == null ? void 0 : _b3.toc) == null ? void 0 : _c2.links
                }, createSlots({ _: 2 }, [
                  ((_d2 = unref(toc)) == null ? void 0 : _d2.bottom) ? {
                    name: "bottom",
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a4, _b4, _c3, _d3, _e2, _f2, _g2, _h2, _i, _j, _k, _l;
                      if (_push3) {
                        _push3(`<div class="${ssrRenderClass([{ "!mt-6": (_c3 = (_b4 = (_a4 = unref(page).body) == null ? void 0 : _a4.toc) == null ? void 0 : _b4.links) == null ? void 0 : _c3.length }, "hidden lg:block space-y-6"])}"${_scopeId2}>`);
                        if ((_f2 = (_e2 = (_d3 = unref(page).body) == null ? void 0 : _d3.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) {
                          _push3(ssrRenderComponent(_component_USeparator, { type: "dashed" }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(ssrRenderComponent(_component_UPageLinks, {
                          title: unref(toc).bottom.title,
                          links: unref(links)
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: ["hidden lg:block space-y-6", { "!mt-6": (_i = (_h2 = (_g2 = unref(page).body) == null ? void 0 : _g2.toc) == null ? void 0 : _h2.links) == null ? void 0 : _i.length }]
                          }, [
                            ((_l = (_k = (_j = unref(page).body) == null ? void 0 : _j.toc) == null ? void 0 : _k.links) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_component_USeparator, {
                              key: 0,
                              type: "dashed"
                            })) : createCommentVNode("", true),
                            createVNode(_component_UPageLinks, {
                              title: unref(toc).bottom.title,
                              links: unref(links)
                            }, null, 8, ["title", "links"])
                          ], 2)
                        ];
                      }
                    }),
                    key: "0"
                  } : void 0
                ]), _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UContentToc, {
                    title: (_e = unref(toc)) == null ? void 0 : _e.title,
                    links: (_g = (_f = unref(page).body) == null ? void 0 : _f.toc) == null ? void 0 : _g.links
                  }, createSlots({ _: 2 }, [
                    ((_h = unref(toc)) == null ? void 0 : _h.bottom) ? {
                      name: "bottom",
                      fn: withCtx(() => {
                        var _a4, _b4, _c3, _d3, _e2, _f2;
                        return [
                          createVNode("div", {
                            class: ["hidden lg:block space-y-6", { "!mt-6": (_c3 = (_b4 = (_a4 = unref(page).body) == null ? void 0 : _a4.toc) == null ? void 0 : _b4.links) == null ? void 0 : _c3.length }]
                          }, [
                            ((_f2 = (_e2 = (_d3 = unref(page).body) == null ? void 0 : _d3.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_component_USeparator, {
                              key: 0,
                              type: "dashed"
                            })) : createCommentVNode("", true),
                            createVNode(_component_UPageLinks, {
                              title: unref(toc).bottom.title,
                              links: unref(links)
                            }, null, 8, ["title", "links"])
                          ], 2)
                        ];
                      }),
                      key: "0"
                    } : void 0
                  ]), 1032, ["title", "links"])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DFoi46Qr.mjs.map

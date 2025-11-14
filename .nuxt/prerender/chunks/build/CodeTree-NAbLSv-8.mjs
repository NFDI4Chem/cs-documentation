import { useSlots, computed, ref, watch, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, mergeProps, resolveDynamicComponent, useSSRContext } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderVNode } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { TreeItem, TreeRoot } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/reka-ui@2.6.0_typescript@5.9.3_vue@3.5.24_typescript@5.9.3_/node_modules/reka-ui/dist/index.js';
import { createReusableTemplate } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.24_typescript@5.9.3_/node_modules/@vueuse/core/index.mjs';
import { u as useAppConfig, t as tv, _ as _sfc_main$z } from './server.mjs';
import _sfc_main$1 from './CodeIcon-Cx_7xPX_.mjs';
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

const theme = {
  "slots": {
    "root": "relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-muted rounded-md",
    "list": "isolate relative p-2 border-b lg:border-b-0 lg:border-e border-muted overflow-y-auto",
    "item": "",
    "listWithChildren": "ms-4.5 border-s border-default",
    "itemWithChildren": "ps-1.5 -ms-px",
    "link": "relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "size-4 shrink-0",
    "linkLabel": "truncate",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",
    "content": "overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-highlighted before:bg-elevated"
      },
      "false": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ]
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCodeTree",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: String, required: false },
    expandAll: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeTree) || {} })();
    });
    const model = ref(props.defaultValue ? { path: props.defaultValue } : void 0);
    const lastSelectedItem = ref();
    const rerenderCount = ref(1);
    const flatItems = computed(() => {
      var _a, _b;
      rerenderCount.value;
      return ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    const items = computed(() => buildTree(flatItems.value));
    function buildTree(items2) {
      const map = /* @__PURE__ */ new Map();
      const root = [];
      items2.forEach((item) => {
        const parts = item.label.split("/");
        let path = "";
        parts.forEach((part, i) => {
          var _a, _b;
          path = path ? `${path}/${part}` : part;
          if (!map.has(path)) {
            const node = { label: part, path, ...i < parts.length - 1 && { children: [] } };
            map.set(path, node);
            if (i === 0) {
              root.push(node);
            } else {
              (_b = (_a = map.get(parts.slice(0, i).join("/"))) == null ? void 0 : _a.children) == null ? void 0 : _b.push(node);
            }
          }
        });
      });
      const sort = (nodes) => nodes.sort(
        (a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1
      ).map((n) => ({ ...n, children: n.children && sort(n.children) }));
      return sort(root);
    }
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? void 0 : _a.map(transformSlot);
      }
      return {
        label: ((_b = slot.props) == null ? void 0 : _b.filename) || ((_c = slot.props) == null ? void 0 : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    const expanded = computed(() => {
      var _a;
      if (props.expandAll) {
        const allPaths = /* @__PURE__ */ new Set();
        flatItems.value.forEach((item) => {
          const parts2 = item.label.split("/");
          for (let i = 1; i < parts2.length; i++) {
            allPaths.add(parts2.slice(0, i).join("/"));
          }
        });
        return Array.from(allPaths);
      }
      const path = (_a = model.value) == null ? void 0 : _a.path;
      if (!path) {
        return [];
      }
      const parts = path.split("/");
      return parts.map((_, index) => parts.slice(0, index + 1).join("/"));
    });
    watch(model, (value) => {
      const item = flatItems.value.find((item2) => (value == null ? void 0 : value.path) === item2.label);
      if (item == null ? void 0 : item.component) {
        lastSelectedItem.value = item;
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineTreeTemplate), null, {
        default: withCtx(({ items: items2, level }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items2, (item, index) => {
              var _a2, _b2;
              _push2(`<li role="presentation" class="${ssrRenderClass(level > 1 ? ui.value.itemWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(TreeItem), {
                level,
                value: item,
                "as-child": ""
              }, {
                default: withCtx(({ isExpanded, isSelected }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                  if (_push3) {
                    _push3(`<button type="button" class="${ssrRenderClass(ui.value.link({ class: (_a3 = props.ui) == null ? void 0 : _a3.link, active: isSelected }))}"${_scopeId2}>`);
                    if ((_b3 = item.children) == null ? void 0 : _b3.length) {
                      _push3(ssrRenderComponent(_sfc_main$z, {
                        name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_sfc_main$1, {
                        filename: item.label,
                        class: ui.value.linkLeadingIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_e = props.ui) == null ? void 0 : _e.linkLabel }))}"${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                    if ((_f = item.children) == null ? void 0 : _f.length) {
                      _push3(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_g = props.ui) == null ? void 0 : _g.linkTrailing }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$z, {
                        name: unref(appConfig).ui.icons.chevronDown,
                        class: ui.value.linkTrailingIcon({ class: (_h = props.ui) == null ? void 0 : _h.linkTrailingIcon })
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</button>`);
                    if (((_i = item.children) == null ? void 0 : _i.length) && isExpanded) {
                      _push3(`<ul role="group" class="${ssrRenderClass(ui.value.listWithChildren({ class: (_j = props.ui) == null ? void 0 : _j.listWithChildren }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ReuseTreeTemplate), {
                        items: item.children,
                        level: level + 1
                      }, null, _parent3, _scopeId2));
                      _push3(`</ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("button", {
                        type: "button",
                        class: ui.value.link({ class: (_k = props.ui) == null ? void 0 : _k.link, active: isSelected })
                      }, [
                        ((_l = item.children) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_sfc_main$z, {
                          key: 0,
                          name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                          class: ui.value.linkLeadingIcon({ class: (_m = props.ui) == null ? void 0 : _m.linkLeadingIcon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$1, {
                          key: 1,
                          filename: item.label,
                          class: ui.value.linkLeadingIcon({ class: (_n = props.ui) == null ? void 0 : _n.linkLeadingIcon })
                        }, null, 8, ["filename", "class"])),
                        createVNode("span", {
                          class: ui.value.linkLabel({ class: (_o = props.ui) == null ? void 0 : _o.linkLabel })
                        }, toDisplayString(item.label), 3),
                        ((_p = item.children) == null ? void 0 : _p.length) ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: ui.value.linkTrailing({ class: (_q = props.ui) == null ? void 0 : _q.linkTrailing })
                        }, [
                          createVNode(_sfc_main$z, {
                            name: unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: (_r = props.ui) == null ? void 0 : _r.linkTrailingIcon })
                          }, null, 8, ["name", "class"])
                        ], 2)) : createCommentVNode("", true)
                      ], 2),
                      ((_s = item.children) == null ? void 0 : _s.length) && isExpanded ? (openBlock(), createBlock("ul", {
                        key: 0,
                        role: "group",
                        class: ui.value.listWithChildren({ class: (_t = props.ui) == null ? void 0 : _t.listWithChildren })
                      }, [
                        createVNode(unref(ReuseTreeTemplate), {
                          items: item.children,
                          level: level + 1
                        }, null, 8, ["items", "level"])
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items2, (item, index) => {
                var _a2, _b2;
                return openBlock(), createBlock("li", {
                  key: `${level}-${index}`,
                  role: "presentation",
                  class: level > 1 ? ui.value.itemWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item })
                }, [
                  createVNode(unref(TreeItem), {
                    level,
                    value: item,
                    "as-child": ""
                  }, {
                    default: withCtx(({ isExpanded, isSelected }) => {
                      var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j;
                      return [
                        createVNode("button", {
                          type: "button",
                          class: ui.value.link({ class: (_a3 = props.ui) == null ? void 0 : _a3.link, active: isSelected })
                        }, [
                          ((_b3 = item.children) == null ? void 0 : _b3.length) ? (openBlock(), createBlock(_sfc_main$z, {
                            key: 0,
                            name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                            class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$1, {
                            key: 1,
                            filename: item.label,
                            class: ui.value.linkLeadingIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.linkLeadingIcon })
                          }, null, 8, ["filename", "class"])),
                          createVNode("span", {
                            class: ui.value.linkLabel({ class: (_e = props.ui) == null ? void 0 : _e.linkLabel })
                          }, toDisplayString(item.label), 3),
                          ((_f = item.children) == null ? void 0 : _f.length) ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: ui.value.linkTrailing({ class: (_g = props.ui) == null ? void 0 : _g.linkTrailing })
                          }, [
                            createVNode(_sfc_main$z, {
                              name: unref(appConfig).ui.icons.chevronDown,
                              class: ui.value.linkTrailingIcon({ class: (_h = props.ui) == null ? void 0 : _h.linkTrailingIcon })
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2),
                        ((_i = item.children) == null ? void 0 : _i.length) && isExpanded ? (openBlock(), createBlock("ul", {
                          key: 0,
                          role: "group",
                          class: ui.value.listWithChildren({ class: (_j = props.ui) == null ? void 0 : _j.listWithChildren })
                        }, [
                          createVNode(unref(ReuseTreeTemplate), {
                            items: item.children,
                            level: level + 1
                          }, null, 8, ["items", "level"])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1032, ["level", "value"])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }))}>`);
      _push(ssrRenderComponent(unref(TreeRoot), {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }),
        items: items.value,
        "get-key": (item2) => item2.path,
        "default-expanded": expanded.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ReuseTreeTemplate), {
              items: items.value,
              level: 1
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ReuseTreeTemplate), {
                items: items.value,
                level: 1
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(ui.value.content({ class: (_c = props.ui) == null ? void 0 : _c.content }))}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_d = lastSelectedItem.value) == null ? void 0 : _d.component), null, null), _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___2c2c6ef4a5b84daf52befb879a0cfc05/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeTree-NAbLSv-8.mjs.map

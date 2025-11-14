import { renderSlot as renderSlot$1 } from 'file:///home/lincoln/Desktop/NFDI4Chem/nfdi4chem_nuxt_cs_documentation/cs-ms-documentation/cs-documentation/node_modules/.pnpm/vue@3.5.24_typescript@5.9.3/node_modules/vue/index.mjs';
import { f as flatUnwrap } from './node-Ta6SvKQA.mjs';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), (props == null ? void 0 : props.unwrap) || (props == null ? void 0 : props.mdcUnwrap)) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};

export { renderSlot as r };
//# sourceMappingURL=slot-DBHCVgJm.mjs.map

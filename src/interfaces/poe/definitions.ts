export const PoECustomTypes = {
  DefaultValues: {
    hashAlgo: 'Vec<u8>',
    hashBits: 'u32',
    encodingAlgo: 'Vec<u8>',
    encodingPrefix: 'Vec<u8>',
  },
  ForWhat: {
    _enum: ['Generic', 'Photo', 'Camera', 'Lens', 'SmartPhone'],
  },
  Operation: {
    op: 'Vec<u8>',
    desc: 'Vec<u8>',
    hashAlgo: 'Vec<u8>',
    hashBits: 'u32',
    encodeAlgo: 'Vec<u8>',
    prefix: 'Vec<u8>',
    ops: 'Vec<Operation>',
  },
  Rule: {
    version: 'u32',
    description: 'Vec<u8>',
    creator: 'Vec<u8>',
    forWhat: 'ForWhat',
    parent: 'Vec<u8>',
    ops: 'Vec<Operation>',
    buildParams: 'Operation',
  },
  Proof: {
    ruleId: 'Vec<u8>',
    proof: 'Vec<u8>',
    creator: 'Vec<u8>',
    forWhat: 'ForWhat',
    body: 'Vec<u8>', // this varies, maybe implement diff scenarios
    parent: 'Vec<u8>',
  },
};

export default {
  types: {
    ...PoECustomTypes,
  },
};

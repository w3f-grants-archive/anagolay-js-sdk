/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzacebmzcglihz5yedgrasxw7nglvjzqzic2f7xypmhpbng5gciukeccc',
  data: {
    name: 'sn_split',
    desc: 'Takes in the operation name and its outputs, then splits in to N copies of the same operation with output values.',
    input: [
      {
        name: 'sn_split',
        desc: 'Operation name',
        whatType: 'SnByteArray',
        value: ''
      }
    ],
    childrenOutputs: [],
    groups: [
      6
    ],
    ops: [],
    priority: 0,
    output: {
      opName: 'sn_split',
      desc: 'Returns the object with *k* and *v* keys, where *k* is op name and *v* the output value.',
      output: 'SnByteArray',
      decoded: 'ProofParams[]'
    },
    hashing: {
      bits: 256,
      algo: 'blake2b'
    },
    encoding: {
      prefix: true,
      algo: 'hex'
    }
  }
}
export default config
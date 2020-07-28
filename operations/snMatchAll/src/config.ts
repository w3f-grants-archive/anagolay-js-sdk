/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzaceaywejj6dhdphszfagz33zau5zzhce7uqebixn7ldzjodhcumiqqm',
  data: {
    name: 'sn_match_all',
    desc: 'This operation must have children ops. **ALL** the outputs of children ops must be the same in order to proceed.',
    input: [],
    childrenOutputs: [],
    groups: [
      6,
      7
    ],
    ops: [],
    priority: 0,
    output: {
      opName: 'sn_match_all',
      desc: 'Returns true, if all match or throws an error if some match.',
      output: 'SnBoolean',
      decoded: 'SnBoolean'
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
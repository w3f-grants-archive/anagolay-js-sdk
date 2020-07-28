/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzacebax2jywifp3h3enzj5o7vpj3yh6pmz3ez5hpfuji7h6ztpcg6gua',
  data: {
    name: 'sn_cid',
    desc: 'Generic CID, defaults to base32 and dag-cbor for Any kind of data.',
    input: [
      {
        name: 'data',
        desc: 'Any kind of data',
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
      opName: 'sn_cid',
      desc: 'CID string converted into SnByteArray',
      output: 'SnByteArray',
      decoded: 'SnString'
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
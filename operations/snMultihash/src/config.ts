/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzacec6ftwiwlvh3unwhyfxq3dqkjely2jdpqzhh2vs33vu5zhgi5x5jc',
  data: {
    name: 'sn_multihash',
    desc: 'Generic blake2b-256 multihash operation.',
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
      opName: 'sn_multihash',
      desc: 'Returns the Multihash buffer as SnByteArray.',
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
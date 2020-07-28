/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzacecfub3blh425abcu5xrnkndnywuetrhaogk3ospaxjempsxy5qqty',
  data: {
    name: 'sn_input',
    desc: 'What comes in that comes out, identity function, must be a parent of the USER operation. Only one child is accepted.',
    input: [],
    childrenOutputs: [],
    groups: [
      6
    ],
    ops: [],
    priority: 0,
    output: {
      opName: 'sn_input',
      desc: '',
      output: 'SnByteArray',
      decoded: 'SnAny'
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

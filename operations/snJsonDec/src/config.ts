/**
 * Operation specification
 */

export const config = {
  id: 'bafy2bzaceayucsvyckhcmo32fy4goskeueluvix4eu4lvit2q4k633bcbh3lc',
  data: {
    name: 'sn_json_dec',
    desc: 'Wrapper of JSON.parse()',
    input: [
      {
        name: 'data',
        desc: 'Any kind of data.',
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
      opName: 'sn_json_dec',
      desc: '',
      output: 'SnAny',
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
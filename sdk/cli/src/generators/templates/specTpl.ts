import { stringCamelCase } from '@polkadot/util'
import { SnOperation } from '@sensio/types'

const spec = (op: SnOperation): string => {
  const opName: string = stringCamelCase(op.data.name)
  return `import execute, {${opName}} from '.'
  
    describe('SnOperation: ${opName}', (): void => {
      it('is default defined', (): void => {
        expect(execute).toBeDefined()
      })
      
      it('is ${opName} defined', (): void => {
        expect(${opName}).toBeDefined()
      })
      
    })`
}

export default spec

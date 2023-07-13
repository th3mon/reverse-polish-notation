import { reversePolishNotation } from './reverse-polish-notation'

describe('Reverse Polish Notation', () => {
  it('Should exist', () => {
    expect(reversePolishNotation).toBeDefined()
  })

  it('Should reverse polish notation', () => {
    expect(reversePolishNotation('1 2 +')).toEqual(3)
  })
})

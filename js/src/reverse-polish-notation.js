export const reversePolishNotation = (expression) => {
  const operations = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => Number(a) - Number(b),
    '*': (a, b) => Number(a) * Number(b),
    '/': (a, b) => Number(a) / Number(b),
    '^': (a, b) => Math.pow(Number(a), Number(b)),
  }
  const stack = []
  const separator = ' '

  // INFO: I think it should be doable with reduce()
  return expression.split(separator).map(element => {
    if (element in operations) {
      return operations[element](stack.pop(), stack.pop())
    }

    stack.push(element)
  }).filter(Boolean)[0]
}

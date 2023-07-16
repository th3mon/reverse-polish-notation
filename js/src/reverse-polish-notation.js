export const reversePolishNotation = (expression, options = {}) => {
  const operations = {
    "+": (a, b) => Number(a) + Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "*": (a, b) => Number(a) * Number(b),
    "/": (a, b) => Number(a) / Number(b),
    "^": (a, b) => Math.pow(Number(a), Number(b)),
    ...options?.operations,
  };
  const stack = [];
  const separator = " ";

  expression.split(separator).map((element) => {
    if (operations[element]) {
      const result = operations[element](stack.pop(), stack.pop());
      stack.push(result);
    } else {
      stack.push(element);
    }
  });

  return stack.length > 1
    ? reversePolishNotation(stack.join(separator))
    : stack[0];
};

const add = (x, y) => {
    return x + y;
  }

  const mul = (x, y) => {
    return x * y;
  }

  const PI = 3.14
  const obj = { one: 1, two: 2 }

  export default { add, mul, PI, obj }
  // this is short for
  // export default { add: add, mul: mul, PI: PI, obj: obj }
  // you can change the property name to something else, but if you don’t need to, just use the destructured assignment { add, mul, PI … }

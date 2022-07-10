function calculate(expressions) {
  const start = +new Date();
  const operateExp = /(\+|\-|\*|\/|\(|\))/i;
  const numExp = /\d+/;
  const operateArr = expressions.split(operateExp).filter((item) => !!item);
  /** 后缀表达式存储栈 */
  const stack = [];
  /** 中缀表达式中操作符提取存储栈 */
  const operateStack = [];
  /** 最后用来操作计算数的栈 */
  const resultStack = [];
  // 最后输出结果
  let result = null;

  // 1. 将中缀表达式转换为后缀表达式
  for (let i = 0; i < operateArr.length; i++) {
    const target = operateArr[i];
    if (numExp.test(target)) {
      stack.push(target);
      continue;
    }
    if (operateExp.test(target)) {
      // 特殊情况 => 加号和减号必须和栈顶比较优先级，如果优先级低于或等于栈底，则全部原有的全部出栈
      if (/(\+|\-)/.test(target)) {
        if (/(\*|\/|\+|\-)/.test(operateStack[operateStack.length - 1])) {
          while (operateStack.length) {
            const value = operateStack.pop();
            if (!/(\(|\))/.test(value)) {
              stack.push(value);
            }
          }
          operateStack.push(target);
        } else {
          operateStack.push(target);
        }
        continue;
      }
      // 如果是右括号，则在左括号前的数据元素全部出栈
      if (/\)/.test(target)) {
        while (operateStack.length) {
          const isLeftBrackets = /\(/.test(
            operateStack[operateStack.length - 1]
          );
          if (!isLeftBrackets) {
            const value = operateStack.pop();
            stack.push(value);
            continue;
          }
          if (isLeftBrackets) {
            operateStack.pop();
            break;
          }
        }
        continue;
      }
      // 来到这里就剩下 * / 直接进栈
      operateStack.push(target);
    }
  }
  // 2. 将存储操作符的栈清空，加入到后缀表达式的栈中
  while (operateStack.length) {
    stack.push(operateStack.pop());
  }

  // 3. 开始操作 stack 出栈计算
  while (stack.length) {
    const target = stack.shift();
    if (numExp.test(target)) {
      resultStack.push(target);
      continue;
    }
    if (operateExp.test(target)) {
      const right = resultStack.pop();
      const left = resultStack.pop();

      const fn = new Function(`return ${left}${target}(${right})`);
      resultStack.push(fn());
      // const calc = eval(`${left}${target}${right}`);
    }
    if (resultStack.length === 1 && !stack.length) {
      result = resultStack.shift();
      break;
    }
  }

  console.log(`计算结果为: ${result}; 计算总耗时: ${+new Date() - start}ms`);
  // return result;
}
calculate("1+30/3");
calculate("(1+52)*5-6");
calculate("9+(3-1)*3+10/2");
calculate("2-1+2");

// console.log(calculate("1+30/3")); // 11
// console.log(calculate("(1+52)*5-6")); // 259
// console.log(calculate("9+(3-1)*3+10/2")); // 20

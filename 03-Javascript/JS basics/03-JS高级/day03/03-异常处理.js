/* 
异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行。
 */

function func1(arg1, arg2) {
  if (!arg1 || !arg2) {
    throw new Error("参数不能为空");
  }
}

// func1();

function func2(arg1, arg2) {
  try {
    console.log(foo);
  } catch (error) {
    console.log("debug");
    console.log(error.message);
  }
}

func2(0, 0);

const longrunningtask = () => {
  //엄청나게 오래 걸리는 작업!
  console.log("-end work-");
};

//blocking 처리 방식
console.log("start work! [blocking]");
longrunningtask();

console.log("================================");
console.log("================================");

console.log("start work! [none-blocking]");
setTimeout(longrunningtask, 0);
console.log("다음 작업 실행");

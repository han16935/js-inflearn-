// 학생 수를 입력받으면, 수 / 12 한 뒤 올림
//  ex ) 25/12 = 2. xxx 올려야 됨

const pencil = function(num){
    const das = Math.ceil(num / 12);
    return das;
}

console.log(pencil(178));



// 문제 답
// function solution(n){
//     let answer;
//     answer=Math.ceil(n/12);
//     return answer;
// }

// console.log(solution(178));
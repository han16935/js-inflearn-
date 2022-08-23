
// 1. 반복문 X 풀이

const is_triangle = function(a, b, c){
    let big=0;
    if(a>b)
      big = a;
    else 
      big = b;
      
    if(big<c)
       big = c;

    const rest = a + b + c - big;
    if(big<rest)
      return "Yes"
    else 
      return "No"  
}

console.log(is_triangle(13,33,17));

// 2. for - of, arguments 이용 풀이
// const is_triangle = function(a, b, c){
//     let max=0;
//     for(let item of arguments){
//         if(max<item)
//           max = item;
//     }
//     const rest_sum=a+b+c-max;
//     if(max<rest_sum)
//       return "Yes";
//     else
//       return "No";  
// }  

// console.log(is_triangle(1,2,3));


// 3. 해답
// function solution(a, b, c){
//     let answer="YES", max;
//     let tot=a+b+c;
//     if(a>b) max=a;
//     else max=b;
//     if(c>max) max=c;
//     if(tot-max<=max) answer="NO"; 
//     return answer;
// }

// console.log(solution(1, 2, 3));
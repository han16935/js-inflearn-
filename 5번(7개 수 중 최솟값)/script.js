// const findMax = function(a, b, c, d, e, f){
//     let min = Number.MAX_SAFE_INTEGER;
//     for(let item of arguments){
//        if(min>item)
//          min = item;
//     }
//     return min;
// }

// console.log(findMax(1,2,3,4,5,6,8));



// const findMax2 = function(a, b, c, d, e, f){
//     const min = Math.min(...arguments);
//     return min;
// }

// console.log(findMax2(1,2,3,4,5,6,7));



const findMax3 = function(arr){
   let answer = 0;
   for(let i=0;i<arr.length;i++){
    answer+=arr[i];
   }  
   return answer;
}

const arr = [1,2,3,4,5,6,7];
document.write(findMax3(arr));







// answer
// function solution(arr){         
//     let answer, min=Number.MAX_SAFE_INTEGER;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min) min=arr[i];
//     }
//     answer=min;
//     return answer;

// }

// let arr=[5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));
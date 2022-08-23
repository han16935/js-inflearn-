function solution(a, b, c){
    let min=100;
    const nums = [a, b, c];
    for(let item of nums){
       if(min>item)
         min=item;
    }  
    return min;
}

document.write(solution(2,5,1));


// function solution(a, b, c){
//     let answer;
//     if(a<b) answer=a;
//     else answer=b;
//     if(c<answer) answer=c; 
//     return answer;
// }

// console.log(solution(2, 5, 1));
// closures

function outer(){
    let arr = [1,2,3,4,5]

     function inner(){
         
        for(let i = 0; i<arr.length; i++){
            console.log(arr[i])
        }
              
     }
    return inner();
}

console.log(outer())



























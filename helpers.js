// function doubleNumber(n){
//     return n*2;
// }
//
// function initial(str){
//     // let arr = [];
//     let arr = str.split(' ');
//     console.log(arr2)
//     return `${arr[0]} ${arr[1][0]}. ${arr[2][0]}.`
// }
//
// module.exports =  doubleNumber
// module.exports = initial
export function doubleNumber(n){
    return n*2;
}

export function initial(str){
    // let arr = [];
    let arr = str.split(' ');
    console.log(arr)
    return `${arr[0]} ${arr[1][0]}. ${arr[2][0]}.`
}

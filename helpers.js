export function doubleNumber(n) {
    return n * 2;
}

export function initial(str) {
    let arr = str.split(' ');
    return `${arr[0]} ${arr[1][0]}. ${arr[2][0]}.`;
}

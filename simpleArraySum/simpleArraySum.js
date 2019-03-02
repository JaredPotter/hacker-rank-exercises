function simpleArraySum(ar) {
    let result = ar.reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;
}
// Complete the rotLeft function below.
function rotLeft(a, d) {
    const partA = a.slice(0, d);
    const partB = a.slice(d, a.length);
    const final = partB.concat(partA);
    
    return final;
}
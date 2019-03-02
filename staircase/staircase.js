function staircase(n) {

    for (let i = 0; i < n; i++) {
        let spaceCount = n - i - 1;
        let resultString = '';

        for (let j = 0; j < spaceCount; j++) {
            resultString += ' ';
        }

        let poundCount = n - spaceCount;

        for (let j = 0; j < poundCount; j++) {
            resultString += '#';
        }

        console.log(resultString);
    }
}
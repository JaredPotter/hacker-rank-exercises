function alternatingCharacters(s) {
    const sArray = s.split('');

    let lastChar = '';
    let deleteCount = 0;

    sArray.forEach((char) => {
        if(char === lastChar) {
            deleteCount++;
        }

        lastChar = char;
    });

    return deleteCount;
}

const s1 = 'AAAAA';
const result1 = alternatingCharacters(s1);

const s2 = 'BBBBB';
const result2 = alternatingCharacters(s2);

console.log();
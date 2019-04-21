function twoStrings(s1, s2) {
    const s1Split = s1.split('');
    const s2Split = s2.split('');
    const dictionary = {};

    s1Split.forEach((char) => {
        dictionary[char] = char;
    });

    let result = 'NO';

    for(let i = 0; i < s2Split.length; i++) {
        const char = s2Split[i];

        if(dictionary[char]) {
            result = 'YES';
            break;
        }
    }

    return result;
}

const s1_1 = 'hello';
const s2_1 = 'world';
const result1 = twoStrings(s1_1, s2_1);
console.log(result1);

const s1_2 = 'be';
const s2_2 = 'cat';
const result2 = twoStrings(s1_2, s2_2);
console.log(result2);




function getSubstrings(s) {
    const array = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            const substring = s.slice(i, j);

            array.push(substring);
            console.log(substring)
        }
    }

    return array;
}

function checkSubstrings(substrings) {
    const dict = {};
    let count = 0;

    for (let string of substrings) {
        const sortedString = string.split('')
            .sort((a, b) => a.toLowerCase().localeCompare(b))
            .join('');

        if (dict[sortedString]) {
            count += dict[sortedString];
            dict[sortedString] += 1;
        } 
        else {
            dict[sortedString] = 1;
        }
    }
    return count;
}

function sherlockAndAnagrams(s) {
    const substrings = getSubstrings(s);
    const count = checkSubstrings(substrings);

    return count;
}

const s1 = 'mom';
const result1 = sherlockAndAnagrams(s1);
console.log(result1); // Actual 2. 

const s2 = 'abba';
const result2 = sherlockAndAnagrams(s2);
console.log(result2); // Actual 4

const s3 = 'abcd';
const result3 = sherlockAndAnagrams(s3);
console.log(result3); // Actual 0.

const s4 = 'xxxx';
const result4 = sherlockAndAnagrams(s4);
console.log(result4); // Actual 10.

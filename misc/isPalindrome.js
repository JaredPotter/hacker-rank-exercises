function isPalindrome(s) {
    // Solution 1. 
    // const reversed = s.split('').reverse().join('');

    // if(reversed === s) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    // Solution 2 - without array functions.
    const lastIndex = s.length - 1;
    
    for(let i = 0; i < s.length; i++) {
        const char1 = s[i];
        const char2 = s[lastIndex - i];

        if(char1 !== char2) {
            return false;
        }
    }

    return true;
}

const s1 = 'abcba';
const result1 = isPalindrome(s1);
console.log(result1);

const s2 = 'dog';
const result2 = isPalindrome(s2);
console.log(result2);


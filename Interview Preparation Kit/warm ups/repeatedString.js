// Complete the repeatedString function below.
function repeatedString(s, n) {
    const initialCount = (s.match(/a/g) || []).length;
    const length = s.length;
    const setCount = Math.floor(n / length);
    let currentCount = setCount * initialCount;
    const remainingLettersCount = n - (setCount * length);
    const remainingLetters = s.substring(0, remainingLettersCount);
    currentCount += (remainingLetters.match(/a/g) || []).length;

    return currentCount;
}
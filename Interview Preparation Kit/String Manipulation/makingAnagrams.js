function makeAnagram(a, b) {
    const aArray = a.split('').sort();
    const bArray = b.split('').sort();
    let occurrences = {};

    for (let i = 0; i < aArray.length; i++) {
        const value = aArray[i];

        occurrences[value] = occurrences[value] ? (occurrences[value] + 1) : 1;
    }

    for (let i = 0; i < bArray.length; i++) {
        const value = bArray[i];

        occurrences[value] = occurrences[value] ? (occurrences[value] - 1) : -1;
    }

    let deleteCount = 0;

    Object.keys(occurrences).forEach(function (key) {
        let value = occurrences[key];

        if (value !== 0) {
            deleteCount += Math.abs(value);
        }

    });

    return deleteCount;
}

const a1 = 'cde';
const b1 = 'abc';
const count1 = makeAnagram(a1, b1);

const a2 = 'snowman';
const b2 = 'woman';
const count2 = makeAnagram(a2, b2);

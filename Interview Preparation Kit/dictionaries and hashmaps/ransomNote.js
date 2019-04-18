// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
    let hashmap = {};

    magazine.forEach((magWord) => {
        hashmap[magWord] = hashmap[magWord] ? (hashmap[magWord] + 1) : 1;
    });

    for (let i = 0; i < note.length; i++) {
        const noteWord = note[i];

        if (hashmap[noteWord] && hashmap[noteWord] > 0) {
            hashmap[noteWord]--;
        }
        else {
            console.log('No');
            return;
        }
    }

    console.log('Yes');
}
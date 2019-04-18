function isValid(s) {
    const sArray = s.split('').sort();
    let occurrences = {};

    for (let i = 0; i < sArray.length; i++) {
        const value = sArray[i];

        occurrences[value] = occurrences[value] ? (occurrences[value] + 1) : 1;
    }

    let currentOccurrence = undefined;
    let differentOccuranceCount = 0;
    const keys = Object.keys(occurrences);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = occurrences[key];

        if (!currentOccurrence) {
            currentOccurrence = value
        }

        if (value !== currentOccurrence) {
            differentOccuranceCount++;
        }
    }
    
    if (differentOccuranceCount > 1) {
        return 'NO';
    }

    return 'YES';
}
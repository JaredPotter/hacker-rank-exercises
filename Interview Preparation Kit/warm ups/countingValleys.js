// Complete the countingValleys function below.
function countingValleys(n, s) {

    const result = s.split('').reduce((current, step) => {
        if (current.altitude === 0 && step === 'D') {
            // Enter valley.
            current.valleyCount++;
        }

        if (step === 'U') {
            current.altitude++;
        }
        else {
            current.altitude--;
        }

        return current;
        
    }, { valleyCount: 0, altitude: 0});

    return result.valleyCount;
}
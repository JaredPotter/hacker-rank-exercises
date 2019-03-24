// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let minimumJumpCount = 0;
    let currentIndex = 0;
    const lastIndex = c.length - 1;

    while (currentIndex != lastIndex) {
        // Greeding - Check if we can jump 2 clouds.
        if (c[currentIndex + 2] === 0) {
            currentIndex += 2;
        }
        else {
            currentIndex++;
        }

        minimumJumpCount++;
    }

    return minimumJumpCount;
}
function timeConversion(s) {
    /*
     * Write your code here.
     */

    let time = s.substring(0, s.length - 2);
    let timeSplit = time.split(':');
    let amPM = s.substring(s.length - 2, s.length);
    let hours = parseInt(timeSplit[0]);
    let minutes = timeSplit[1];
    let seconds = timeSplit[2];

    if (hours == 12) {
        hours = 0;
    }

    // let hours = 0;
    if (amPM == 'PM') {
        hours = hours + 12;
    }

    hours = (hours + '').padStart(2, '0');
    let result = hours + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');

    return result;
}
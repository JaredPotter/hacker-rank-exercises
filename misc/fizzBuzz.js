function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        let s = '';

        s += (i % 3 === 0) ? 'Fizz' : '';
        s += (i % 5 === 0) ? 'Buzz' : '';

        if(!s) {
            s = i;
        }

        console.log(s);
    }
}


fizzBuzz();

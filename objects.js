const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    }
}

bouncer(12);
bouncer(93);

const me = 'monica';
console.log(me.length);
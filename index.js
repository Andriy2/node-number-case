let space = '';

function numberCase(props = {space: '', isPrototype: false}) {
    if (typeof props.hasOwnProperty('space')) {
        space = props.space;
    }
    if (props.isPrototype) {
        return caser;
    } else {
        return caller;
    }
}

function caller(number, first, second, fifth) {
    return caser.call(number, first, second, fifth);
}

function caser(first, second, fifth) {
    if (typeof fifth === 'undefined') {
        fifth = second;
    }
    let number = this;
    let absolute = number > 0 ? number : -number;
    let modulo = absolute % 10;
    if (10 < absolute && absolute < 20 || 5 <= modulo || modulo === 0) {
        return number + space + fifth;
    } else if (modulo === 1) {
        return number + space + first;
    } else {
        return number + space + second;
    }
}

module.exports = numberCase;
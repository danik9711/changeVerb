'use strict'
// я ты он она мы они
const replayLetter = function(verb, end) {
    if (verb[verb.length-1] === end[0]) {
        return `${verb.slice(0, verb.length-1)}${end}`;
    } else {
        return `${verb}${end}`;
    }
}

const whatVerb = function(word) {

    const spr = /ить$/;
    let pRule = ['гнать' , 'дышать' , 'держать' , 'зависеть' , 'видеть' , 'слышать' , 'обидеть' , 'терпеть' , 'вертеть' , 'ненавидеть' , 'смотреть', 'сидеть', 'лежать'];
    let pRule2 = ['брить', 'стелить', 'зиждиться', 'лить', 'пить', 'гнить', 'шить'];

    pRule = pRule.filter((wordRule) => wordRule === word);
    pRule2 = pRule2.filter((wordRule) => wordRule === word);

    if((spr.test(word) || pRule[0]) && !pRule2[0]) {
        return true;
    } else {
        return false;
    }

}

const renameWord = function(verb, mest) {

    const newMest = mest.toLowerCase();
    let newVerb = '';

    /* const atEt = /ть$/;
    if (atEt.test(verb)) */
    newVerb = verb.toLowerCase().substring(0, verb.length-2);

    const arr = ['я', 'ты', 'он', 'она', 'мы', 'они'];
    const arrEnd1 = ['(у)(ю)', 'ешь', 'ет', 'ет', 'ем', 'ют'];
    const arrEnd2 = ['(у)(ю)', 'ишь', 'ит', 'ит', 'им', 'ат(ят)'];

    arr.forEach((item, i) => {
        if (newMest === item) {
            if(whatVerb(verb)) {
                newVerb = replayLetter(newVerb, arrEnd2[i]);
            } else {
                newVerb = replayLetter(newVerb, arrEnd1[i]);
            }
        }
    })

    return newVerb;
}



console.log(renameWord('деЛать', 'я'));
console.log(renameWord('лежать', 'они'));
console.log(renameWord('курить', 'я'));
console.log(renameWord('гладить', 'он'));
console.log(renameWord('гулять', 'ты'));
console.log(renameWord('любить', 'он'));
console.log(renameWord('кусать', 'она'));

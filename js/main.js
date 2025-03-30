"use strict"

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

const {age} = personalPlanPeter;
console.log(age);


function showExperience(plan) {
    return(plan.skills.exp);    
}

function showProgrammingLangs(plan) { 
    let progrLangs = personalPlanPeter.skills.programmingLangs;
    let message = '';
    for (key in progrLangs) {
        message += `Язык ${key} изучен на ${progrLangs[key]}\n`
    }
    return message;
}

console.log(showProgrammingLangs());

showProgrammingLangs(personalPlanPeter);


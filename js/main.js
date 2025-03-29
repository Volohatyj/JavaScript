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

let progrLangs = personalPlanPeter.skills.programmingLangs;

console.log(progrLangs);

for (key in personalPlanPeter.skills.programmingLangs) {
    console.log(key, personalPlanPeter.skills.programmingLangs[key])
}

function showExperience(plan) {
    return(plan.skills.exp);    
}

function showProgrammingLangs(plan) { 
}

showProgrammingLangs(personalPlanPeter);
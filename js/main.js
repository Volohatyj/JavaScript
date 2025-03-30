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
    },
    showAgeAndLangs: function (plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let message = `Мне ${age} и я владею языками: `;
        let lang = '';
        for (let key in languages) {
            lang = languages[key];
            message += `${lang.toUpperCase()} `;
        }
        message = message.trim(' ');
        return message;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    return(plan.skills.exp);    
}

function showProgrammingLangs(plan) { 
    let message = '';
    let {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        message += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return message;
}

console.log(showProgrammingLangs(personalPlanPeter));

showProgrammingLangs(personalPlanPeter);


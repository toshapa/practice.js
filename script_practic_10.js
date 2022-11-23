const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month',
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let {programmingLangs} = plan.skills;
    let string = '';
    for (let key in programmingLangs) {
        string += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    console.log(string)
    return string;
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

showProgrammingLangs(personalPlanPeter);
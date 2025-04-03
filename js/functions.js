'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    const teams = [];
    const students = arr.length;
    let teamCount  = 0;
    const arrSorted = arr.sort();

    // console.log(arr.length % 3);
   
    for (let i = 0; i <3; i++) {
        teams.push([]);   
    }
    teams.push("Оставшиеся студенты: ");
    console.log(teams);

    for (let i = 0; i < students; i++) {
        if (i < 9) {
            // console.log(`teamCount: ${teamCount}`)
            teams[teamCount].push(arrSorted[i]);
            // console.log(`teams[teamCount]: ${teams[teamCount]}`);
        } else if (i > 8) {
            teams[teamCount] += arrSorted[i];
            // console.log(arrSorted[i]);
        }
        if ((i + 1) % 3 == 0) {
            teamCount++;
        } 
    }
    if (students == 9) {
        teams[3] += '-';
    }
    console.log(teams);
    return teams;

}

sortStudentsByGroups(students);
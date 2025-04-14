'use strict';
 
function powIterated(x, n) {
    let result = 1;
    if (n === 0) {
        return 1;
    } else {
        for (let i = 0; i < n; i++) {
            result *= x;
            console.log(`i: ${i}, result: ${result}`);
        };        
        return result
    }
};

// powIterated(2, 5);

const x = 2,
    n = 8;


function powRecursion(x, n) {
    if (n === 0) {
        return 1;
    } else {
        return x * powRecursion (x, n - 1);
    }
};

// console.log(`Math.pow: ${Math.pow(x, n)}, powRecursion: ${powRecursion(x, n)}`);
// console.log(`Math.pow: ${Math.pow(2, -2)}`);

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let total = 0,
    students = 0;
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            
            for (let i=0; i < course.length; i++) {
                total += course[i].progress;
            };
        } else {
            
        };
    };
    return total / students;
};

console.log(getTotalProgressByIteration(students));
'use strict';
 
// console.log(`Math.pow(2, 4): ${Math.pow(2, 4)}`);

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//         console.log('In for', result);
//     };
// };

// function pow(x, n,) {
//     let result = 1;
//     if (n === 1) {    
//         return x;    
//     } else {
//         result = x * pow(x, n-1);    
//         return result;    
//     }
// };

// console.log(pow(2, 4));

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
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            };
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                };
            };
        };
    };

    return total/students;
};

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    
};
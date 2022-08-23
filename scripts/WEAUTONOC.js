
/* import data from xlsx file*/ 

const xlsx = require('xlsx');
const filePath = process.argv.slice(2)[0];
console.log(filePath);
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

let problems = [];
let problem = {};

for (let cell in worksheet) {
    const cellAsString = cell.toString();

    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') problem.host = worksheet[cell].v;

        if (cellAsString[0] === 'B') problem.grouphost = worksheet[cell].v;
        
        if (cellAsString[0] === 'C') problem.problem = worksheet[cell].v;
        
        if (cellAsString[0] === 'D') {
            problem.slover = worksheet[cell].v;
            problems.push(problem);
            problem = {};
        }
    }
}
console.log( problems);



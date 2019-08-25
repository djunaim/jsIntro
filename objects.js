const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    }
}

bouncer(12);
bouncer(93);

const me = 'monica';
console.log(me.length);

// const myPerson = () => {
//     name: "john",
//     age: "41"
// }

// console.log(myPerson.name);


const findandLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}

findandLogEmployeeStatus(person);

// findandLogEmployeeStatus( {
//     name: prompt('Enter name here'),
//     status: ''
// })


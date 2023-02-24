"use strict";

const salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,

    set addSalaries(value){
        for (let i=0; i<value.length; i++) {
            const [position, salary] = value[i].split(": ");
            if (this[position]) {
                this[position] = Number(salary);
            } else {
                this[position] = Number(salary);
            }
        }
    }
};
Object.defineProperty(salaries, 'sum', {
    get () {
        let sum = 0;
        for(salary in this){
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false,
})

salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];

console.log(salaries)
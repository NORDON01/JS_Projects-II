const log = console.log;

const task1 = function (callback){
    setTimeout(() => {
        log('Task1 complete after 2000 ms');
        //callback();
    }, 2000)
    
}

const task2 = function (callback){
    setTimeout(() => {
        log('Task2 complete after 1000 ms');
        //callback();
    }, 1000)
}

const task3 = function (callback){
    setTimeout(() => {
        log('Task3 complete after 3000 ms');
       // callback();
    }, 3000)
}

const task4 = function (callback){
    setTimeout(() => {
        log('Task4 complete after 1500 ms');        
    }, 1500)
}  

/* task1();
task2();
task3();
task4(); */

//task1(() => task2(() => task3(() => task4())));

task1(task2(task3(task4())));
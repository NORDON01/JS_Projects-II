const log = console.log;

/* JS launchess boilWater function for minimum 20 seconds  */
boilWater(20000);
/* JS moves to next task & keeps browser waiting */
for(i = 0; i < 20000; i++){
    log('Chop carrots');
}

function boilWater(time) {
/* The browser executes this log and waits for JS 
to finish choping the carrots */    
    log('Water is boiling...')
/* The browser comes back to JS asking for execution of setTimeout 
after 20 seconds minimum. If 'Chop carrots' loop is not yet done the 
browser waits for JS to finish */    
    setTimeout(() => {log('Done')}, time);
}
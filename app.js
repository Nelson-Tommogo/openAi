const readline = require('readline');
const{ generateMeta } = require('./controller/openaicontroller')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Youtube Video Title\n', generateMeta) 
    // rl.close(); // Close the readline interface

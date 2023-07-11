console.log('hello mehn');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Youtube Video Title\n', (title) => {
    console.log(title);
    // rl.close(); // Close the readline interface
});
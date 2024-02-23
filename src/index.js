/* eslint-disable no-console */

const colours = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m',
    success: '\x1b[32m',
    error: '\x1b[31m',
    neutral: '\x1b[33m',
};

class TaskLogger {
    startTask(message) {
        const fullStars = "*".repeat(message.length);
        console.log(`${colours.blue}${fullStars}`);
        console.log(fullStars);
        console.log('**');
        console.log(`** ${message}`);
        console.log('**');
    }

    content(colour, message, bottomPadding = true) {
        const colourCode = colours[colour];
        console.log(`${colours.blue}** ${colourCode}${message}`);
        if (bottomPadding) {
            console.log(`${colours.blue}**`);
        }
    }

    endTask() {
        const fullStars = "*".repeat(message.length);
        const fullDashes = "-".repeat(message.length - 2);
        console.log(`${colours.blue}${fullStars}`);
        console.log(fullStars);
        console.log(`${colours.red}<${fullDashes}>`);
        console.log(`<${fullDashes}>\n`);
    }

    completion(message) {
        const fullStars = "*".repeat(message.length);
        console.log(`${colours.green}${fullStars}`);
        console.log(fullStars);
        console.log(`*****    !!   ${message}   !!    *****`);
        console.log(fullStars);
        console.log(`${fullStars}${colours.reset}`);
    }

    error(message) {
        const fullStars = "*".repeat(message.length);
        console.log(`${colours.red}${fullStars}`);
        console.log(fullStars);
        console.log(`*****    !!   ${message}   !!    *****`);
        console.log(fullStars);
        console.log(`${fullStars}${colours.reset}`);
    }
}

module.exports.taskLogger = new TaskLogger();
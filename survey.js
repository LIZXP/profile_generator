const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer1) => {
  rl.question(`What's an activity you like doing?`, (answer2) => {
    rl.question(`What do you listen to while doing that?`, (answer3) => {
      rl.question(
        `Which meal is your favourite (eg: dinner, brunch, etc.)`,
        (answer4) => {
          rl.question(
            `What's your favourite thing to eat for that meal?`,
            (answer5) => {
              rl.question(
                `Which sport is your absolute favourite?`,
                (answer6) => {
                  rl.question(
                    `What is your superpower? In a few words, tell us what you are amazing at!`,
                    (answer7) => {
                      console.log(
                        `nice to meet you ${answer1}, I like ${answer2} too. ${answer3} is also my favorite music. I also like ${answer4}, and i will order ${answer5} as well while I am watching ${answer6} and imagin if i can have ${answer7}.`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

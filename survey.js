const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable?  :)  `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (accompanyingMusic) => {
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.) `, (favouriteMeal) => {
        rl.question(`What's your favourite thing to eat for that meal? ` , (favouriteFood) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superPower) => {
              console.log(` Thanks for Playing!! Here's your sample bio: \n "${name} loves ${activity}, and especially if able to listen to ${accompanyingMusic} while doing it. \n ${name} loves to eat ${favouriteFood} for ${favouriteMeal}. ${name} loves ${sport}, and when no one is looking, ${name} is ${superPower}"`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


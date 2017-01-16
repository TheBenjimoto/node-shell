
let commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  let cmd = data.toString().trim();

  if (cmd === 'pwd') commands.pwd();
  else if (cmd === 'date') commands.date();
  else if (cmd === 'ls') commands.ls();
  else process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
});

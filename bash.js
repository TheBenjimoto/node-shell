// console.log(process);
// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline
  let date = new Date();
  if (cmd === 'pwd') console.log(process.argv[1]);
  else if (cmd === 'date') console.log(date.toString());
  else process.stdout.write('You typed: ' + cmd);


  process.stdout.write('\nprompt > ');

});

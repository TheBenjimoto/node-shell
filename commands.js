let fs = require('fs');

function pwd() {
  console.log(process.argv[1]);
}

function date() {
  let date = new Date();
  console.log(date.toString());
}

function ls() {
  fs.readdir('.', function(err, files) {
    process.stdout.write('\n');
    if (err) throw err;
      files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write('\nprompt > ');
  });
}

exports.pwd = pwd;
exports.date = date;
exports.ls = ls;

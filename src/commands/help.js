import { workingDir } from "../s3cl.js";

const commands = {
  cd: 'Usage: cd <path>',
  ls: 'Usage: ls <optional: path>',
  get: 'Usage: get <path s3> --> <path local>',
  push: 'Usage: push <path local> --> <path s3>',
  rm: 'Usage: rm <path of filename>',
};

function help(command) {
  if (command) {
    console.log(commands[command]);
  } else {
    console.log([
      'Simple how usage s3cl',
      '`type help <command>` to help for the command.',
      'commands list:',
      '- cd              : Change working directory',
      '- get             : Download file from s3 to local',
      '- push            : Upload file from local to s3',
      '- ls              : Show list dir or file on working dir',
      '- rm              : Remove file or dir',
      '- clear           : Clear terminal',
      '- help/-h/--help  : Show help',
    ].join('\n'));
  }
  workingDir.print();
}

export default help;
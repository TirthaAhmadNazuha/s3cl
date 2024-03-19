import AWS from 'aws-sdk';
import * as minimal from './commands/minimal.js';
import ls from './commands/ls.js';
import cat from './commands/cat.js';
import get from './commands/get.js';
import push from './commands/push.js';
const commands = { ...minimal, ls, cat, get, push };

const endpoint = 'http://192.168.180.9:8000/';
export const s3 = new AWS.S3({
  accessKeyId: 'GLZG2JTWDFFSCQVE7TSQ',
  secretAccessKey: 'VjTXOpbhGvYjDJDAt2PNgbxPKjYA4p4B7Btmm4Tw',
  endpoint,
  s3ForcePathStyle: true
});

export const workingDir = {
  bucket: 'ai-pipeline-statistics',
  path: '',
  print() {
    console.log(`\n${endpoint.slice(0, -1)}@${this.bucket}:${this.path}>`);
  }
};

async function main() {
  await new Promise((r) => setTimeout(r, 300));
  console.clear();
  workingDir.print();
  process.stdin.on('data', (buff) => {
    const str = buff.toString();
    const [command, ...vals] = str.split(' ').filter(p => p != '').map(p => p.trim());
    if (commands[command]) {
      try {
        commands[command](...vals);
      } catch (err) {
        console.log(err);
      }
    }
  });
}

main();
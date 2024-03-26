import { readFileSync } from 'fs';

function load_conf() {
  console.log(new URL('../.conf', import.meta.url));
  const file = readFileSync(new URL('../.conf', import.meta.url)).toString();
  file.split('\n').forEach((line) => {
    const [key, val] = line.split('=').map(p => p.trim());
    process.env[key] = val;
  });
}

load_conf();

export default load_conf;
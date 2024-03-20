import { workingDir } from "../s3cl.js";

export function clear() {
  console.clear();
  workingDir.print();
}

export function dirFunc(path) {
  if (path.endsWith('/')) path = path.slice(0, -1);
  if (path.startsWith('/')) {
    return path.slice(1);
  }
  if (path.startsWith('..')) {
    const sp = path.split('/');
    const wsp = workingDir.path.split('/');
    let countDd = 0;
    let p = [];
    sp.forEach((a) => {
      if (a == '..') {
        countDd += 1;
      } else {
        p.push(a);
      }
    });
    return `${wsp.slice(0, -countDd).concat(p).join('/')}`;
  }
  const ed = workingDir.path + `/${path}`;
  return ed.startsWith('/') ? ed.slice(1) : ed;
}

export function cd(...path) {
  path = path.join(' ');
  workingDir.path = dirFunc(path);
  workingDir.print();
}
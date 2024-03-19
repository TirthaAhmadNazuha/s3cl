import { workingDir } from "../index.js";

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
  return workingDir.path + `/${path}`;
}

export function cd(...path) {
  path = path.join(' ');
  workingDir.path = dirFunc(path);
  workingDir.print();
}
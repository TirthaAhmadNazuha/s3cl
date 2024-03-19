import { s3, workingDir } from "../index.js";
import { dirFunc } from "./minimal.js";
import { writeFileSync, mkdirSync } from 'fs';

function get(...paths) {
  const [file_path, to_path] = paths.join(' ').split(' --> ');
  s3.getObject({
    Bucket: workingDir.bucket,
    Key: dirFunc(file_path),
  }, (err, data) => {
    if (err) throw err;
    if (to_path.includes('/') && !to_path.startsWith('/')) {
      mkdirSync(to_path.split('/').slice(0, -1).join('/'), { recursive: true });
    }
    writeFileSync(to_path, data.Body);
    workingDir.print();
  });
}
// 
export default get;
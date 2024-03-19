import { s3, workingDir } from "../index.js";
import { dirFunc } from "./minimal.js";
import { readFileSync } from 'fs';

function push(...paths) {
  const [from_path, to_path] = paths.join(' ').split(' --> ');
  s3.upload({
    Bucket: workingDir.bucket,
    Key: dirFunc(to_path),
    Body: readFileSync(from_path)
  }, (err, data) => {
    if (err) throw err;
    workingDir.print();

  });
}
export default push;
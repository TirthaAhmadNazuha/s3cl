import { s3, workingDir } from "../s3cl.js";
import { dirFunc } from "./minimal.js";

function rm(...file_path) {
  file_path = file_path.join(' ');
  s3.deleteObject({
    Bucket: workingDir.bucket,
    Key: dirFunc(file_path),
  }, (err, data) => {
    if (err) throw err;
    workingDir.print();
  });
}
export default rm;
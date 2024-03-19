import { s3, workingDir } from "../index.js";
import { dirFunc } from "./minimal.js";

function cat(...file_path) {
  file_path = file_path.join(' ');
  s3.getObject({
    Bucket: workingDir.bucket,
    Key: dirFunc(file_path),
  }, (err, data) => {
    if (err) throw err;
    if (data.ContentType == 'application/json') {
      data.Body = JSON.parse(data.Body);
    } else data.Body = data.Body.toString();
    console.log(data);
    workingDir.print();
  });
}
// 
export default cat;
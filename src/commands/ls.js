import { s3, workingDir } from "../s3cl.js";

function ls() {
  s3.listObjectsV2({
    Bucket: workingDir.bucket,
    Prefix: workingDir.path ? workingDir.path + '/' : workingDir.path,
    Delimiter: '/'
  }, (err, data) => {
    if (err) throw err;
    const res = [
      ...data.CommonPrefixes.map(obj => obj.Prefix.slice(0, -1).replace(workingDir.path + '/', '')).filter(s => s != ''),
      ...data.Contents.map(obj => obj.Key.replace(workingDir.path + '/', ''))
    ];
    console.log(res.join('\n'));
    workingDir.print();
  });
}

export default ls;
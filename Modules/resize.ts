import fs from "fs";
import sharp from "sharp";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Resize(path: any, format: any, width: any, height: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const readStream: any = fs.createReadStream(path);
  let transform = sharp();

  if (format) {
    transform = transform.toFormat(format);
  }
  if (width || height) {
    transform = transform.resize(width, height);
  }
 


  return readStream.pipe(transform);
}

export { Resize };

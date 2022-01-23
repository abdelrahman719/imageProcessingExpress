import fs from 'fs';
import sharp from 'sharp';



function Resize(path: any, format: any, width: any, height: any) {
  const readStream: any = fs.createReadStream(path);
  let transform = sharp()

  if (format) {
    transform = transform.toFormat(format)
  }
  if (width || height) {
    transform = transform.resize(width, height)
  }

  return readStream.pipe(transform)
}

export { Resize };
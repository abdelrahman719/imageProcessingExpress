import express from 'express';
const app = express();

import fs from 'fs';
import { Resize } from './Modules/resize'

import sharp from 'sharp';



app.get('/', function (req, res) {
  // Extract the query-parameter
  const widthString: any = req.query.width
  const heightString: any = req.query.height
  const format: any = req.query.format

  // Parse to integer if possible
  let width, height
  if (widthString) {
    width = parseInt(widthString)
  }
  if (heightString) {
    height = parseInt(heightString)
  }

  // Set the content-type of the response
  res.type(`image/${format || 'png'}`)
  Resize('test.JPEG', format, width, height).pipe(res);



})
 // copy this link in the url to can customise the pic
 /* http://localhost:8000/?format=jpeg&width=2000&height=2000 `)*/

app.listen(8000, () => {
  console.log('Server started!')
})


const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
import express from "express";
const app = express();

import { Resize } from "../Modules/resize";

app.get("/", function (req, res) {
  // Extract the query-parameter
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageWidth: any = req.query.width;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageHeight: any = req.query.height;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const format: any = req.query.format;
  // Parse to integer if possible
  let width, height;
  if (imageWidth) {
    width = parseInt(imageWidth);
  }
  if (imageHeight) {
    height = parseInt(imageHeight);
  }

  // Set the content-type of the response
  res.type(`image/${format || "png"}`);
  Resize("test.JPEG", format, width, height).pipe(res);
});
// copy this link in the url to can customise the pic
/* http://localhost:8000/?format=jpeg&width=2000&height=2000 `)*/

app.listen(8000, () => {
  console.log("server is on ... ");
});

export default app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const resize_1 = require("./Modules/resize");
app.get('/', function (req, res) {
    // Extract the query-parameter
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;
    // Parse to integer if possible
    let width, height;
    if (widthString) {
        width = parseInt(widthString);
    }
    if (heightString) {
        height = parseInt(heightString);
    }
    // Set the content-type of the response
    res.type(`image/${format || 'png'}`);
    (0, resize_1.Resize)('test.JPEG', format, width, height).pipe(res);
});
// copy this link in the url to can customise the pic
/* http://localhost:8000/?format=jpeg&width=2000&height=2000 `)*/
app.listen(8000, () => {
    console.log('Server started!');
});
const myFunc = (num) => {
    return num * num;
};
exports.default = myFunc;

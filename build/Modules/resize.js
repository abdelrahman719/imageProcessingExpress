"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resize = void 0;
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
function Resize(path, format, width, height) {
    const readStream = fs_1.default.createReadStream(path);
    let transform = (0, sharp_1.default)();
    if (format) {
        transform = transform.toFormat(format);
    }
    if (width || height) {
        transform = transform.resize(width, height);
    }
    return readStream.pipe(transform);
}
exports.Resize = Resize;

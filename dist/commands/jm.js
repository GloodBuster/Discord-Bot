"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
const jmImages = [
    "jm1.webp",
    "jm2.webp",
    "jm3.webp",
    "jm4.webp",
    "jm5.webp",
    "jm6.webp",
];
class Jm extends commands_1.default {
    constructor() {
        super("jm", "send a jm image");
    }
    action(message) {
        message.channel.send({
            files: [
                {
                    attachment: `src/images/jm/${jmImages[Math.floor(Math.random() * jmImages.length)]}`,
                },
            ],
        });
    }
}
exports.default = Jm;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
class Ascend extends commands_1.default {
    constructor() {
        super("ascend", "send a gif ascending");
    }
    action(message) {
        message.channel.send({
            files: [{ attachment: "src/images/ascend.gif" }],
        });
    }
}
exports.default = Ascend;

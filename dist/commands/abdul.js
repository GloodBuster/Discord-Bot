"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
class Abdul extends commands_1.default {
    constructor() {
        super("abdul", "send an image of rorri abdul");
    }
    action(message) {
        message.channel.send({
            files: [{ attachment: "src/images/rorri_abdul.jpg" }],
        });
    }
}
exports.default = Abdul;

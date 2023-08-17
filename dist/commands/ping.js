"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
class Ping extends commands_1.default {
    constructor() {
        super("ping", "replay pong");
    }
    action(message) {
        message.channel.send("pong! 🥵");
    }
}
exports.default = Ping;

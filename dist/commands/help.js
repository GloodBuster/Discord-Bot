"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
const commands_2 = __importDefault(require("../commands"));
const config_json_1 = require("../config.json");
const getCommands = () => {
    return commands_2.default
        .map((command) => {
        return (config_json_1.prefix + command.getName() + " `" + command.getDescription() + "` ");
    })
        .toString()
        .split(",")
        .join("\n");
};
class Help extends commands_1.default {
    constructor() {
        super("help", "send a message with all actual commands");
    }
    action(message) {
        message.channel.send(`Actual commands: \n ${getCommands()}`);
    }
}
exports.default = Help;

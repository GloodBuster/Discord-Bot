"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../commands"));
const config_json_1 = require("../config.json");
const getCommands = () => {
    return commands_1.default
        .map((command) => {
        return config_json_1.prefix + command.getName();
    })
        .toString()
        .split(",")
        .join("\n");
};
console.log(getCommands());

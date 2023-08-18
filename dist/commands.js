"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abdul_1 = __importDefault(require("./commands/abdul"));
const ascend_1 = __importDefault(require("./commands/ascend"));
const ping_1 = __importDefault(require("./commands/ping"));
const help_1 = __importDefault(require("./commands/help"));
const ping = new ping_1.default();
const abdul = new abdul_1.default();
const ascend = new ascend_1.default();
const help = new help_1.default();
const commands = [ping, abdul, ascend, help];
exports.default = commands;

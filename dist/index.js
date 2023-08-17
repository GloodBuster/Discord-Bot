"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("./utils");
const config_json_1 = require("./config.json");
const commands_1 = __importDefault(require("./commands"));
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.on("ready", () => {
    console.log("Bot is ready!");
});
client.on("messageCreate", (message) => {
    commands_1.default.forEach((command) => {
        if (message.content.startsWith(`${config_json_1.prefix}${command.getName()}`)) {
            command.action(message);
        }
    });
});
client.login(utils_1.bot_token);

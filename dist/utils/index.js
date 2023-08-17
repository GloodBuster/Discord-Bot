"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guild_id = exports.client_id = exports.bot_token = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.bot_token = process.env.BOT_TOKEN;
exports.client_id = process.env.CLIENT_ID;
exports.guild_id = process.env.GUILD_ID;

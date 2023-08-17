import { config } from "dotenv";

config();

export const bot_token = process.env.BOT_TOKEN!;
export const client_id = process.env.CLIENT_ID!;
export const guild_id = process.env.GUILD_ID!;

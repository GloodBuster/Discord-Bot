import {
  Client,
  GatewayIntentBits,
  Message,
} from "discord.js";
import { bot_token } from "./utils";
import { prefix } from "./config.json";
import commands from "./commands";
import Command from "./classes/commands";

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Velma is ready!");
});

client.on("messageCreate", (message: Message) => {
  commands.forEach((command: Command) => {
    if (message.content.startsWith(`${prefix}${command.getName()}`)) {
      command.action(message);
    }
  });
});

client.login(bot_token);

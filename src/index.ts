import { Client, Events, GatewayIntentBits } from "discord.js";
import { bot_token } from "./utils";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(bot_token);

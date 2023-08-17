import { Message } from "discord.js";
import Command from "../classes/commands";

export default class Ping extends Command {
  constructor() {
    super("ping", "replay pong");
  }

  action(message: Message): void {
    message.channel.send("pong! 🥵");
    
  }
}

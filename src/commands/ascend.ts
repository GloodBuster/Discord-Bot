import { Message } from "discord.js";
import Command from "../classes/commands";

export default class Ascend extends Command {
  constructor() {
    super("ascend", "send a gif ascending");
  }

  action(message: Message): void {
    message.channel.send({
      files: [{ attachment: "src/images/ascend.gif" }],
    });
  }
}

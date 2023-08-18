import { Message } from "discord.js";
import Command from "../classes/commands";

export default class Abdul extends Command {
  constructor() {
    super("abdul", "send an image of rorri abdul");
  }

  action(message: Message): void {
    message.channel.send({
      files: [{ attachment: "src/images/rorri_abdul.jpg" }],
    });
  }
}

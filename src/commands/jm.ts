import { Message } from "discord.js";
import Command from "../classes/commands";

const jmImages: String[] = [
  "jm1.webp",
  "jm2.webp",
  "jm3.webp",
  "jm4.webp",
  "jm5.webp",
  "jm6.webp",
];

export default class Jm extends Command {
  constructor() {
    super("jm", "send a jm image");
  }

  action(message: Message): void {
    message.channel.send({
      files: [
        {
          attachment: `src/images/jm/${
            jmImages[Math.floor(Math.random() * jmImages.length)]
          }`,
        },
      ],
    });
  }
}

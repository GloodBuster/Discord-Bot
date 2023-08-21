import { Message } from "discord.js";
import Command from "../classes/commands";
import commands from "../commands";
import { prefix } from "../config.json";

const getCommands = (): string => {
  return commands
    .map((command) => {
      return (
        prefix + command.getName() + " `" + command.getDescription() + "` "
      );
    })
    .toString()
    .split(",")
    .join("\n");
};

export default class Help extends Command {
  constructor() {
    super("help", "send a message with all actual commands");
  }
  action(message: Message): void {
    message.channel.send(`Actual commands: \n ${getCommands()}`);
  }
}

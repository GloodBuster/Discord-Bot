import { Message } from "discord.js";

export default abstract class Command {
  private readonly name: string;
  private readonly description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  abstract action(message: Message): unknown;
}

import Command from "./classes/commands";
import Ping from "./commands/ping";

const ping: Ping = new Ping();

const commands: Command[] = [ping];

export default commands;
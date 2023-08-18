import Command from "./classes/commands";
import Abdul from "./commands/abdul";
import Ascend from "./commands/ascend";
import Ping from "./commands/ping";
import Help from "./commands/help";

const ping: Ping = new Ping();
const abdul: Abdul = new Abdul();
const ascend: Ascend = new Ascend();
const help: Help = new Help();

const commands: Command[] = [ping, abdul, ascend, help];

export default commands;

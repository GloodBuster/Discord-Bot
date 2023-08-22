import Command from "./classes/commands";
import Abdul from "./commands/abdul";
import Ascend from "./commands/ascend";
import Ping from "./commands/ping";
import Help from "./commands/help";
import Pkmn from "./commands/pkmn";
import Summ from "./commands/summ";
import Jm from "./commands/jm";

const ping: Ping = new Ping();
const abdul: Abdul = new Abdul();
const ascend: Ascend = new Ascend();
const help: Help = new Help();
const pkmn: Pkmn = new Pkmn();
const summ: Summ = new Summ();
const jm: Jm = new Jm();

const commands: Command[] = [ping, abdul, ascend, help, pkmn, summ, jm];

export default commands;

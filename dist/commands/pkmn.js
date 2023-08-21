"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../classes/commands"));
const config_json_1 = require("../config.json");
const axios_1 = __importDefault(require("axios"));
const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";
class Pkmn extends commands_1.default {
    constructor() {
        super("pkmn", "search information about pokemon with name or pokedex number");
    }
    action(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (message.content.substring(`${config_json_1.prefix}pkmn`.length)[0] !== " ") {
                message.channel.send("Wrong format, is: `v!pkmn <Pokemon number>`");
            }
            const pokemonNumber = message.content.substring(`${config_json_1.prefix}pkmn`.length + 1);
            try {
                const pokemonInfo = yield axios_1.default.get(pokeApiUrl + pokemonNumber);
                message.channel.send({
                    content: `name: ${pokemonInfo.data.name}\ntype/s: ${pokemonInfo.data.types[0].type.name}${pokemonInfo.data.types[1]
                        ? `, ${pokemonInfo.data.types[1].type.name}`
                        : ""}`,
                    files: [{ attachment: pokemonInfo.data.sprites.front_default }],
                });
            }
            catch (error) {
                console.log(error);
                message.channel.send("Unknown pokemon");
            }
        });
    }
}
exports.default = Pkmn;

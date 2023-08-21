import { Message } from "discord.js";
import Command from "../classes/commands";
import { prefix } from "../config.json";
import axios from "axios";

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

export default class Pkmn extends Command {
  constructor() {
    super(
      "pkmn",
      "search information about pokemon with name or pokedex number"
    );
  }

  async action(message: Message): Promise<void> {
    if (message.content.substring(`${prefix}pkmn`.length)[0] !== " ") {
      message.channel.send("Wrong format, is: `v!pkmn <Pokemon number>`");
    }

    const pokemonNumber: String = message.content.substring(
      `${prefix}pkmn`.length + 1
    );
    try {
      const pokemonInfo: any = await axios.get(pokeApiUrl + pokemonNumber);
      message.channel.send({
        content: `name: ${pokemonInfo.data.name}\ntype/s: ${
          pokemonInfo.data.types[0].type.name
        }${
          pokemonInfo.data.types[1]
            ? `, ${pokemonInfo.data.types[1].type.name}`
            : ""
        }`,
        files: [{ attachment: pokemonInfo.data.sprites.front_default }],
      });
    } catch (error: unknown) {
      console.log(error);
      message.channel.send("Unknown pokemon");
    }
  }
}

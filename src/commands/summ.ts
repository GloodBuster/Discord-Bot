import { Message } from "discord.js";
import Command from "../classes/commands";
import { prefix } from "../config.json";
import axios from "axios";

const riotGamesLolApi = "https://la1.api.riotgames.com/lol/";
const summByHisName = "summoner/v4/summoners/by-name/";
const riotGamesKey = "api_key=RGAPI-85a8e283-72fe-4926-9184-4d3b0b599f31";
const sp = "%20";
const leagueByHisId = "league/v4/entries/by-summoner/";

const removeSpaces = (name: String): String => {
  while (name.includes(" ")) {
    let spaceSpot = name.indexOf(" ");
    name = name.substring(0, spaceSpot) + sp + name.substring(spaceSpot + 1);
  }

  return name;
};

export default class Summ extends Command {
  constructor() {
    super(
      "summ",
      "search information about a league of legends summoner by his name"
    );
  }

  async action(message: Message): Promise<void> {
    if (message.content.substring(`${prefix}summ`.length)[0] !== " ") {
      message.channel.send("Wrong format, is: `v!summ <Summoner's name>`");
    }

    const sumonnerName: String = message.content.substring(
      `${prefix}summ`.length + 1
    );
    try {
      const summonerInfo: any = await axios.get(
        riotGamesLolApi +
          summByHisName +
          removeSpaces(sumonnerName) +
          "?" +
          riotGamesKey
      );
      const leagueSummonerInfo: any = await axios.get(
        riotGamesLolApi +
          leagueByHisId +
          summonerInfo.data.id +
          "?" +
          riotGamesKey
      );

      let soloQInfo = undefined;

      for (let i = 0; i < leagueSummonerInfo.data.length; i++) {
        if (leagueSummonerInfo.data[i].queueType === "RANKED_SOLO_5x5")
          soloQInfo = leagueSummonerInfo.data[i];
      }
      message.channel.send(
        `Name: ${summonerInfo.data.name}\nLevel: ${
          summonerInfo.data.summonerLevel
        }\nSoloQ Information:\nRank: ${
          soloQInfo ? soloQInfo.tier : "Unranked"
        } ${soloQInfo ? soloQInfo.rank : ""}\nWins: ${
          soloQInfo ? soloQInfo.wins : "Unranked"
        }\nLosses: ${soloQInfo ? soloQInfo.losses : "Unranked"}`
      );
    } catch (error: unknown) {
      console.log(error);
      message.channel.send("Summoner not found");
    }
  }
}

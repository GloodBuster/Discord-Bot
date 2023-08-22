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
const riotGamesLolApi = "https://la1.api.riotgames.com/lol/";
const summByHisName = "summoner/v4/summoners/by-name/";
const riotGamesKey = "api_key=RGAPI-85a8e283-72fe-4926-9184-4d3b0b599f31";
const sp = "%20";
const leagueByHisId = "league/v4/entries/by-summoner/";
const removeSpaces = (name) => {
    while (name.includes(" ")) {
        let spaceSpot = name.indexOf(" ");
        name = name.substring(0, spaceSpot) + sp + name.substring(spaceSpot + 1);
    }
    return name;
};
class Summ extends commands_1.default {
    constructor() {
        super("summ", "search information about a league of legends summoner by his name");
    }
    action(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (message.content.substring(`${config_json_1.prefix}summ`.length)[0] !== " ") {
                message.channel.send("Wrong format, is: `v!summ <Summoner's name>`");
            }
            const sumonnerName = message.content.substring(`${config_json_1.prefix}summ`.length + 1);
            try {
                const summonerInfo = yield axios_1.default.get(riotGamesLolApi +
                    summByHisName +
                    removeSpaces(sumonnerName) +
                    "?" +
                    riotGamesKey);
                const leagueSummonerInfo = yield axios_1.default.get(riotGamesLolApi +
                    leagueByHisId +
                    summonerInfo.data.id +
                    "?" +
                    riotGamesKey);
                let soloQInfo = undefined;
                for (let i = 0; i < leagueSummonerInfo.data.length; i++) {
                    if (leagueSummonerInfo.data[i].queueType === "RANKED_SOLO_5x5")
                        soloQInfo = leagueSummonerInfo.data[i];
                }
                message.channel.send(`Name: ${summonerInfo.data.name}\nLevel: ${summonerInfo.data.summonerLevel}\nSoloQ Information:\nRank: ${soloQInfo ? soloQInfo.tier : "Unranked"} ${soloQInfo ? soloQInfo.rank : ""}\nWins: ${soloQInfo ? soloQInfo.wins : "Unranked"}\nLosses: ${soloQInfo ? soloQInfo.losses : "Unranked"}`);
            }
            catch (error) {
                console.log(error);
                message.channel.send("Summoner not found");
            }
        });
    }
}
exports.default = Summ;

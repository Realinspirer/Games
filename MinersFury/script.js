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
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let current_custom_data = yield get_json_normal_random("/JSON_data/Games_games_list/Games_gen.json", "more_games_sec", 3, "Miner's Fury!");
        if ((current_custom_data === null || current_custom_data === void 0 ? void 0 : current_custom_data.toLowerCase()) == "play") {
            document.location.replace("Play");
        }
    });
})();

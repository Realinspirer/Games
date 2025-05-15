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
        var _a;
        let current_custom_data = yield get_json_normal_random("/JSON_data/Games_games_list/Games_gen.json", "more_games_sec", 3, "Miner's Fury!");
        let frame_url = "/Game_builds/Miners_fury/";
        // let query = new URLSearchParams(window.location.search);
        // let req_token = query.get("key");
        // if(!(req_token == "accessid01")){
        if ((current_custom_data === null || current_custom_data === void 0 ? void 0 : current_custom_data.toLowerCase()) != "play") {
            document.location.replace("../");
        }
        // }
        (_a = document.getElementById("play_button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", play_clicked);
        function play_clicked() {
            return __awaiter(this, void 0, void 0, function* () {
                (yield play_game_sc).check_size_and_full_screen();
                let game_div = document.querySelector("#play_game_parent");
                game_div === null || game_div === void 0 ? void 0 : game_div.classList.add("hidden");
                document.getElementById("game_frame").src = frame_url;
            });
        }
    });
})();

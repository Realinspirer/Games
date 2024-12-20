
(async function(){
    let current_custom_data = await get_json_normal_random("/JSON_data/Games_games_list/Games_gen.json", "more_games_sec", 3, "Banana Bounce!");

    let frame_url = "/Game_builds/Banana_bounce/";
    
    let query = new URLSearchParams(window.location.search);
    let req_token = query.get("key");

    if(!(req_token == "accessid01")){
        if (current_custom_data?.toLowerCase() != "play") {
            document.location.replace("../");
        }
    }



    
    document.getElementById("play_button")?.addEventListener("click", play_clicked);
    async function play_clicked() {
        
        (await play_game_sc).check_size_and_full_screen();

        let game_div = document.querySelector("#play_game_parent");
        game_div?.classList.add("hidden");

        (<HTMLIFrameElement>document.getElementById("game_frame")).src = frame_url;
    }

})();
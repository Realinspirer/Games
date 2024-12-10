(async function () {

    let current_custom_data = await get_json_normal_random("/JSON_data/Games_games_list/Games_gen.json", "more_games_sec", 3, "INVERSION 2048");

    if (current_custom_data?.toLowerCase() == "play") {
        document.location.replace("Play");
    }
    
})();
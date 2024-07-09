get_json_normal_random("../Scripts/Games_gen.json", "more_games_sec", 3, 0);


let game_url = "https://html5.gamedistribution.com/427353df07764738958919e5a793f3f0/";
let game_url_new_tab = "https://html5.gamedistribution.com/427353df07764738958919e5a793f3f0/";

// window.onload = run_main_frame;

function run_main_frame(){
    document.getElementById("play_game_parent")!.classList.add("hidden");
    (<HTMLIFrameElement>document.getElementById("game_frame")).src = game_url;
}

function open_in_new_tab(){
    open(game_url_new_tab);
}
const play_game_sc = (async function () {

    "scroll load".split(" ").forEach(x => window.addEventListener(x, set_scroll_data));
    document.getElementById("fullscreen_btn")?.addEventListener("click", () => Toggle_full_screen_mode());
    document.getElementById("full_screen_scroll_down_btn")?.addEventListener("click", scroll_down);

    function set_scroll_data() {
        document.documentElement.dataset.scroll = window.scrollY.toString();
    }
    let fullscreen_width_threshold = 800;

    let is_full_screen = false;

    window.addEventListener("fullscreenchange", check_for_full_screen);

    function check_for_full_screen() {
        console.log(is_full_screen);
        if (!document.fullscreenElement) {
            if (is_full_screen) {
                Toggle_full_screen_mode(false);
            }
        }
    }

    function Toggle_full_screen_mode(do_toggle = true) {
        is_full_screen = !is_full_screen;
        document.body.classList.toggle("fullscreen");

        var text_element = document.getElementById("full_sc_text");

        if (do_toggle) {
            toggle_full_screen();
        }

        if (is_full_screen) {
            // window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth",
            //   });
            document.documentElement.scrollTop = 0;
            text_element!.innerHTML = "Exit full screen mode";
        }
        else {
            text_element!.innerHTML = "Full screen mode";
            check_size_and_reset();
        }
        set_scroll_data();
    }


    function toggle_full_screen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            
        }
        else {
            document.exitFullscreen();
        }
    }

    function scroll_down() {
        window.scrollBy({ top: 500, left: 0, behavior: "smooth" });
    }

    function check_size_and_full_screen() {
        if (window.innerWidth <= fullscreen_width_threshold) {
            if (!is_full_screen) {
                Toggle_full_screen_mode();
            }
        }
    }
    function check_size_and_reset() {
        if (window.innerWidth <= fullscreen_width_threshold) {
            if (!is_full_screen) {
                document.getElementById("play_game_parent")!.classList.remove("hidden");
                (<HTMLIFrameElement>document.getElementById("game_frame")).src = "";
            }
        }
    }
    return{
        check_size_and_full_screen : check_size_and_full_screen
    }

})();
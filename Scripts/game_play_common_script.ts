"scroll load".split(" ").forEach(x => window.addEventListener(x, set_scroll_data));

function set_scroll_data(){
    document.documentElement.dataset.scroll = window.scrollY.toString();
}

let is_full_screen = false;

window.addEventListener("fullscreenchange", check_for_full_screen);

function check_for_full_screen(event:Event){
    if(!document.fullscreenElement){
        if(is_full_screen){
            Toggle_full_screen_mode();
        }
    }
}

function Toggle_full_screen_mode(){
    is_full_screen = !is_full_screen;
    document.body.classList.toggle("fullscreen");

    var text_element = document.getElementById("full_sc_text");

    toggle_full_screen();
    
    if(is_full_screen){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        text_element!.innerHTML = "Exit full screen mode";
    }
    else{
        text_element!.innerHTML = "Full screen mode";
    }
}


function toggle_full_screen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
  else{
    document.exitFullscreen();
  }
}

function scroll_down(){
  window.scrollBy({top:500, left:0, behavior:"smooth"});
}
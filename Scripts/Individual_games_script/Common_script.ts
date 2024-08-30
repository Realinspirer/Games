(function(){
    let sc_parent = document.getElementById("main_scroller_parent");
    if(sc_parent == null) return;
    let sc_main = sc_parent.querySelector(".Features_scroller")!;
    let btn_left = sc_parent.querySelector(".sc_button.left")!;
    let btn_right = sc_parent.querySelector(".sc_button.right")!;

    let scroll_amount = 50 * 0.01 * window.innerWidth;

    btn_right.addEventListener("click", () => sc_main.scrollBy(scroll_amount, 0));
    btn_left.addEventListener("click", () => sc_main.scrollBy(-scroll_amount, 0));
})();
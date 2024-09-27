const shrink_btn =document.querySelector(".shrink_btn");
const search =  document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");


shrink_btn.addEventListener("click", () =>{
    document.body.classList.toggle("shrink");
    setTimeout(moveActiveTab, 400);

    shrink_btn.classList.add("hovered");

    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
    }, 500);
});

search.addEventListener("click", () =>{
    document.body.classList.remove(shrink);
    search.lastElementChild.focus();
});

function moveActiveTab(){
    let topPosition = activeIndex * 58 + 2.5;

    if (activeIndex > 3){
        topPosition += shortcuts.clientHeight;
    }
}
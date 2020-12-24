const btn = document.querySelector(".sharebtn");
const share = document.querySelector("#share");

function clickBtn() {
    if (share.classList.contains("open")) {
        share.classList.add("close");
        share.classList.remove("open")
    
    }
    else {
        share.classList.remove("close")
        share.classList.add("open")
    }
}

shareBtn.addEventListener("click", clickBtn());
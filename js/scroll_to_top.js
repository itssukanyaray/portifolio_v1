let calcScrollValue = () => {

    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollValue);//changing in scale of 100
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";

    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    // scrollProgress.style.background = 'conic-gradient(#ff0000 '+scrollValue+'%, #ffffff '+scrollValue+'%)';
    scrollProgress.style.background = `conic-gradient(#1CA4B0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
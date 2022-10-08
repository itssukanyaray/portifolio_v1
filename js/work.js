// const translate = document.querySelectorAll(".translate");
// const big_title = document.querySelector(".big-title");
// const header = document.querySelector("header");
// const shadow = document.querySelector(".shadow");
// const content = document.querySelector(".content");
// const section = document.querySelector("section");
// const image_container = document.querySelector(".imgContainer");
// const opacity = document.querySelectorAll(".opacity");
// const border = document.querySelector(".border");

// let header_height = header.offsetHeight;
// let section_height = section.offsetHeight;

// window.addEventListener('scroll', () => {
//     let scroll = window.pageYOffset;
//     let sectionY = section.getBoundingClientRect();
    
//     translate.forEach(element => {
//         let speed = element.dataset.speed;
//         element.style.transform = `translateY(${scroll * speed}px)`;
//     });

//     opacity.forEach(element => {
//         element.style.opacity = scroll / (sectionY.top + section_height);
//     })

//     big_title.style.opacity = - scroll / (header_height / 2) + 1;
//     shadow.style.height = `${scroll * 0.5 + 300}px`;

//     content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
//     image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

//     border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
// })


// let listVideo = document.querySelectorAll(".video-list .vid");
// let mainVideo = document.querySelector(".main-video .iframe");
// // let mainVideo = document.querySelector(".main-video .title");

// listVideo.forEach(video => {
// video.onclick = () => {
//     listVideo.forEach(vid => vid.classList.remove("active"));
//     video.classList.add("active");
//     if(video.classList.contains("active")) {
//         let src = video.children[0].getAttribute("src");
//         mainVideo.src=src;
//     }
// }});



// let listVideo = document.querySelectorAll(".container-2 .video-container .vid .video-wrapper iframe");
// document.querySelectorAll(".video-container div").forEach(videoDiv => {

//     videoDiv.onclick = () => {
//         document.querySelector(".popup-video").style.display = "block";
//         document.querySelector(".popup-video .vid .video-wrapper iframe").src = videoDiv.children[0].children[0].getAttribute("src");
//     }
    
    
// });

// document.querySelector(".popup-video span").onclick = () => {
//     document.querySelector(".popup-video").style.display = "none";
// }
// let mainVideo = document.querySelector(".main-video .iframe");
// // let mainVideo = document.querySelector(".main-video .title");
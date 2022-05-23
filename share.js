

// https://www.facebook.com/sharer.php?u=[post-url]

// https://twitter.com/share?url=[post-url]&text=[post-title]


const fbbtn = document.querySelector(".facebook-btn");
const twbtn = document.querySelector(".twitter-btn");
const wabtn = document.querySelector(".whatsapp-btn");

function init() {
    let posturl = encodeURI(document.location.href);
    let posttitle = encodeURI("please check this out!");
    // console.log(posttitle);

    fbbtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${posturl}`
    );
    twbtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${posturl}&text=${posttitle}`
    );
    wabtn.setAttribute(
        "href",
        `https://wa.me/?text=${posttitle} ${posturl}`
    );
}
init();
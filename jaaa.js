// Optional ripple effect

const water = document.querySelector(".water");

setInterval(() => {

    water.style.boxShadow =
        "0 -3px 10px rgba(255,255,255,.7)";

    setTimeout(() => {

        water.style.boxShadow = "none";

    },200);

},1000);
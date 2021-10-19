const navBar = document.querySelector("nav");
const landingPage = document.querySelector("#intro");

console.log(navBar);

const landingPageOptions = {};

const landingPageObserver = new IntersectionObserver(function (
  entries,
  landingPageObserver
) {
  entries.forEach((entry) => {
    console.log(entry.target);
  });
},
landingPageOptions);

landingPageObserver.observe(landingPage);

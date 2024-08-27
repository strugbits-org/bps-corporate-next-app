import { g as gsapWithCSS, e as ScrollSmoother, S as ScrollTrigger, s as screen } from "./all.js";
gsapWithCSS.registerPlugin(ScrollSmoother, ScrollTrigger);
function chat() {
  let chat2 = document.querySelector(".chat");
  let btnChat = document.querySelector(".btn-chat");
  if (!chat2 || !btnChat) return;
  btnChat.addEventListener("click", () => {
    if (chat2.classList.contains("active")) {
      chat2.removeActive();
    } else {
      chat2.addActive();
    }
  });
  if (screen.isSafariDesktop) {
    chat2.classList.add("is-safari");
  }
}
document.querySelector(".activateChat").addEventListener("click", () => {
  chat();
});
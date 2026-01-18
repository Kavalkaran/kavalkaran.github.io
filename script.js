/* AOS */
AOS.init({ once: true, duration: 900 });

/* SMOOTH SCROLL */
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* SCROLL PROGRESS */
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const percent = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById("scroll-progress").style.width = percent + "%";
});

/* PARALLAX */
new Rellax(".rellax");

/* TILT */
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 8,
  speed: 400,
  glare: true,
  "max-glare": 0.15
});

/* PAGE TRANSITIONS */
barba.init({
  transitions: [{
    leave() {
      return gsap.to(".page-transition", { scaleX: 1, duration: .5 });
    },
    enter() {
      gsap.fromTo(".page-transition",
        { scaleX: 1 },
        { scaleX: 0, duration: .5 }
      );
    }
  }]
});

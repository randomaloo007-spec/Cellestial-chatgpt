document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(
    ".spotlight, .portal-card, .species-card, .topic-circle, .quote-section"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.9s ease";
    observer.observe(el);
  });

  const dna = document.querySelector(".dna-hero");
  const jelly = document.querySelector(".floating-jellyfish");

  document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    if(dna){
      dna.style.transform =
      `translate(${x}px, ${y}px)`;
    }

    if(jelly){
      jelly.style.transform =
      `translate(${x * -1.5}px, ${y * -1.5}px)`;
    }

  });

  document.querySelectorAll(".species-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY =
      ((x / rect.width) - 0.5) * 18;

      const rotateX =
      ((y / rect.height) - 0.5) * -18;

      card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

  });

  const particleContainer =
  document.querySelector(".particles");

  if(particleContainer){

    for(let i = 0; i < 60; i++){

      const particle =
      document.createElement("span");

      particle.classList.add("particle");

      particle.style.left =
      Math.random() * 100 + "%";

      particle.style.top =
      Math.random() * 100 + "%";

      particle.style.animationDuration =
      (8 + Math.random() * 12) + "s";

      particle.style.animationDelay =
      Math.random() * 5 + "s";

      particleContainer.appendChild(particle);

    }

  }

  const navbar =
  document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

      navbar.style.boxShadow =
      "0 0 35px rgba(55,255,215,0.18)";

      navbar.style.background =
      "rgba(7,38,44,0.85)";

    }
    else{

      navbar.style.boxShadow = "none";

      navbar.style.background =
      "rgba(255,255,255,0.08)";

    }

  });

});

const style = document.createElement("style");

style.innerHTML = `

.particles{
  position:fixed;
  inset:0;
  pointer-events:none;
  overflow:hidden;
  z-index:-1;
}

.particle{
  position:absolute;
  width:4px;
  height:4px;
  border-radius:50%;
  background:rgba(87,215,255,.8);
  box-shadow:0 0 10px rgba(87,215,255,.8);
  animation:particleFloat linear infinite;
}

@keyframes particleFloat{
  from{
    transform:translateY(0px);
    opacity:.2;
  }

  50%{
    opacity:1;
  }

  to{
    transform:translateY(-150px);
    opacity:0;
  }
}
`;

document.head.appendChild(style);
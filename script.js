document.addEventListener("DOMContentLoaded", () => {

  // Loader
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if(loader){
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }
  }, 1800);

  // Particles
  const particleContainer = document.querySelector(".particles");

  if(particleContainer){

    for(let i=0;i<80;i++){

      const particle = document.createElement("span");

      particle.classList.add("particle");

      particle.style.left = Math.random()*100 + "%";
      particle.style.top = Math.random()*100 + "%";

      particle.style.opacity = Math.random();

      particle.style.animation =
      `floatParticle ${10 + Math.random()*20}s linear infinite`;

      particleContainer.appendChild(particle);
    }
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(
    ".planet,.expedition-card,.species-card,.spotlight-content,.spotlight-image,.section-title"
  );

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";

      }

    });

  },{
    threshold:0.15
  });

  reveals.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .9s ease";

    observer.observe(el);

  });

  // Mouse parallax
  const dna = document.querySelector(".hero-dna");
  const jelly = document.querySelector(".hero-jellyfish");

  document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2 - e.clientX)/40;

    const y =
    (window.innerHeight/2 - e.clientY)/40;

    if(dna){

      dna.style.transform =
      `translate(${x}px,${y}px)`;

    }

    if(jelly){

      jelly.style.transform =
      `translate(${-x}px,${-y}px)`;

    }

  });

  // Navbar effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

      navbar.style.background =
      "rgba(2,17,20,.85)";

      navbar.style.boxShadow =
      "0 0 30px rgba(55,255,215,.15)";

    }
    else{

      navbar.style.background =
      "rgba(255,255,255,.05)";

      navbar.style.boxShadow = "none";

    }

  });

  // 3D card tilt
  document.querySelectorAll(
    ".expedition-card,.species-card"
  ).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const rotateY =
      ((x / rect.width)-0.5)*18;

      const rotateX =
      ((y / rect.height)-0.5)*-18;

      card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

      card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

      e.preventDefault();

      const target =
      document.querySelector(
      this.getAttribute("href"));

      if(target){

        target.scrollIntoView({
          behavior:"smooth"
        });

      }

    });

  });

});

// Dynamic animation styles
const animationStyle =
document.createElement("style");

animationStyle.innerHTML = `

@keyframes floatParticle{

  0%{
    transform: translateY(0px);
    opacity:0;
  }

  30%{
    opacity:.8;
  }

  100%{
    transform: translateY(-250px);
    opacity:0;
  }

}

`;

document.head.appendChild(animationStyle);
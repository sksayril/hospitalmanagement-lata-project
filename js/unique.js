  

    // (function () {
    //   var noop = function noop() {};
    //   if ("performance" in window === false) {
    //     window.performance = {};
    //   }
    //   window.performance.mark = performance.mark || noop;
    //   window.performance.measure = performance.measure || noop;
    //   if ("now" in window.performance === false) {
    //     var nowOffset = Date.now();
    //     if (performance.timing && performance.timing.navigationStart) {
    //       nowOffset = performance.timing.navigationStart;
    //     }
    //     window.performance.now = function now() {
    //       return Date.now() - nowOffset;
    //     };
    //   }
    // })();


    //   (function () {
    //     var now = Date.now()
    //     window.initialTimestamps = {
    //       initialTimestamp: now,
    //       initialRequestTimestamp: Math.round(performance.timeOrigin ? performance.timeOrigin : now - performance.now())
    //     }
  
    //     window.thunderboltTag = "libs-releases-GA-local"
    //     window.thunderboltVersion = "1.15284.0"
    //   })();

    //   window.commonConfig = viewerModel.commonConfig

  

    //   window.commonConfig = viewerModel.commonConfig
  



    //   document.addEventListener("DOMContentLoaded", function(){
    //     const slides = document.querySelectorAll(".text-overlay");
    //     const prevBtn = document.querySelector(".slider-btn.prev");
    //     const nextBtn = document.querySelector(".slider-btn.next");
    //     let currentSlide = 0;
        
    //     // If there is only one slide, hide the buttons
    //     if(slides.length <= 1) {
    //       prevBtn.style.display = "none";
    //       nextBtn.style.display = "none";
    //     }
        
    //     // Function to show slide by index
    //     function showSlide(index) {
    //       slides.forEach((slide, idx) => {
    //         slide.classList.toggle("active", idx === index);
    //       });
    //     }
        
    //     prevBtn.addEventListener("click", () => {
    //       slides[currentSlide].classList.remove("active");
    //       currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //       showSlide(currentSlide);
    //     });
        
    //     nextBtn.addEventListener("click", () => {
    //       slides[currentSlide].classList.remove("active");
    //       currentSlide = (currentSlide + 1) % slides.length;
    //       showSlide(currentSlide);
    //     });
    //   });



    document.addEventListener("DOMContentLoaded", function() {
      const slides = document.querySelectorAll(".text-overlay");
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      let currentSlide = 0;
  
      // Hide buttons if only one slide
      if (slides.length <= 1) {
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
      }
  
      // Function to show slide by index
      function showSlide(index) {
          slides.forEach((slide, idx) => {
              slide.classList.toggle("active", idx === index);
          });
      }
  
      prevBtn.addEventListener("click", () => {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
      });
  
      nextBtn.addEventListener("click", () => {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      });
  
      // Auto-slide every 5 seconds
      setInterval(() => {
          nextBtn.click();
      }, 5000);
  });
  
      
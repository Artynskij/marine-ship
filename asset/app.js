document.addEventListener("DOMContentLoaded", () => {
  // burger ----------------------------------------------------------------------------------------
  const burger = document?.querySelector("[data-burger]");
  const nav = document?.querySelector("[data-nav]");
  const navItems = nav?.querySelectorAll("a");
  const body = document.body;
  const header = document?.querySelector(".header");
  const headerHeight = header.offsetHeight;
  console.log(headerHeight);
  document
    .querySelector(":root")
    .style.setProperty("--header-height", `${headerHeight}px`);

  burger?.addEventListener("click", () => {
    body.classList.toggle("stop-scroll");
    burger?.classList.toggle("burger--active");
    nav?.classList.toggle("nav--visible");
  });

  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      body.classList.remove("stop-scroll");
      burger?.classList.remove("burger--active");
      nav?.classList.remove("nav--visible");
    });
  });

  // sliders ----------------------------------------------------------------------------------------
  const swiperFleet = new Swiper(".swiper-fleet", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-fleet-button-next",
      prevEl: ".swiper-fleet-button-prev",
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  const swiperprojects = new Swiper(".swiper-projects", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-projects-button-next",
      prevEl: ".swiper-projects-button-prev",
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  // clear form ----------------------------------------------------------------------------------------
  const resetForm = () => {
    const resetBut = document.querySelector(".skip-filling");
    if (!resetBut) return;
    const inputs = document
      .querySelector(".contactus-block")
      .querySelectorAll("input");
    const textarea = document
      .querySelector(".contactus-block")
      .querySelector("textarea");
    resetBut.addEventListener("click", () => {
      textarea.value = "";
      textarea.value = "";
      inputs.forEach((item) => {
        item.value = "";
      });
    });
  };
  resetForm();

  // tabs add active ----------------------------------------------------------------------------------------
  const tabs = document.querySelectorAll(".tab-dots");
  tabs?.forEach((item, index) => {
    const dots = item.querySelectorAll(".tab-dot");
    if (index === 0) dots[0].classList.add("active");
    let prevDot = dots[0];
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        prevDot.classList.remove("active");
        dot.classList.add("active");
        prevDot = dot;
      });
    });
  });

  //  horizontal-scroller ----------------------------------------------------------------------------------------

  const scroollBlocks = document.querySelectorAll("#horizontal-scroller");
  window.onload = function () {
    // let scr1 = $("#horizontal-scroller");
    mouseEvent($("#horizontal-scroller"));
    // mouseEvent($("#horizontal-scroller2"));
    // mouseEvent($("#horizontal-scroller3"));
    // mouseEvent($("#horizontal-scroller4"));
    // mouseEvent($("#horizontal-scroller5"));
    // mouseEvent($("#horizontal-scroller6"));
    // scroollBlocks.forEach((scr) => {mouseEvent(scr)});
    function mouseEvent(scr) {
      let currentSrc;

      scr.mousedown(function (e) {
        currentSrc = e.targetEvent;
      });

      scr.mouseup(function (e) {
        if (e.targetEvent !== currentSrc) {
          e.preventDefault ? e.preventDefault() : (e.cancelBubble = true);

          return false;
        }
      });

      scr.mousedown(function () {
        let startX = this.scrollLeft + event.pageX;

        let startY = this.scrollTop + event.pageY;

        scr.mousemove(function () {
          this.scrollLeft = startX - event.pageX;

          this.scrollTop = startY - event.pageY;

          return false;
        });
      });

      $(window).mouseup(function () {
        scr.off("mousemove");
      });
    }
  };

  //  footer-content mob ----------------------------------------------------------------------------------------
  const footer = document.querySelector(".footer");
  // const descBlock = footer.querySelector(".container");
  function mobFooter() {
    if (window.innerWidth < 800) {
      function createDropDownBlock(title, block) {
        const dropdownBlock = document.createElement("div");
        dropdownBlock.classList.add("dropdown");
        const titleNode = document.createElement("div");
        titleNode.classList.add("dropdown-title");
        const blockNode = document.createElement("div");
        blockNode.classList.add("dropdown-block");

        titleNode.innerHTML = `
          <div>${title}</div>
          <img src='./asset/img/icons/footer-arrow.svg'> 
        `;
        blockNode.append(block);

        dropdownBlock.append(titleNode);
        dropdownBlock.append(blockNode);
        const imgArrow = titleNode.querySelector("img");

        titleNode.addEventListener("click", () => {
          if (blockNode.className.includes("active")) {
            imgArrow.style.transform = "rotate(0)";
            blockNode.classList.remove("active");
          } else {
            imgArrow.style.transform = "rotate(90deg)";
            blockNode.classList.add("active");
          }
        });
        return dropdownBlock;
      }
      const containerMob = document.createElement("div");
      containerMob.classList.add("container");
      const mobBlock = document.createElement("div");
      mobBlock.classList.add("footer-content");
      const socialBlock = document.querySelector(".footer-social");
      mobBlock.append(socialBlock);
      mobBlock.append(
        createDropDownBlock(
          "[Contact Information]",
          document.querySelector(".footer-contactinfo")
        )
      );
      mobBlock.append(
        createDropDownBlock(
          "[Company]",
          document.querySelector(".footer-company")
        )
      );
      mobBlock.append(
        createDropDownBlock(
          "[Useful Links]",
          document.querySelector(".footer-links")
        )
      );
      const blockUnderFooter = document.querySelector('.footer-under')
      blockUnderFooter.querySelector('.gotop').innerHTML = 'Move up page'
      containerMob.append(mobBlock);
      containerMob.append(blockUnderFooter);

      footer.innerHTML = " ";
      footer.append(containerMob);
    }
  }
  mobFooter();

  //  goTop ----------------------------------------------------------------------------------------

  const buttonGoTop = document.querySelector(".gotop");
  buttonGoTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

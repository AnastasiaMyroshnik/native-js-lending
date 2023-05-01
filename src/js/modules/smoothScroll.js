const smoothScroll = (trigger, speedNum) => {
  const triggerBtn = document.querySelector(trigger);
  const speed = speedNum;

  triggerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let widthTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);
    let hash = this.hash;
    let target = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;

    const frame = (time) => {
      if (start === null) {
        start = time
      }

      let progress = time - start;
      let r = (target < 0 ? Math.max(widthTop - progress / speed, widthTop + target) : Math.min(widthTop + progress / speed, widthTop + target));

      document.documentElement.scrollTo(0, r);

      if (r != widthTop + target) {
        requestAnimationFrame(frame)
      } else {
        location.hash = hash;
      }
    }

    requestAnimationFrame(frame);
  })
};

export default smoothScroll;
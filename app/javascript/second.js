window.addEventListener('load',() => {
  const image = document.querySelectorAll(".wrapper-image");
  document.addEventListener("scroll",() => {
    for (let i =0; i < image.length; i++) {
      const imageTop = image[i].getBoundingClientRect().top + image[i].clientHeight * .6
      if (window.innerHeight > imageTop) {
        image[i].classList.add("show");
      }
    }
  })
});
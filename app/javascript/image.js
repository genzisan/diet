window.addEventListener('load',() => {
  const image = document.querySelectorAll(".image-one");
  document.addEventListener("scroll",() => {
    for (let i =0; i < image.length; i++) {
      const imageTop = image[i].getBoundingClientRect().top + image[i].clientHeight * .6
      if (window.innerHeight > imageTop) {
        image[i].classList.add("show");
      }
    }
  })
});






window.addEventListener('load',() => {
  const loadButton = document.getElementById("reload")
  loadButton.addEventListener('click',() => {
    window.location.reload();
    console.log("要素の確認")
  })
});
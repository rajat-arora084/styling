const upload = (timer) => {
  const bar = document.querySelector(".bar");
  bar.style.width = "100%";
  bar.style.transition = `${timer}s linear width`;
};

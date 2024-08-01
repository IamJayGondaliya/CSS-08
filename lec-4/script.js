let y = 0;

document.getElementById("up").addEventListener("click", (event) => {
  event.preventDefault();
  y -= 5;
  document.getElementsByTagName("img")[0].style.objectPosition = `0% ${y}%`;
  console.log(y);
});
document.getElementById("dwn").addEventListener("click", (event) => {
  event.preventDefault();
  y += 5;
  document.getElementsByTagName("img")[0].style.objectPosition = `0% ${y}%`;
  console.log(y);
});

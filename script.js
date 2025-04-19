document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("myImage");

  img.style.position = "absolute";
  img.style.left = "100px";
  img.style.top = "100px";

  img.addEventListener("mouseenter", function () {
      const maxX = window.innerWidth - img.offsetWidth;
      const maxY = window.innerHeight - img.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      img.style.left = `${randomX}px`;
      img.style.top = `${randomY}px`;
  });

  img.addEventListener("click", function () {
      window.open("https://www.instagram.com/mostafafarid_05/", "_blank"); 
      

      const congratsMessage = document.createElement("div");
      congratsMessage.textContent = "Congrats! you won my ig";
      congratsMessage.style.position = "fixed";
      congratsMessage.style.top = "50%";
      congratsMessage.style.left = "50%";
      congratsMessage.style.transform = "translate(-50%, -50%)";
      congratsMessage.style.padding = "20px";
      congratsMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      congratsMessage.style.color = "white";
      congratsMessage.style.fontSize = "24px";
      congratsMessage.style.borderRadius = "10px";
      congratsMessage.style.textAlign = "center";
      congratsMessage.style.zIndex = "1000";

      document.body.appendChild(congratsMessage);


  });
});

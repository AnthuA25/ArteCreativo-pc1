document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });


  overlay.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });

  /*Contact*/
  const form = document.getElementById("form-contact");
  const container = document.querySelector('.form');

  const sendForm = (event) =>{
    event.preventDefault();
    const message = document.createElement("div");
    message.innerHTML=`<p>Mensaje enviado con exito</p>`;
    message.style.background = '#d30068';
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.color = "white"
    message.style.marginTop="8px"
    container.appendChild(message);
    document.getElementById("form-contact").reset();
  }

  form.addEventListener("submit", sendForm);

  /* Filters category*/
  const containerProduct = document.querySelector(".filter-prodcuts");
  const filter = document.querySelector()
  


});

document.addEventListener("DOMContentLoaded", () => {
  const COLOR_BOX = document.getElementById("color-box");
  const COLOR_BTN = document.getElementById("change-color-btn");

  function getRandomColor() {
    let random = Math.floor(100000 + Math.random() * 900000);
    COLOR_BOX.style.backgroundColor = `#${random}`;
    console.log(random);
    COLOR_BOX.innerHTML = `
    <div>
        <p class="innerHeading">HEX-CODE</p>
        <p class="innerText">#${random}</p>\
    </div>
    `;

    return random;
  }

  COLOR_BTN.addEventListener("click", getRandomColor);
});

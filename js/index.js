const check = document.getElementById("theme-switcher");
const custom = document.getElementById("body");
const text = document.getElementById("mode");

const change_theme = (value) => {
  if (value) {
    const dark = Array.from(getComputedStyle(custom)).filter((x) =>
      x.startsWith("--dark")
    );

    dark.map((color) => {
      const darkColor = getComputedStyle(custom).getPropertyValue(color);
      const style = color.replace("--dark-", "--");
      custom.style.setProperty(style, darkColor);
      text.innerText = "Dark Mode";
    });
  } else {
    const light = Array.from(getComputedStyle(custom)).filter((x) =>
      x.startsWith("--light")
    );

    light.map((color) => {
      const lightColor = getComputedStyle(custom).getPropertyValue(color);
      const style = color.replace("--light-", "--");
      custom.style.setProperty(style, lightColor);
    });
    text.innerText = "Light Mode";
  }
};

check.addEventListener("change", function () {
  change_theme(this.checked);
});

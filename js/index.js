const check = document.getElementById("theme-switcher");
const custom = document.getElementById("body");

const change_theme = (value) => {
  if (value) {
    const dark = Array.from(getComputedStyle(custom)).filter((x) =>
      x.startsWith("--dark")
    );

    dark.map((color) => {
      const darkColor = getComputedStyle(custom).getPropertyValue(color);
      const style = color.replace("--dark-", "--");
      custom.style.setProperty(style, darkColor);
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
  }
};

check.addEventListener("change", function () {
  change_theme(this.checked);
});

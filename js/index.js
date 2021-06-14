const check = document.getElementById("theme-switcher");
const custom = document.getElementById("body");
const text = document.getElementById("mode");

const dark_theme_colors = {
  "--background-color": "hsl(230, 17%, 14%)",
  "--card-color": "hsl(232, 19%, 15%)",
  "--accent-color-1": "hsl(228, 28%, 20%)",
  "--accent-color": "hsl(228, 34%, 66%)",
  "--primary-color": "hsl(0, 0%, 100%)",
  "--checkbox-background":
    "linear-gradient(to left, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
};

const light_theme_colors = {
  "--background-color": "hsl(0, 0%, 100%)",
  "--card-color": "hsl(225, 100%, 98%)",
  "--accent-color-1": "hsl(227, 47%, 96%)",
  "--accent-color": "hsl(228, 12%, 44%)",
  "--primary-color": "hsl(230, 17%, 14%)",
  "--checkbox-background": "hsl(230, 22%, 74%)",
};

window.onload = function () {
  check.value = false;
};

const change_theme = (obj, t) => {
  const theme_colors = Object.keys(obj);
  theme_colors.map((c) => {
    const themeColor = obj[c];
    custom.style.setProperty(c, themeColor);
    text.innerText = t;
  });
};

const onChange = (value) => {
  value
    ? change_theme(light_theme_colors, "Light Mode")
    : change_theme(dark_theme_colors, "Dark Mode");
};

check.addEventListener("change", function () {
  onChange(this.checked);
});

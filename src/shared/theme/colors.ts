export type ThemeColor = "success" | "primary" | "warning";

export const primary = {
  500: "#EB0237",
  570: "#ca0231",
  600: "#A01131",
  700: "#701328",
};

export const success = {
  500: "#43AD28",
};

export const warning = {
  500: "#EB6402",
};

export const dark = {
  300: "#11161D",
  400: "#101318",
  500: "#0F1318",
  600: "#0D1115",
  700: "#0B0E12",
  800: "#06080C",
};

export const resolveThemeColor = (color?: ThemeColor) => {
  let hexColor: string = primary[500];
  switch (color) {
    case "success":
      hexColor = success[500];
      break;
    case "warning":
      hexColor = warning[500];
      break;
  }
  return hexColor;
};

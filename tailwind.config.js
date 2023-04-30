import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      container: {
        padding: {
          default: "1rem",
          sm: "3rem",
          lg: "5rem",
          xl: "8rem",
        },
      },
    },
  },
};

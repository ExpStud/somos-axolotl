/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        poppins: ["Poppins-Light"],
        "poppins-light": ["Poppins-Light"],
        "poppins-regular": ["Poppins-Regular"],
        "poppins-medium": ["Poppins-Light"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-bold": ["Poppins-Bold"],
      },
      fontWeight: {
        light: 400, //font-helvetica-neue font-light
        medium: 400,
        bold: 700,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        "somos-white": "#FFFCF3",
        "somos-brown": {
          DEFAULT: "#896B56",
          dark: "#41240F",
        },
        "somos-teal": {
          DEFAULT: "#25BDB5",
          300: "#67E1DB",
          400: "#29D1C9",
          450: "#58DCBD",
          600: "#1E9993",
          700: "#1B8883",
          800: "#187772",
        },
        "somos-orange": "#FFB93E",
        "somos-red": "#FE6375",
        "somos-blue": "#2A48AF",
        //template
        "custom-black": "#121212",
      },
      screens: {
        "2xs": "380px",
        xs: "460px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};

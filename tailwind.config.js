/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainColor: "##F4F4F4",
        secondColor: "#0771DE",
        borderColor: "rgba(131, 137, 159, 0.4)",
        textColor: "rgba(28, 28, 40, 1)",
        textSecondColor: "#83899F",
        sky: "#F5FAFF",
        bgGray: "#EDF2EFF1",
      },
      fontSize: {
        header2: "10px",
        subHeader: "7px",
        mainDetails: "11px",
      },
      borderWidth: {
        stander: "0.65px",
        add: "1.5px",
      },
    },
   
  },
  plugins: [],
};

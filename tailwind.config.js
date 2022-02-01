module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.77rem", "150%"],
      sm: ["0.88rem", "130%"],
      base: ["1rem", "150%"],
      "lead-regular": ["1.11rem", "150%"],
      "lead-medium": ["1.11rem", "160%"],
      h5: ["1.11rem", "150%"],
      h4: ["1.33rem", "130%"],
      h3: ["1.55rem", "130%"],
      h2: ["2rem", "130%"],
      h1: ["2.66rem", "130%"],
    },
    colors:{
      white: '#FAE8EB',
      blue: {
        DEFAULT: '#574AE2',
        dark: '#222A68'
      },
      purple: {
        dark: '#654597',
        DEFAULT: '#AB81CD'
      }
    },
    extend: {
      maxWidth: {
        wrapper: '1100px'
      }
    },
  },
  plugins: [],
}

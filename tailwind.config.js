module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner1:
          'linear-gradient(to top,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.2) 100%),url("https://images.unsplash.com/photo-1547059470-3b0c7cd958a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80")',
        banner2:
          'linear-gradient(to top,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.2) 100%),url("https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        banner3:
          'linear-gradient(to top,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.2) 100%),url("https://images.unsplash.com/photo-1544148103-0773bf10d330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

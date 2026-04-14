theme: {
  extend: {
    keyframes: {
      partnersMarquee: {
        from: { transform: "translateX(0)" },
        to:   { transform: "translateX(-50%)" },
      },
    },
    animation: {
      partnersMarquee: "partnersMarquee 30s linear infinite",
    },
  },
},
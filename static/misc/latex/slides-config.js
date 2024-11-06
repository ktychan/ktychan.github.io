// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
  hashOneBasedIndex: true,
  hash: true,
  history: true,
  pause: false,
  transition: "fade",
  transitionSpeed: "fast",
  pdfSeparateFragments: false,

  math: {
    config: "TeX-AMS_HTML-full",
    tex2jax: {
      processEscapes: true,
    },
      TeX: {
      equationNumbers: { autoNumber: "AMS" },
    },
  },
  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [RevealMath, RevealHighlight],
});

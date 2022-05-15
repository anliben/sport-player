module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/game/game/fundo-loja.png')",
        "background-titulo": "url('/assets/game/game/titulo.png')",
        "background-home": "url('/assets/game/game/fundo.png')",
        moeda: "url('/assets/game/game/fundo-loja.png')",
        diamante: "url('/assets/game/game/fundo-loja.png')",
        mesa_part_truco: "url('/assets/game/partidaTruco/mesa-fundo.png')",
        mesa: "url('/assets/game/partidaTruco/mesa-fundo.png')",
        fundo_roleta: 'url("/assets/game/roleta/fundo-roleta.png")',
        mesa_torneio:
          'url("/assets/game/truco8/modalidades/mesa-torneio-fundo.png")',
        mesa_cashgame:
          'url("/assets/game/truco8/modalidades/mesa-cashgame-fundo.png")',
      },
      fontFamily: {
        vag: ["Vag-Round", "sans-serif"],
      },
      colors: {
        primary: "#8b8b5c",
      },
    },
  },
  plugins: [],
};

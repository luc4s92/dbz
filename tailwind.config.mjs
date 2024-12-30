/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dbz: ["dbz", "sans-serif"],
        saiyan: ["saiyan", "sans-serif"],
        dbz2: ["dbz-2-it", "sans-serif"],
      },
      colors: {
        orange: {
          50: "#FFF5E0", // Naranja muy suave, inspirado en tonos de fondo cálidos.
          75: "#FFE8CC", // Naranja pastel suave.
          100: "#FFDAB3", // Naranja claro, como el uniforme de Goku desgastado.
          200: "#FFAB66", // Naranja cálido, clásico del uniforme.
          300: "#FF7A33", // Naranja vibrante, representativo de energía.
        },
        yellow: {
          50: "#FFFBE6", // Amarillo muy claro, como un destello de luz.
          75: "#FFF4CC", // Amarillo suave.
          100: "#FFE680", // Amarillo pálido, similar al cabello de un Super Saiyan débil.
          200: "#FFD933", // Amarillo cálido, representando fuerza.
          300: "#FFC700", // Amarillo intenso, clásico de un Super Saiyan poderoso.
        },
        red: {
          50: "#FFE5E5", // Rojo muy claro, casi rosado.
          75: "#FFC2C2", // Rojo suave.
          100: "#FF8C8C", // Rojo claro, inspirado en la fuerza creciente.
          200: "#FF4D4D", // Rojo cálido, como el aura de un Ki intenso.
          300: "#E60000", // Rojo vibrante, simbolizando el poder máximo.
        },
        blue: {
          50: "#E5F2FF", // Azul muy claro, como un cielo despejado.
          75: "#CCE6FF", // Azul suave.
          100: "#80C1FF", // Azul claro, como el aura de transformación.
          200: "#3399FF", // Azul vibrante, representando el cabello de Super Saiyan Blue.
          300: "#0073E6", // Azul profundo, energía en su máxima expresión.
          400: "#0A58CA",
        },
      },
      animation: {
        aura: "aura 1s infinite",
        electric: "electric 0.5s infinite",
      },
      keyframes: {
        aura: {
          "0%, 100%": { opacity: "0", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        electric: {
          "0%, 100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "0",
          },
          "50%": {
            clipPath: "polygon(10% 20%, 90% 10%, 70% 90%, 20% 80%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

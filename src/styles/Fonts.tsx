import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Miki";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/KontrapunktMiki-Regular.otf") format("opentype");
      }
      @font-face {
        font-family: "Miki";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("/fonts/KontrapunktMiki-Bold.otf") format("opentype");
      }
      @font-face {
        font-family: "Miki";
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url("/fonts/KontrapunktMiki-ExtraBold.otf") format("opentype");
      }
      `}
  />
);

export default Fonts;

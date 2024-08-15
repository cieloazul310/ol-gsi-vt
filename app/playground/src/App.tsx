import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import MapPane from "@/components/map";
import Handler from "@/components/handler";
import { PaletteStoreProvider } from "@/providers/palette-provider";

function App() {
  return (
    <PaletteStoreProvider>
      <div className={flex({ width: "full", height: "full" })}>
        <div
          className={css({
            width: "sidebar",
            height: "full",
            pt: 4,
            bg: "bg.canvas",
            overflowY: "auto",
          })}
        >
          <Handler />
        </div>
        <div className={css({ width: "full", height: "full" })}>
          <MapPane />
        </div>
      </div>
    </PaletteStoreProvider>
  );
}

export default App;

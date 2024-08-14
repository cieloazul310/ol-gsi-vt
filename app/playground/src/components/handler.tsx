import { VStack } from "styled-system/jsx";
import { usePaletteStore } from "@/providers/palette-provider";
import MyColorPicker from "./color-picker";
import { Button } from "./ui/button";

function Handler() {
  const { background, waterarea, setPalette, reset } = usePaletteStore(
    (store) => store,
  );

  return (
    <VStack gap={4}>
      <MyColorPicker
        name="background"
        value={background}
        onValueChange={(details) =>
          setPalette({ background: details.valueAsString })
        }
      />
      <MyColorPicker
        name="waterarea"
        value={waterarea}
        onValueChange={(details) =>
          setPalette({ waterarea: details.valueAsString })
        }
      />
      <Button onClick={reset}>Reset</Button>
    </VStack>
  );
}

export default Handler;

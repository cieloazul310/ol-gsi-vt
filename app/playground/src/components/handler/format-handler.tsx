import { Select, Option, type ColorFormat } from "@yamada-ui/react";
import { usePaletteStore } from "@/providers/palette-provider";

const items: ColorFormat[] = ["hex", "hexa", "hsl", "hsla", "rgb", "rgba"];
function isColorFormat(
  newValue: string | ColorFormat,
): newValue is ColorFormat {
  return items.some((item) => item === newValue);
}

function FormatHandler() {
  const { format, setFormat } = usePaletteStore((store) => store);
  const onChange = (newValue: string) => {
    if (!isColorFormat(newValue)) return;
    setFormat(newValue);
  };

  return (
    <Select value={format} onChange={onChange}>
      {items.map((colorFormat) => (
        <Option key={colorFormat} value={colorFormat}>
          {colorFormat.toUpperCase()}
        </Option>
      ))}
    </Select>
  );
}

export default FormatHandler;

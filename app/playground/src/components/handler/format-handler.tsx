import { Select, type ColorFormat } from "@yamada-ui/react";
import { usePaletteStore } from "@/providers/palette-provider";

const items: ColorFormat[] = ["hex", "hexa", "hsl", "hsla", "rgb", "rgba"];
function isColorFormat(
  newValue: string | ColorFormat,
): newValue is ColorFormat {
  return items.some((item) => item === newValue);
}

export function FormatHandler() {
  const { format, setFormat } = usePaletteStore((store) => store);
  const onChange = (newValue: string) => {
    if (!isColorFormat(newValue)) return;
    setFormat(newValue);
  };

  return (
    <Select.Root value={format} onChange={onChange}>
      {items.map((colorFormat) => (
        <Select.Option key={colorFormat} value={colorFormat}>
          {colorFormat.toUpperCase()}
        </Select.Option>
      ))}
    </Select.Root>
  );
}

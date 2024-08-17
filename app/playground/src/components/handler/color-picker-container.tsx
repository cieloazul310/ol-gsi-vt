"use client";

// import { useState } from "react";
// import { VStack, HStack, AspectRatio } from "@yamada-ui/react";
/*
type ColorPickerContainerProps = MyColorPickerProps & {
  setValue: (newValue: string) => void;
};

function ColorPickerContainer({
  setValue,
  ...props
}: ColorPickerContainerProps) {
  const [history, setHistory] = useState<string[]>(
    props.defaultValue ? [props.defaultValue] : [],
  );

  const onValueChange = (detail: ColorPickerValueChangeDetails) => {
    console.log(props.label, "Value Change");
    props.onValueChange?.(detail);
    setValue(detail.value.toString("hexa"));
  };

  const onValueChangeEnd = (detail: ColorPickerValueChangeDetails) => {
    props.onValueChangeEnd?.(detail);
    setHistory(
      Array.from(new Set([...history, detail.value.toString("hexa")])).slice(
        0,
        4,
      ),
    );
  };
  const onClick = () => {
    if (history.length < 2) return;
    setHistory([...history].slice(0, -1));
    setValue(history[history.length - 1]);
  };

  return (
    <VStack alignItems="start">
      <MyColorPicker
        onValueChange={onValueChange}
        onValueChangeEnd={onValueChangeEnd}
        {...props}
      />
      <HStack alignItems="start" gap={2}>
        {history.map((color) => (
          <AspectRatio
            ratio={1 / 1}
            style={{ background: color }}
            width={4}
            borderWidth="1px"
            rounded="sm"
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default ColorPickerContainer;
*/

"use client";

import { useState } from "react";
import {
  Text,
  VStack,
  HStack,
  Box,
  ColorPicker,
  type ColorPickerProps,
} from "@yamada-ui/react";

type ColorPickerContainerProps = ColorPickerProps & {
  label?: string;
  setValue: (newValue: string) => void;
};

function ColorPickerContainer({
  label,
  setValue,
  ...props
}: ColorPickerContainerProps) {
  const [history, setHistory] = useState<Set<string>>(
    new Set(props.value ? [props.value] : []),
  );

  const onChange = (newValue: string) => {
    props.onChange?.(newValue);
    setValue(newValue);
  };
  const onChangeEnd = (newValue: string) => {
    props.onChangeEnd?.(newValue);
    setHistory(new Set([...history, newValue]));
  };

  const onClick = (color: string) => () => {
    if (history.size < 2) return;
    setValue(color);
  };

  return (
    <VStack gap="xs">
      {label && <Text>{label}</Text>}
      <ColorPicker onChange={onChange} onChangeEnd={onChangeEnd} {...props} />
      <HStack alignItems="start" gap={2}>
        {Array.from(history).map((color) => (
          <Box
            key={color}
            width={4}
            height={4}
            bg={color}
            shadow="sm"
            borderColor="gray.200"
            borderWidth={color === props.value ? "2px" : "1px"}
            rounded="sm"
            onClick={onClick(color)}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default ColorPickerContainer;

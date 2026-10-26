import { useState } from "react";
import {
  Text,
  VStack,
  HStack,
  ColorPicker,
  IconButton,
  PinIcon,
  styled,
  type ColorPickerProps,
} from "@yamada-ui/react";

type ColorPickerContainerProps = ColorPickerProps & {
  label?: string;
  setValue: (newValue: string) => void;
};

export function ColorPickerContainer({
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
  const onButtonClick = () => {
    if (!props.value) return;
    setHistory(new Set([props.value, ...history].slice(0, 10)));
  };

  const onClick = (color: string) => () => {
    setValue(color);
    history.delete(color);
    setHistory(new Set([color, ...history].slice(0, 10)));
  };

  return (
    <VStack gap="xs">
      {label && <Text>{label}</Text>}
      <HStack gap={2}>
        <ColorPicker onChange={onChange} {...props} />
        <IconButton
          variant="subtle"
          icon={<PinIcon />}
          onClick={onButtonClick}
        />
      </HStack>
      <HStack alignItems="start" gap={2}>
        {Array.from(history).map((color) => (
          <styled.button
            key={color}
            width={4}
            height={4}
            bg={color}
            shadow="sm"
            borderColor={color === props.value ? "gray.400" : "gray.200"}
            borderWidth={color === props.value ? "2px" : "1px"}
            rounded="sm"
            cursor="pointer"
            onClick={onClick(color)}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default ColorPickerContainer;

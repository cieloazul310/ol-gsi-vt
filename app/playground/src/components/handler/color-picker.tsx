"use client";

// import { PipetteIcon } from "lucide-react";
import { square } from "styled-system/patterns";
import { HStack, Stack } from "styled-system/jsx";
import { ColorPicker } from "@/components/ui/color-picker";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { usePaletteStore } from "@/providers/palette-provider";

type MyColorPickerProps = ColorPicker.RootProps & {
  label?: string;
};

const MyColorPicker = ({
  label = "Color Picker",
  ...props
}: MyColorPickerProps) => {
  const { savedColors, addSavedColors } = usePaletteStore((store) => store);

  return (
    <ColorPicker.Root {...props}>
      <ColorPicker.Context>
        {(api) => (
          <>
            <ColorPicker.Label>{label}</ColorPicker.Label>
            <ColorPicker.Control>
              <ColorPicker.ChannelInput channel="hex" asChild>
                <Input />
              </ColorPicker.ChannelInput>
              <ColorPicker.Trigger asChild>
                <IconButton variant="outline">
                  <ColorPicker.Swatch value={api.value} />
                </IconButton>
              </ColorPicker.Trigger>
            </ColorPicker.Control>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <Stack gap="3">
                  <ColorPicker.Area>
                    <ColorPicker.AreaBackground />
                    <ColorPicker.AreaThumb />
                  </ColorPicker.Area>
                  <HStack gap="3">
                    <ColorPicker.EyeDropperTrigger asChild>
                      <IconButton
                        size="xs"
                        variant="outline"
                        aria-label="Pick a color"
                      >
                        {/* <PipetteIcon /> */}
                      </IconButton>
                    </ColorPicker.EyeDropperTrigger>
                    <Stack gap="2" flex="1">
                      <ColorPicker.ChannelSlider channel="hue">
                        <ColorPicker.ChannelSliderTrack />
                        <ColorPicker.ChannelSliderThumb />
                      </ColorPicker.ChannelSlider>
                      <ColorPicker.ChannelSlider channel="alpha">
                        <ColorPicker.TransparencyGrid size="8px" />
                        <ColorPicker.ChannelSliderTrack />
                        <ColorPicker.ChannelSliderThumb />
                      </ColorPicker.ChannelSlider>
                    </Stack>
                  </HStack>
                  <HStack>
                    <ColorPicker.ChannelInput channel="hex" asChild>
                      <Input size="2xs" />
                    </ColorPicker.ChannelInput>
                    <ColorPicker.ChannelInput channel="alpha" asChild>
                      <Input size="2xs" />
                    </ColorPicker.ChannelInput>
                  </HStack>
                  <Stack gap="1.5">
                    <Text size="xs" fontWeight="medium" color="fg.default">
                      Saved Colors
                    </Text>
                    <ColorPicker.SwatchGroup>
                      <button
                        className={square({
                          rounded: "sm",
                          borderWidth: "1px",
                          width: 6,
                          height: 6,
                        })}
                        onClick={() => {
                          addSavedColors(api.valueAsString);
                        }}
                      >
                        +
                      </button>
                      {savedColors.map((color, id) => (
                        <ColorPicker.SwatchTrigger key={id} value={color}>
                          <ColorPicker.Swatch value={color} />
                        </ColorPicker.SwatchTrigger>
                      ))}
                    </ColorPicker.SwatchGroup>
                  </Stack>
                </Stack>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </>
        )}
      </ColorPicker.Context>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};

export default MyColorPicker;

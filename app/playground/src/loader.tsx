import { Flex, VStack, Text, CircleProgress } from "@yamada-ui/react";

export function Loader() {
  return (
    <Flex
      width="full"
      height="full"
      alignItems="center"
      justifyContent="center"
    >
      <VStack gap="md" alignItems="center" pb={24}>
        <Text fontSize="2xl" fontWeight="bold">
          ol-gsi-vt Composer
        </Text>
        <CircleProgress.Root color="primary" value={null}>
          <CircleProgress.Label />
        </CircleProgress.Root>
      </VStack>
    </Flex>
  );
}

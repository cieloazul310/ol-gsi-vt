import * as React from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { layers, type Layer } from './layers';

type LayoutProps = {
  children: React.ReactNode;
  layerState: [
    Layer,
    React.Dispatch<React.SetStateAction<Layer>>
  ];
};

function Layout({ children, layerState }: LayoutProps) {
  const [currentLayer, setLayer] = layerState;
  const onClick = (id: Layer) => () => {
    setLayer(id);
  }
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      paddingTop={['unset', '56px']}
      paddingBottom={['56px', 'unset']}
    >
      <Box
        px={2}
        display="flex"
        overflowX="auto"
        position="fixed"
        top={['unset', 0]}
        bottom={[0, 'unset']}
        left="0"
        width="100%"
        height="56px"
        alignItems="center"
        zIndex="10"
      >
        <ButtonGroup gap="2" colorScheme="green" size="sm" variant="ghost">
          {layers.map(({ id, title }) => (
            <Button
              key={id}
              isActive={id === currentLayer}
              onClick={onClick(id)}
            >
              {title}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      {children}
    </Box>
  );
}

export default Layout;
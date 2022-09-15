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
  /*
  const onChange = (index: number) => {
    setLayer(layers[index].id);
  }
  */
  const onClick = (id: Layer) => () => {
    setLayer(id);
  }
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection={['column-reverse', 'column']}
    >
      <Box p={2} overflowX="auto">
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
      {/*
      <Tabs colorScheme="green" p={2} onChange={onChange}>
        <TabList>
          <Tab isSelected={layer === 'vt'} fontSize="sm">
            ベクトルタイル
          </Tab>
          <Tab isSelected={layer === 'opt-vt'} fontSize="sm">
            最適化ベクトルタイル
          </Tab>
          <Tab isSelected={layer === 'cjstd'} fontSize="sm">
            地理院タイル
          </Tab>
        </TabList>
      </Tabs>
      */}
      {children}
    </Box>
  );
}

export default Layout;
import * as React from 'react';
import Head from 'next/head';
import { Heading, Text, Box } from '@chakra-ui/react';
import MapContainer from '../map/MapContainer';

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box py={6} width="100%" height="60vh" display="flex">
        <MapContainer />
      </Box>
      <Heading as="h1" size="lg" py={6}>
        @cieloazul310/ol-gsi-vt
      </Heading>
      <Text py={6}>
        <strong>@cieloazul310/ol-gsi-vt</strong>{' '}
        は、国土地理院が提供するベクトルタイルを OpenLayers
        で設定不要で手軽に表示するためのパッケージです。ベクトルタイル、最適化ベクトルタイルのそれぞれに通常、淡色の2種類ずつ、計4種類のプリセットレイヤを搭載しています。
      </Text>
    </>
  );
}

export default Home;
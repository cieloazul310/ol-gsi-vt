import * as React from 'react';
import Head from 'next/head';

type MetaProps = React.PropsWithChildren<{
  title?: string;
  description?: string;
}>;

function Meta({ title, description, children }: MetaProps) {
  const siteTitle = 'ol-gsi-vt Map Gallery';
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription =
    '国土地理院が提供するベクトルタイルをOpenLayersで手軽に表示するためのパッケージ @cieloazul310/ol-gsi-vt のギャラリーページ。';
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description ?? siteDescription} />
      <meta name="og:description" content={description ?? siteDescription} />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}

export default Meta;

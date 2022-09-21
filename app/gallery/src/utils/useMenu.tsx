import * as React from 'react';
import { useRouter } from 'next/router';

const menu = [
  {
    id: 'id',
    title: 'メニュー',
    pages: [
      { path: '/', title: 'トップページ' },
      { path: '/with-mdx', title: 'MDX Example' },
    ],
  },
  {
    id: 'basic',
    title: '基本的なレイヤー',
    pages: [
      { path: '/basic/gsiOptVt', title: '最適化ベクトルタイル' },
      { path: '/basic/gsiVt', title: 'ベクトルタイル' },
      { path: '/basic/gsiOptVtPale', title: '最適化ベクトルタイル(淡色)' },
      { path: '/basic/gsiVtPale', title: 'ベクトルタイル(淡色)' },
    ],
  },
  {
    id: 'advanced',
    title: '発展',
    pages: [
      { path: '/advanced/without-anno', title: '注記なし' },
      { path: '/advanced/stamen', title: 'Stamen Toner風' },
      { path: '/advanced/with-relief', title: '色別標高図 + 注記' },
    ],
  },
];

function useMenu() {
  const { asPath } = useRouter();
  return React.useMemo(
    () =>
      menu.map(({ pages, ...menu }) => ({
        ...menu,
        pages: pages.map(({ path, ...pageMenu }) => ({
          ...pageMenu,
          path,
          active: asPath === path,
        })),
      })),
    [asPath]
  );
}

export default useMenu;

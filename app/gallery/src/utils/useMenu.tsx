import * as React from 'react';
import { useRouter } from 'next/router';

const menu = [
  { path: '/', label: 'トップページ' },
  { path: '/with-mdx', label: 'MDX Example' },
];

function useMenu() {
  const { asPath } = useRouter();
  return React.useMemo(
    () =>
      menu.map(({ path, ...menu }) => ({
        ...menu,
        path,
        active: asPath === path,
      })),
    [asPath]
  );
}

export default useMenu;

import * as React from "react";
import { useRouter } from "next/router";

const menu = [
  {
    id: "id",
    title: "メニュー",
    pages: [{ path: "/", title: "トップページ" }],
  },
  {
    id: "basic",
    title: "基本的なレイヤー",
    pages: [
      { path: "/basic/gsiOptVt", title: "最適化ベクトルタイル" },
      { path: "/basic/gsiVt", title: "ベクトルタイル" },
      { path: "/basic/gsiOptVtPale", title: "最適化ベクトルタイル(淡色)" },
      { path: "/basic/gsiVtPale", title: "ベクトルタイル(淡色)" },
    ],
  },
  {
    id: "advanced",
    title: "発展",
    pages: [
      { path: "/advanced/without-anno", title: "注記なし" },
      { path: "/advanced/terrain", title: "等高線+水域" },
      { path: "/advanced/palette", title: "パレットによる調製" },
      { path: "/advanced/stamen", title: "Stamen Toner風" },
      { path: "/advanced/with-relief", title: "色別標高図 + 注記" },
      { path: "/advanced/stamen-highway", title: "Stamen風 高速道路強調" },
    ],
  },
  {
    id: "api",
    title: "APIリファレンス",
    pages: [
      { path: "/api-doc", title: "API" },
      { path: "/api-doc/ol-gsi-vt", title: "ol-gsi-vt API" },
      { path: "/api-doc/ol-gsi-vt-style", title: "ol-gsi-vt-style API" },
      {
        path: "/api-doc/ol-gsi-vt-style-utils",
        title: "ol-gsi-vt-style-utils API",
      },
    ],
  },
];

function useMenu() {
  const { asPath } = useRouter();
  return React.useMemo(
    () =>
      menu.map(({ pages, ...menuProps }) => ({
        ...menuProps,
        pages: pages.map(({ path, ...pageMenu }) => ({
          ...pageMenu,
          path,
          active: asPath === path,
        })),
      })),
    [asPath],
  );
}

export default useMenu;

export function useNeighborPages() {
  const menuWithStatus = useMenu().reduce<
    { path: string; title: string; active: boolean }[]
  >((accum, curr) => [...accum, ...curr.pages.map((page) => page)], []);
  const index = menuWithStatus.findIndex(({ active }) => active);

  return {
    previous: index === 0 ? null : menuWithStatus[index - 1],
    next:
      index === menuWithStatus.length - 1 ? null : menuWithStatus[index + 1],
  };
}

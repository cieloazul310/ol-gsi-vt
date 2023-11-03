import {
  defineSiteMetadata,
  defineMenu,
} from "@cieloazul310/astro-sarkara-utils";

export const siteMetadata = defineSiteMetadata({
  title: "ol-gsi-vt",
  description:
    "国土地理院のベクトルタイルをOpenLayersで簡易に表示するためのパッケージ",
});
export const menu = defineMenu([{ title: "Top", href: "/" }]);
export const pageSize = 25;

import { isAnnoCode } from "./utils";

/** 建物・施設などの地物コード
 * - `511`: 構造物名称（高塔、煙突等）
 * - `522`: 堰
 * - `523`: 河川・海岸施設（水門、堤防）
 * - `613`: 矯正施設（刑務所、少年院等）
 * - `615`: 自衛隊・米軍
 * - `651`: 水族館・動植物園
 * - `653`: 発電所
 * - `661`: 神社
 * - `662`: 寺院
 * - `671`: 商業施設
 * - `673`: 文教施設
 * - `681`: その他の主要・著名な建物
 * - `720`: 鉱山の鉱種名
 * - `831`: 温泉、泉、噴気口
 * - `882`: 保健所
 * - `883`: 警察
 * - `884`: 消防
 * - `886`: 病院
 * - `887`: 郵便局
 * - `889`: 博物館
 * - `890`: 老人ホーム
 * - `899`: その他
 * - `3211`: 交番
 * - `3215`: 老人ホーム
 * - `3216`: 博物館法の登録博物館・博物館相当施設
 * - `3217`: 図書館
 * - `3218`: 郵便局
 * - `3221`: 灯台
 * - `3231`: 神社 通常の神社
 * - `3232`: 寺院 通常の寺院
 * - `3241`: 警察署
 * - `3242`: 消防署
 * - `3243`: 病院
 * - `3244`: 保健所
 * - `3261`: 工場
 * - `4101`: 煙突
 * - `4102`: 風車
 * - `4103`: 油井・ガス井
 * - `4104`: 記念碑
 * - `4105`: 自然災害伝承碑
 * - `5801`: 滝（領域）
 * - `6301`: 墓地
 * - `6331`: 温泉
 * - `6332`: 噴火口・噴気口
 * - `6341`: 史跡・名勝・天然記念物
 * - `6342`: 城跡
 * - `6351`: 採鉱地
 * - `6381`: 自衛隊
 * - `7601`: 砂礫地（領域が不明瞭な場合）
 * - `7621`: 雨裂（下部）
 * - `8103`: 発電所等
 * - `8105`: 電波塔
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeSpot =
  | 511
  | 522
  | 523
  | 613
  | 615
  | 651
  | 653
  | 661
  | 662
  | 671
  | 673
  | 681
  | 720
  | 831
  | 882
  | 883
  | 884
  | 886
  | 887
  | 889
  | 890
  | 899
  | 3211
  | 3215
  | 3216
  | 3217
  | 3218
  | 3221
  | 3231
  | 3232
  | 3241
  | 3242
  | 3243
  | 3244
  | 3261
  | 4101
  | 4102
  | 4103
  | 4104
  | 4105
  | 5801
  | 6301
  | 6331
  | 6332
  | 6341
  | 6342
  | 6351
  | 6381
  | 7601
  | 7621
  | 8103
  | 8105;

export const annoCodeSpot: AnnoCodeSpot[] = [
  511, 522, 523, 613, 615, 651, 653, 661, 662, 671, 673, 681, 720, 831, 882,
  883, 884, 886, 887, 889, 890, 899, 3211, 3215, 3216, 3217, 3218, 3221, 3231,
  3232, 3241, 3242, 3243, 3244, 3261, 4101, 4102, 4103, 4104, 4105, 5801, 6301,
  6331, 6332, 6341, 6342, 6351, 6381, 7601, 7621, 8103, 8105,
];
export const annoIsSpot = isAnnoCode<AnnoCodeSpot>(annoCodeSpot);

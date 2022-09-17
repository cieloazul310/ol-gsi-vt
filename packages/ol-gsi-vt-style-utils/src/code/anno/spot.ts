import { isAnnoCode } from './utils';

/** 建物・施設などの地物コード
 * - `441`: 空港名
 * - `511`: 構造物名称（高塔、煙突等）
 * - `522`: 堰
 * - `523`: 河川・海岸施設（水門、堤防）
 * - `531`: 土地利用名（演習場、ゴルフ場、遊園地、建設予定地等）
 * - `533`: 漁港
 * - `611`: 合同庁舎
 * - `612`: 国の機関（合同庁舎、矯正施設及び自衛隊を除く）
 * - `613`: 矯正施設（刑務所、少年院等）
 * - `615`: 自衛隊・米軍
 * - `621`: 都道府県庁、北海道の総合振興局・振興局、支庁
 * - `651`: 水族館・動植物園
 * - `653`: 発電所
 * - `661`: 神社
 * - `662`: 寺院
 * - `671`: 商業施設
 * - `673`: 文教施設
 * - `681`: その他の主要・著名な建物
 * - `720`: 鉱山の鉱種名
 * - `831`: 温泉、泉、噴気口
 * - `880`: 国の機関
 * - `881`: 地方の機関
 * - `882`: 保健所
 * - `883`: 警察
 * - `884`: 消防
 * - `886`: 病院
 * - `887`: 郵便局
 * - `888`: 指定公共機関
 * - `889`: 博物館
 * - `890`: 老人ホーム
 * - `899`: その他
 * - `3201`: 官公署
 * - `3202`: 裁判所
 * - `3203`: 税務署
 * - `3204`: 外国公館
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
 * - `6361`: 港湾
 * - `6362`: 漁港
 * - `6367`: 特定重要港
 * - `6368`: 主要な港
 * - `6368`: 重要港
 * - `6371`: 空港
 * - `6373`: 自衛隊等の飛行場
 * - `6375`: 国際空港
 * - `6376`: 主要な空港
 * - `6376`: 国際空港以外の拠点空港等
 * - `6381`: 自衛隊
 * - `7601`: 砂礫地（領域が不明瞭な場合）
 * - `7621`: 雨裂（下部）
 * - `8103`: 発電所等
 * - `8105`: 電波塔
 */
export type AnnoCodeSpot =
  | 441
  | 511
  | 522
  | 523
  | 531
  | 532
  | 533
  | 611
  | 612
  | 613
  | 615
  | 621
  | 631
  | 632
  | 633
  | 634
  | 651
  | 653
  | 661
  | 662
  | 671
  | 673
  | 681
  | 720
  | 831
  | 880
  | 881
  | 882
  | 883
  | 884
  | 885
  | 886
  | 887
  | 888
  | 889
  | 890
  | 899
  | 3201
  | 3202
  | 3203
  | 3204
  | 3205
  | 3206
  | 3211
  | 3212
  | 3213
  | 3214
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
  | 6361
  | 6362
  | 6367
  | 6368
  | 6368
  | 6371
  | 6373
  | 6375
  | 6376
  | 6376
  | 6381
  | 7601
  | 7621
  | 8103
  | 8105;

export const annoCodeSpot: AnnoCodeSpot[] = [
  441, 511, 522, 523, 531, 532, 533, 611, 612, 613, 615, 621, 631, 632, 633,
  634, 651, 653, 661, 662, 671, 673, 681, 720, 831, 880, 881, 882, 883, 884,
  885, 886, 887, 888, 889, 890, 899, 3201, 3202, 3203, 3204, 3205, 3206, 3211,
  3212, 3213, 3214, 3215, 3216, 3217, 3218, 3221, 3231, 3232, 3241, 3242, 3243,
  3244, 3261, 4101, 4102, 4103, 4104, 4105, 5801, 6301, 6331, 6332, 6341, 6342,
  6351, 6361, 6362, 6367, 6368, 6368, 6371, 6373, 6375, 6376, 6376, 6381, 7601,
  7621, 8103, 8105,
];
export const annoIsSpot = isAnnoCode<AnnoCodeSpot>(annoCodeSpot);
const planeDeparture = '\uf5b0';
const anchor = '\uf13d';
const toriiGate = '\uf6a1';
const placeOfWorship = '\uf67f';
const landmark = '\uf66f';
const personMilitaryPointing = '\ue54a';
const school = '\uf549';
const graduationCap = '\uf19d';
const hospital = '\uf0f8';
const towerObservation = '\ue586';
const industry = '\uf275';
const warehouse = '\uf494';
const vihara = '\uf6a7';
const locationDot = '\uf3c5';
const houseChimneyWindow = '\ue00d';
const city = '\uf64f';
const building = '\uf1ad';

export const spotToIcon: { [key: number]: string } = {
  /** 空港名 */
  [411]: planeDeparture,
  /** 史跡名勝天然記念物 */
  [532]: locationDot,
  /** 漁港 */
  [533]: anchor,
  /** 合同庁舎 */
  [611]: city,
  /** 国の機関（合同庁舎・矯正施設及び自衛隊を除く） */
  [612]: city,
  /** 都道府県庁、北海道の総合振興局・振興局、支庁 */
  [621]: city,
  /** 大学・大学院 */
  [631]: graduationCap,
  /** 短期大学 */
  [632]: graduationCap,
  /** 高等専門学校 */
  [633]: school,
  /** 特殊学校 */
  [634]: school,
  /** 水族館・動植物園 */
  [651]: landmark,
  /** 発電所 */
  [653]: industry,
  /** 神社 */
  [661]: toriiGate,
  /** 寺院 */
  [662]: placeOfWorship,
  /** 商業施設 */
  [671]: locationDot,
  /** 文教施設 */
  [673]: landmark,
  /** その他の主要・著名な建物 */
  [681]: warehouse,
  /** 温泉、泉、噴気口 */
  [831]: locationDot,
  /** 国の機関 */
  [880]: city,
  /** 地方の機関 */
  [881]: city,
  /** 保健所 */
  [882]: hospital,
  /** 警察 */
  [883]: personMilitaryPointing,
  /** 消防 */
  [884]: towerObservation,
  /** 学校 */
  [885]: school,
  /** 病院 */
  [886]: hospital,
  /** 郵便局 */
  [887]: building,
  /** 指定公共機関 */
  [888]: city,
  /** 博物館 */
  [889]: landmark,
  /** 老人ホーム */
  [890]: houseChimneyWindow,
  /** 官公署 */
  [3201]: city,
  /** 裁判所 */
  [3202]: city,
  /** 税務署 */
  [3203]: city,
  /** 外国公館 */
  [3204]: city,
  /** 市役所・東京都の区役所 */
  [3205]: city,
  /** 町村役場・政令指定都市の区役所 */
  [3206]: city,
  /** 交番 */
  [3211]: personMilitaryPointing,
  /** 学校 高等学校・中等教育学校 */
  [3212]: school,
  /** 学校 中学校 */
  [3213]: school,
  /** 学校 小学校 */
  [3214]: school,
  /** 老人ホーム */
  [3215]: houseChimneyWindow,
  /** 博物館法の登録博物館・博物館相当施設 */
  [3216]: landmark,
  /** 図書館 */
  [3217]: landmark,
  /** 郵便局 */
  [3218]: building,
  /** 神社 通常の神社 */
  [3231]: toriiGate,
  /** 寺院 通常の寺院 */
  [3232]: placeOfWorship,
  /** 病院 */
  [3241]: personMilitaryPointing,
  /** 消防署 */
  [3242]: towerObservation,
  /** 保健所 */
  [3243]: hospital,
  /** 保健所 */
  [3244]: hospital,
  /** 工場 */
  [3261]: industry,
  /** 温泉 */
  [6331]: locationDot,
  /** 史跡・名勝・天然記念物 */
  [6341]: locationDot,
  /** 城跡 */
  [6342]: vihara,
  /** 港湾 */
  [6361]: anchor,
  /** 漁港 */
  [6362]: anchor,
  /** 特定重要港 */
  [6367]: anchor,
  /** 主要な港 */
  [6368]: anchor,
  /** 空港 */
  [6371]: planeDeparture,
  /** 自衛隊等の飛行場 */
  [6373]: planeDeparture,
  /** 発電所等 */
  [8103]: industry,
  /** 国際空港 */
  [6375]: planeDeparture,
  /** 主要な空港 */
  [6376]: planeDeparture,
  /** 主要な港 */
  [56368]: anchor,
  /** 主要な空港 */
  [56376]: planeDeparture,
};

import {
  faPlaneDeparture,
  faAnchor,
  faToriiGate,
  faLandmark,
  faPersonMilitaryPointing,
  faSchool,
  faGraduationCap,
  faHospital,
  faTowerObservation,
  faIndustry,
  faWarehouse,
  faVihara,
  faLocationDot,
  faHouseChimneyWindow,
  faCity,
  faBuilding,
  faBookOpen,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const planeDeparture = faPlaneDeparture;
const anchor = faAnchor;
const toriiGate = faToriiGate;
const landmark = faLandmark;
const personMilitaryPointing = faPersonMilitaryPointing;
const school = faSchool;
const graduationCap = faGraduationCap;
const hospital = faHospital;
const towerObservation = faTowerObservation;
const industry = faIndustry;
const warehouse = faWarehouse;
const vihara = faVihara;
const locationDot = faLocationDot;
const houseChimneyWindow = faHouseChimneyWindow;
const city = faCity;
const building = faBuilding;
const bookOpen = faBookOpen;

export const spotToIcon: { [key: number]: IconDefinition } = {
  /** 空港名 */
  411: planeDeparture,
  /** 史跡名勝天然記念物 */
  532: locationDot,
  /** 漁港 */
  533: anchor,
  /** 合同庁舎 */
  611: city,
  /** 国の機関（合同庁舎・矯正施設及び自衛隊を除く） */
  612: city,
  /** 都道府県庁、北海道の総合振興局・振興局、支庁 */
  621: city,
  /** 大学・大学院 */
  631: graduationCap,
  /** 短期大学 */
  632: graduationCap,
  /** 高等専門学校 */
  633: school,
  /** 特殊学校 */
  634: school,
  /** 水族館・動植物園 */
  651: landmark,
  /** 発電所 */
  653: industry,
  /** 神社 */
  661: toriiGate,
  /** 商業施設 */
  671: locationDot,
  /** 文教施設 */
  673: landmark,
  /** その他の主要・著名な建物 */
  681: warehouse,
  /** 温泉、泉、噴気口 */
  831: locationDot,
  /** 国の機関 */
  880: city,
  /** 地方の機関 */
  881: city,
  /** 保健所 */
  882: hospital,
  /** 警察 */
  883: personMilitaryPointing,
  /** 消防 */
  884: towerObservation,
  /** 学校 */
  885: school,
  /** 病院 */
  886: hospital,
  /** 郵便局 */
  887: building,
  /** 指定公共機関 */
  888: city,
  /** 博物館 */
  889: landmark,
  /** 老人ホーム */
  890: houseChimneyWindow,
  /** 官公署 */
  3201: city,
  /** 裁判所 */
  3202: city,
  /** 税務署 */
  3203: city,
  /** 外国公館 */
  3204: city,
  /** 市役所・東京都の区役所 */
  3205: city,
  /** 町村役場・政令指定都市の区役所 */
  3206: city,
  /** 交番 */
  3211: personMilitaryPointing,
  /** 学校 高等学校・中等教育学校 */
  3212: school,
  /** 学校 中学校 */
  3213: school,
  /** 学校 小学校 */
  3214: school,
  /** 老人ホーム */
  3215: houseChimneyWindow,
  /** 博物館法の登録博物館・博物館相当施設 */
  3216: landmark,
  /** 図書館 */
  3217: bookOpen,
  /** 郵便局 */
  3218: building,
  /** 神社 通常の神社 */
  3231: toriiGate,
  /** 病院 */
  3241: personMilitaryPointing,
  /** 消防署 */
  3242: towerObservation,
  /** 保健所 */
  3243: hospital,
  /** 保健所 */
  3244: hospital,
  /** 工場 */
  3261: industry,
  /** 温泉 */
  6331: locationDot,
  /** 史跡・名勝・天然記念物 */
  6341: locationDot,
  /** 城跡 */
  6342: vihara,
  /** 港湾 */
  6361: anchor,
  /** 漁港 */
  6362: anchor,
  /** 特定重要港 */
  6367: anchor,
  /** 主要な港 */
  6368: anchor,
  /** 空港 */
  6371: planeDeparture,
  /** 自衛隊等の飛行場 */
  6373: planeDeparture,
  /** 発電所等 */
  8103: industry,
  /** 国際空港 */
  6375: planeDeparture,
  /** 主要な空港 */
  6376: planeDeparture,
  /** 主要な港 */
  56368: anchor,
  /** 主要な空港 */
  56376: planeDeparture,
};

/** 建物・施設などの地物コード
 *
 * #### zIndex: 10
 * - `441`: 空港名
 * - `532`: 史跡名勝天然記念物
 * - `621`: 都道府県庁、北海道の総合振興局・振興局、支庁
 * - `631`: 大学・大学院
 * - `6375`: 国際空港
 * - `6342`: 城跡
 * - `3205`: 市役所・東京都の区役所
 * - `6341`: 史跡・名勝・天然記念物
 *
 * #### zIndex: 8
 * - `533`: 漁港
 * - `880`: 国の機関
 * - `881`: 地方の機関
 * - `883`: 警察
 * - `886`: 病院
 * - `3201`: 官公署
 * - `3202`: 裁判所
 * - `3206`: 町村役場・政令指定都市の区役所
 * - `3243`: 病院
 * - `6361`: 港湾
 * - `6367`: 特定重要港
 * - `6368`: 主要な港
 * - `6376`: 主要な空港
 *
 * #### zIndex: 4
 * - `511`: 構造物名称（高塔、煙突等）
 * - `611`: 合同庁舎
 * - `612`: 国の機関（合同庁舎、矯正施設及び自衛隊を除く）
 * - `632`: 短期大学
 * - `651`: 水族館・動植物園
 * - `673`: 文教施設
 * - `681`: その他の主要・著名な建物
 * - `831`: 温泉、泉、噴気口
 * - `882`: 保健所
 * - `884`: 消防
 * - `887`: 郵便局
 * - `888`: 指定公共機関
 * - `889`: 博物館
 * - `3203`: 税務署
 * - `3211`: 交番
 * - `3212`: 学校 高等学校・中等教育学校
 * - `3216`: 博物館法の登録博物館・博物館相当施設
 * - `3217`: 図書館
 * - `3218`: 郵便局
 * - `3241`: 警察署
 * - `3242`: 消防署
 * - `3244`: 保健所
 * - `6331`: 温泉
 * - `6362`: 漁港
 * - `6373`: 自衛隊等の飛行場
 *
 * #### zIndex: 2
 * - `633`: 高等専門学校
 * - `634`: 特殊学校
 * - `653`: 発電所
 * - `671`: 商業施設
 * - `3213`: 学校 中学校
 * - `3214`: 学校 小学校
 * - `3261`: 工場
 * - `8103`: 発電所等
 *
 * - `522`: 堰
 * - `523`: 河川・海岸施設（水門、堤防）
 * - `531`: 土地利用名（演習場、ゴルフ場、遊園地、建設予定地等）
 * - `613`: 矯正施設（刑務所、少年院等）
 * - `615`: 自衛隊・米軍
 * - `661`: 神社
 * - `662`: 寺院
 * - `720`: 鉱山の鉱種名
 * - `885`: 学校
 * - `899`: その他
 * - `890`: 老人ホーム
 * - `3204`: 外国公館
 * - `3215`: 老人ホーム
 * - `3221`: 灯台
 * - `3231`: 神社 通常の神社
 * - `3232`: 寺院 通常の寺院
 * - `4101`: 煙突
 * - `4102`: 風車
 * - `4103`: 油井・ガス井
 * - `4104`: 記念碑
 * - `4105`: 自然災害伝承碑
 * - `6351`: 採鉱地
 * - `6332`: 噴火口・噴気口
 * - `6381`: 自衛隊
 * - `8105`: 電波塔
 *
 * - `6301`: 墓地
 */
export function codeToOrder(code: number) {
  if ([441, 532, 621, 631, 3205, 6341, 6342, 6375].includes(code)) return 10;
  if (
    [
      533, 880, 881, 883, 886, 3201, 3202, 3206, 3243, 6367, 6368, 6376,
    ].includes(code)
  )
    return 8;
  if (
    [
      511, 611, 612, 632, 651, 673, 681, 831, 882, 884, 887, 888, 889, 3203,
      3204, 3211, 3212, 3216, 3217, 3218, 3241, 3242, 3244, 6331, 6362, 6373,
    ].includes(code)
  )
    return 4;
  if ([633, 634, 653, 671, 3213, 3214, 3261, 8103].includes(code)) return 2;
  return 0;
}

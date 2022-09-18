import { isAnnoCode } from './utils';

/** 森林・緑地・公園関連の地物コード
 * - `331`: 高原、原、森、林、砂丘、湿原
 * - `534`: 公園
 * - `830`: 高原、平原、湿原
 * - `870`: 公園
 */
export type AnnoCodeGreen = 331 | 534 | 830 | 870;
export const annoCodeGreen: AnnoCodeGreen[] = [331, 534, 830, 870];
export const annoCodeIsGreen = isAnnoCode<AnnoCodeGreen>(annoCodeGreen);

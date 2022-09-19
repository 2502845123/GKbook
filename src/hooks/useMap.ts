import type { MyMap } from "../type";

export default function (maps: MyMap): [(key: string) => any] {
  // 创建一个Map
  const info = new Map<string, object>();
  let i = 0;
  // 存储数据
  for (const value of maps.values) {
    info.set(maps.keys[i++], value);
  }
  // 返回数据
  function getMapInfo(key: string) {
    let obj = info.get(key);
    obj = obj ?? {};
    return obj;
  }

  return [getMapInfo];
}

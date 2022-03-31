import { geoCoordMap } from './geoCoordMap'

export const convertData = (data: any) => {
  let res = []
  for (var i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

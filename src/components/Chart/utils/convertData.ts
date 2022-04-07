import { geoCoordMap } from './geoCoordMap'

export const convertData = (data: any) => {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

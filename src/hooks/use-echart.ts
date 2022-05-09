import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import chinaJson from '@/assets/json/china.json'
echarts.registerMap('china', chinaJson)
export const useEchart = (el: HTMLElement, theme = 'light') => {
  // 基于准备好的dom，初始化echarts实例
  const echartsInstance = echarts.init(el, theme, { renderer: 'svg' })
  // 绘制图表
  const setOption = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
  return [setOption]
}

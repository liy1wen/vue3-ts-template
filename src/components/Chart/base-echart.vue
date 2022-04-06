<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-06 15:33:06
-->
<template>
  <div class="chart-container">
    <div
      ref="chartRef"
      class="chart-box"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import { ref, onMounted, defineProps, PropType, watchEffect } from 'vue'
import { useEchart } from '@/hooks/use-echart'
const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    require: true,
    default: () => ({})
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '350px'
  }
})

const chartRef = ref<HTMLElement>()
onMounted(() => {
  const [setOption] = useEchart(chartRef.value as HTMLElement)
  watchEffect(() => {
    setOption(props.options)
  })
})
</script>

<style scoped lang="less">
.chart-container {
  .chart-box {
    height: 100%;
  }
}
</style>

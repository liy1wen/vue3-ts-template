<template>
  <div class="chart-container">
    <div ref="chartRef" class="chart-box" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import { ref, onMounted, watchEffect } from 'vue'
import { useEchart } from '@/hooks/use-echart'
type propsType = {
  options: EChartsOption
  width?: string
  height?: string
}
const props = withDefaults(defineProps<propsType>(), {
  width: '100%',
  height: '350px'
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

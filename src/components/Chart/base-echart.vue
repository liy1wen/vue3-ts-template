<template>
  <div class="chart-container">
    <div ref="chartRef" class="chart-box"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import { ref, onMounted, defineProps, PropType } from 'vue'
import { useEchart } from '@/hooks/use-echart'
const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    require: true
  }
})
const chartRef = ref<HTMLElement>()
onMounted(() => {
  const [setOption] = useEchart(chartRef.value as HTMLElement)
  setOption(props.options!)
})
</script>

<style scoped lang="less">
.chart-container {
  height: 350px;
  .chart-box {
    height: 100%;
  }
}
</style>

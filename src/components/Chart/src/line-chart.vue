<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseChart from '../base-echart.vue'
type propsType = {
  labels: string
  values: any[]
}
const props = withDefaults(defineProps<propsType>(), {})

const options = computed(() => ({
  legend: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    // top: '3%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.labels
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '分类商品的收藏',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: props.values
    }
  ]
}))
</script>

<style scoped></style>

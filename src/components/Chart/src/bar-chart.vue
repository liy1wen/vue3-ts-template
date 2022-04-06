<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-06 15:20:31
-->
<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import * as echarts from 'echarts'
import BaseChart from '../base-echart.vue'
const props = defineProps({
  labels: {
    type: Array,
    require: true
  },
  values: {
    type: Array,
    require: true
  }
})

const options = computed(() => ({
  title: {
    text: '特性示例：渐变色 阴影 点击缩放'
  },
  grid: {
    left: '3%',
    right: '4%',
    // top: '3%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: props.labels
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      data: props.values,
      type: 'bar',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}))
</script>

<style scoped></style>

<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import BaseChart from '../base-echart.vue'
const props = defineProps({
  dataValue: {
    type: Array,
    require: true
  },
  dataName: {
    type: Array,
    require: true
  }
})

const options = ref({
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
    data: props.dataName
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '分类销量统计',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: props.dataValue
    }
  ]
})
</script>

<style scoped></style>

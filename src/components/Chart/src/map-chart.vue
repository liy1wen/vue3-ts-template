<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import * as echarts from 'echarts'
import BaseChart from '../base-echart.vue'
import { dataList } from '../utils/data'
const props = defineProps({})

const options = ref({
  grid: {
    left: '0%',
    right: '2%',
    top: '0%',
    bottom: '10%'
  },
  tooltip: {
    // triggerOn: 'click',
    trigger: 'item',
    formatter: function (e: any, t: any, n: any) {
      return 0.5 == e.value
        ? e.name + '：总销量'
        : e.seriesName + '<br />' + e.name + '：' + e.value
    }
  },
  visualMap: {
    min: 0,
    max: 1000,
    left: 0,
    bottom: 0,
    showLabel: !0,
    text: ['高', '低'],
    pieces: [
      {
        gt: 2000,
        label: '> 2000件',
        color: '#7f1100'
      },
      {
        gte: 1000,
        lte: 2000,
        label: '1000-2000件',
        color: '#ff5428'
      },
      {
        gte: 100,
        lt: 1000,
        label: '100-1000件',
        color: '#ff8c71'
      },
      {
        gt: 0,
        lt: 100,
        label: '0-100件',
        color: '#ffd768'
      }
    ]
  },
  geo: {
    map: 'china',
    roam: 'scale',
    scaleLimit: {
      min: 1,
      max: 10
    },
    zoom: 1.1,
    label: {
      normal: {
        show: true,
        fontSize: '14',
        color: 'rgba(0,0,0,0.7)'
      }
    },
    itemStyle: {
      normal: {
        borderColor: 'rgba(0, 0, 0, 0.2)'
      },
      emphasis: {
        areaColor: '#f2d5ad',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        borderWidth: 0
      }
    }
  },
  series: [
    {
      name: '2022年总销量（件）',
      type: 'map',
      geoIndex: 0,
      data: dataList
    }
  ]
})
</script>

<style scoped></style>

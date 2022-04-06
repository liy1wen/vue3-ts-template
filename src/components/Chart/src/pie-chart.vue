<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-06 15:22:18
-->
<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseChart from '../base-echart.vue'
const props = defineProps({
  data: {
    type: Array,
    require: true
  }
})
const options = computed(() => ({
  title: {
    // text: 'Referer of a Website',
    // subtext: 'Fake Data',
    // left: 'center'
  },
  // grid: {
  //   left: '3%',
  //   right: '4%',
  //   // top: '3%',
  //   bottom: '3%',
  //   containLabel: true
  // },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>

<style scoped></style>

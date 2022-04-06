<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-06 15:22:46
-->
<template>
  <div>
    <base-chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import BaseChart from '../base-echart.vue'
const props = defineProps({
  data: {
    type: Array,
    require: true
  }
})

const options = computed(() => ({
  // legend: {
  //   top: 'top'
  // },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [10, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.data
    }
  ]
}))
</script>

<style scoped></style>

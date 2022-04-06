<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '25px' }">
      <div class="count-content">
        <div class="count-icon">
          <el-icon
            :size="72"
            :color="panelData.color"
            class="animate__animated animate__bounce animate__delay-2s"
          >
            <histogram v-if="panelData.icon === 'histogram'" />
            <shopping-bag v-else-if="panelData.icon === 'shopping-bag'" />
            <collection v-else-if="panelData.icon === 'collection'" />
            <coin v-else-if="panelData.icon === 'coin'" />
          </el-icon>
        </div>
        <div class="count-word">
          <div class="count-title">
            {{ panelData.title }}
          </div>
          <div class="count-num"><div ref="countRef"></div></div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import {
  Histogram,
  ShoppingBag,
  Collection,
  Coin
} from '@element-plus/icons-vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

const props = defineProps({
  panelData: {
    type: Object,
    require: true
  }
})
const countRef = ref<HTMLElement | null>(null)
onMounted(() => {
  const countUp = new CountUp(
    countRef.value as HTMLElement,
    props.panelData?.count
  )
  if (!countUp.error) {
    countUp.start()
  } else {
    console.error(countUp.error)
  }
})
</script>

<style scoped lang="less">
.count-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .count-word {
    text-align: center;
    font-weight: 700;
    .count-title {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 18px;
      margin-bottom: 20px;
    }
    .count-num {
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>

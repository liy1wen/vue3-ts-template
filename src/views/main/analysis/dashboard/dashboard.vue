<template>
  <div class="dashboard-container">
    <el-row :gutter="20" class="panel-group">
      <el-col
        :xs="24"
        :sm="12"
        :lg="6"
        v-for="item in statisticalPanelLists"
        :key="item.icon"
        class="card-panel"
      >
        <statistical-panel :panelData="item"></statistical-panel>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="panel-group">
      <el-col :span="7">
        <Card title="分类商品数量">
          <pie-chart :data="categoryCountData" />
        </Card>
      </el-col>
      <el-col :span="10">
        <Card title="年度省份商品销量">
          <map-chart />
        </Card>
      </el-col>
      <el-col :span="7"
        ><Card title="销量前10的商品数量">
          <rose-chart :data="topSaleData" /></Card
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="panel-group panel-last">
      <el-col :span="12">
        <Card title="分类商品的销量">
          <bar-chart v-bind="categorySaleData" />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类商品的收藏">
          <line-chart v-bind="categoryCollectioData" />
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/components/Card'
import { useStore } from 'vuex'
import { RoseChart, LineChart, PieChart, MapChart } from '@/components/Chart'
import StatisticalPanel from '@/components/StatisticalPanel'
// 发起网络请求
const store = useStore()
store.dispatch('analysisModule/getAnalysisData')

// 获取顶部统计数据
const statisticalPanelLists = computed(() =>
  store.state.analysisModule.totalAmount.map((item: any, index: number) => {
    const colorList = ['#64D9D6', '#36A2F6', '#34BFA3', '#F3516C']
    const iconList = ['shopping-bag', 'collection', 'histogram', 'coin']
    return {
      title: item.title,
      count: item.number1,
      icon: iconList[index],
      color: colorList[index]
    }
  })
)
// 分类商品数量
const categoryCountData = computed(() =>
  store.state.analysisModule.categoryCount.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }))
)
// top销量
const topSaleData = computed(() =>
  store.state.analysisModule.topSale.map((item: any) => ({
    name: item.name,
    value: item.saleCount
  }))
)
// 分类销量
const categorySaleData = computed(() => {
  const categorySale = store.state.analysisModule.categorySale
  const labels: string[] = []
  const values: any[] = []
  categorySale.map((item: any) => {
    values.push(item.goodsCount)
    labels.push(item.name)
  })
  return { values, labels }
})
// 分类商品的收藏
const categoryCollectioData = computed(() => {
  const categoryCollection = store.state.analysisModule.categoryCollection
  const labels: string[] = []
  const values: any[] = []
  categoryCollection.map((item: any) => {
    values.push(item.goodsFavor)
    labels.push(item.name)
  })
  return { values, labels }
})
</script>

<style scoped lang="less">
.dashboard-container {
  background: #f0f2f5;
  .chart {
    width: 100%;
    height: 300px;
  }
  .panel-group {
    margin-bottom: 20px;
    .card-panel {
      cursor: pointer;
    }
  }
  .panel-last {
    margin-bottom: 0;
  }
}
</style>

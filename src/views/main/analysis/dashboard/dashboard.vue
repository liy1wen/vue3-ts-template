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
          <rose-chart :data="topSaleData" /> </Card
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="panel-group panel-last">
      <el-col :span="12">
        <Card title="分类商品的销量">
          <bar-chart
            :dataValue="categoryCollectionValue"
            :dataName="categoryCollectioName"
          />
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类商品的收藏">
          <line-chart
            :dataValue="categorySaleValue"
            :dataName="categorySaleName"
          />
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from '@/components/Card/index.vue'
import { useStore } from 'vuex'
import { RoseChart, LineChart, PieChart, MapChart } from '@/components/Chart'
import StatisticalPanel from '@/components/StatisticalPanel/index.vue'

const store = useStore()
store.dispatch('analysisModule/getAnalysisData')
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
const categorySaleValue = ref<any>([])
const categorySaleName = ref<any>([])
const categorySaleData = computed(() => store.state.analysisModule.categorySale)
categorySaleData.value.map((item: any) => {
  categorySaleValue.value.push(item.goodsCount)
  categorySaleName.value.push(item.name)
})

// 分类商品的收藏
const categoryCollectionValue = ref<any>([])
const categoryCollectioName = ref<any>([])
const categoryCollectioData = computed(
  () => store.state.analysisModule.categoryCollection
)
categoryCollectioData.value.map((item: any) => {
  categoryCollectionValue.value.push(item.goodsFavor)
  categoryCollectioName.value.push(item.name)
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

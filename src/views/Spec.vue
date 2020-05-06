<template>
  <div class="spec">
    <page-heading heading-en="SPEC" heading-ja="仕様" />
    <div class="spec-content">
      <div class="spec-header">
        <h2 class="spec-header__title">自己評価チャート</h2>
        <div class="spec-header__chart-block">
          <div class="spec-header__chart">
            <radar-chart :chart-title="programmingChartTitle" :chart-labels="chartLabels" :chart-data="programmingChartData" :options="chartOptions" />
          </div>
          <div class="spec-header__chart">
            <radar-chart :chart-title="directionChartTitle" :chart-labels="chartLabels" :chart-data="directionChartData" :options="chartOptions" />
          </div>
        </div>
      </div>
      <div class="spec-body">
        <h2 class="spec-body__title">使用技術・ツール</h2>
        <ul class="spec-body__list">
          <li class="spec-body__list-item" v-for="(v, k) in skills" :key="k">
            <h3 class="spec-body__list-title">{{ v.title }}</h3>
            <v-expansion-panels hover>
              <v-expansion-panel v-for="skill of v.content" :key="skill.name">
                <v-expansion-panel-header>{{ skill.name}}</v-expansion-panel-header>
                <v-expansion-panel-content>{{ skill.items.join('、') }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import PageHeading from '@/components/atoms/PageHeading.vue'
import RadarChart from '@/components/atoms/RadarChart.vue'

export default {
  name: 'spec',
  components: {
    PageHeading,
    RadarChart
  },
  data(){
    return {
      chartLabels: ['実務経験', '適性', '知識', '実務スピード'],
      chartOptions: {
        title: {
          display: true,
          fontSize: 20,
          fontColor: '#333'
        },
        legend: {
          labels: {
            boxWidth: 12,
            fontSize: 14
          }
        },
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1
          }
        }
      },
      programmingChartTitle: '開発',
      programmingChartData: {},
      directionChartTitle: 'ディレクション',
      directionChartData: {},
      skills: {}
    }
  },
  created(){
    firebase.firestore().collection('specs').get().then(snapshot => {
      const pageProperty = snapshot.docs.map(doc => doc.data())
      this.programmingChartData = pageProperty[0].chart.programming.data
      this.directionChartData = pageProperty[0].chart.direction.data
      this.skills = pageProperty[0].skills
    })
  }
}
</script>

<style lang="sass" scoped>

.spec
  min-height: 1300px

.spec-content

.spec-header
  width: 93%
  min-width: 824px
  max-width: 1200px
  padding: 0 0 0 7%

  &__title
    font-size: 2rem

  &__chart-block
    margin-top: 40px
    display: flex
    justify-content: space-between

  &__chart
    flex-basis: 46%
    min-width: 360px

.spec-body
  width: 100%
  min-width: 824px
  max-width: 1200px
  margin-top: 48px
  padding: 0 0 120px 7%

  &__title
    font-size: 2rem

  &__list
    display: flex
    margin-top: 40px
    padding: 0
    justify-content: space-between

  &__list-item
    list-style: none
    flex-basis: 23%

  &__list-title
    margin-bottom: 24px

</style>

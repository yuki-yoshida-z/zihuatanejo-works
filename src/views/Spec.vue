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
        <div class="spec-body__table-block">
          <div class="spec-body__input-block">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details
              color="#f9b20f"
            ></v-text-field>
          </div>
          <v-data-table
            :headers="skillHeaders"
            :items="skillList"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
            hide-default-footer
          ></v-data-table>
          <div class="text-center pt-2 pb-10">
            <v-pagination v-model="page" color="#f9b20f" :length="pageCount"></v-pagination>
          </div>
        </div>
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      search: '',
      skillHeaders: [],
      skillList: [],
      skillLevelStrings: ['初学者', 'ドキュメントを確認しながら対応できる', '基本的なことは対応できる', '一通りのことは対応できる', '人に教えられる']
    }
  },
  created(){
    firebase.firestore().collection('specs').get().then(snapshot => {
      const pageProperty = snapshot.docs.map(doc => doc.data())
      this.programmingChartData = pageProperty[0].chart.programming.data
      this.directionChartData = pageProperty[0].chart.direction.data
      this.skillHeaders = pageProperty[0].skills.headers
      pageProperty[0].skills.skillList.forEach(skill => {
        skill.experience = this.calcPeriodFromSkillStartUsingForWorkAt(skill.started_using_for_work_at)
        skill.level = this.convertSkillLevelToStrings(skill.level)
      })
      this.skillList = pageProperty[0].skills.skillList
    })
  },
  computed: {
    calcPeriodFromSkillStartUsingForWorkAt(){
      return (skillStartUsingForWorkAt) => {
        const today = new Date()
        const startAtToDate = skillStartUsingForWorkAt.toDate()
        let periodYear = today.getFullYear() - startAtToDate.getFullYear()
        let periodMonth = today.getMonth() - startAtToDate.getMonth()
        if(periodMonth < 0){
          periodYear -= 1
          periodMonth = -periodMonth
        }
        return String(periodYear) + '年' + String(periodMonth) + 'ヶ月'
      }
    },
    convertSkillLevelToStrings(){
      return (level) => {
        return this.skillLevelStrings[level - 1]
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.spec
  min-height: 100vh
  background-image: url("../assets/specBg.svg")
  background-position: right
  background-size: contain

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
  width: 93%
  min-width: 824px
  max-width: 1200px
  min-height: 960px
  margin-top: 48px
  padding: 0 0 120px 7%

  &__title
    font-size: 2rem

  &__list
    display: flex
    margin-top: 40px
    padding: 0
    justify-content: space-around

  &__list-item
    list-style: none
    flex-basis: 23%

  &__list-title
    margin-bottom: 24px

  &__table-block
    margin-top: 40px

  &__input-block
    width: 40%
    margin-left: auto
    margin-bottom: 24px

  .v-data-table
    background-color: rgba(255, 255, 255, 0.4)

    tbody tr:hover
      background-color: rgba(238, 238, 238, 0.4)

</style>

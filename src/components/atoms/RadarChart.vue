<script>

import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'radar-chart',
  props: {
    chartTitle: String,
    chartLabels: Array,
    chartData: Object,
    options: Object
  },
  watch: {
    chartData(){
      this.options.title.text = this.chartTitle
      this.chartData.labels = this.chartLabels
      this.renderChart(this.chartData, this.options)
    }
  }
}
</script>

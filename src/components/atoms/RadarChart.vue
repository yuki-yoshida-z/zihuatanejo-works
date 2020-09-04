<script>

import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,

  props: {
    chartTitle: String,
    chartLabels: Array,
    chartData: Array,
    options: Object
  },
  watch: {
    chartData(){
      this.options.title.text = this.chartTitle
      const dataCollection = {labels: this.chartLabels, datasets: this.chartData}
      this.renderChart(dataCollection, this.options)
    }
  }
}
</script>

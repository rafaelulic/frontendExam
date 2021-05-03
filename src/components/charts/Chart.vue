<template>
  <div>
    <VueApexCharts height="400" type="bar" :options="options" :series="series"></VueApexCharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: { VueApexCharts },
  data: function() {
    return {
      options: {
        chart: {
          id: 'sales-chart'
        },
        xaxis: this.$store.state.xaxis
      },
      series: this.$store.state.series
    }
  }
}
</script>
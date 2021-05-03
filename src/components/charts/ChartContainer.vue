<template>
  <div class="chart-container">
      <div class="date-container">
          <select name="" id="">
              <option value="">Last 7 days</option>
          </select>
      </div>
      <div class="chart">
        <div class="chart-header">
            <div class="title">Sales Overview </div>
            <div class="options">
                <select name="" id="">
                    <option value="">All Transactions</option>
                </select>
                <select name="" id="">
                    <option value="">All Branches</option>
                </select>
            </div>
        </div>
        <Chart />
      </div>
  </div>
</template>

<script>
import Chart from '@/components/charts/Chart.vue'

export default {
    components: {Chart}
}
</script>

<style scoped lang='scss'>
 
.chart-container {
    margin-top: 50px;
    width: 100%;

    .date-container {
        margin-bottom: 20px;   
    }

    .chart {
        box-shadow: 0px 0px 10px 0px rgb(200, 200, 200);
        width: 100%;
        background-color: white;
        .chart-header {
            background-color: #f7f8fc;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .title {font-weight: 600;}
            
        }
    }
}

select {
    background: white;
    padding: 5px;
    margin-right: 10px;
}  
</style>
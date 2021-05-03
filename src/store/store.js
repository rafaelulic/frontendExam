import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      branchPerformance: [
          {id: 1, name: 'Makati', sales: 5000, percentage: 20},
          {id: 2, name: 'BGC Taguig', sales: 4000, percentage: 10.52},
          {id: 3, name: 'Mall of Asia, Pasay', sales: 3000, percentage: 8.39},
          {id: 4, name: 'Quezon City', sales: 2000, percentage: -5},
          {id: 5, name: 'Greenhills', sales: 1000, percentage: 2},
      ],

      rewardsPerformance: [
        {id: 1, name: 'Reward 1', sales: 5000, percentage: 20},
        {id: 2, name: 'Reward 2', sales: 4000, percentage: 10.52},
        {id: 3, name: 'Reward 3', sales: 3000, percentage: 8.39},
        {id: 4, name: 'Reward 4', sales: 2000, percentage: -5},
        {id: 5, name: 'Reward 5', sales: 1000, percentage: 2},
      ],

      sales: {percentage: 20, data1: 175000, data2: 170000},

      engagements: {percentage: -20, data1: 285, data2: 57},

      acquisitions: {percentage: 20, data1: 285, data2: 57},

      rewardsProgram: {percentage: 20, data1: 175000, data2: 175000},

      //Chart Data
      xaxis: {
        categories: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7"]
      },

      series: [
        {
        name: 'Sales',
        data: [10000, 20000, 30000, 40000, 20000, 30000, 40000]
        },
        {
        name: 'Revenue',
        data: [10000, 10000, 10000, 10000, 20000, 30000, 40000]
        }
      ],
    }
})
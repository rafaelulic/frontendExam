<template>
  <div class="panel-container">
    <div class="panel-header">
      <span class="title">{{title}}</span>
    </div>
    <div class="panel-body">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>{{header}}</th>
            <th>Total Sales ( <Currency currency="philippines"/> )</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in records" :key="record.id">
            <td>{{record.id}}.</td>
            <td>{{record.name}}</td>
            <td>{{formatPrice(record.sales)}}</td>
            <td>{{checkNegative(record.percentage)}}% </td>
            <td>
              <i v-if="isNegative" class="material-icons">arrow_downward</i>
              <i v-else class="material-icons">arrow_upward</i>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-footer">
      <span class="title">pagination</span>
    </div>
  </div>
</template>

<script>
import Currency from "@/components/utilities/Currency.vue"

export default {
  props: ['title', 'records', 'header'],
  components: { Currency },
  data: function () {
    return {
      isNegative: false
    }
  },
  methods: {
    formatPrice: function(value){
      let val = (value/1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },

    checkNegative: function(value) {
      if(Math.sign(value) == -1){
          this.isNegative = !this.isNegative
      } else {
        this.isNegative = false
      }
      
      return value.toString().replace("-", "")
    }
  }
}
</script>

<style scoped lang="scss">
.panel-container {
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgb(200, 200, 200);
  margin: 50px 10px;
  min-height: 300px;
  width: 100%;

  .panel-header {
    background-color: #f7f8fc;
    padding: 20px;

    .title {
      font-weight: 600;
    }
  }

  .panel-body {

    table {
      border-spacing: 0;
      width: 100%;

      th,
      td {
        padding: 15px 20px;
        border-bottom: 1px solid #ddd;
        text-align: left;
      }

      th {
        color:rgb(185, 185, 185);
      }

      th:nth-child(n+3), td:nth-child(n+3) {
        text-align: right;
      }
    }
  }

  .panel-footer {
    padding: 15px 20px;
    text-align: right;
  }

  
}

@media screen and (max-width: 600px){
    .panel-container {
      margin: 20px 0;
        .panel-body {
          table {
            th, td {
              padding: 10px;
              font-size: 12px;
              
              
              i {
                font-size: 10px;
                text-align: left;
              }

            }
          }
        }
    }
}
</style>
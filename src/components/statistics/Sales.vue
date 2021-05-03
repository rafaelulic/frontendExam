<template>
  <div class="searp-card" @click="activateCard" v-bind:class="{active: isActive}">
    <div class="card-header">
      <span class="title">{{title}}</span>
    </div>
    <div class="card-body">
      <div class="percentage">
        <span class="pill" :style="{backgroundColor: color}">
          {{checkNegative(records.percentage)}}%
          <i
            v-if="isNegative"
            class="material-icons"
          >arrow_upward</i>
          <i v-else class="material-icons">arrow_downward</i>
        </span>
      </div>
      <div class="actual-data">
        <span class="label">{{label1}}</span>
        <span class="data">
          <Currency />
          {{records.data1}}
        </span>
        <span class="label">{{label2}}</span>
        <span class="data">
            <Currency />
            {{records.data2}}
        </span>
      </div>
    </div>
    <div class="card-footer">
        <div class="label">Average Order Value</div>
        <div class="data"><Currency/> 1,000.00</div>
    </div>
  </div>
</template>

<script>
import Currency from "@/components/utilities/Currency.vue";

export default {
  props: ['title', 'label1', 'label2', 'records', 'color'],
  components: { Currency },
  data: function() {
    return {
      isActive: false,
      isNegative: false
    };
  },

  methods: {
    activateCard: function() {
      this.isActive = !this.isActive;
    },
    checkNegative: function(value) {
      if (value <= -1) {
        this.isNegative = !this.isNegative;
      }
      return value.toString().replace("-", " ");
    }
  }
}
</script>

<style lang="scss" scoped>
.searp-card {
  background-color: rgb(255, 255, 255);
  width: 100%;
  min-height: 250px;
  margin: 0 10px;
  box-shadow: 0px 0px 10px 0px rgb(200, 200, 200);
  

  .card-header {
    min-height: 30px;
    padding: 20px;
    .title {
        font-weight: 400;
    }
  }

  .card-body {
    min-height: 150px;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pill {
      background-color: blue;
      border-radius: 45px;
      color: white;
      font-size: 12px;
      padding: 8px 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      i {
        font-size: 14px;
        margin-left: 5px;
      }
    }

    .actual-data {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

      .label {
        color: #bbb;
        font-size: 12px;
        margin-bottom: 8px;
        width: 100px;
        text-align: right;
      }

      .data {
        margin-bottom: 12px;
      }
    }
  }

  .card-footer {
    border-top: 1px solid #ddd;
    color: #999;
    padding: 10px 20px;
    height: 30px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}

.active {
  box-shadow: 0px 0px 10px 0px #5d83ff;
}
@media screen and (max-width: 600px){
    .searp-card {
        margin: 5px 0;
        padding: 20px;

        .card-body {
            .pill {
                padding: 10px 20px;
                font-size: 16px;
            }

            .actual-data {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 50%;
                .label {
                    text-align: left;
                    font-size: 18px;
                    width: 100%;
                }
                .data {
                    font-size: 20px;
                }
            }            
        }
    }
}

</style>
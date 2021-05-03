<template>
  <div id="app">
    <header>
      <Navbar />
      <LogoContainer />
    </header>
    <main>
      <div class="dashboard-container">
        <Sales
          title="Sales"
          label1="Lifetime Sales"
          label2="Revenue Sales"
          color="#819eff"
          :records="this.$store.state.sales"
        />
        <SearpCard
          title="Engagement"
          label1="Lifetime SMS Engagements"
          label2="Daily Average"
          color="#8ddeba"
          :records="this.$store.state.engagements"
        />
        <SearpCard
          title="Acquisition"
          label1="Registered Users"
          label2="Daily Average"
          color="#efc389"
          :records="this.$store.state.acquisitions"
        />
        <SearpCard
          title="Rewards Program"
          label1="Rewards Redeem"
          label2="Issued Rewards"
          color="#cca7ea"
          :records="this.$store.state.rewardsProgram"
        />
      </div>
      <div class="dashboard-container">
        <ChartContainer />
      </div>
      <div class="dashboard-container">
        <PanelTable
          title="Branch Performance"
          header="Branch"
          :records="this.$store.state.branchPerformance"
        />

        <PanelTable
          title="Rewards Performance"
          header="Badge"
          :records="this.$store.state.rewardsPerformance"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LogoContainer from "@/components/LogoContainer.vue";
import SearpCard from "@/components/statistics/SearpCard.vue";
import Sales from "@/components/statistics/Sales.vue";
import PanelTable from "@/components/panels/PanelTable.vue";
import ChartContainer from "@/components/charts/ChartContainer.vue";

export default {
  components: {
    Navbar,
    LogoContainer,
    SearpCard,
    Sales,
    PanelTable,
    ChartContainer
  },
  computed: {
    branches() {
      return this.$store.state.branchPerformance;
    },
    rewards() {
      return this.$store.state.rewardsPerformance;
    },
    sales() {
      return this.$store.state.sales;
    },
    engagements() {
      return this.$store.state.engagements;
    },
    acquisitions() {
      return this.$store.state.acquisitions;
    },
    rewardsProgram() {
      return this.$store.state.rewardsProgram;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  background-color: #f4f5f9;
  width: 100%;

  header {
    height: 80px;
    background-color: white;
  }

  main {
    padding-top: 50px;

    .dashboard-container {
      width: 90%;
      margin: 0 auto;
      display: flex;
    }
  }
}

@media screen and (max-width: 600px) {
  #app {
    main {
      padding-top: 20px;
      .dashboard-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
      }
    }
  }
}
</style>
<template>
  <!-- <span>
    <span v-for="currency in currencies" :key="currency.id" class="currency">
      <span v-if="currency.country == '{{country}}'">{{currency.symbol}}</span>
    </span>
  </span> -->
  <span class="currency">&#8369;</span>
</template>

<style lang="scss" scoped>
.currency {
  color: #f08929;
}
</style>

<script>
export default {
  props: ['currency'],
}
</script>
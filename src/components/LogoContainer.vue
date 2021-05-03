<template>
  <div class="logo-container">
      <i class="material-icons pie">pie_chart</i>
      <span class="logo">Analytics <HelpIcon/></span>
  </div>
</template>

<script>
import HelpIcon from '@/components/utilities/HelpIcon.vue'
export default {
    components: {
        HelpIcon
    }
}
</script>

<style lang="scss" scoped>
.logo-container {
    height: 40px;
    width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    .pie {
        color: #7fc7e3;
    }

    .logo {
        font-size: 27px;
        padding-left: 10px;
    }
}

@media screen and (max-width: 600px){
    .logo-container {
        width: 100%;
    }
}
</style>


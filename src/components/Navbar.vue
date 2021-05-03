<template>
  <div class="navbar">
    <div class="items">
      <i class="material-icons">menu</i>
    </div>
    <div class="items kollab">
      <span class>Kollab</span>
    </div>
    <div class="items account-container">
      <div class="accounts">
        <i class="material-icons">account_circle</i>
        <span class="username">Katrina</span>
        <i class="material-icons">keyboard_arrow_down</i>
      </div>|
      <i class="material-icons">notifications_none</i>|
      <i class="material-icons">help_outline</i>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navbar {
  height: 40px;
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  .items {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 33%;
    height: 40px;
  }
  .account-container {
    display: flex;
    justify-content: space-evenly;
    .accounts {
      width: 50%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 40px;
    }
  }

  .kollab {
    font-weight: 800;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 600px){
    .navbar {
        width: 100%;

        .items {
            display: flex;

            
            width: 100%;
            justify-content: flex-start;
        }

        .account-container {
            display: none;
        }
    }
}

</style>


<script lang="ts" src="./MapView.ts" />
<template>
    <div v-if="!isUserLocationReady"
        class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor!!</h3>
            <span>Localizando...</span>
        </div>
    </div>

    <div v-show="isUserLocationReady"
        class="container-map"
        ref="mapElement"
    />
  </template>

<style scoped>
.loading-map {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #566365;
  z-index: 9999;
  color: #fff;
}
.container-map{
  position: fixed;
  width: 100vw;
  height: 90vh;
  background-color: #5cd9fefd;
}
</style>>

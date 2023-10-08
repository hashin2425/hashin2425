<template>
  <div id="header" class="shadow-box">
    <span> Hashin2425 Portfolio </span>
  </div>
  <div id="header-size"></div>
</template>

<script>
export default {
  name: 'Header-section'
}
</script>

<style>
#header-size {
  height: 2.5rem;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  z-index: 9999;

  user-select: none;
  margin: 0;
  padding: 0.4rem;
  font-size: 1.4rem;
  color: white;
  background-color: rgb(32, 32, 32);
}
</style>

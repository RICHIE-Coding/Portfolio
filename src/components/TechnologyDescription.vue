<template>
  <div class="Test text-center">Technologies and Tools</div>

  <div class="row justify-center q-gutter-xl">
    <div class="">First column</div>
    <div class="">Second column</div>
    <div class="">Third column</div>
    <div class="">Third column</div>
    <Icon class="big-icon" icon="logos:vue" />
  </div>

  <div class="flexbox2">
    <div class="">First column</div>
    <div class="">Second column</div>
    <div class="">Third column</div>
    <div class="">Third column</div>
    <Icon class="big-icon" icon="logos:vue" />
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<style lang="scss">
.Test {
  font-size: 6rem;
}
.flexbox {
  display: flex;
  justify-content: center;
}

.flexbox2 {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.ff {
  display: flex;
  flex-direction: column;
}

.big-icon {
  font-size: 150px;
}
</style>

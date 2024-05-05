<template>
  <q-list>
    <q-item
      v-for="item in menu"
      v-bind:key="item"
      clickable
      v-ripple
      :active="item === route.name"
      active-class="bg-primary text-white"
      :to="item === 'Home' ? '/' : item"
    >
      <q-item-section>
        <q-item-label class="text-center">
          {{ item }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import routes from '../router/routes';
import { useRoute } from 'vue-router';

const route = useRoute();

const menu = routes.at(0)?.children?.map((item) => {
  return item.name;
});
</script>
<style scoped lang="scss">
.q-item__section {
  font-size: 1.9rem;

  color: white;
}

.q-list {
  margin-top: 120px;
}
</style>

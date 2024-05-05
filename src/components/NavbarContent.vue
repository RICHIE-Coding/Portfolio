<template>
  <q-list>
    <q-item
      v-for="item in menu"
      v-bind:key="item"
      clickable
      v-ripple
      :active="item === route.name"
      active-class="active-class"
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
:deep(.q-item__section) {
  font-size: 1.9rem;
  color: white;

  &:after {
    background-color: yellow;

    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  &:not(.active-class):hover::after {
    transform: translate(0, 0);
  }

  &:hover {
    color: black;
  }
}

.active-class {
  background-color: $yellow-12;
  .q-item__section {
    color: black !important;
  }
}

.q-list {
  margin-top: 120px;
}
</style>

<template>
  <div class="q-list-position">
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
  </div>
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
:deep(.q-item) {
  font-size: 1.9rem;
  color: white;

  &:after {
    background-color: $yellow-12;

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

  &:not(.active-class):hover ~ .active-class {
    background-color: $bg-Navbar !important;
    color: white !important;
  }
}

.active-class:not(:has(~ :hover)) {
  background-color: $yellow-12;
  color: black !important;
}

.q-list-position {
  @media (min-width: $breakpoint-lg-min) {
    position: relative !important;
    top: 100px !important;
  }
}
</style>

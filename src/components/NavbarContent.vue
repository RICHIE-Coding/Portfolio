<template>
  <q-list>
    <q-item
      v-for="item in routes[0].children"
      v-bind:key="item.name"
      clickable
      v-ripple
      :active="item.name === route.name"
      :to="item.name === 'Home' ? '/' : item.name"
    >
      <q-item-section>
        <q-item-label>
          {{ item.name }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import routes from '../router/routes';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="q-pa-lg" style="z-index: 500">
      <q-toolbar>
        <q-btn
          class="menu"
          dense
          flat
          :icon="leftDrawerOpen ? 'close' : 'menu'"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h1 q-pa-sm text-center">
          richiecoding.de
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      behavior="desktop"
      persistent
      side="left"
      content-style="z-index: 500;"
    >
      <navbar-content />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import NavbarContent from 'src/components/NavbarContent.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const leftDrawerOpen = ref($q.screen.width >= 1440);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleResize = () => {
  leftDrawerOpen.value = $q.screen.width >= 1440;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
.menu {
  font-size: 2rem;
}

:deep(.q-drawer) {
  @media (min-width: $breakpoint-lg-min) {
    top: 0 !important;
  }
}
</style>

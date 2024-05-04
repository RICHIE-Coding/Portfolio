<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="q-pa-lg" elevated>
      <q-toolbar>
        <q-btn class="menu" dense flat icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h3 text-center">
          PORTFOLIO
        </q-toolbar-title>
      </q-toolbar> </q-header
    ><q-drawer
      v-model="leftDrawerOpen"
      behavior="desktop"
      persistent
      overlay
      side="left"
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup scoped lang="ts">
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

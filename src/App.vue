<template>
  <div class="container mx-auto bg-gray-100 p-4 min-h-screen space-y-4">
    <h1 class="text-4xl text-indigo-700">This page aims to develop and test the component</h1>

    <div>
      <h2 class="text-2xl">Current Time</h2>
      <dv-current-time>
        <span slot="prefix">Time is</span>
      </dv-current-time>
    </div>

    <div>
      <h2 class="text-2xl">Card</h2>
      <dv-card :is-footer-bordered="true">
        <div slot="header">Header</div>
        <div slot="body">body</div>
        <div slot="footer">footer</div>
      </dv-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/index';
</script>

<style scoped>
.dv-card {
  background: #a2b8ff;
}
</style>

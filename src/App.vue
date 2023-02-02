<script setup>
import MyLayout from './components/MyLayout.vue'

const nav = ['Home', 'About']
</script>

<template>
  <div class="wrapper">
    <MyLayout title="Hello" :nav="nav" :num="666" />
  </div>
</template>

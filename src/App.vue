<script setup>
import HelloWorld from './components/HelloWorld.vue'

const nav = ['Home', 'About']
</script>

<template>
  <div class="wrapper">
    <HelloWorld title="Hello" :nav="nav" :num="666" />
  </div>
</template>

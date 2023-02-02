<script setup>
import { ref } from 'vue'
defineProps({
  title: {
    type: String,
    default: 'Testing',
  },
  nav: {
    type: Array,
  },
  num: {
    type: Number,
    default: 13,
  },
})

const play = ref(true)
// const playhandler = () => {
//   const t = document.querySelector('audio')
//   const tt = t.getAttributeNode('autoplay')
//   if (tt) {
//     t.removeAttribute('autoplay')
//   } else t.setAttribute('autoplay', '')
// }
</script>

<template>
  <div class="lay bg">
    <header>
      <nav class="">
        <ul class="grid gap-6">
          <a v-for="(item, index) in nav" :key="index">
            {{ item }}
          </a>
        </ul>
      </nav>
      <h1>Say {{ title }}</h1>
      <h2>{{ num }}</h2>
    </header>
    <main>
      <audio :autoplay="play" />
      <div class="btn-wrap">
        <button type="button" @click="play = !play">Change</button>
      </div>
    </main>
  </div>
</template>

<style>
.bg {
  background-color: #231f20;
}
header {
  max-width: 80vw;
  margin: 0 auto;
}

ul {
  display: grid;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
}

button {
  display: block;
  padding: 0.75rem 2rem;
  background-color: #231f20;
  border: none;
  position: relative;
  color: #fff;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  margin: auto;
  opacity: 0.9;
  border-radius: 0.125rem;
}

.btn-wrap {
  display: flex;
  height: 2.5rem;
  max-width: 10rem;
  position: relative;
  border-radius: 0.125rem;
}
.btn-wrap::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  border-radius: 0.125rem;
  background-image: linear-gradient(
    90deg,
    rgba(60, 111, 208, 1) 0%,
    rgba(153, 84, 181, 1) 18%,
    rgba(70, 191, 77, 1) 49%,
    rgba(200, 122, 68, 1) 75%,
    rgba(191, 208, 60, 1) 100%
  );
  background-size: 300% auto;
  background-repeat: repeat-x;
  background-position: 0 0;
  transition: all 0.3s;
  filter: blur(4px);
}
.btn-wrap:hover::before {
  background-position: 100% 0;
}
h2 {
  opacity: 0;
}
</style>

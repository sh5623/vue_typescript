<template>
  <div>
    <h4>Basic Vuex</h4>
    {{ $store.getters.count }}
    <div>
      <button @click="increase">증가</button>
      <button @click="decrease">감소</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BasicVuex extends Vue {
  private increase() {
    this.$store.dispatch('increase');
  }

  private decrease() {
    this.$store.dispatch('decrease');
  }
}
</script>

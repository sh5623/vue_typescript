<template>
  <div class="card">
    <h4>Mixins Components</h4>
    <div class="card-header" @click="toggle">Featured</div>
    <div class="card-body" v-show="show">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ToggleComponents from '@/components/ToggleComponents.vue';

@Component({
  components: {
    ToggleComponents,
  },
})
export default class AccordionComponents extends Mixins(ToggleComponents) {}
</script>

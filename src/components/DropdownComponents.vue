<template>
  <div class="dropdown">
    <button
      @click="toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div
      class="dropdown-menu show"
      v-show="show"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
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
export default class DropdownComponents extends Mixins(ToggleComponents) {}
</script>

<style>
.dropdown {
  width: 500px;
}

.dropdown a {
  display: list-item;
}
</style>

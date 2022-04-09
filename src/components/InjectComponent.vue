<template>
  <div>I'm InjectComponent : {{ message }}</div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';

@Component
export default class ProvideComponent extends Vue {
  @Inject() readonly message!: string;
}
</script>

<template>
  <div>
    <h4>Provide & Inject</h4>
    <InjectComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import InjectComponent from '@/components/InjectComponent.vue';

@Component({
  components: {
    InjectComponent,
  },
})
export default class ProvideComponent extends Vue {
  @Provide('message') messageForProvide: string = 'This is Provide Message';
}
</script>

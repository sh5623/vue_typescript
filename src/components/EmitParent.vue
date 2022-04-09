<template>
  <div>
    <h4>Emit Component</h4>
    <EmitChildren @counter="addCount" />
    <p>부무에서 숫자를 보여줍니다 : {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmitChildren from '@/components/EmitChildren.vue';

@Component({
  components: {
    EmitChildren,
  },
})
export default class EmitParent extends Vue {
  count: number = 0;

  addCount() {
    this.count++;
  }
}
</script>

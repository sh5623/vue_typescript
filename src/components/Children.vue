<template>
  <div>
    <h4>Children Compoenent</h4>
    <span>{{ parentMessage }} {{ parentMessage2 }}</span>
    <p>{{ alertMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component
export default class Children extends Vue {
  @Prop() parentMessage?: string;
  @Prop() parentMessage2?: string;
  @Prop() alertMessage: string = '';

  @Watch('parentMessage2')
  update() {
    this.alertMessage = '메세지를 업데이트 했습니다.';
  }
}
</script>

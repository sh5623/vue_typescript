<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" width="60" /> Hello Kyla :)
    <hr />
    <div class="home">
      <Message />
      <Children :parentMessage="message" :parentMessage2="message2" />
      <button @click="changeMessage">메세지를 바꿔주세요.</button>
      <EmitParent />
      <ProvideComponent />
      <ModelComponents v-model="agree" @change="changeAgree" />
      <span>{{ agreeText }}</span>
      <AccordionComponents />
      <DropdownComponents />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/Message.vue'; // @ is an alias to /src
import Children from '@/components/Children.vue';
import EmitParent from '@/components/EmitParent.vue';
import ProvideComponent from '@/components/ProvideComponent.vue';
import ModelComponents from '@/components/ModelComponent.vue';
import DropdownComponents from '@/components/DropdownComponents.vue';
import AccordionComponents from '@/components/AccordionComponents.vue';

@Component({
  components: {
    Message,
    Children,
    EmitParent,
    ProvideComponent,
    ModelComponents,
    DropdownComponents,
    AccordionComponents,
  },
})
export default class HomeView extends Vue {
  message: string = "Hi, I'm Kyla.";
  message2: string = "Let's Study Vue.js + TypeScript!";
  agree: boolean = false;
  agreeText: string = '동의하지 않습니다.';

  private changeMessage() {
    this.message2 = 'Studying...';
  }

  private changeAgree(agree: boolean) {
    this.agree = agree;
    this.agreeText = agree ? '동의합니다.' : '동의하지 않습니다.';
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>

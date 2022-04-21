<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
    />
    <img alt="Vue logo" src="../assets/to-do-list.png" width="60" />
    <strong>Kyla's Todo List</strong>
    <hr />
    <div class="TodoMain">
      <Header />
      <ItemInput />
      <ItemList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/TodoComponents/Header.vue';
import ItemInput from '@/components/TodoComponents/ItemInput.vue';
import ItemList from '@/views/ItemList.vue';

@Component({
  components: {
    Header,
    ItemInput,
    ItemList,
  },
})
export default class VuexView extends Vue {}
</script>

<style lang="scss" scoped>
.TodoMain {
  text-align: center;
  padding: 100px;
}
</style>

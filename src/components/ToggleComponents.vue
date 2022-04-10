<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ToggleComponents extends Vue {
  public show: boolean = false;
  public toggle() {
    this.show = !this.show;
  }
}
</script>

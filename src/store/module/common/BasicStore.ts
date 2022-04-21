import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '../../';

@Module({ store, name: 'Basic', namespaced: true, dynamic: true })
class BasicModule extends VuexModule {
  // state
  public count: number = 0;

  // getters
  get countData() {
    return this.count;
  }

  // mutations
  @Mutation
  private setCount(count: number) {
    this.count = count;
  }

  // actions
  @Action({ commit: 'setCount' })
  public increase() {
    return this.count + 1;
  }

  @Action({ commit: 'setCount' })
  public decrease() {
    let returnCount: number = 0;
    if (this.count <= 0) {
      alert('0 이하로는 감소가 불능 합니다.');
      returnCount = 0;
    } else {
      returnCount = this.count - 1;
    }
    return returnCount;
  }
}

export const BasicStore = getModule(BasicModule);

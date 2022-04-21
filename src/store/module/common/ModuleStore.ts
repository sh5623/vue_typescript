import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '../../';

@Module({ store, name: 'Module', namespaced: true, dynamic: true })
class ModuleSample extends VuexModule {
  // state
  public data: string = 'Module A';

  // getters
  get moduleData() {
    return this.data;
  }

  // mutations
  @Mutation
  private setData(data: string) {
    this.data = data;
  }

  // actions
  @Action
  public setRootData(data: string) {
    this.context.commit('setData', data);
  }
}

export const ModuleStore = getModule(ModuleSample);

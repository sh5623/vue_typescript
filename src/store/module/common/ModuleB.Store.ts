import { ActionContext, Module } from 'vuex';
import { RootState } from './ModuleStore';

interface moduleB {
  data: string;
}

const module: Module<moduleB, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleB',
  },
  mutations: {
    setData(state: RootState, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }: ActionContext<RootState, RootState>, data: string) {
      commit('setData', data);
    },
  },
};

export default module;

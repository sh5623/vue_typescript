import { ActionContext, Module } from 'vuex';
import { RootState } from './ModuleStore';

interface moduleA {
  data: string;
}

const module: Module<moduleA, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleA',
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

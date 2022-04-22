import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '../..';
import LocalApi from '@/service/api/local/localApi';
import { AxiosResponse } from 'axios';

export interface Item {
  id: number;
  title: string;
  status: string;
}

@Module({ store, name: 'Todo', namespaced: true, dynamic: true })
class TodoModule extends VuexModule {
  // state
  public todoList: Item[] = [];

  // getters
  get allTodoList() {
    return this.todoList;
  }

  get activeTodoList() {
    return this.todoList.filter((item: Item) => item.status === 'active');
  }

  get clearTodoList() {
    return this.todoList.filter((item: Item) => item.status === 'clear');
  }

  // mutations
  @Mutation
  public addItem(item: Item) {
    this.todoList.push(item);
  }

  @Mutation
  public changeStatus({ id, status }: { id: number; status: string }) {
    this.todoList[id].status = status;
  }

  @Mutation
  public removeItem(id: number) {
    this.todoList.splice(id, 1);
  }

  @Mutation
  public setTodoList(todoList: Item[]) {
    this.todoList = todoList;
  }

  // actions
  @Action({ rawError: true })
  public async initTodoList() {
    const response: AxiosResponse<{ todoList: Item[] }> =
      await LocalApi.instance.get('todo.json');
    this.setTodoList(response.data.todoList);
  }
}

export const TodoStore = getModule(TodoModule);

import * as v from "vuex"



declare module "vuex" {

  interface StoreOptions<S> {
    initState?:boolean;
  }

  interface Store<S> {
    /**
     * 定义计算属性 keyName ，表示 state 在 localStorage 中的键名 ，当访问 keyName 时，如果 keyName 不存在，则会取默认值 'StoreState'
     */
    keyName:string;


    /**
     * 将 state 存储在 localStorage 中；
     * @param keyName ? : string  存储在 localStorage 中的键名，如果未设置该参数，则自动次用 store.keyName 的值作为键名
     */
    saveState(keyName?:string):void;




    /**
     * 获取存储在 localStorage 中的 state 对象
     * @returns state
     */
    getLocalState():any;

  }



  namespace Store {
    // 给 Vuex.Store 添加 mergeStoreConfigs 方法
    export function mergeStoreConfigs<S>(storeConfigs:StoreOptions<S>[]):StoreOptions<S>;

    // 给 Vuex.Store 添加 configStoreOptionsWhitInitState 方法
    export function configStoreOptionsWhitInitState<S>(storeOptions:StoreOptions<S>, initState:S, edulcoration?:boolean):StoreOptions<S>;


// 给 Vuex.Store 添加 mergeStoreConfigsWhitInitState 方法
    export function mergeStoreConfigsWhitInitState<S>(storeConfigs:StoreOptions<S>[], initState:S):StoreOptions<S>;

  }

}

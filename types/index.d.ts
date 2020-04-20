import Vuex, {StoreOptions,Store} from "vuex";
import * as vx from "vuex"
// import * as vxi from "vuex/types/index"


declare module vuex {

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




  /**
   * 把 store 配置数组中所有的配置对象合并成一个store配置对象
   * @param storeConfigs : Array<StoreOptions>  store 的配置数组
   * @returns StoreOptions    store选项对象
   *
   */
  function mergeStoreConfigs<S>(storeConfigs:StoreOptions<S>[]):StoreOptions<S>;




  /**
   * 用初始 state 配置 store的选项对象
   * @param storeOptions : StoreOptions   store的选项对象
   * @param initState : State    初始state
   * @param edulcoration : boolean   可选；是否除杂，即：是否需要忽略 storeOptions 的 state 中没有的属性 ；
   * @returns StoreConfig    返回带有初始 state 的配置对象
   *
   *
   * 说明：
   * 由于模块 modules 中的 state 会覆盖全局的 state ，所以，通过把初始 state 传给全局的 state 的方式不能达到给模块设置初始值的目的；
   * 此方法就是为解决这个问题而来的；
   *
   * 注意：
   * 如果某些模块 module 不想用入参 initState 中的 state 作为初始值，只用 module 本身设置的 state 作为初始值，则可以在该模块的 storeOptions 对象中增加一个布尔类型的选项 initState ，其值为 true ，即可；
   * initState 选项表示：是否用该 storeOptions 中配置的 state 作为初始的 state
   *
   * 示例：
   * {
   *   modules:{},
   *   state:{},
   *   mutations:{},
   *   actions:{},
   *   getters:{},
   *   plugins:[],
   *   strict:false,
   *   initState:true
   * }
   *
   */


  function configStoreOptionsWhitInitState<S>(storeOptions:StoreOptions<S>, initState:S, edulcoration?:boolean):StoreOptions<S>;



  /**
   * 把 store 配置数组中所有的配置对象合并成一个带有初始 statestore配置对象
   * @param storeConfigs : Array<StoreOptions>  store 的配置数组
   * @param initState : State    初始state
   * @returns StoreOptions    返回带有初始 state 的选项对象
   */
  function mergeStoreConfigsWhitInitState<S>(storeConfigs:StoreOptions<S>[], initState:S):StoreOptions<S>;


    namespace Store {
    // 给 Vuex.Store 添加 mergeStoreConfigs 方法
    export function mergeStoreConfigs<S>(storeConfigs:StoreOptions<S>[]):StoreOptions<S>;

    // 给 Vuex.Store 添加 configStoreOptionsWhitInitState 方法
    export function configStoreOptionsWhitInitState<S>(storeOptions:StoreOptions<S>, initState:S, edulcoration?:boolean):StoreOptions<S>;


// 给 Vuex.Store 添加 mergeStoreConfigsWhitInitState 方法
    export function mergeStoreConfigsWhitInitState<S>(storeConfigs:StoreOptions<S>[], initState:S):StoreOptions<S>;

  }

}

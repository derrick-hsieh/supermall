// import {createStore} from 'vuex'
import Vue from 'vue'
import Vuex from 'vuex'

//安裝插件
Vue.use(Vuex)

//創建store對象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
       //mutation的目的是修改state狀態
       //事件比較單一
        addCounter(state,payload){
            payload.count++
            
        },
        addToCart(state, payload){
            payload.checked=true
            state.cartList.push(payload)
        }
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    },
    actions:{
         addCart(context, payload){
            let oldProduct = context.state.cartList.find(i=>i.id ===payload.id)
            if(oldProduct){
                // oldProduct.count+=1
                context.commit('addCounter', oldProduct)
            }else{
                payload.count =1
                context.state.cartList.push(payload)
                // context.commit('addToCart', payload)
            }
            

        }
    }
})
export default store


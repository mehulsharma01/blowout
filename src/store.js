import { createStore } from "vuex";

export default createStore({
    state:{ // global data
        openchart:false,
        subTotal:"$0.00",
        itemsCount:0,
        cartObj:[],
    },
    mutations:{  // update data 
        addNewItem(state, payload) {
            console.log(state.cartObj);
                const findex = state.cartObj.findIndex((items) => items.unid == payload.unid);
                if(findex == -1){
                    state.cartObj.push({ ...payload });
                    state.itemsCount = state.cartObj.length;
                }
                else{
                  //  this.commit('increment',findex);
                  state.cartObj[findex]["count"] ++ ;
                }
                state.openchart = true;
                this.commit('calcTotal');
                window.localStorage.setItem("cartItems",JSON.stringify(state.cartObj));
        },
        closeCartfn(state,payload){
            state.openchart = payload;
        },
        openCartfn(state,payload){
            state.openchart = payload;
        },
        removeCartItem(state,index){
            state.cartObj.splice(index,1);
            state.itemsCount = state.cartObj.length;
        },
        calcTotal(state){
            var sum = 0;
            for(var i=0;i<state.cartObj.length;i++){
                sum += Number(state.cartObj[i]['price'].substring(1))* Number(state.cartObj[i]['count']);
            }
            state.subTotal = "$"+sum.toFixed(2);
        },
        localStore(state){
            console.log(state);
            if(window.localStorage.getItem("cartItems") != null && window.localStorage.getItem("cartItems") != undefined){
                state.cartObj = JSON.parse(window.localStorage.getItem("cartItems"));
                state.itemsCount = state.cartObj.length;
                this.commit('calcTotal');
            }
        }
    },
    actions:{ // add functionality
        changeCart(context,payload){
            context.commit('addNewItem',payload);
        }
    },
    getters:{ // modify data
    
    }
})
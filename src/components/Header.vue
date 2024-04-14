<template>
    <div class="header-container">
        <router-link to="/" style="text-decoration:none;">
            <h5 class="text-white text-upper mb-0">Brazilian Blowout</h5>
        </router-link>
        
        <div class="header-navigation d-none d-lg-block">
            <ul>
                <li><a href="javascript:void(0);" class="header-link">Shop</a></li>
                <li><a href="javascript:void(0);" class="header-link">SALON TREATMENTS</a></li>
                <li><a href="javascript:void(0);" class="header-link">RESULTS</a></li>
                <li><a href="javascript:void(0);" class="header-link">ABOUT</a></li>
                <li><a href="javascript:void(0);" class="header-link">STYLIST LOCATOR</a></li>

            </ul>
        </div>
        <div class="header-cart">
            <div class="cart-icon-con" @click="openCart(true)">
            <i class="fa fa-cart-arrow-down cart-icon"></i>
            <span class="cart-count" v-if="itemsCount > 0">{{itemsCount}}</span>
            </div>
        </div>
    </div>

    <div class="cart-items-container" ref="cartcontainer" :class="{ showcart: openchart }">
        <img src="/static/images/cross-icon.png" class="cross-icon" @click="closeCart(false)"/>
        <div class="inner">
        <div class="d-flex align-items-center justify-content-between cart-header-con">
            <div class="cart-header-inner d-flex align-items-center">
                <div class="cart-logo-con">BB</div>
                <span>{{itemsCount}} Items</span>
            </div>
            <div class="cart-header-inner second">
                <p class="mb-0">{{this.$store.state.subTotal}}</p>
                <p class="mb-0">Subtotal</p>
            </div>
        </div>

        <div class="cart-body-con">
            <div class="row p-2 my-3" v-for="items,index in cartObj" :key="items">
                <div class="col-md-4 product-con">
                    <img :src="items.image" alt="product-image" class="img-fluid"/>
                </div>
                <div class="col-md-7 text-left">
                    <div class="cart-body-product-heading">
                        <h5>{{items.productHeading}}</h5>
                        <p>{{items.price}}</p>
                    </div>
                    <div class="counter">
                        <button id="decrement" @click="decrement(index)">-</button>
                        <span class="count" id="count">{{items.count}}</span>
                        <button id="increment" @click="increment(index)">+</button>
                        <p class="mb-0 pt-2 product-error-msg " ref="proerror" v-show="items.showerror">{{items.proerror}}</p>

                    </div>
                    
                </div>
            </div>

        </div>
        <router-link to="/checkout"><button type="button" class="primary-btn product-link mt-5" @click="closeCart(false)" v-if="itemsCount > 0">Checkout</button></router-link>

    </div>
    </div>
    <div class="opacity-container" :class="{ 'd-block': openchart }" @click="closeCart(false)"></div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name:"HeaderComp",
    methods:{
        ...mapMutations({
            openCart:"openCartfn",
            closeCart:"closeCartfn",
        }),

        decrement(index){
            if(this.cartObj[index]["count"] > 1){
                this.cartObj[index]["count"] -- ;
                this.$refs.proerror[index].classList.remove("error");
                this.$refs.proerror[index].innerHTML = this.cartObj[index]["proerror"]
            }
            else{
                this.$store.commit('removeCartItem',index);
            }
            this.$store.commit('calcTotal');
            window.localStorage.setItem("cartItems",JSON.stringify(this.cartObj));

        },
        increment(index){
            if(this.cartObj[index]["count"] < this.cartObj[index]["avlProducts"]){
                this.cartObj[index]["count"] ++ ;
                
            }
            if(this.cartObj[index]["count"] == this.cartObj[index]["avlProducts"]){
                this.$refs.proerror[index].classList.add("error");
                this.$refs.proerror[index].innerHTML = "Out of Stock"
            }
            this.$store.commit('calcTotal');
            window.localStorage.setItem("cartItems",JSON.stringify(this.cartObj));

        },
    },
    computed:{
        ...mapState({
            openchart:(state) => state.openchart,
            cartObj:(state) => state.cartObj,
            itemsCount:(state) => state.itemsCount,
        }),
    }
}

</script>

<style scoped>
</style>
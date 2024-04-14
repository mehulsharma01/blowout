<template>
    <div class="checkout-container">
        <div class="row" v-if="cartObj.length > 0">
            <div class="col-md-7">
                <div class="shipping-form-container mt-5">
                    <h2 class="mb-3">Shipping Information</h2>
                    <form @submit.prevent="submitForm" ref="form" class="text-left">
                        <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your full name" required v-model="formData.name">
                        </div>
                        <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter your address" required  v-model="formData.address">
                        </div>
                        <div class="row mb-3">
                        <div class="col-md-4">
                            <label for="city" class="form-label">City</label>
                            <input type="text" class="form-control" id="city" placeholder="Enter your city" required v-model="formData.city">
                        </div>
                        <div class="col-md-4">
                            <label for="state" class="form-label">State</label>
                            <input type="text" class="form-control" id="state" placeholder="Enter your state" required  v-model="formData.state">
                        </div>
                        <div class="col-md-4">
                            <label for="zip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="Enter your zip code" required  v-model="formData.zip">
                        </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="primary-btn product-link">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="col-md-5">
                <div class="cart-items-container checkout-cart-container" ref="cartcontainer">
`                    <div class="inner">
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

                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="mt-5 mb-5 empty-cart-container">
            <h4>Your Cart is Empty!</h4>
            <router-link to="/"><button type="button" class="primary-btn product-link mt-2">Add Products</button></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name:"CheckoutComp",
    data(){
        return{
            formData:{
                name:"",
                address:"",
                city:"",
                state:"",
                zip:""
            }
        }
    },
    methods:{
        ...mapMutations({
            openCart:"openCartfn",
            closeCart:"closeCartfn",
            localStore:"localStore",
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
        async submitForm(){
            //this.localStore;
            console.log(this.formData);
            console.log(this.cartObj);
            if(this.cartObj.length == 0){ 
                alert("Your Cart is Empty!"); return false;
            }
                try {
                    const response = await axios.post('http://localhost:3000/details',
                    {id:"1","form":this.formData,"products":this.cartObj}
                    );
                        if(response.data.products.length > 0){
                            await window.localStorage.removeItem("cartItems");
                            //location.href = "/success";
                            this.$router.push('/success')
                        }
                
                } 
                catch (error) {
                        console.error('Error fetching data:', error);
                }
        }
    },
    computed:{
        ...mapState({
            openchart:(state) => state.openchart,
            cartObj:(state) => state.cartObj,
            itemsCount:(state) => state.itemsCount,
        }),
    },
    mounted(){
        this.$store.commit('localStore');
        if(this.cartObj == 0){
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>
.shipping-form-container{
    padding:40px 100px;

}
.form-control{
    border:1px solid black;

}
.checkout-cart-container{
position: inherit;
    width: auto;
    height: 100%;
    box-shadow: none;
}

.cart-items-container.checkout-cart-container .cart-body-con .product-con{
    width:100px;
}
.cart-items-container .inner{
    margin-top:0;
}

.shipping-form-container label{
    text-transform: uppercase;
    font-size:1.2rem;
    letter-spacing: 1px;;
}
.shipping-form-container input{
    padding:10px 7px;
    border-radius:0;
    border:2px solid #000;
    font-size:16px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
}
.shipping-form-container button[type="submit"]{
    width:200px;
    margin-top:30px;
}

.empty-cart-container{
    width:300px;
    margin:0 auto;
}

</style>



<!-- call axois with php and checkout page -->
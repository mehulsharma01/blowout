<template>
      <div>
            <div class="mt-5 mb-5 empty-cart-container">
            <h4>Success</h4>
            <p>Thank you for Shopping with us!</p>
            <router-link to="/"><button type="button" class="primary-btn product-link mt-2">More Products</button></router-link>
            </div>
        </div>
</template>

<script>
export default {
    name:"SuccessComp",
    data(){
        return{

        }
    }
}

</script>
<style scoped>

.empty-cart-container{
    width:300px;
    margin:0 auto;
}
.empty-cart-container h4{
    color:green;
    font-size:2rem;
}

</style>
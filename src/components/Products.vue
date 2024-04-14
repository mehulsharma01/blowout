<template>
    <div class="product-list-con pt-4" v-if="bestsellerPro != 'false'">
        <div class="d-flex justify-content-between align-items-center text-upper">
            <h2 class="text-left pb-3 text-upper" @click="onmorefn">{{ProductHeading}}</h2>
            <a href="javascript:void(0);" class="view-link">View All</a>
        </div>
        <carousel class="products-container" :items-to-show="2" :items-to-scroll="1" :breakpoints="breakpoints">
            <slide v-for="items,index in productObj" :key="items">
                <div class="product-con">
                    <div class="d-flex justify-content-center product-con-inner position-relative">
                        <span class="product-tag text-upper" v-if="items.tagshow">{{items.tag}}</span>
                        <img :src="items.image" class="img-fluid"/>
                    </div>
                    <div class="text-left pt-3 pb-3 product-details-con">
                        <span><i class="fa fa-star"></i> {{items.review}}</span>
                        <h4 class="pt-2">{{items.name}}</h4>
                        <p>{{items.price}}</p>
                        <button type="button" class="primary-btn product-link" :data-href="items.link" @click="addProduct(index,items.unid)">Quick Add+</button>
                    </div>
                </div>
            </slide>
            <template #addons>
              <pagination />
            </template>
          </carousel>
    </div>
    <!-- bestseller products -->


    <div class="product-list-con related-products pt-4 mt-4" v-if="relatedPro != 'false'">
        <div class="d-flex justify-content-between align-items-center text-upper">
            <h2 class="text-left pb-3 text-upper">{{reltitle}}</h2>
            <a href="javascript:void(0);" class="view-link">View All</a>
        </div>
        <carousel class="products-container" :items-to-show="2" :items-to-scroll="1" :breakpoints="breakpoints">
            <slide v-for="items,index in RelatedObj" :key="items">
                <div class="product-con">
                    <div class="d-flex justify-content-center product-con-inner position-relative">
                        <span class="product-tag text-upper" v-if="items.tagshow">{{items.tag}}</span>
                        <img :src="items.image" class="img-fluid"/>
                    </div>
                    <div class="text-left pt-3 pb-3 product-details-con">
                        <span><i class="fa fa-star"></i> {{items.review}}</span>
                        <h4 class="pt-2">{{items.name}}</h4>
                        <p>{{items.price}}</p>
                        <button type="button" class="primary-btn product-link" :data-href="items.link" @click="addProduct(index,items.unid)">Quick Add+</button>
                    </div>
                </div>
              </slide>
              <template #addons>
              <pagination />
            </template>
        </carousel>
    </div>
    <!-- Related Products -->
  </template>
  
  <script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'


  export default {
    name: 'ProductsComp',
    props:{
        bestsellerPro:Boolean,
        relatedPro:Boolean,
        reltitle:String,
    },
    data() {
      return {
        ProductHeading:"AFTERCARE & STYLING",
        newcartObj:{},
        productObj: [{
          unid:"1",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$14.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:5,
          showerror:true,
          proerror:"Only 5 Products Left!"
        },{
          unid:"2",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$34.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"3",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"4",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"5",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        }],

        RelatedHeading:"Top seller",
        RelatedObj:[{
          unid:"1",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$14.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:5,
          showerror:true,
          proerror:"Only 5 Products Left!"
        },{
          unid:"2",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$34.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"3",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"4",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        },{
          unid:"5",
          image: "https://www.brazilianblowout.com/cdn/shop/products/11R01C_cd11a86f-0363-4052-9f9d-f8c10d4522db.png?v=1636409995&width=300",
          name:"Anti-Frizz Shampoo",
          link:"/product-details",
          price:"$40.00",
          review:"4.2",
          tag:"Bestseller",
          tagshow:true,
          avlProducts:50,
          showerror:false,
          proerror:"Only 50 Products Left!"
        }],

        breakpoints: {
      // 700px and up
          767: {
            itemsToShow: 4,
            snapAlign: 'center',
          },

        },

      }
    },

    components:{
      Carousel,
      Slide,
      Pagination,
     // Navigation,
    },

    methods:{
      addProduct(index){
        var objkeys = Object.keys(this.productObj[index]);
       for(var i=0;i<objkeys.length;i++){
        this.newcartObj[objkeys[i]] = this.productObj[index][objkeys[i]];
       }
       this.newcartObj["count"] = 1;
        //console.log(this.newcartObj);
        this.$store.dispatch("changeCart",this.newcartObj);
      },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>


  </style>
  
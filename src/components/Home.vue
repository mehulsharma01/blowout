<template>
 <div>
    <carousel class="landing-slider" :items-to-show="1" :breakpoints="breakpoints">
        <slide v-for="items in sliderObj" :key="items">
          <div class="slider-inside-images">
            <img :src="items.sliderImage" class="img-fluid"/>
          </div>
        </slide>
      <!-- one end -->
      <template #addons>
        <navigation />
      </template>
    </carousel>

    <Products bestsellerPro="true" relatedPro="true" reltitle="TOP SELLERS"/>
    <!-- as seen in -->
    <div class="seen-container">
      <h1>{{seeObj.heading}}</h1>
      <div class="as-seen-con">
        <marquee>
          <div class="d-flex align-items-center justify-content-between seen-marquee-container">
            <img :src="arrayitem" class="img-fluid mx-4" v-for="arrayitem in seeObj.marqueeImages" :key="arrayitem"/>
        </div>
      </marquee>
        <div class="row pt-5 px-3">
          <div class="col-md-4" v-for="sellingItem in seeObj.sellingObj" :key="sellingItem" >
            <div class="sellingPoint-container position-relative">
              <img :src="sellingItem.image" class="img-fluid"/>
              <h2 class="text-upper">{{ sellingItem.heading }}</h2>
            </div>
          </div>
        </div> 
        <div class="seen-bottom-container pt-4">
          <img :src="seeObj.bottomImage" class="img-fluid"/>
        </div>
      </div>
    </div>

    <!-- in salon treatmetns -->
    <div class="blowout-treatments pt-5">
      <h5 class="text-upper">In salon</h5>
      <h1 class="pb-3">Brazilian Blowout In-Salon Treatments</h1>
      <a href="javascript:void:(0)" class="primary-btn sec-btn product-link">FIND A CERTIFIED STYLIST</a>
      <Products bestsellerPro="false"  relatedPro="true" reltitle="FAN FAVORITES"/>
    </div>
    
    <!-- before and after container -->
    <div class="row results-container py-5">
      <div class="col-md-6">
        <div class="bnda-container">
        <div class="container" :style="{ '--position': position }">
          <div class="image-container">
            <img
              class="image-before slider-image"
            :src="resultsObj.beforeImg"
              alt="color photo"
            />
            <img
              class="image-after slider-image"
              :src="resultsObj.afterImg"
              alt="black and white"
            />
          </div>
          <!-- step="10" -->
          <input
            type="range"
            min="4"
            max="95"
            value="50"
            aria-label="Percentage of before photo shown"
            class="slider"
            @input="updatePosition"
          />
          <div class="slider-line" aria-hidden="true"></div>
          <div class="slider-button" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
      </div>
      <div class="col-md-6 position-relative">
        <div class="results-inner-con">
            <h5 class="text-upper text-opacity">{{resultsObj.subHeading}}</h5>
            <h1 class="text-opacity">{{resultsObj.heading}}</h1>
            <p class="pb-3 ">{{resultsObj.paragraph}}</p>
            <a href="javascript:void:(0)" class="primary-btn sec-btn product-link text-upper">See More Results</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "./Products.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'HomeComp',
  data() {  
    return {
      sliderObj: [{
        sliderImage: "https://i.ytimg.com/vi/8anQ1CfKtX0/maxresdefault.jpg",
      }, {
        sliderImage: "https://i.ytimg.com/vi/BiA4bvwENFA/maxresdefault.jpg",
      }, {
        sliderImage: "https://i.ytimg.com/vi/Y_wX051fdIE/maxresdefault.jpg",
      }],
      seeObj:{
        heading:"As Seen In",
        bottomImage:"https://cdn.shopify.com/s/files/1/1412/4580/files/BrazilianBlowout-Desktop_1400x500px.png?v=1670501499",
        marqueeImages:[
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_NEW_BEAUTY_m.png?v=1695304652",
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_MANE_ADDICTS.png?v=1695318884",
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_INSTYLE.png?v=1695318884",
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_OPRAH.png?v=1695318883",
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_NEW_BEAUTY_m.png?v=1695304652",
          "https://www.brazilianblowout.com/cdn/shop/files/scroll_GQ_m.png?v=1695304677",
        ],
        sellingObj:[{
          image:"https://www.brazilianblowout.com/cdn/shop/files/Promotional_Block_m_1.png?v=1692131540&width=600",
          heading:"Shop All",
        },{
          image:"https://www.brazilianblowout.com/cdn/shop/files/pexels-maryia-plashchynskaya-3400764.png?v=1683547236&width=400",
          heading:"Smoothing",
        },{
          image:"https://www.brazilianblowout.com/cdn/shop/files/pexels-darina-belonogova-8789194.png?v=1683547249&width=400",
          heading:"Anti-Aging",
        }]
      },
      resultsObj:{
        beforeImg:"/static/images/2.jpg",
        afterImg:"/static/images/1.jpg",
        subHeading:"LIFE-CHANGING",
        heading:"Real Clients. Real Results.",
        paragraph:"Explore the testimonials of stylists and clients alike, as they recount the transformative effects of Brazilian Blowout's in-salon treatments, aftercare regimens, and premium styling products. From rejuvenated hair quality to enhanced styling versatility, discover how Brazilian Blowout has become a staple in their haircare routines, empowering individuals to achieve salon-quality results and embrace their best selves with confidence.",
      },

      breakpoints: {
      // 700px and up
        767: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
      },
      position: "0%",
    }
  },
  components:{
    Products,
    Carousel,
    Slide,
    Navigation,
  },
  methods:{
    updatePosition(e){
      this.position = `${e.target.value}%`;
    },
  },

  mounted(){
    this.$store.commit('localStore');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-slider, .slider-inside-images{
  height:90vh;
}
.slider-inside-images img{
  width:100%;
}

@media(max-width:1024px){
  .landing-slider, .slider-inside-images{
  height:auto;
}
}
</style>

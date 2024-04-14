<template>
    <div class="footer-container">
        <div class="row justify-content-between">
            <div class="col-md-5 footer-first-con">
                <h5 class="text-white text-upper">Brazilian Blowout</h5>
                <h2>Sign up to get notified about new product releases, giveaways and more!</h2>
                <form>
                    <div class="form-group d-flex radio-group">
                    <div class="form-check d-flex">
                        <input class="form-check-input" type="radio" name="customertype" id="consumerradio" value="Consumer" checked>
                        <label class="form-check-label" for="consumerradio">
                            Consumer
                        </label>
                    </div>
                    <div class="form-check d-flex radio-group ml-3">
                        <input class="form-check-input" type="radio" name="customertype" id="professionalradio" value="Professional">
                        <label class="form-check-label" for="professionalradio">
                        Professional
                        </label>
                    </div>
                    </div>

                    <div class="form-group py-3 position-relative">
                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>

                </div>
                </form>
            </div>
            <div class="col-md-2">
                <h5 class="text-white text-upper">About the brand</h5>
                <div class="footer-ul-con">
                    <ul>
                        <li><a href="javascript:void(0);" class="footer-link">FAQ's</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Contact</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Account</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <h5 class="text-white text-upper">COMPANY</h5>
                <div class="footer-ul-con">
                    <ul>
                        <li><a href="javascript:void(0);" class="footer-link">Privacy Policy</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Terms of Use</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Shipping & Returns</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Authorized Suppliers</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <h5 class="text-white text-upper">SOCIAL</h5>
                <div class="footer-ul-con">
                    <ul>
                        <li><a href="javascript:void(0);" class="footer-link">Instagram</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">Facebook</a></li>
                        <li><a href="javascript:void(0);" class="footer-link">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright-con text-left pt-3">
            <p class="text-white pb-0">© 2024, Brazilian Professionals, LLC. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'FooterComp',
    data() {},
  }

</script>
<style scoped>


</style>
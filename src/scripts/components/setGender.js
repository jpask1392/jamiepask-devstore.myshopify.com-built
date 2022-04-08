import { component } from 'picoapp';
import $ from 'jquery';

export default component((node, ctx) => {
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function changeGender(){
    var gender = getCookie('gender');
    if(gender == 'male'){
      $('.gender_btn').remove();
      $('body').addClass("male");
    $('body').removeClass("female");
      $('.navigation  .primary').prepend('<li class="gender_btn female_btn"><a class="main-nav-item" href="javascript:void(0);">Shop for Women</a></li>');
      $('.heroGender').text(' for men');
    }
    if(gender == 'female'){
      $('.gender_btn').remove();
      $('body').addClass("female");
    $('body').removeClass("male");
      $('.navigation  .primary').prepend('<li class="gender_btn male_btn"><a class="main-nav-item" href="javascript:void(0);">Shop for Men</a></li>');
      $('.heroGender').text(' for women');
    }
  }

  $( document ).ready(function() {
//     If the cookie is set to male, change the colors to male version
    if (document.cookie.indexOf("gender=male") >= 0){
      $("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6, .text-gender").css("color","#333e48");
        $(".btn-primary, .btn, .cta-btn, .gf_button.button.btn").css({"background-color": "#525d65", "box-shadow": "0 0 0 0.4rem #525d65"});
        $(".bg-tan").css("background-color","#919191");
        $(".capability-headline").css("color","#333e48");
        $(".arrow-link").css("color","#333e48");
        $(".toggle-link").css("color","#333e48");
        $(".homepagefaq").css("background-color","#333e48");
        $(".template-index .free-trial img").attr("src","{{ 'nexwear-male-box-open.png' | asset_url }}");
        $('img[alt="free trial"], .free-trial .box-image').attr('src', "{{ 'nexwear-male-box-open.png' | asset_url }}");    
    $('img[alt="seven pairs"], .free-trial .stater-pack-image').attr('src', "{{ 'male-starter-kit.png' | asset_url }}"); 
        $('img[alt="Card image"]').attr('src', "https://cdn.shopify.com/s/files/1/2382/5369/files/male_hero_banner.png?15085");          
        $(".bg-screen").css("background-color", "#F2F2F2");
        $(".nexwear-video iframe").attr("src","https://player.vimeo.com/video/330808809");
        $(".blockquote, .blockquote-footer, .bg-pattern *").css("color", "#FFF");
        $(".bg-pattern").css({"background-image": "url({{ 'nexwear-male-pattern.png' | asset_url }})", "background-color": "#525d65" });
        $(".inner-borders").css("border-color", "#fff");
        $(".home-hero.hero-mobile").css("background-image","url({{ 'nexwear-male-hero-mobile.jpg' | asset_url }})");
        $(".home-hero.hero-desktop").css("background-image","url({{ 'nexwear-male-hero.jpg' | asset_url }})");
        $(".home-hero .shop-button").attr("href","/collections/mens-nexwear");
          $(".testimonial .blockquote p").text('“The fit is excellent, more trim and less bulky than most I’ve tried.”');
          $(".testimonial .blockquote footer").text("Larry");
      $(".get-starter-pack").attr("href","/products/mens-starter-pack");
        
    }
    
//     If the cookie is set to female, change the colors to female version    
    if (document.cookie.indexOf("gender=female") >= 0){
      $("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6, .text-gender").css("color","#B28D4C");
        $(".btn-primary, .btn, .cta-btn, .gf_button.button.btn").css({"background-color": "#B28D4C", "box-shadow": "0 0 0 0.4rem #B28D4C"});          
        $(".bg-tan").css("background-color","#B28D4C");
        $(".capability-headline").css("color","#B28D4C");
        $(".arrow-link").css("color","#B28D4C");
        $(".toggle-link").css("color","#B28D4C");
        $(".template-index .free-trial img").attr("src","{{ 'nexwear-female-box-champagne.png' | asset_url }}");
        $('img[alt="free trial"], .free-trial .box-image').attr('src', "{{ 'nexwear-female-box-champagne.png' | asset_url }}");    
      $('img[alt="seven pairs"], .free-trial .stater-pack-image').attr('src', "{{ 'female-starter-kit.png' | asset_url }}"); 
        $('img[alt="Card image"]').attr('src', "https://cdn.shopify.com/s/files/1/2382/5369/files/nexwear-female-hero-mobile_1920x.jpg?v=1554488814");
        $(".bg-screen").css("background-color", "#FAF4EA");
        $(".nexwear-video iframe").attr("src","https://player.vimeo.com/video/329172442");
        $(".blockquote, .blockquote-footer, .bg-pattern *").css("color", "#B28D4C");
        $(".bg-pattern").css({"background-image": "url({{ 'nexwear-female-pattern.png' | asset_url }})", "background-color": "#EFDCB6"});
        $(".inner-borders").css("border-color", "#A1782F");
        $(".home-hero.hero-mobile").css("background-image","url({{ 'nexwear-female-hero-mobile.jpg' | asset_url }})");
    $(".home-hero.hero-desktop").css("background-image","url({{ 'nexwear-female-hero.jpg' | asset_url }})");
    $(".home-hero .shop-button").attr("href","/collections/womens-nexwear");
    $(".testimonial .blockquote p").text('“The fast absorbency is great! I’m secure again! Thank you Nexwear!!”');
    $(".testimonial .blockquote footer").text("Molly");
    $(".get-starter-pack").attr("href","/products/womens-starter-pack");
    }
    
    if(sessionStorage.getItem("modal-loaded") != "yes") {
      $("#ex1").modal();
      sessionStorage.setItem("modal-loaded", "yes");
    }

    changeGender();
  });

  // If the visitor choses male  
  $( ".image-male" ).click(function() {
    // Set the cookie to male and change the colors
    document.cookie = "gender=male;";
    $("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6, .text-gender").css("color","#333e48");
    $(".btn-primary, .btn, .cta-btn, .gf_button.button.btn").css({"background-color": "#525d65", "box-shadow": "0 0 0 0.4rem #525d65"});
    $(".bg-tan").css("background-color","#919191");
    $(".capability-headline").css("color","#333e48");
    $(".arrow-link").css("color","#333e48");
    $(".toggle-link").css("color","#333e48");
    $(".homepagefaq").css("background-color","#333e48");
    $(".template-index .free-trial img").attr("src","{{ 'nexwear-male-box-open.png' | asset_url }}");
  $('img[alt="free trial"], .free-trial .box-image').attr('src', "{{ 'nexwear-male-box-open.png' | asset_url }}");    
    $('img[alt="seven pairs"], .free-trial .stater-pack-image').attr('src', "{{ 'male-starter-kit.png' | asset_url }}"); 
    $('img[alt="Card image"]').attr('src', "https://cdn.shopify.com/s/files/1/2382/5369/files/male_hero_banner.png?15085");        
    $(".nexwear-video iframe").attr("src","https://player.vimeo.com/video/330808809");
    $(".bg-screen").css("background-color", "#F2F2F2");
    $(".blockquote, .blockquote-footer, .bg-pattern *").css("color", "#FFF");
    $(".bg-pattern").css({"background-image": "url({{ 'nexwear-male-pattern.png' | asset_url }})", "background-color": "#525d65" });
    $(".inner-borders").css("border-color", "#fff");
    $(".home-hero.hero-mobile").css("background-image","url({{ 'nexwear-male-hero-mobile.jpg' | asset_url }})");
    $(".home-hero.hero-desktop").css("background-image","url({{ 'nexwear-male-hero.jpg' | asset_url }})");
    $(".home-hero .shop-button").attr("href","/collections/mens-nexwear");
    $(".testimonial .blockquote p").text('“The fit is excellent, more trim and less bulky than most I’ve tried.”');
    $(".testimonial .blockquote footer").text("Larry");
    $(".get-starter-pack").attr("href","/products/mens-starter-pack");
    
    changeGender();
});  
// If the visitor choses female  
$( ".image-female" ).click(function() {
  //     Set the cookie to male and change the colors
    document.cookie = "gender=female;";
    $("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6, .text-gender").css("color","#B28D4C");
    $(".btn-primary, .btn, .cta-btn, .gf_button.button.btn").css({"background-color": "#B28D4C", "box-shadow": "0 0 0 0.4rem #B28D4C"});
    $(".bg-tan").css("background-color","#B28D4C");
    $(".capability-headline").css("color","#B28D4C");
    $(".arrow-link").css("color","#B28D4C");
    $(".toggle-link").css("color","#333e48");
  $(".template-index .free-trial img").attr("src","{{ 'nexwear-female-box-champagne.png' | asset_url }}");
    $('img[alt="free trial"], .free-trial .box-image').attr('src', "{{ 'nexwear-female-box-champagne.png' | asset_url }}");    
    $('img[alt="seven pairs"], .free-trial .stater-pack-image').attr('src', "{{ 'female-starter-kit.png' | asset_url }}"); 
  $('img[alt="Card image"]').attr('src', "https://cdn.shopify.com/s/files/1/2382/5369/files/nexwear-female-hero-mobile_1920x.jpg?v=1554488814");
  $(".bg-screen").css("background-color", "#FAF4EA");
  $(".nexwear-video iframe").attr("src","https://player.vimeo.com/video/329172442");
  $(".blockquote, .blockquote-footer, .bg-pattern *").css("color", "#B28D4C");
  $(".bg-pattern").css({"background-image": "url({{ 'nexwear-female-pattern.png' | asset_url }})", "background-color": "#EFDCB6"});
  $(".inner-borders").css("border-color", "#A1782F");
  $(".home-hero.hero-mobile").css("background-image","url({{ 'nexwear-female-hero-mobile.jpg' | asset_url }})");
  $(".home-hero.hero-desktop").css("background-image","url({{ 'nexwear-female-hero.jpg' | asset_url }})");
  $(".home-hero .shop-button").attr("href","/collections/womens-nexwear");
  $(".testimonial .blockquote p").text('“The fast absorbency is great! I’m secure again! Thank you Nexwear!!”');
  $(".testimonial .blockquote footer").text("Molly");
  $(".get-starter-pack").attr("href","/products/womens-starter-pack");
        
  changeGender();
});  
  
  $(document).on('click','.male_btn',function(){
    $( ".image-male" ).trigger('click');
    console.log('female_btn');
  });
  $(document).on('click','.female_btn',function(){
    $( ".image-female" ).trigger('click');
    console.log('male_btn');
  });
})

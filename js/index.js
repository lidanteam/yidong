  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay : 3000,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination'
    
    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  })   
  $(".ld_footer_dingwei li").tap(function(){
      $(".ld_footer_dingwei li").removeClass('ld_index_lisactive')
      $(this).addClass('ld_index_lisactive')
  })
$(function (){
   $('body > header .nav_bar .nav_bar_item > div > .click').mouseover(function (){
      $('body > header .nav_bar .mega_menu:visible').hide();
      $('body > header .nav_bar .sub_menu:visible').hide();
      
      $(this).find('+ .mega_menu').css('top','60px');
      $(this).find('+ .sub_menu').css('top','60px');
      
      $(this).find('+ .mega_menu').show();
      $(this).find('+ .sub_menu').show();
      
      $(this).find('+ .mega_menu').animate({
                top: "45px"
                }, 500);
      $(this).find('+ .sub_menu').animate({
                top: "45px"
                }, 500);        
   });
   
   isNavBarHidden = true;
   $('body > header .mobile_navs .menu_icon').click(function (){
       if(isNavBarHidden){
            $('body > header > .nav_bar').css('top','100px');
            $('body > header > .nav_bar').show();
            $('body > header > .nav_bar').animate({
                top: "48px"
                }, 500); 
            isNavBarHidden = false;
       }
        else{
            isNavBarHidden = true;
            $('body > header > .nav_bar').hide("slow");
        }
      
   });
});
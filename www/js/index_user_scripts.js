/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Pancakes */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_pancakes"); 
         return false;
    });
    
        /* button  #Back Button_pancakes */
    
    
        /* button  #Back Button_pancakes */
    $(document).on("click", "#Back Button_pancakes", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

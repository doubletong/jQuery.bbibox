;(function($){
    var defaults = {
        question : "Which is favourite Javascript library",
        url:"",
        buttonText:"Answer!",
        categories : ["jQuery","YUI","Dojo","ExtJs","Zepto"]
    }
     $.fn.bbibox = function(options){
          
         var config = $.extend({},defaults,options)
         
         $("<h1/>",{
             text: config.question
         }).appendTo(this);
         var form = $("<form/>").appendTo(this);
         
         var x,y;
         
         for ( x=0,y = config.categories.length; x<y; x++){
             $("<input/>",{
                 type:"radio",
                 name:"categories",
                 id: config.categories[x],
                 vavlue: config.categories[x]
                 
             }).appendTo(form);
             
             $("<label/>",{
                 text:config.categories[x],
                 "for":config.categories[x]
             }).appendTo(form);
             
         };
         
         $("<button/>",{
             text:config.buttonText
         }).appendTo(form);
     };
}(jQuery));
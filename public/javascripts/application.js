//lace your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//

$(document).ready(function(){

 $('ul.galleria').galleria(
  {
     history : false,
     clickNext : true,
     insert : '#main_images',
     onImage : function(image,caption,thumb){
               // fade in the image & caption
                if(! (jQuery.browser.mozilla && navigator.appVersion.indexOf("Win")!=-1) ) { // FF/Win fades large images terribly slow
                    image.css('opacity', .9).fadeTo('fast', 1);
                }
                if(caption.html() == ''){
                    caption.fadeOut('fast');
                }
                else{
                    caption.css('display','none').fadeIn('fast');
                }

                //// fetch the thumbnail container
                var _li = thumb.parents('li');

                //this creates problems
                //// fade out inactive thumbnail this is not working
                //_li.siblings().children().removeClass('selected');
                //_li.siblings().children().fadeTo('fast',0.65);

                //// fade in active thumbnail
                thumb.fadeTo('fast',1).addClass('selected');
 
                // add a title for the clickable image
                image.attr('title','Next image >>');

                jQuery('#galleria_container').trigger('img_change');
         
       },

            onThumb : function(thumb){ // thumbnail effects goes here

                // fetch the thumbnail container
                var _li = thumb.parents('li');

                // if thumbnail is active, fade all the way.
                var _fadeTo = _li.is('.active') ? '1' : '0.65';

                // fade in the thumbnail when finnished loading
                thumb.css({display:'none',opacity:_fadeTo}).fadeIn('fast');

                // hover effects
                thumb.hover(
                    function() { thumb.fadeTo('fast',1); },
                    function() { _li.not('.active').children('img').fadeTo('fast',0.65); } // don't fade out if the parent is active
                )
            }

      });
});

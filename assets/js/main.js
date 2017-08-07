var sc_project=11413507;
var sc_invisible=1;
var sc_security="9a854a3e";
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
$('.fa-angle-down').click(function() {
    $('html, body').animate({
        scrollTop: $(".post").offset().top
    }, 1000);
})
// <script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*var location = window.location;
var disqus_config = function () {
this.page.url = window.location;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = location.split('/')[location.split('/').length-1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
this.page.title = this.page.identifier;
};
*/
$(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'http://majidkn.com/assets/js/disqus.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
});
// </script>

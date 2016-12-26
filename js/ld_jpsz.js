/* 
* @Author: Marte
* @Date:   2016-12-26 16:01:02
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-26 22:15:30
*/

$(document).ready(function(){
    var ld_jpsz_bar=$(".ld_jpsz_bar li");
    var ld_jpsz_condi=$(".ld_jpsz_condi");
    ld_jpsz_condi.eq(0).show();
    ld_jpsz_bar.each(function(i){
        $(this).tap(function(){
            ld_jpsz_bar.removeClass("ld_jpsz_activelis");
            $(this).addClass("ld_jpsz_activelis");
            ld_jpsz_condi.hide();
            ld_jpsz_condi.eq(i).show();
        })
    })
});
/* 
* @Author: Marte
* @Date:   2016-12-26 16:01:02
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-26 16:22:46
*/

$(document).ready(function(){
    var ld_jpsz_condi=$(".ld_jpsz_condi");
    ld_jpsz_condi.tap(function(){
        console.log(8)
        ld_jpsz_condi.hide();
        $(this).show();

    })
});
$(function(){
  new TIPS('.what','.tips');
})
var TIPS = function(opener, tips){
    this.init(opener,tips);
}
TIPS.prototype = {
    init: function(opener, tips){
        this.opener = $(opener);
        this.tips = $(tips);
        this.bindEvent();
    },
    bindEvent: function(){
        var that = this;
        that.opener.hover(function(){
           that.tips.show();
        });
        that.opener.mouseout(function(){
            that.tips.hide();
        });
    }
}
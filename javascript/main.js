
$(function(){
  new EditPanel('.tile');
});
var EditPanel = function(tile){
    this.init(tile);
}
EditPanel.prototype = {
    init: function(tile){
        this.opener = $(tile);
        this.bindEvent();
    },
    bindEvent: function(){
    	var that = this;
    	that.opener.hover(function() {
    		$("<div class='edit-panel'><span class='fui-new-16'></span><span class='fui-cross-16'></span></div>").appendTo(this);
    	}, function(){
    		$(this).find('.edit-panel').remove();
    	});
    }
}

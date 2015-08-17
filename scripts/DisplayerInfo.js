(function() {
  var DisplayerInfo=function(el, displayed){
    this.displayed=displayed;
    this.el = $(this.template(this.displayed.data('info')));
    this.info;
  }
  DisplayerInfo.prototype.template = function(info) {
    return '<div class="displayer_info">'+info+'</div>';
  }
  DisplayerInfo.prototype.displayInfo=function(){
    this.info=this.displayed.data('info');
    console.log(this.info)
  }


  window.DisplayerInfo = DisplayerInfo;
}());
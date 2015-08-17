(function() {
    var Displayer= function(el){
    this.el= el;
    this.displayed;
    this.el.on('click', this.closeDisplay.bind(this));
  }
  Displayer.prototype.createInfo = function(){
    this.displayerInfo = new DisplayerInfo($('<div>'),this.displayed);
    this.el.append(this.displayerInfo.el);
    this.displayerInfo.displayInfo();
  }
  Displayer.prototype.zoomProj = function(event){
    this.displayed=$(event.target);
    this.displayed.clone().addClass('displayed').appendTo(this.el);
    this.createInfo();
    this.el.show('slow');
  }
  Displayer.prototype.closeDisplay = function(event) {
    this.el.children().remove();
    this.el.hide('slow');
  }

  window.Displayer = Displayer;
}());
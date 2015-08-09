(function() {
  var App = function(el, projects) {
    this.el = el;
    
    this.projectListing = new ProjectListing($('.gallery', this.el),projects);
    this.filterList     = new FilterList($('.filter-list', this.el),projects);
    this.displayer      = new Displayer($('.displayer', this.el))

    this.el.on('filter', this.onFilter.bind(this));
    this.el.on('project-zoom', this.onZoomProj.bind(this));
  }
  App.prototype.onFilter = function(event, selected) {
    this.projectListing.filter(selected);
  }
  App.prototype.onZoomProj = function(event) {
    this.displayer.zoomProj(event);
  }
  $(function(){
    var app = new App($('.portofolio'),projects);
  })
}());
(function() {
  var ProjectListing = function(el, projects) {
    this.el = el;
    this.projects=projects;
    projects.map(function(p) {
      var project = new Project($('<div>'), p);
      this.el.append(project.el);
    }.bind(this))
  }
  ProjectListing.prototype.filter = function(selected) {
    var category, isSelected;
    var ourClass = selected;
    this.el.children().hide();
    this.el.children().each(function(ix, item) {
      var categories = $(item).data('category').split(' ')
      var has = categories.filter(function(c) {
            return c === ourClass
          })
      if(has.length) {
        $(item).show('slow')
      };
    });
  }
  window.ProjectListing = ProjectListing
}());
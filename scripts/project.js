(function(){
 var Project = function(el, project) {
    this.project = project;
    this.displayed;
    this.el = $(this.template(project));
    this.el.on('click', this.onClick.bind(this));
  }
  Project.prototype.template = function(data) {
    return '<div class="project"'+'data-info="'+data.info +' " '+ ' data-category="'+ data.categories.join(' ')  +'">' +
        '<img src="'+ data.photo  +'" alt="Sample image"/>' +
      '</div>';
  }
  Project.prototype.onClick = function(event) {
    event.preventDefault();
    this.displayed = $(event.target);
    this.el.trigger('project-zoom', this.displayed);
  }
  window.Project = Project
}());
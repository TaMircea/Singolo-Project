(function() {
    var FilterList = function(el, projects) {
    var c;
    this.el = el;
    this.categories = {};
    projects.map(function(p) {
      p.categories.map(function(c) {
        this.categories[c] = true;
      }.bind(this))
    }.bind(this))
    for(c in this.categories) {
      this.el.append($(this.template(c)))
    }
    this.selected ;
    this.el.on('click', 'div', this.onClick.bind(this));
  }
  FilterList.prototype.template = function(cat) {
    return '<div data-value="'+ cat +'">'+ cat+'</div>'
  }
  FilterList.prototype.onClick = function(event) {
    this.selected = $(event.target).data('value');
    $(event.target).addClass('active');
    $(event.target).siblings().removeClass('active');
    this.el.trigger('filter', this.selected)
  }

  window.FilterList = FilterList;
}());
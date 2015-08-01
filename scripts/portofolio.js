  $(document).ready(function(){
    var that = this;
    var filters=('.portofolio_chooser div')
    var gallery=('.portofolio_gallery');

    $(filters).click(function() {
      var ourClass = $(this).attr('class');
      $(filters).removeClass('active');
      $(this).addClass('active');
      if(ourClass == 'all') {
        $(gallery).children('div').show("slow");
        }
      else {
        $(gallery).children(':not(.project-'+ourClass+')').hide("slow");
        $(gallery).children('.project-' + ourClass).show("slow");
        }
    });
  });

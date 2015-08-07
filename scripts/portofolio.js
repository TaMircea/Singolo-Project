  $(document).ready(function(){

    var that = this;
    var filters=('.portofolio_chooser div');
    var gallery=('.portofolio_gallery');
    var project=('.portofolio_gallery div')

    var displayer=('.project_displayer');
    var btnClose=('.close-button');
    var projInfo=('.project-displayer_info');


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
    })

    $(project).click(function(){
        var info=$(this).attr('info');
        console.log(info);
        $(this).clone().appendTo($(displayer));
        $(displayer).css("display","block");
        $(displayer).children().eq(1).addClass('displayed');
        $('<div class="project-displayer_info">'+info+'</div>').appendTo($(displayer).children().eq(1));
      });
    $(btnClose).click(function(){
      $(displayer).children().eq(1).remove();
      $(displayer).children(projInfo).remove();
      $(displayer).css("display","none");
    });


  });

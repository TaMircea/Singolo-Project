$(document).ready(function() {

    var Slider = function(id) {
      var $window = $(window);
      this.width= $window.width();
      this.currentSlide = 1;
      this.$slider = $(id+'.slideshow');
      this.$slideContainer = $('.slideshow_container',this.$slider);
      this.$slides = $('.slideshow_slide',this.$slideContainer);
      this.$btnPrev=$('.btn-prev',this.$slider);
      this.$btnNext=$('.btn-next',this.$slider);
      this.anim=1000;
      this.interval;
      var colors = ["#74d600","#2e00c5","#899ca4","#116493","#6e00fd","#ff3c3c","#41e1d1","#fd9e0a"];
      var that=this;
      this.totalWidth=0;
      this.widthRefresher=function(){
        that.width= $window.width(); 
        console.log("Width refreshed" +that);
      };
      this.widthRefresher();
      this.$slides.width(this.width);
      this.sliderInit();
      this.goNext=function(){
        that.$slideContainer.animate({'margin-left': '-='+that.width}, that.anim,function(){
          that.currentSlide++;
          if (that.currentSlide === that.$slides.length+1) {
            that.currentSlide = 1;
            that.$slideContainer.css('margin-left', -that.width);
          }
        });
      };
      this.goPrev=function(){
        that.$slideContainer.animate({'margin-left': '+='+that.width},that.anim,function(){
          that.currentSlide--;
          if (that.currentSlide < 1) {
            that.currentSlide = that.$slides.length;
            that.$slideContainer.css('margin-left',-1*(that.totalWidth-(2*that.width)) );
          }
        });
      };
      this.backgroundChanger=function(){
        var rand = Math.floor(Math.random()*colors.length);           
        that.$slideContainer.css("background-color", colors[rand]);
      }
      this.$btnNext.on('click',function(){
        that.goNext();
        that.backgroundChanger();
      });
      this.$btnPrev.on('click',function(){
        that.goPrev();
        that.backgroundChanger();
      });
      window.addEventListener('resize', function(event){
        that.widthRefresher();
        that.$slideContainer.children().width(that.width);
        that.setContainerWidth();
        that.$slideContainer.css('margin-left',-that.width)
    });




    };

    Slider.prototype.totalWidthCalc= function(){
      var that = this;
      that.totalWidth=0;
      $.each(that.$slideContainer.children(),
        function(){
          that.totalWidth+=that.width+4; 
          console.log(that.totalWidth);
        });
      console.log("Final Calc"+that.totalWidth);
    };  
    Slider.prototype.setContainerWidth=function(){
      var that = this;
      that.totalWidthCalc();
      that.$slideContainer.width(that.totalWidth);
    };
    Slider.prototype.sliderInit=function(){
      var that = this;      
      that.$slides.eq(0).clone().attr( 'id', 'Last' ).appendTo(that.$slideContainer);
      that.$slides.eq(-1).clone().attr( 'id', 'First' ).prependTo(that.$slideContainer);
      that.$slideContainer.css('margin-left',-that.width);
      
      that.setContainerWidth();
    };
    Slider.prototype.pauseSlider=function(){
      var that = this;
      clearInterval(that.interval);
    };
    Slider.prototype.startSlider=function(){
      var that = this;
      clearInterval(that.interval);
        that.interval = setInterval(function(){
          that.goNext()},3000);
    };
    var slider1 = new Slider('#slide-1');
});


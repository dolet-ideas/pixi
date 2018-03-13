class Paginator {
  constructor() {
      this.scrollEvents();
      this.clickEvents();
      this.activeSlide = 0;
      this.canGo = 1;
      this.max = 4;
  }
  scrollEvents(){
    let self = this;
      $(window).on('wheel', function (e) {

        let scrollUpDown;
        // let direction;
        if (!self.canGo) return;
        self.canGo = false;
        e = e.originalEvent;
        let direction = e.deltaY>0?1:-1;

        
        let newslide = self.activeSlide + direction;   

        // корректируе перелистывания за рамки всего слайдов        
        if (newslide > (self.max-1)) newslide = self.max-1;
        if (newslide < 0) newslide = 0;         
        if (self.activeSlide !== newslide)
          PubSub.publish('gotoslide', { from: self.activeSlide, to: newslide});
        // PubSub.publish('gotoslide', { from: self.activeSlide, to: newslide });

        self.activeSlide = newslide;
        setTimeout(() => {
          self.canGo = true;
        }, 1800);

      })
  }
  clickEvents(){
    var self = this;
    $('.pagination a').on('click',function (e){
      if (!self.canGo) return;

      var newslide = $(this).data('gotoslide');
      console.log('click --> newslide:',newslide);
      if (newslide!==self.activeSlide){
        PubSub.publish('gotoslide', { from: self.activeSlide, to: newslide });
        self.activeSlide = newslide;

      }
      

    })

  }

}
module.exports = Paginator;

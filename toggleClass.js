  var toggleClass = {
    init: function(_options){
      this.elm = _options.elm;
      this.defaultStatus = _options.defaultStatus;
      this.toggleClass = _options.toggleClass;
      this.toggleElements = [];
      this.currentElement = null;

      this.initElements();
      this.initClickEvents();
    },
    open: function(){
      $(this.currentElement).addClass(this.toggleClass);
      this.initStatus(true);
    },
    close: function(){
      $(this.currentElement).removeClass(this.toggleClass);
      this.initStatus(false);
    },
    toggle: function(){
      this.isOpened() ? this.close() : this.open();
    },
    isOpened: function(){
      //クリックした要素が opened かどうかチェック
      var self = this;
      var opened;
      $(this.toggleElements).each(function(_i,_obj){
        if(_obj.elm == self.currentElement){
          opened = _obj.opened;
          return false;
        } 
      });
      return opened;
    },
    initStatus: function(_opened){
      var self = this;
      $(this.toggleElements).each(function(_i,_obj){
        if(_obj.elm == self.currentElement){
          _obj.opened = _opened;
        } 
      });
    },
    initElements: function(){
      var self =  this;
      $(this.elm).each(function(_i,_obj){
        self.toggleElements[_i] = {
          elm: _obj,
          opened: self.defaultStatus
        };
      });
    },
    initClickEvents: function(){
      var self = this;
      $(this.elm).on('click',function(){
        self.currentElement = this;
        self.toggle(this);
      });
    }
  };

  toggleClass.init({
    elm: $('.js-textarea'),
    defaultStatus: false,
    toggleClass: 'textarea--expander'
  });

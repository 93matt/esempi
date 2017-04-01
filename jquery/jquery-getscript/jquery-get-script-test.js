var Library = {

  create: function(options) {
  
    options = {
      element: '<p/>',
      content: 'Test',
      target: 'body'
    };
    
    $(options.element).
    text(options.content).
    appendTo(options.target);
  
  
  },

  init: function() {
  
    this.create();
  
  }


};

var Gallery = new function() {

var timer = null, counter = -1;

var Plot = function ( stage ) {

  this.setDimensions = function( x, y ) {
    this.elm.style.width = x + 'px';
    this.elm.style.height = y + 'px';
    this.width = x;
    this.height = y;
  };
  
  this.setPath = function(path) {
  
  		this.elm.src = path;
  
  };
  
  this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.width / 2;
    var yoffset = arguments[2] ? 0 : this.height / 2;
    this.elm.style.left = (x - xoffset) + 'px';
    this.elm.style.top = (y - yoffset) + 'px';
    this.x = x;
    this.y = y;
  };
  this.kill = function() {
    stage.removeChild( this.elm );
  };
  this.rotate = function( str ) {
    this.elm.style.webkitTransform = this.elm.style.MozTransform = 
    this.elm.style.OTransform = this.elm.style.transform = 
    'rotate(' + str + ')'; 
  };
  this.content = function( content ) {
    this.elm.innerHTML = content;
  };
  
  this.elm = document.createElement( 'img' );
  this.elm.style.position = 'absolute';
  stage.appendChild( this.elm );
};

var generate = function() {

	var stage = document.getElementById('gallery'),
    plots = 10,
    increase = Math.PI * 2 / plots,
    angle = 0,
    x = 0,
    y = 0;
    
for( var i = 0; i < plots; i++ ) {
  var p = new Plot( stage );
  p.setDimensions( 50, 50);
  p.setPath('img/' + (i+1) + '.jpg');
  x = 100 * Math.cos( angle ) + 200;
  y = 100 * Math.sin( angle ) + 200;
  p.position( x,y );
  angle += increase;
}



};

var handle = function() {


	var images = $('img', '#gallery');
		
	timer = setInterval(function() {
	
		counter++;
		
		
		if(counter == (images.length-1)) {
		
			counter = -1;
		
		}
		
		images.eq(counter).animate({
			width: 100,
			height: 100
		}, 1000, function() {
		
			$(this).animate({
				width: 50,
				height: 50
			}, 1000);
		
		
		});
	
	
	}, 2000);


};

this.init = function() {

	generate();	
	handle();
};



}();

$(function() {

	Gallery.init();

});
var Plotter = function ( stage ) {

  this.setDimensions = function( x, y ) {
    this.elm.css('width', x + 'px');
    this.elm.css('height', y + 'px');
    this.width = x;
    this.height = y;
  };
  this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.width / 2;
    var yoffset = arguments[2] ? 0 : this.height / 2;
    this.elm.css('left', (x - xoffset) + 'px');
    this.elm.css('top', (y - yoffset) + 'px');
    this.x = x;
    this.y = y;
  };
  this.setBackground = function( col ) {
    this.elm.css('background', col);
  };
  this.kill = function() {
    this.elm.remove();
  };
  this.rotate = function( str ) {
    this.elm[0].style.webkitTransform = this.elm[0].style.MozTransform = 
    this.elm[0].style.OTransform = this.elm[0].style.transform = 
    'rotate(' + str + ')'; 
  };
  this.content = function( content ) {
    this.elm.html(content);
  };
  this.round = function( round ) {
    this.elm[0].style.borderRadius = round ? '50%/50%' : '';
  };
  this.elm = $('<div/>');
  this.elm.css('position', 'absolute');
  stage.append( this.elm );
};


$(function() {

	var stage = $('#test'),
    message = 'Gabriele Romanato '.toUpperCase(),
    plots = message.length,
    increase = Math.PI * 2 / plots,
    angle = -Math.PI,
    turnangle = 0,
    x = 0,
    y = 0,
    rx = 0,
    ry = 0,
    multiplier = 0,
    plotcache = [];
    
for( var i = 0; i < plots; i++ ) {
  var p = new Plotter( stage );
  p.content( message.substr(i,1) );
  p.setDimensions( 40, 40 );
  plotcache.push( p );
}
function rotate() {
  rx = 70 * Math.cos( angle ) + 200;
  ry = 70 * Math.sin( angle ) + 200;
  for( var i = 0; i < plots; i++ ) {
    x = 100 * Math.cos( angle ) + rx;
    y = 100 * Math.sin( angle ) + ry;
    x = contain( 70, 320, x );
    y = contain( 70, 320, y );
    turnangle = Math.atan2( y - ry, x - rx ) * 180 / Math.PI + 90 + 'deg';
    plotcache[ i ].rotate( turnangle );
    plotcache[ i ].position( x, y );
    angle += increase;
  }
  angle += 0.06;
}
function contain( min, max, value ) {
  return Math.min( max, Math.max( min, value ) );
}
setInterval( rotate, 1000 / 30 );




});
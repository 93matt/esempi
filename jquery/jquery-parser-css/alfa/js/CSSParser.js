/** jQuery CSS Parser
      @author Gabriele Romanato <www.css-zibaldone.com - gabriele.romanato@gmail.com>
      @version Beta
      @license  Free! 
      @note For testing only */


function CSSParser() {
    
    var that = this;
    var simpleSelectorsArr = ['a', 'abbr', 'acronym', 'address', 'blockquote', 'body',
                              'cite', 'code', 'del', 'dfn', 'div', 'em', 'fieldset', 
			      'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'html',
			      'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li',
			      'object', 'ol', 'optgroup', 'option', 'p', 'pre', 'q',
			      'samp', 'select', 'strong', 'tt', 'ul', 'var'];
			      
    var css21Props = ['background-attachment', 'background-color', 'background-image',
		      'background-position', 'background-repeat', 'background',
		      'border-collapse', 'border-color', 'border-spacing',
		      'border-style', 'border-top', 'border-right', 'border-bottom',
		      'border-left', 'border-top-color', 'border-right-color', 
		      'border-bottom-color', 'border-left-color', 'border-top-style',
		      'border-right-style', 'border-bottom-style', 'border-left-style',
		      'border-top-width', 'border-right-width', 'border-bottom-width',
		      'border-left-width', 'border-width', 'border', 'bottom', 
		      'caption-side', 'clear', 'clip', 'color', 'content', 'counter-increment',
		      'counter-reset', 'cursor', 'direction', 'display', 'empty-cells',
		      'float', 'font-family', 'font-size', 'font-style', 'font-variant',
		      'font-weight', 'font', 'height', 'left', 'letter-spacing', 'line-height',
		      'list-style-image', 'list-style-position', 'list-style-type', 'list-style',
		      'margin-right', 'margin-left', 'margin-top', 'margin-bottom', 'margin',
		      'max-height', 'max-width', 'min-height', 'min-width', 'orphans', 
		      'outline-color', 'outline-style', 'outline-width', 'outline', 'overflow',
		      'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding',
		      'page-break-after', 'page-break-before', 'page-break-inside', 'position',
		      'quotes', 'right', 'table-layout', 'text-align', 'text-decoration', 
		      'text-indent', 'text-transform', 'top', 'unicode-bidi', 'vertical-align',
		      'visibility', 'white-space', 'widows', 'width', 'word-spacing', 'z-index'];
		      
   
    
    var css21Values = ['scroll', 'fixed', 'inherit', 'transparent', 'left', 'center', 'right', 'top',
                       'bottom', 'repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'auto', 'none', 'both',
		       'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy',
		       'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'normal',
		       'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'crosshair',
		       'default', 'pointer', 'move', 'e-resize', 'ne-resize', 'nw-resize', 'n-resize',
		       'se-resize', 'sw-resize', 's-resize', 'w-resize', 'text', 'wait', 'help', 'progress',
		       'ltr', 'rtl', 'inline', 'block', 'list-item', 'run-in', 'inline-block', 'table',
		       'inline-table', 'table-row-group', 'table-header-group', 'table-footer-group',
		       'table-row', 'table-column-group', 'table-column', 'table-cell', 'table-caption',
		       'show', 'hide', 'italic', 'oblique', 'small-caps', 'bold', 'bolder', 'lighter',
		       '100', '200', '300', '400', '500', '600', '700', '800', '900', 'inside', 'outside',
		       'disc', 'circle', 'square', 'decimal', 'decimal-leading-zero', 'lower-roman',
		       'upper-roman', 'lower-greek', 'lower-latin', 'upper-latin', 'armenian', 'georgian',
		       'visible', 'hidden', 'scroll', 'always', 'avoid', 'static', 'relative', 'absolute',
		       'justify', 'underline', 'overline', 'line-through', 'blink', 'capitalize', 'uppercase',
		       'lowercase', 'embed', 'bidi-override', 'baseline', 'sup', 'super', 'text-top', 
		       'middle', 'text-bottom', 'collapse', 'pre', 'nowrap', 'pre-wrap', 'pre-line'];
		       
		       
    var pixels = new RegExp("\\d+px", "g");
    var ems = new RegExp("\\d+em", "g");
    var percentages = new RegExp("\\d+%", "g");
    var points = new RegExp("\\d+pt", "g");
    
    
    var rule = /^.+\{\n?.+\n?\}$/gm;
    var cssString = /".+"|'.+'/g;
    
    
   
   
    /** @return Array matches All simple selectors found */
    
    this.CSSSimpleSelectors = function() {
	var matches = [];
        $('pre').each(function() {
	
        var $element = $(this);
	var source = $element.html();
    
	var lines = source.split(/\n/);
    
        $.each(lines, function(line) {
	
	   var tokens = lines[line].split(/\s/);
	   
	   $.each(tokens, function(token) {
	   
	      $.each(simpleSelectorsArr, function(selector) {
	      
	          if(tokens[token] == simpleSelectorsArr[selector]) {
		  
		      matches.push(tokens[token]);
		      
		      
		  
		  }
	      
	      
	      });
	   
	   });
	
	});
    

       
   
    });

   return matches;

   };
   
   /** @return Array matches All CSS 2.1 properties found */
   
   this.CSS21Properties = function() {
   
       var matches;
       var $element = $('pre');
       var source = $element.html();
       
       matches = $.grep(css21Props, function(value, i) {
       
           var re = new RegExp(value, "g");
	   
	   return (re.test(source));
       
       });
       

       
       return matches;
   
   
   };
   
   /** @return Array matches All CSS 2.1 nominal values found */
   
   
   this.CSS21Values = function() {
   
       var matches;
       var $element = $('pre');
       var source = $element.html();
       
       matches = $.grep(css21Values, function(value, i) {
       
       
       
               var re = new RegExp(value, "g");
	   
	       return (re.test(source));
       
       
       
       });
       
       return matches;
   
   
   };
   
   /** @return Array matches All CSS length values found */
   
   
   this.CSSLengthValues = function() {
   
       var matches = [];
       var $element = $('pre');
       var source = $element.html();
       
       if(pixels.test(source)) {
           var px = source.match(pixels).toString();
	   matches.push(px);
       }
       if(ems.test(source)) {
           var em = source.match(ems).toString();
	   matches.push(em);
	}
	
       if(percentages.test(source)) {
           var perc = source.match(percentages).toString();
	   matches.push(perc);
	}
	if(points.test(source)) {
           var pt = source.match(points).toString();
	   matches.push(pt);
	}
	
       
       
       return matches;
   
   
   };
   
   /** @return Array matches All CSS  strings found */
   
   
   this.CSSStrings = function() {
   
       var matches;
       var $element = $('pre');
       var source = $element.html();
       
       matches = source.match(cssString);
       
       return matches;
   
   };
   
   
   /** @return Array matches All CSS  rules found */
   
   
   this.CSSRules = function() {
   
       var matches;
       var $element = $('pre');
       var source = $element.html();
       
       matches = source.match(rule);
       
       return matches;
   
   };
   
   
   /** @return Array matches All single-line comments found */
   
   this.CSSSingleLineComments = function() {
   
       var singleLine;
       var matches = [];
       $('pre').each(function() {
            var $element = $(this);
	    var source = $element.html();
	    
	        
	    
	    var singleLineComments = /\/\*.+\*\//;
	    if(singleLineComments.test(source)) {
	    
	        singleLine = source.match(singleLineComments);
	    
	    }
	    
	          
           
       
            var singleLineString = singleLine.toString();
	    
	    matches.push(singleLineString);
       
       });
   
   
      return matches;
   };
   
   /** @return Array matches All multiple-line comments found */
   
   this.CSSMultipleLineComments = function() {
   
       var multiLine;
       var matches = [];
       
       var multiLineComment = /\/\*(.+\n)+.+?\*\//;
       
       var $element = $('pre');
       var source = $element.html();
       
       multiLine = source.match(multiLineComment);
       var multiLineString = multiLine[0].toString();
       
       matches.push(multiLineString);
       
       
       return matches;
   
   
   };
   
   /** @return Array matches All lines found with their number */
   
   this.CSSLines = function() {
   
       var counter = 0;
       var matches = [];
       
       $('pre').each(function() {
       
           var $element = $(this);
	   var source = $element.html();
	   var lines = source.split(/\n/);
	   
	   $.each(lines, function(line) {
	   
	       counter++;
	       var lineContent = lines[line];
	       if(lineContent == '') {
	           lineContent = 'Blank';
	       }
	       var resultingString = 'Line ' + counter + ': ' + lineContent;
	       matches.push(resultingString);
	   
	   
	   });
       
       });
   
       return matches;
   };
   
   /** @return Array matches All pseudo-classes found */
   
   this.CSSPseudoClasses = function() {
   
       var link = /\:link/gi;
       var visited = /\:visited/gi;
       var hover = /\:hover/gi;
       var active = /\:active/gi;
       var focus = /\:focus/gi;
       var firstChild = /\:first-child/gi;
       var lang = /\:lang\(\w+\)/gi;
       var pseudoClasses = [link, visited, hover, active, focus, firstChild, lang];
       var matches = [];
       
      
       var $element = $('pre');
       var source = $element.html();
	   
       for(var i=0; i<pseudoClasses.length; i++) {
	   
	  var finds = source.match(pseudoClasses[i]);
	  
	  for(var j=0; j<finds.length; j++) {
	  
	      matches.push(finds[j]);
	  
	  }
	       
       }
	   
	return matches;
       
      
       
   
   };
   
   /** @return Array matches All pseudo-elements found */
   
   this.CSSPseudoElements = function() {
   
       var before = /\:before|\:\:before/gi;
       var after = /\:after|\:\:after/gi;
       var firstLetter = /\:first-letter/gi;
       var firstLine = /\:first-line/gi;
       var pseudoElements = [before, after, firstLetter, firstLine];
       var matches = [];
       
       var $element = $('pre');
       var source = $element.html();
       
       
       for(var i=0; i<pseudoElements.length; i++) {
	   
	  var finds = source.match(pseudoElements[i]);
	  
	  for(var j=0; j<finds.length; j++) {
	  
	  
	      matches.push(finds[j]);
	      
	  
	  } 
	       
       }
       
	   
       return matches;
   
   
   };
   
   /** @return Array matches All ID selectors found */
   
   this.CSSIDSelectors = function() {
   
       var IDSelector = /#[^\d|\{.+\}]+/gi;
       var matches = [];
       
       var $element = $('pre');
       var source = $element.html();
       
       var finds = source.match(IDSelector);
       
       matches = finds;
       
       return matches;
   
   };
   
   /** @return Array matches All class selectors found */
   
   this.CSSClassSelectors = function() {
   
       var classSelector = /\.\w+/gi;
       var matches = [];
       
       var $element = $('pre');
       var source = $element.html();
       
       var finds = source.match(classSelector);
       
       matches = finds;
       
       return matches;
   
   
   
   };
   
   /** @return Array matches All CSS 2.1 attribute selectors found */
   
   this.CSSAttributeSelectors = function() {
   
   
       
       var simple = /\[\w+\]/gi;
       var exact = /\[\w+="\w+"\]/gi;
       var partial = /\[\w+~="\w+"\]/gi;
       var alternate = /\[\w+\|="\w+"\]/gi;
       var matches = [];
       
       var $element = $('pre');
       var source = $element.html();
       
       var simpleFinds = source.match(simple).toString();
       var exactFinds = source.match(exact).toString();
       var partialFinds = source.match(partial).toString();
       var alternateFinds = source.match(alternate).toString();
       
       matches.push(simpleFinds, exactFinds, partialFinds, alternateFinds);
       
       return matches;
   
   
   };
   
  

}




(function($){
	$.mediaCheck = function (qry){
		var ret,
			style = document.createElement('style'),
			id = 'mqc_'+Math.floor(Math.random()*100)+new Date().getTime(),
			rules = document.createTextNode('@media '+qry+' {#'+id+'{visibility:hidden !important}}'),
			head = $('head')[0];
			body = $('body');
		style.type = 'text/css';
		if(style.styleSheet){style.styleSheet.cssText=rules.nodeValue;}
		else{style.appendChild(rules);}
		head.appendChild(style);
		
		// div should not be seen
		body.prepend('<div id="'+id+'" style="display:none" />');
		ret = $('#'+id).css('visibility') == 'hidden';
		
		//clean up
		body.remove('#'+id);
		return ret;
	};
})(jQuery);
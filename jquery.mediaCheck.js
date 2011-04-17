// jQuery extension for checking if css media query is supported

(function($,d){
  $.mediaCheck = function (qry){
    var ret,
      doc = d.documentElement,
      head = $('head')[0],
      i = Math.floor(Math.random()*100)+new Date().getTime(),
      body = $('<body />'); // we may not have a body if we are in the head

    return mC = function(qry) {
      var id = 'mc_'+(i++),
        style = '<style type="text/css" >@media '+qry+' {#'+id+'{visibility:hidden !important}} </style>';

      body.append(style);
      body.append('<div id="'+id+'" style="display:none" />'); //div should not be seen
      doc.appendChild(body[0]);
      ret = $('#'+id).css('visibility') == 'hidden';
      
      //clean up
      doc.removeChild(body[0]);
      return ret;
    }
  }();
})(jQuery,document);

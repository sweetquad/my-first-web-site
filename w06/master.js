var Body = {
  setColor: function(color){
    $('body').css('color', color);
    // document.querySelector('body').style.color=color;  
  },
  setBackgroundColor: function(color){
    $('body').css('background-color', color);
    // document.querySelector('body').style.backgroundColor=color;  
  }
}
var Links = {
  setColor : function(color){
    $("a").css('color', color)
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // } 
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value=='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('yellow'); 
    self.value='day';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');        
    Links.setColor('purple');
    self.value='night';
  }
} 
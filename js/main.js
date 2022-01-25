var fdiv = document.querySelector('body').firstElementChild;
        fdiv.style.cssText = 'display: none';
//window.onload = function(){
    
    //var banner = document.querySelector('[href*="https://www.mintme.com"]').parentElement;
        //banner.style.cssText = 'display: none !important'; 
//}
window.onload = function(){
    var fdiv = document.querySelector('body').firstElementChild;
        fdiv.style.cssText = 'display: none !important';
}
var btn = document.querySelector('.btn'),
    ul = document.querySelector('ul'),
    li = document.getElementsByClassName('li'),
    count = 1,
    header = document.querySelector('.header'),
    headP = document.querySelector('.header p')
function menu(){
    if(count == 0){
        count = 1;
        ul.style.display = 'block';
        header.style.cssText = 'background: #232323';
        btn.style.cssText = "background: url('../img/im(w).png') no-repeat center; background-size: contain"
        headP.style.cssText = 'color: #f9f9f9; font-weight: 500';
        for(var i = 0; i<li.length; i++)
            li[i].style.cssText = 'margin-top: -26px; opacity: 0';
    }else if(count == 1){
        count = 0;
        ul.style.display = 'block';
        header.style.cssText = 'background: #f9f9f9';
        btn.style.cssText = "background: url('../img/im.png') no-repeat center; background-size: contain"
        headP.style.cssText = 'color: #232323; font-weight: 600';
        for(var i = 0; i<li.length; i++)
            li[i].style.cssText = 'margin-top: 0px; opacity: 1';
    }
        
};
window.onscroll = function(){
    if(count == 0){
        count = 1;
        header.style.cssText = 'background: #232323';
        btn.style.cssText = "background: url('../img/im(w).png') no-repeat center; background-size: contain"
        headP.style.cssText = 'color: #f9f9f9; font-weight: 500';
        for(var i = 0; i<li.length; i++)
            li[i].style.cssText = 'margin-top: -26px; opacity: 0';
    }
}



var copyPhoneBtn = document.querySelector('.b-phone'); 
copyPhoneBtn.addEventListener('click', function(event) {  
    // Выборка ссылки с электронной почтой 
    var phoneLink = document.querySelector('.phone');  
    var range = document.createRange();  
    range.selectNode(phoneLink);  
    window.getSelection().addRange(range);  
      
    try {  
      // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
      var successful = document.execCommand('copy');  
      var msg = successful ? 'successful' : 'unsuccessful';  
      console.log('Copy phone command was ' + msg);  
    } catch(err) {  
      console.log('Oops, unable to copy');  
    }  
      
    // Снятие выделения - ВНИМАНИЕ: вы должны использовать
    // removeRange(range) когда это возможно
    window.getSelection().removeAllRanges();  
  });
var copyEmailBtn = document.querySelector('.b-mail');  
copyEmailBtn.addEventListener('click', function(event) {  
  // Выборка ссылки с электронной почтой 
  var emailLink = document.querySelector('.mail');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
    
  try {  
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
});

// var ul = document.querySelector('.nav ul')
// window.onload = function(){
//   var ulst = window.getComputedStyle(ul);
//   var ulw = ulst.width;
//   var imgbtn = document.querySelector('.btn');
//   if(ulw != '100px'){
//     imgbtn.style.width = '120px';
//   }

//   MEDIA
//   var context = document.querySelector('.context');
//   var nav = document.querySelector('.nav');
//   var navdisp = window.getComputedStyle(nav).display;
//   var contextdisp = window.getComputedStyle(context).display;
//   if(contextdisp == 'block'){
//     context.classList.remove('col-md-6');
//     context.classList.add('col-md-9');
//   }
// }

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .35;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
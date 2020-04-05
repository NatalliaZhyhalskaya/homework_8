
function down_contact_box() {
        let a = document.querySelectorAll('.contact_box');
    for(let i = 0, l = a.length; i < l; i++){
    if ( a[i].style.display == 'block' )
    a[i].style.display = 'none'
    else
    a[i].style.display = 'block';
    }
    }



function down_menu()
{
    let a = document.querySelectorAll('.hamburger_box');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}

function down_hamburger()
{
    let a = document.querySelectorAll('.hamburger_box');
    for(let i = 0, l = a.length; i < l; i++){
    if ( a[i].style.display == 'block' )
    a[i].style.display = 'none'
    else
    a[i].style.display = 'block';
}
}

function down()
{
    let a = document.querySelectorAll('.adventages_information_text_hidden');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}


function show_two()
{
    let a = document.querySelectorAll('.team_two');
    let b = document.querySelectorAll('.team_tree');
    let c = document.querySelectorAll('.team_four');
    let d = document.querySelectorAll('.team_five');
    let f = document.querySelectorAll('.team_one');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display = 'none') {
    a[i].style.display = 'block';
 b[i].style.display = 'none';
 c[i].style.display = 'none';
 d[i].style.display = 'none';
 f[i].style.display = 'none';
}
}
}
function show_tree()
{
    let a = document.querySelectorAll('.team_two');
    let b = document.querySelectorAll('.team_tree');
    let c = document.querySelectorAll('.team_four');
    let d = document.querySelectorAll('.team_five');
    let f = document.querySelectorAll('.team_one');
for(let i = 0, l = b.length; i < l; i++){
if ( b[i].style.display = 'none') {
    b[i].style.display = 'block';
 a[i].style.display = 'none';
 c[i].style.display = 'none';
 d[i].style.display = 'none';
 f[i].style.display = 'none';
}
}
}

function show_four()
{
    let a = document.querySelectorAll('.team_two');
    let b = document.querySelectorAll('.team_tree');
    let c = document.querySelectorAll('.team_four');
    let d = document.querySelectorAll('.team_five');
    let f = document.querySelectorAll('.team_one');
for(let i = 0, l = c.length; i < l; i++){
if ( c[i].style.display = 'none') {
    c[i].style.display = 'block';
 b[i].style.display = 'none';
 a[i].style.display = 'none';
 d[i].style.display = 'none';
 f[i].style.display = 'none';
}
}
}


function show_five()
{
    let a = document.querySelectorAll('.team_two');
    let b = document.querySelectorAll('.team_tree');
    let c = document.querySelectorAll('.team_four');
    let d = document.querySelectorAll('.team_five');
    let f = document.querySelectorAll('.team_one');
for(let i = 0, l = d.length; i < l; i++){
if ( d[i].style.display = 'none') {
    d[i].style.display = 'block';
 b[i].style.display = 'none';
 c[i].style.display = 'none';
 a[i].style.display = 'none';
 f[i].style.display = 'none';
}
}
}

function show_one()
{
    let a = document.querySelectorAll('.team_two');
    let b = document.querySelectorAll('.team_tree');
    let c = document.querySelectorAll('.team_four');
    let d = document.querySelectorAll('.team_five');
    let f = document.querySelectorAll('.team_one');
for(let i = 0, l = f.length; i < l; i++){
if ( f[i].style.display = 'none') {
    f[i].style.display = 'block';
 b[i].style.display = 'none';
 c[i].style.display = 'none';
 d[i].style.display = 'none';
 a[i].style.display = 'none';
}
}
}

$('selector').masonry();


// init Masonry
let $grid = $('.grid').masonry({
    // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});

jQuery(document).ready(function($) {
    $('.elements-gride').masonry({
        // options
    itemSelector: '.element-item',
    columnWidth: '.persent-size',
    gutter: '.gutter-width',
    percentPosition: true
    });
});


// для увеличения картинки

$(function(){
    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
          left: ($(document).width() - $('#magnify').outerWidth())/2,
          // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
        });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
   
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });
  
  
// ограничение символов в форме

function limitChars(textid, limit, infodiv)
{
let text = $('#'+textid).val();
let textlength = text.length;
if(textlength > limit)
{
$('#' + infodiv).html('<span>лимит '+limit+' символов исчерпан!</span>');
$('#'+textid).val(text.substr(0,limit));
return false;
}
else
{
$('#' + infodiv).html('characters '+ (limit - textlength) +' left');
return true;
} }
$(function(){
$('#comment').keyup(function(){
limitChars('comment', 40, 'charlimitinfo');
})
});

// липкий header

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){ 
        $('#navigation').addClass("sticky");
      }
      else{
        $('#navigation').removeClass("sticky");
      }
    });
    
// показываем картинки кнопками, скрывая ненужные

$(document).ready(function() {
 
    $(".btn_1").click(function() {
        $(".img_2").css({"display":"none"});
        $(".img_3").css({"display":"none"});
        $(".img_4").css({"display":"none"});
        $(".img_1").css({"display":"block"});
    });
 
});

$(document).ready(function() {
 
    $(".btn_2").click(function() {
        $(".img_1").css({"display":"none"});
        $(".img_3").css({"display":"none"});
        $(".img_4").css({"display":"none"});
        $(".img_2").css({"display":"block"});
    });
 
});

$(document).ready(function() {
 
    $(".btn_3").click(function() {
        $(".img_1").css({"display":"none"});
        $(".img_2").css({"display":"none"});
        $(".img_4").css({"display":"none"});
        $(".img_3").css({"display":"block"});
    });
 
});

$(document).ready(function() {
 
    $(".btn_4").click(function() {
        $(".img_1").css({"display":"none"});
        $(".img_2").css({"display":"none"});
        $(".img_3").css({"display":"none"});
        $(".img_4").css({"display":"block"});
    });
 
});

$(document).ready(function() {
 
    $(".btn_all").click(function() {
        $(".img_1").css({"display":"block"});
        $(".img_2").css({"display":"block"});
        $(".img_4").css({"display":"block"});
        $(".img_3").css({"display":"block"});
    });
 
});
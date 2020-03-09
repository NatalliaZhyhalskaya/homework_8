alert("ready for work");

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
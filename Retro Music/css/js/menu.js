let menu_btn = document.getElementById('menu-btn');
let menu_list = document.getElementById('menu-list');

menu_btn.eddEventListener('click',()=>{
       menu_list.classList.toggle('active-menu')
})
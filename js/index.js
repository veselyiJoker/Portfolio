'use strict'

let main = document.querySelector('.main');
let projects = document.querySelector('.projects');
let skills = document.querySelector('.skills');

let main_menu = document.querySelector('.main_menu');
let main_menu_item = document.querySelectorAll('.main_menu_item');

let active_item_point = document.querySelector('.active_item_point');
let main_menu_projects = document.querySelector('.main_menu_projects');
let main_menu_skills = document.querySelector('.main_menu_skills');
let second_pages_menu = document.querySelector('.second_pages_menu');
let second_pages_menu_contacts = document.querySelector('.second_pages_menu_contacts');
let second_pages_menu_main = document.querySelector('.second_pages_menu_main');
let second_pages_menu_about_me = document.querySelector('.second_pages_menu_about_me');

let scroll_to_top_btn = document.querySelector('.scroll_to_top_btn');

let scroll_btn_active_pointer = true;

window.onscroll = function () {

  if (scroll_btn_active_pointer) {
    if (window.pageYOffset > (window.innerHeight)) {
      scroll_to_top_btn.classList.add('scroll_to_top_btn_active');
      scroll_btn_active_pointer = false;
    } else {
      scroll_to_top_btn.classList.remove('scroll_to_top_btn_active');
    }
  }

  if (window.pageYOffset < (window.innerHeight)) {
    scroll_btn_active_pointer = true; 
  }

}

scroll_to_top_btn.onclick = function () {
  window.scrollTo(0,0);
  scroll_to_top_btn.classList.remove('scroll_to_top_btn_active');
}

main_menu_projects.onclick = function () {
  window.scrollTo(0,projects.getBoundingClientRect().y);
}

main_menu_skills.onclick = function () {
  window.scrollTo(0,skills.getBoundingClientRect().y);
}

second_pages_menu.addEventListener('mouseover', menu_mouseover);
second_pages_menu.addEventListener('mouseout', menu_mouseout);

second_pages_menu_contacts.addEventListener('mouseover',page1_mouseover);
second_pages_menu_contacts.addEventListener('mouseout',page1_mouseout);
second_pages_menu_main.addEventListener('mouseover',page2_mouseover);
second_pages_menu_main.addEventListener('mouseout',page2_mouseout);
second_pages_menu_about_me.addEventListener('mouseover',page3_mouseover);
second_pages_menu_about_me.addEventListener('mouseout',page3_mouseout);

second_pages_menu_contacts.addEventListener('click', page1_click);
second_pages_menu_main.addEventListener('click', page2_click);
second_pages_menu_about_me.addEventListener('click', page3_click);


let main_content = document.querySelector('.main_content');

let main_page = document.querySelector('.main_page');
let contacts_page = document.querySelector('.contacts_page');
let about_me_page = document.querySelector('.about_me_page');

let menu = document.querySelector('.pages_menu');
let page_areas_block = document.querySelector('.page_areas_block');
let hover_hint = document.querySelector('.hover_hint');
let dots_and_subtitle = document.querySelector('.dots_and_subtitle');
let down_arrow = document.querySelector('.down_arrow');




 // menu block dots/pages/dot_subtitles



let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');

let dot1_subtitle = document.querySelector('.dot1_subtitle');
let dot2_subtitle = document.querySelector('.dot2_subtitle');
let dot3_subtitle = document.querySelector('.dot3_subtitle');

let page1_area = document.querySelector('.page1_area');
let page2_area = document.querySelector('.page2_area');
let page3_area = document.querySelector('.page3_area');


menu.addEventListener('mouseover', menu_mouseover);
menu.addEventListener('mouseout', menu_mouseout);

function menu_mouseover() {

  main_content.classList.add('main_content_active');
  hover_hint.classList.add('hover_hint_active');
  dots_and_subtitle.classList.add('dots_and_subtitle_onmouseover');
  down_arrow.classList.add('down_arrow_hover');


  if (dot1.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(8.33333%)';
  }

  if (dot2.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(-25%)';
  }

  if (dot3.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(-58.3333%)';
  }

  

}


function menu_mouseout() {

  main_content.classList.remove('main_content_active');
  hover_hint.classList.remove('hover_hint_active');
  dots_and_subtitle.classList.remove('dots_and_subtitle_onmouseover');
  down_arrow.classList.remove('down_arrow_hover');


  if (dot1.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(0%)';
  }

  if (dot2.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(-33.3333%)';
  }

  if (dot3.classList.contains('active_dot')) {
    main_content.style.transform = 'translateX(-66.6666%)';
  }

}






// page areas onmouseover/onmouseout

let active_item_point_position = '0%';

page1_area.addEventListener('mouseover',page1_mouseover);
page1_area.addEventListener('mouseout',page1_mouseout);
page2_area.addEventListener('mouseover',page2_mouseover);
page2_area.addEventListener('mouseout',page2_mouseout);
page3_area.addEventListener('mouseover',page3_mouseover);
page3_area.addEventListener('mouseout',page3_mouseout);




function page1_mouseover() {

  contacts_page.classList.add('contacts_page_active');

  dot1.classList.add('dot_hover');
  dot1_subtitle.classList.add('subtitle_hover');
  dot1_subtitle.style.display = 'block';

  if ( dot1_subtitle.classList.contains('active_subtitle') ) {
    dot1_subtitle.style.display = 'block';
  }

  if ( dot2_subtitle.classList.contains('active_subtitle') ) {
    dot2_subtitle.style.display = 'none';
  }

  if ( dot3_subtitle.classList.contains('active_subtitle') ){
    dot3_subtitle.style.display = 'none';
  }


}



function page1_mouseout() {

  contacts_page.classList.remove('contacts_page_active');

  dot1.classList.remove('dot_hover');
  dot1_subtitle.classList.remove('subtitle_hover');
  dot1_subtitle.style.display = 'none';

  if ( dot1_subtitle.classList.contains('active_subtitle') ) {
    dot1_subtitle.style.display = 'block';
  }

  if ( dot2_subtitle.classList.contains('active_subtitle') ) {
    dot2_subtitle.style.display = 'block';
  }

  if ( dot3_subtitle.classList.contains('active_subtitle') ) {
    dot3_subtitle.style.display = 'block';
  }

}



function page2_mouseover() {

  main_page.classList.add('main_page_active');

  dot2.classList.add('dot_hover');
  dot2_subtitle.classList.add('subtitle_hover');
  dot2_subtitle.style.display = 'block';

  if ( dot1_subtitle.classList.contains('active_subtitle') ) {
    dot1_subtitle.style.display = 'none';
  }

  if ( dot2_subtitle.classList.contains('active_subtitle') ) {
    dot2_subtitle.style.display = 'block';
  }

  if ( dot3_subtitle.classList.contains('active_subtitle') ) {
    dot3_subtitle.style.display = 'none';
  }

}

function page2_mouseout() {

  main_page.classList.remove('main_page_active');

  dot2.classList.remove('dot_hover');
  dot2_subtitle.classList.remove('subtitle_hover');
  dot2_subtitle.style.display = 'none';

  if ( dot1_subtitle.classList.contains('active_subtitle') ) {
    dot1_subtitle.style.display = 'block';
  }

  if ( dot2_subtitle.classList.contains('active_subtitle') ) {
    dot2_subtitle.style.display = 'block';
  }

  if ( dot3_subtitle.classList.contains('active_subtitle') ) {
    dot3_subtitle.style.display = 'block';
  }

}





function page3_mouseover() {

  about_me_page.classList.add('about_me_page_active');

  dot3.classList.add('dot_hover');
  dot3_subtitle.classList.add('subtitle_hover');
  dot3_subtitle.style.display = 'block';

  if ( dot1_subtitle.classList.contains('active_subtitle') ) {

    dot1_subtitle.style.display = 'none';

  } else if ( dot2_subtitle.classList.contains('active_subtitle') ) {

    dot2_subtitle.style.display = 'none';

  } else {

    dot3_subtitle.style.display = 'block';

  }


}

function page3_mouseout() {

  about_me_page.classList.remove('about_me_page_active');

  dot3.classList.remove('dot_hover');
  dot3_subtitle.classList.remove('subtitle_hover');
  dot3_subtitle.style.display = 'none';


  if ( dot1_subtitle.classList.contains('active_subtitle') ) {

    dot1_subtitle.style.display = 'block';

  } else if ( dot2_subtitle.classList.contains('active_subtitle') ) {

    dot2_subtitle.style.display = 'block';

  } else {

    dot3_subtitle.style.display = 'block';

  }

}



  // pages on click



page1_area.addEventListener('click', page1_click);
page2_area.addEventListener('click', page2_click);
page3_area.addEventListener('click', page3_click);


function page1_click() {

  second_pages_menu_contacts.classList.add('main_menu_item_active');
  second_pages_menu_main.classList.remove('main_menu_item_active');
  second_pages_menu_about_me.classList.remove('main_menu_item_active');

  page1_area.classList.add('active_page_area');
  page2_area.classList.remove('active_page_area');
  page3_area.classList.remove('active_page_area');

  main_content.style.transform = 'translateX(8.33333%)';

  dot1.classList.add('active_dot');
  dot2.classList.remove('active_dot');
  dot3.classList.remove('active_dot');

  dot1_subtitle.classList.add('active_subtitle');
  dot2_subtitle.classList.remove('active_subtitle');
  dot3_subtitle.classList.remove('active_subtitle');

  for (let elem of main_menu_item) {
  elem.classList.remove('menu_active_item');
  }

}

function page2_click() {

  second_pages_menu_contacts.classList.remove('main_menu_item_active');
  second_pages_menu_main.classList.add('main_menu_item_active');
  second_pages_menu_about_me.classList.remove('main_menu_item_active');

  page1_area.classList.remove('active_page_area');
  page2_area.classList.add('active_page_area');
  page3_area.classList.remove('active_page_area');

  main_content.style.transform = 'translateX(-25%)';

  dot1.classList.remove('active_dot');
  dot2.classList.add('active_dot');
  dot3.classList.remove('active_dot');

  dot1_subtitle.classList.remove('active_subtitle');
  dot2_subtitle.classList.add('active_subtitle');
  dot3_subtitle.classList.remove('active_subtitle');

  for (let elem of main_menu_item) {
  elem.classList.remove('menu_active_item');
  }

}


function page3_click() {

  second_pages_menu_contacts.classList.remove('main_menu_item_active');
  second_pages_menu_main.classList.remove('main_menu_item_active');
  second_pages_menu_about_me.classList.add('main_menu_item_active');

  page1_area.classList.remove('active_page_area');
  page2_area.classList.remove('active_page_area');
  page3_area.classList.add('active_page_area');

  main_content.style.transform = 'translateX(-58.3333%)';

  dot1.classList.remove('active_dot');
  dot2.classList.remove('active_dot');
  dot3.classList.add('active_dot');

  dot1_subtitle.classList.remove('active_subtitle');
  dot2_subtitle.classList.remove('active_subtitle');
  dot3_subtitle.classList.add('active_subtitle');

  for (let elem of main_menu_item) {
  elem.classList.remove('menu_active_item');
  }

}


// projects

let projects_content = document.querySelector('.projects_content');
let container = document.querySelector('.container');
let project_card = document.querySelectorAll('.project_card');
let project_front = document.querySelectorAll('.project_front');
let project_back = document.querySelectorAll('.project_back');

let projects_background_hint = document.querySelector('.projects_background_hint');


projects_content.addEventListener('click', projects_content_click);


for (let elem of project_card) {
 elem.addEventListener('click',project_card_click);
}

for (let i = 0; i < project_card.length; i++) {
  project_front[i].onclick = function () {
    project_card[i].classList.add('project_card_active');
  }
}

for (let i = 0; i < project_card.length; i++) {
  project_back[i].onclick = function () {
    project_card[i].classList.remove('project_card_active');
  }
}



function project_card_click() {
  event.preventDefault();
  event.stopPropagation();
}

function projects_content_click () {
  container.classList.toggle('container_active');
  projects_background_hint.classList.toggle('background_hint_active');
}





// skills

let skill_card = document.querySelectorAll('.skill_card');
let front_icon = document.querySelectorAll('.front_icon');
let back_icon = document.querySelectorAll('.back_icon');
let back_hover_panel = document.querySelectorAll('.back_hover_panel');


for (let i = 0; i < skill_card.length; i++) {
  front_icon[i].onclick = function () {
    back_hover_panel[i].classList.add('back_hover_panel_active');
    skill_card[i].classList.add('skill_card_active');
  }
}


for (let i = 0; i < skill_card.length; i++) {
  back_icon[i].onclick = function () {
    skill_card[i].classList.remove('skill_card_active')
  }
}


for (let i = 0; i < skill_card.length; i++) {
  skill_card[i].onmouseout = function () {
    back_hover_panel[i].classList.remove('back_hover_panel_active');
  }
}


let flip_all_cards_btn = document.querySelector('.flip_all_cards_btn');
let active = true;


flip_all_cards_btn.onclick = function () {

  if (active) {

    for (let i = 0; i < skill_card.length; i++) {
      skill_card[i].classList.add('skill_card_active');
    }

    active = false;

  } else {

    for (let i = 0; i < skill_card.length; i++) {
      skill_card[i].classList.remove('skill_card_active');
    }

    active = true;
  }


}




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

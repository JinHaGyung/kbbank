//사이트맵 헤더 모션
let siteMapPage_Hwrap = document.querySelector('.siteMapPage_Hwrap');
let sitemapH_height = siteMapPage_Hwrap.offsetHeight;
let kbLogo = document.querySelector('.kbLogo');
let closeIcon = document.querySelector('.siteMap_header>a');


window.addEventListener('scroll',() => {
    let windowTop = window.scrollY;

    if(windowTop > sitemapH_height) {
        siteMapPage_Hwrap.classList.add('active');
        kbLogo.classList.add('active');
        closeIcon.classList.add('active');
    } else {
        siteMapPage_Hwrap.classList.remove('active');
        kbLogo.classList.remove('active');
        closeIcon.classList.remove('active');
    }
})


//사이트맵 tab
function SM_tabOpen(e, tabName) {
    let tabContent = document.getElementsByClassName('sm_tabcont');
    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    document.getElementById(tabName).style.display = "block";


let tabL = document.getElementsByClassName('siteMap_tabLink');
for(i=0; i<tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' active' , ' ');
}
    e.currentTarget.className += ' active';
}

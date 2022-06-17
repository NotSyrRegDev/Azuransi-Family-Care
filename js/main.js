
 /*  HANDLING SIDEBAR */
 const sidebarBtn = document.getElementById('sidebar_btn');
const sidebarArea = document.getElementById('mobile_sidebar');
const closingSidebarIcon = document.getElementById('closing_sidebar');

sidebarBtn.addEventListener('click' , () => {

    sidebarArea.classList.toggle('active');
});

closingSidebarIcon.addEventListener('click' , () => {
   
    sidebarArea.classList.remove('active');
});


/* HANDLING VIDEO SHOWNE */
const videPlayerBtn = document.getElementById('player_icon');

const videPlayerArea = document.getElementById('videoplayer_area'); 

const closeVideoPlayerBtn = document.getElementById('player_close')
 
videPlayerBtn.addEventListener('click' , () => {
 
    videPlayerArea.classList.toggle('active')
});

closeVideoPlayerBtn.addEventListener('click' , () => {
    videPlayerArea.classList.remove('active')
})
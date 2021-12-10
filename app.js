//sidebar

const openSidebar = document.getElementById('icon')

let sideBar = document.getElementById("navbar")
sideBar.style.display = "hidden";

openSidebar.addEventListener('click', () => {
    if (document.querySelector('#navbar').style.width == '0px') {
        document.querySelector('#navbar').style.width = '100%';
        sideBar.style.display = "block";
        document.querySelector('body').style.overflowY = 'hidden'
    } else {
        document.querySelector('#navbar').style.width = '0px'
        sideBar.style.display = "hidden";
        document.querySelector('body').style.overflowY = 'scroll'
    }
})

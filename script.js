const shareIcon = document.querySelector('.share_icon');
const shareContainer = document.querySelector('.share_container');
const shareContainerMobile = document.querySelector('.share_container_mobile');
const shareIconMobile = document.querySelector('.share_icon_mobile');

shareIcon.addEventListener('click', () => {
    shareContainer.classList.toggle('hide_share_container')
    shareContainerMobile.classList.toggle('show_share_mobile')
})

shareIconMobile.addEventListener('click', () => {
    shareContainerMobile.classList.toggle('show_share_mobile')
})

function toast({
    title = '', 
    message = '', 
    type = '', 
    duration = 3000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        
        const icons = {
            success: 'fa-regular fa-circle-check',
            warning: 'fa-solid fa-exclamation',
            info: 'fa-solid fa-info',
            error: 'fa-solid fa-exclamation'
        }
        const icon = icons[type];
        toast.classList.add('toast', 'toast--' + type)
        const delay = (duration / 1000).toFixed(2)
        toast.style.animation = `slideLeft ease 1s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
        // auto remove
        const autoRemove = setTimeout(function(){
            main.removeChild(toast)
        },duration+1000)
        // handle remove
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
    }
}
function showSToast(){
    toast({
        title: 'Success',
        message: 'Connected!',
        type: 'success',
        duration: 2000
    });
}
function showEToast(){
    toast({
    title: 'Error',
    message: 'Fail!',
    type: 'error',
    duration: 2000
});}
function showWToast(){
    toast({
    title: 'Warning',
    message: 'Warning!',
    type: 'warning',
    duration: 2000
});}
function showIToast(){
    toast({
    title: 'More info',
    message: 'Some infors',
    type: 'info',
    duration: 2000
});
}
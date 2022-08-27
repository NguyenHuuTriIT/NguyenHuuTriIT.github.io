const menuDangnhap = document.querySelector('.click')
        menuDangnhap.addEventListener('click', function(){
            document.querySelector('.login').classList.toggle('active');
            document.querySelector('.all-login').classList.toggle('active')
        });
const modal = document.querySelector('.login')
const modalALL = document.querySelector('.all-login')
function close()
{
    modal.classList.remove('active')
}
function closee()
{
    modalALL.classList.remove('active')
}
const closeDangnhap = document.querySelector('.off-click')
        closeDangnhap.addEventListener('click', closee)
        closeDangnhap.addEventListener('click', close)
        modal.addEventListener('click', function(event){
            event.stopPropagation()
        })
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
        });
const outReview =document.querySelector('.reviews')
        outReview.addEventListener('click',function(){
            document.querySelector('.review').classList.toggle('active')
            document.querySelector('.thongso').classList.remove('active')
            document.querySelector('.quydinh').classList.remove('active')
            document.querySelector('.qa').classList.remove('active')
            document.querySelector('.danhgia').classList.remove('active')
        })
        const outThongso =document.querySelector('.thongsos')
        outThongso.addEventListener('click',function(){
            document.querySelector('.review').classList.remove('active')
            document.querySelector('.thongso').classList.toggle('active')
            document.querySelector('.quydinh').classList.remove('active')
            document.querySelector('.qa').classList.remove('active')
            document.querySelector('.danhgia').classList.remove('active')
        })
        const outQuydinh =document.querySelector('.quydinhs')
        outQuydinh.addEventListener('click',function(){
            document.querySelector('.review').classList.remove('active')
            document.querySelector('.thongso').classList.remove('active')
            document.querySelector('.quydinh').classList.toggle('active')
            document.querySelector('.qa').classList.remove('active')
            document.querySelector('.danhgia').classList.remove('active')
        })
        const outQa =document.querySelector('.qas')
        outQa.addEventListener('click',function(){
            document.querySelector('.review').classList.remove('active')
            document.querySelector('.thongso').classList.remove('active')
            document.querySelector('.quydinh').classList.remove('active')
            document.querySelector('.qa').classList.toggle('active')
            document.querySelector('.danhgia').classList.remove('active')
        })
        const outDanhgia =document.querySelector('.danhgias')
        outDanhgia.addEventListener('click',function(){
            document.querySelector('.review').classList.remove('active')
            document.querySelector('.thongso').classList.remove('active')
            document.querySelector('.quydinh').classList.remove('active')
            document.querySelector('.qa').classList.remove('active')
            document.querySelector('.danhgia').classList.toggle('active')
        })
const putRoom =document.querySelector('.datphong')
putRoom.addEventListener('click', function(){
    document.querySelector('.qqq').classList.toggle('active')
    putRoom.addEventListener('click', function(event){
        event.stopPropagation()
    })
})
const outP = document.querySelector('.qqq')
function output()
{
    outP.classList.remove('active')
}
const outPut =document.querySelector('.off-log-in')
outPut.addEventListener('click',output)
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

var index = 0;
var images = document.querySelectorAll('div.thumb img')
var name_hinh =[
    "HỘI AN",
    "ĐÀ LẠT",
    "ĐÀ NẴNG",
    "PHÚ QUỐC",
    "VỊNH HẠ LONG",
    "HUẾ",
]
function next() {
    
    index++;
    if( index >= images.length) index = 0;
    if(index >= name_hinh.length) index = 0;
    var hinh = document.getElementById('mainImg');
    var nameHinh = document.getElementById('nameImg');
    document.getElementById('nameImg').innerHTML = name_hinh[index]
    hinh.src = images[index].src;
}
function prev() {
    
    index--;
    if( index < 0) index = images.length -1;
    if(index < 0) index = name_hinh.length -1;
    var hinh = document.getElementById('mainImg');
    var nameHinh = document.getElementById('nameImg');
    document.getElementById('nameImg').innerHTML = name_hinh[index]
    hinh.src = images[index].src;
}
setInterval(next,2000)

//go to top
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100)
        toTop.classList.add("active");
    else 
        toTop.classList.remove("active");
});

toTop.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
})
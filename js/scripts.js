//click banner button to go to ph paribahan section
const bannerBtn = document.getElementById('banner-btn');
bannerBtn.addEventListener('click', function(){
    const phParibahan = document.getElementById('ph-paribahan');
    phParibahan.scrollIntoView();
})
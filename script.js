let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => (slide.style.display = 'none'));
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(slideIndex - 1);
  fill.style.color="black"
  removef.style.backgroundColor="grey";
  removef.style.color="black";
  addf.style.backgroundColor="grey";
  addf.style.color="black";
}

function nextSlide() {
  showSlide(slideIndex + 1);
  fill.style.color="black"
  removef.style.backgroundColor="grey";
  removef.style.color="black";
  addf.style.backgroundColor="grey";
  addf.style.color="black";
}

document.addEventListener('DOMContentLoaded', showSlide(slideIndex));
let addf=document.querySelector("#add-friend");
addf.addEventListener("click",function(){
    addf.style.backgroundColor="pink";
    addf.style.color="green";
    removef.style.backgroundColor="grey";
    removef.style.color="black";
})

let removef=document.querySelector("#remove-friend");
removef.addEventListener("click",function(){
    removef.style.backgroundColor="rgb(203, 41, 41)";
  removef.style.color="yellow";
  addf.style.backgroundColor="grey";
  addf.style.color="black";
})

function sendFriendRequest() {
    // Logic to send a friend request
    alert('Friend request sent!');
  }
  
  function removeFriendRequest() {
    // Logic to remove a friend request
    alert('Friend request removed.');
  }
  let fill=document.querySelector("#slove")
  let fillc=document.querySelector("#clove")
  function redheart(){
    fill.style.color="red"
    fillc.style.opacity="1"
    fillc.style.color="red"
    setTimeout(function(){
      fillc.style.opacity="0"
    },1000)
  }
  var share=document.querySelector(".ri-share-forward-fill")
  share.addEventListener("click",function(){
    window.location.href = "https://web.whatsapp.com/send?text=http://127.0.0.1:5500/";
  })
// ab story create karenge
var arr=[{dp:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
,story:"https://images.unsplash.com/photo-1638959773166-cee8ec38a2ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"},{dp:"https://images.unsplash.com/photo-1694472655847-2211d724c48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
,story:"https://images.unsplash.com/photo-1531698451051-18c97580aeb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},{dp:"https://plus.unsplash.com/premium_photo-1694618625193-3d056dcd1ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
,story:"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{dp:"https://images.unsplash.com/photo-1694230343106-8d76fa98736d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
,story:"https://images.unsplash.com/photo-1612454902317-9cbff08a7829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1943&q=80"},{dp:"https://images.unsplash.com/photo-1693336428994-c8bb3bdad0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
,story:"https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1912&q=80"}]

var clutter=""
arr.forEach(function(elem,idx){
clutter += `<img id="${idx}" src="${elem.dp}" alt="">`
})
document.querySelector("#story").innerHTML=clutter

document.querySelector("#story").addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display="block"
document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

setTimeout(function(){
  document.querySelector("#full-screen").style.display="none"
},2000)

})
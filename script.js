console.log("hello oais");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('progressbar');
let gift=document.getElementById('gift');
let songItem=Array.from(document.getElementsByClassName('songitem'));
let song=[
    {songName:"wariyo-mortals", filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"huma-huma", filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Deaf KEV", filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Different heaven", filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
]
// songItem.forEach((element,i)=>{
// console.log(element,i);
//     element.getElementsByTagName('img')[0].src=song.coverPath;
//     element.getElementsByClassName('songname')[0].innertext=song[i].songName; 
// })

masterplay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)    
{audioElement.play();
gift.style.opacity=1;
}
else{
   audioElement.pause(); 
   gift.style.opacity=0;
}
}
)

audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progress);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

// myprogressbar.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
// })

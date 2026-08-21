document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));
const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="68px";nav.style.right="0";nav.style.left="0";nav.style.padding="25px 7vw";nav.style.background="#fff";nav.style.flexDirection="column";});
const news=["学校行事・部活動・入試情報をチェック","東高の「今日」を発信しています","自分らしく、目標を目指せる3年間"];
let i=0;setInterval(()=>{document.querySelector("#news").textContent=news[++i%news.length]},3000);
var t=document.getElementsByClassName("wall")[0],e=document.getElementsByClassName("spider")[0];document.addEventListener("click",function(i){var l=t.getBoundingClientRect();if(i.target.closest(".wall")){var n=i.clientX-l.left-t.clientTop,c=i.clientY-l.top-t.clientTop;n<0?n=0:n>t.clientWidth-e.clientWidth&&(n=t.clientWidth-e.clientWidth),c<0?c=0:c>t.clientHeight-e.clientHeight&&(c=t.clientHeight-e.clientWidth),e.style.left=n+"px",e.style.top=c+"px"}});
//# sourceMappingURL=index.dee8e315.js.map

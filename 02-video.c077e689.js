const e=document.querySelector("iframe"),t=new Vimeo.Player(e);let o;function n(){localStorage.setItem("videoplayer-current-time",o),console.log("Scroll handler call every 1000ms")}t.on("timeupdate",(function(e){o=e.seconds,_.throttle(n,300)})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.c077e689.js.map
function getRandomInt(t,n){return Math.floor(Math.random()*(n-t+1))+t}$(document).ready(function(){if($("form").submit(function(t){var n=$(this);t.preventDefault();var e=$(this).attr("action"),i={};$(this).find("input").each(function(){var t=$(this).val(),n=$(this).attr("name");i[n]=t}),$(this).find("textarea").each(function(){var t=$(this).val(),n=$(this).attr("name");i[n]=t}),i.page=document.location.href,$.post(e,i).then(function(t){n.html(n.data("thanks"))},function(){console.log("error")})}),$lighters=$(".square"),$lighters.length){var t=900,n=0;function e(n){var e=[];n>0&&12!=n&&24!=n&&e.push(n-1),11!=n&&23!=n&&35!=n&&e.push(n+1),n<=23&&e.push(n+12),n>=12&&e.push(n-12),e.push(n);for(var i=0;i<e.length;i++)$light=$($lighters[e[i]]),$light.addClass("lit"),function(n){window.setTimeout(function(){n.removeClass("lit")},t)}($light)}$(".square").each(function(){$(this).attr("data-shimmer",n),n++}),$(".square").hover(function(){e($(this).attr("data-shimmer"))})}var i=["stunning","effective","inspiring","persuasive","memorable","meaningful","innovative"],a=$(".js-adjective"),r=(n=0,function(){window.setTimeout(function(){var t=i[++n];t||(t=i[n=0]);var e=!0,s=0,o=window.setInterval(function(){var n=a.text();if(n&&e){var i=n.slice(0,n.length-1);i||(i="&nbsp;",e=!1),a.html(i)}else s++,a.text(t.slice(0,s)),s==t.length&&(window.clearInterval(o),r())},100)},3e3)});a.length&&r()});
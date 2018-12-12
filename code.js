httpRequestBlock = new XMLHttpRequest();

httpRequestBlock.onreadystatechange = function(){
   // Process the server response here.
   if (httpRequestBlock.readyState === XMLHttpRequest.DONE) {
      if (httpRequestBlock.status === 200) {
         block_sites = JSON.parse(httpRequestBlock.responseText);
         // block form input and add button ID in k9
         block_input = document.querySelector("#listTb-0");
         block_add = document.querySelector("#listAdd-0");
         
         for (let i = 0; i < block_sites.length; i++ ){
            console.log(block_sites[i]);
         }
      } else {
         console.log('There was a problem with the request.');
      }
   };
}

httpRequestBlock.open('GET', 'https://raw.githubusercontent.com/ZenMittal/K9-easy-configuration/master/block.js', true);
httpRequestBlock.send();





httpRequestallow = new XMLHttpRequest();

httpRequestallow.onreadystatechange = function(){
   // Process the server response here.
   if (httpRequestallow.readyState === XMLHttpRequest.DONE) {
      if (httpRequestallow.status === 200) {
         allow_sites = JSON.parse(httpRequestallow.responseText);
         // allow form input and add button ID in k9
         allow_input = document.querySelector("#listTb-0");
         allow_add = document.querySelector("#listAdd-0");
         
         for (let i = 0; i < allow_sites.length; i++ ){
            console.log(allow_sites[i]);
         }
      } else {
         console.log('There was a problem with the request.');
      }
   };
}

httpRequestallow.open('GET', 'https://raw.githubusercontent.com/ZenMittal/K9-easy-configuration/master/allow.js', true);
httpRequestallow.send();



// k9 bookmark for adding website to blocklist
(function () { 
   var a = window, b = document, c = a.location.href, f = 'k9AddSiteToBlacklist', g = 'http://127.0.0.1:2372'; 
   if (a[f]) { 
      a[f](c, g);
   } 
   else { 
      var d = b.createElement('SCRIPT'); 
      d.type = 'text/javascript'; 
      d.src = g + '/k9.js'; 
      var e = function () { a[f](c, g); }; 
      d.onreadystatechange = function () { this.readyState == 'complete' && e(); }; 
      d.onload = e; 
      b.getElementsByTagName('head')[0].appendChild(d);
   } 

})()
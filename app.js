function teste(){
    var index = Math.floor(Math.random() * 2999);
   var i1 = Math.floor(Math.random() * 2999);
    var rx= Math.floor(Math.random() * 2000);
    var ry= Math.floor(Math.random() * 900);
    let circTr = arr[index];
    let circAttr = arr[i1];
    let size = Math.floor(Math.random() * 7)/10;
    

   
    circAttr.transition().duration(15000).ease(d3.easeCircleIn).attr('r', size);
    circTr.transition().duration(15000).ease(d3.easeCircleIn).attr('r', 0.5).attr('cy',ry).attr('cx',rx);
    



}

window.onload = function(){ 
    window.setInterval(teste, 100);
}
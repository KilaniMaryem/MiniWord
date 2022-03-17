var para=document.getElementById("p1");


var txt= document.querySelector("#couleur");
txt.addEventListener('change',function(){
    para.style.backgroundColor=txt.value;
});

var taille= document.querySelector("#nombre");
taille.addEventListener('change',function(){
    para.style.fontSize=String(taille.value)+"px";
});


var pol= document.querySelector("#police");
pol.addEventListener('change',function(){
    para.style.fontFamily=pol.selectedOptions[0].value;
});


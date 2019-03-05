a = document.getElementById("light1");
b = document.getElementById("light2");
c = document.getElementById("light3");
d= document.getElementById("light4");
e= document.getElementById("light5");
f= document.getElementById("light6");
g= document.getElementById("light7");
h= document.getElementById("light8");
i= document.getElementById("light9");
function opaque(el){
	el.classList.add("opaque");
} 

function checkColors(el){
if (a.classList.contains("opaque") && b.classList.contains("opaque") && c.classList.contains("opaque") &&  d.classList.contains("opaque") && e.classList.contains("opaque") && f.classList.contains("opaque") && g.classList.contains("opaque") && h.classList.contains("opaque") && i.classList.contains("opaque")){
		console.log("All lights green!");
		//i wish this function would work when all lights are yellow, or all are red...
	}
}
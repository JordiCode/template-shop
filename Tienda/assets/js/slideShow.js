var s1 = document.getElementsByClassName("s1")[0];
var o1 = document.getElementsByClassName("o1")[0];

position = {
    s1: 0,
    o1: 1
}



function modPosition(p, element) {
    //restart o1 because it reached its maximum left margin
    if (position.o1 > 4) {
        position.o1 = 0;
    }

    position.element = p;
    element.style.marginLeft = `-${position.element*20}%`;   
}


//s1 transition
setInterval(()=> {
    position.s1<2 ? position.s1++ : position.s1 = 0;
    s1.style.marginLeft = `-${position.s1*20}%`;   
}, 15000)






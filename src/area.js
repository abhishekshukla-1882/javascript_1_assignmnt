function tim(){
    l = document.getElementById('Length').value
    w = document.getElementById('width').value
    p = 2* (l+w)
    document.getElementById('contt').innerHTML= "Area is " + " "+l*w + "sq. mtr";
    document.getElementById('con').innerHTML="perimeter is"+ " " + p + " " +"mtr"
}
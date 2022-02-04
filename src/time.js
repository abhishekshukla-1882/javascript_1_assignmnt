function tim() {
    if(document.getElementById('hour_min').checked==true){
        //document.write('hour to min')
        s = document.getElementById('op').value
        document.getElementById('con').innerHTML= s*60 + " " +"Minutes"
        //document.write(s)

    }else if(document.getElementById('hour_sec').checked==true){
        s = document.getElementById('op').value
        document.getElementById('con').innerHTML= s*60 + " " +"seconds"
        
        ///document.write('min to sec')
    }else{
        document.getElementById('con').innerHTML="select the parameter";
    }

}
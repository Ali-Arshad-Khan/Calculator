let string=localStorage.getItem('string')||``;


    function updateString(value){
        string+=value;
        localStorage.setItem('string',string);
        show();
    }
    
    
        function show(){
            document.getElementById("display").innerHTML=string;
            console.log(string);
            
        }

        function clr(){
            document.getElementById("display").innerHTML="0";
        }

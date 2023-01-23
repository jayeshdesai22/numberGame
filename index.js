var secretArr = []
const Jayesh =     prompt("JAYESH, Enter your secret number");
const Ashish = prompt("ASHISH,Enter your secret number");
const Dharmesh = prompt("DHARMESH, Enter your secret number");
const Manish = prompt("MANISH, Enter your secret number");
const Shubham = prompt("SHUBHAM, Enter your secret number");
const Vimal = prompt("VIMAL, Enter your secret number");

secretArr.push(Jayesh);
secretArr.push(Ashish);
secretArr.push(Dharmesh);
secretArr.push(Manish);
secretArr.push(Shubham);
secretArr.push(Vimal);

console.log(secretArr);

$(".btn1").click(function(){

    var userChoosenBtn = $(this).attr("id");
  
       checking(userChoosenBtn);
       outClass(userChoosenBtn);
});
       
    
    
  /*  function checking(userChoosenBtn) {
       if (secretArr.includes(userChoosenBtn)) {
        $("h1").text(userChoosenBtn + " is Out from Game") 
       }
          
            } */           


       
function checking(userChoosenBtn) {
    if (secretArr.includes(userChoosenBtn)) {
        switch (userChoosenBtn) {
                case secretArr[0]:
                            $("h1").text("Jayesh " + userChoosenBtn + " is Out from Game") 
                            break;
                case secretArr[1]:
                                $("h1").text("Ashish " + userChoosenBtn + " is Out from Game") 
                                break;
                case secretArr[2]:
                            $("h1").text("Dharmesh " + userChoosenBtn + " is Out from Game") 
                            break;
                case secretArr[3]:
                            $("h1").text("Manish " + userChoosenBtn + " is Out from Game") 
                            break;
                case secretArr[4]:
                            $("h1").text("Shubham " + userChoosenBtn + " is Out from Game") 
                            break;
                case secretArr[5]:
                            $("h1").text("Vimal " + userChoosenBtn + " is Out from Game") 
                            break;
                        default:
                            break;
                    }
                 
                }
                   
                     }  
    
  
function outClass(userChoosenBtn){
    $("#"+userChoosenBtn).addClass("pressed");
}
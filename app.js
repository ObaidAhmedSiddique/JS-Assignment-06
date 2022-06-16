var menu = ["biryani","burger","pizza","broast","chowmein","jalfrezi","club sandwich","pasta"];
var desserts = ["ice-cream","chocolate","cake","milkshake"];
var user = prompt("Hello! What would you like to eat?");
user = user.toLowerCase();
var flag = false; 
for(var i=0; i<menu.length; i++){
    if(user === menu[i]){
        alert("Your order is being processed \n Thanks for the order!");
        flag = true;
        document.write("<h2>You can also eat desserts.<h2/>")
        for(var j=0; j<desserts.length; j++){
            document.write("<h4>" + desserts[j] + "<h4/>" + "\n");
        }
        break;
    }    
}if(flag === false){
    alert("Sorry! This item isn't available right now.")
    document.write("<h2>These items are available right now. You can order from them<h2/> \n");
    for(var i=0; i<menu.length; i++){
        document.write("<h4>" + menu[i] + "<h4/>" + "\n");
    }
}
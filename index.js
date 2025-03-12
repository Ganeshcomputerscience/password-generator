let characters = ["A","B","C","D","E","F","G",
    "H","I","J" ,"K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1",
     "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
     "@","#","$","%","^","&","*","(",")","_","-","+","=",
     "{","[","}","]",",","|",":",";","<",">",".","?","/"];
   let passEl=document.getElementById("gen2-el")
function pass1(){
    passEl.textContent=""
    for(let i=0;i<12;i++){
        let randomPass=characters[Math.floor(Math.random()* characters.length)]
        passEl.textContent+=randomPass
    }
}
document.getElementById("copy-btn").addEventListener("click", function() {
    if (passEl.textContent) { // Ensure there's a password to copy
        navigator.clipboard.writeText(passEl.textContent)
            .then(function() {
                alert("Password copied to clipboard!");
            })
            .catch(function(err) {
                alert("Failed to copy: " + err);
            });
    } else {
        alert("Generate a password first!");
    }
});

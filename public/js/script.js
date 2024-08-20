class GeratePassword {
    constructor () {
        this.lowercaseLetters = document.getElementById('checkbox-lowercaseLetters'); 
        this.resulRandomPassword = document.getElementById('random-password');
    }
    geratePasswordLowCaser() {
        if(this.lowercaseLetters.checked = true) {
            const lowecaser = "abcdefghijklmnopqstuvxwyz"
            const results = lowecaser[Math.floor(Math.random()) * lowecaser.length]
            this.resulRandomPassword.textContent = results
        } 
    }
}      
const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function() {
    geratePassword.geratePasswordLowCaser();
})
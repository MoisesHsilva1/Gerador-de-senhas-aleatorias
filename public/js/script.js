class GeratePassword {
    constructor() {
        this.lowercaserLetters = document.getElementById('checkbox-lowercaseLetters');
        this.resulRandomPassword = document.getElementById('random-password');
        this.upcaserLetters = document.getElementById('checkbox-UpcaseLetters');
        this.numberCharacters = document.getElementById('input-numberCharacters');
        this.string = ["abcdefghijklmnopqstuvxwyz"];
    }
    fieldSetNumberCharactersPassword() {
        var valueField = '12'; 
        var notvalueField = '';
        (notvalueField === '' || isNaN(Number(valueField)))
            ? window.alert('Por favor, preencha o campo com um número') 
            : null;
    }
    geratePasswordLowCaser() {
        if (this.lowercaserLetters.checked == true) {
            const lowecaser = this.string[0].toLowerCase();
            const randomLowerCaser = lowecaser[Math.floor(Math.random()) * lowecaser.length]
            this.resulRandomPassword.textContent = randomLowerCaser
            return true;
        }
        return false;
    }
    geratePasswordUpCase() {
        if (this.upcaserLetters.checked == true) {
            const upcaser = this.string[0].toUpperCase();
            const randomUpcaser = upcaser[Math.floor(Math.random()) * upcaser.length]
            this.resulRandomPassword.textContent = randomUpcaser
            return true;
        }
        return false;
    }
}
const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function () {
    geratePassword.geratePasswordLowCaser();
    geratePassword.geratePasswordUpCase();
    geratePassword.fieldSetNumberCharactersPassword();
})
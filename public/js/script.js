class GeratePassword {
    constructor() {
        this.lowerCaserLetters = document.getElementById('checkbox-lowercaseLetters');
        this.resulRandomPassword = document.getElementById('random-password');
        this.upeerCaserLetters = document.getElementById('checkbox-UpcaseLetters');
        this.numbersPassword = document.getElementById('checkbox-numbers');
        this.numberCharacters = document.getElementById('input-numberCharacters');
        this.specialCharacters = document.getElementById('checkbox-specialCharacters')
        this.passwords = ["abcdefghijklmnopqstuvxwyz", "1234567891012345678", "!@#$%&*()?!@@##4"];
    }
    fieldSetNumberCharactersPassword() {
        this.numberCharacters.value === '' && window.alert('Por favor, preencha o campo com um número')
    }
    geratePasswordLowCaser() {
        if (this.lowerCaserLetters.checked == true) {
            const lowecaser = this.passwords[0].toLowerCase();
            const randomLowerCaser = lowecaser[Math.floor(Math.random()) * lowecaser.length]
            this.resulRandomPassword.textContent = randomLowerCaser
            return true;
        }
        return false;
    }
    geratePasswordUpeerCase() {
        if (this.upeerCaserLetters.checked == true) {
            const upcaser = this.passwords[0].toUpperCase();
            const randomUpcaser = upcaser[Math.floor(Math.random()) * upcaser.length]
            this.resulRandomPassword.textContent = randomUpcaser
            return true;
        }
        return false;
    }
    geratePasswordNumbers() {
        if (this.numbersPassword.checked == true) {
            const numbers = this.passwords[1]
            const randomNumbers = numbers[Math.floor(Math.random()) * numbers.length]
            this.resulRandomPassword.textContent = randomNumbers
        }
    }
    gerateSpecialCharacters() {
        if (this.specialCharacters.checked == true) {
            const specialCharacters = this.passwords[2]
            const randomSpecialCharacters = specialCharacters[Math.floor(Math.random()) * specialCharacters.length]
            this.resulRandomPassword.textContent = randomSpecialCharacters
        }
    }
    addEventsListers() {
        this.geratePasswordLowCaser();
        this.geratePasswordUpeerCase();
        this.fieldSetNumberCharactersPassword();
        this.geratePasswordNumbers();
        this.gerateSpecialCharacters();
    }
}
const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function () {
    geratePassword.addEventsListers();
})
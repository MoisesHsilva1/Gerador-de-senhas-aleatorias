class GeratePassword {
    constructor() {
        this.lowerCaserLetters = document.getElementById('checkbox-lowercaseLetters');
        this.resulRandomPassword = document.getElementById('random-password');
        this.upeerCaserLetters = document.getElementById('checkbox-UpcaseLetters');
        this.numbersPassword = document.getElementById('checkbox-numbers');
        this.numberCharacters = document.getElementById('range-numberCharacters');
        this.specialCharacters = document.getElementById('checkbox-specialCharacters');
        this.spanNumbersRange = document.getElementById('numberCharactersPassword');
        this.passwords = [
            "abcdefghijklmnopqstuvxwyz",
            "1234567891012345678",
            "!@#$%&*()?!@@##4"
        ];
    }
    geratePasswordLowCaser() {
        if (this.lowerCaserLetters.checked) {
            const lowecaser = this.passwords[0]
            const randomLowerCaser = lowecaser[Math.floor(Math.random() * lowecaser.length)]
            this.resulRandomPassword.textContent = randomLowerCaser
        }
        return '';

    }
    geratePasswordUpeerCase() {
        if (this.upeerCaserLetters.checked) {
            const upcaser = this.passwords[0].toUpperCase();
            const randomUpcaser = upcaser[Math.floor(Math.random() * upcaser.length)]
            this.resulRandomPassword.textContent = randomUpcaser
        }
        return '';
    }
    geratePasswordNumbers() {
        if (this.numbersPassword.checked) {
            const numbers = this.passwords[1]
            const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)]
            this.resulRandomPassword.textContent = randomNumbers
        }
        return '';
    }
    gerateSpecialCharacters() {
        if (this.specialCharacters.checked == true) {
            const specialCharacters = this.passwords[2]
            const randomSpecialCharacters = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
            this.resulRandomPassword.textContent = randomSpecialCharacters
        }
        return '';
    }
    gerateNumerbsRange() {
        this.numberCharacters.max < this.numberCharacters.min || this.numberCharacters.min < this.numberCharacters.max
            ? this.spanNumbersRange.textContent = 10
            : this.spanNumbersRange.textContent = 20

    }
    addEventsListers() {
        this.geratePasswordLowCaser();
        this.geratePasswordUpeerCase();
        this.geratePasswordNumbers();
        this.gerateSpecialCharacters();
        this.gerateNumerbsRange();
    }
}
const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function () {
    geratePassword.addEventsListers();
})

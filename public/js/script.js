class GeratePassword {
    constructor() {
        this.lowerCaserLetters = document.getElementById('checkbox-lowercaseLetters');
        this.resulRandomPassword = document.getElementById('random-password');
        this.upeerCaserLetters = document.getElementById('checkbox-UpcaseLetters');
        this.numbersPassword = document.getElementById('checkbox-numbers');
        this.numberCharacters = document.getElementById('range-numberCharacters');
        this.specialCharacters = document.getElementById('checkbox-specialCharacters');
        this.spanNumbersRange = document.getElementById('numberCharactersPassword');
        this.rangerNumberCharacters = document.getElementById('rangePassoword');
        this.passwords = [
            "abcdefghijklmnopqstuvxwyz",
            "1234567891012345678",
            "!@#$%&*()?!@@#$%&*()?"
        ];
    }
    gerateRandomPassword() {
        const lengthPassword = parseInt(this.rangerNumberCharacters.value)
        let newPassword = '';
        for (let i = 0; i < lengthPassword; i++) {
            const categories = [];
            if (this.lowerCaserLetters.checked) categories.push(this.passwords[0]);
            if (this.upeerCaserLetters.checked) categories.push(this.passwords[0].toUpperCase());
            if (this.numbersPassword.checked) categories.push(this.passwords[1]);
            if (this.specialCharacters.checked) categories.push(this.passwords[2]);

            if (categories.length > 0) {
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                const randomCharacter = randomCategory[Math.floor(Math.random() * randomCategory.length)];
                newPassword += randomCharacter;
            }
        }
        this.resulRandomPassword.textContent = newPassword;
    }
    addEventsListers() {
        this.gerateRandomPassword();
    }
}
const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function () {
    geratePassword.addEventsListers();
})

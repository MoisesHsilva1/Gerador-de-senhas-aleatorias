class GeratePassword {
    constructor() {
        this.lowerCaserLetters = document.getElementById('checkbox-lowercaseLetters');
        this.resulRandomPassword = document.getElementById('random-password');
        this.upeerCaserLetters = document.getElementById('checkbox-UpcaseLetters');
        this.numbersPassword = document.getElementById('checkbox-numbers');
        this.specialCharacters = document.getElementById('checkbox-specialCharacters');
        this.rangeNumberCharacters = document.getElementById('rangePassoword');
        this.passwords = [
            "abcdefghijklmnopqstuvxwyz",
            "1234567891012345678",
            "!@#$%&*()?!@@#$%&*()?"
        ];
    }

    gerateRandomPassword() {
        this.newPassword = '';
        this.categories = [];

        const options = [
            [this.lowerCaserLetters.checked, this.passwords[0]],
            [this.upeerCaserLetters.checked, this.passwords[0].toUpperCase()],
            [this.numbersPassword.checked, this.passwords[1]],
            [this.specialCharacters.checked, this.passwords[2]]
        ];

        this.categories = options
            .map(option => option[0] ? option[1] : '')
            .filter(category => category !== '');

        const lengthPassword = parseInt(this.rangeNumberCharacters.value);

        for (let i = 0; i < lengthPassword; i++) {
            if (this.categories.length > 0) {
                const randomCategory = this.categories[Math.floor(Math.random() * this.categories.length)];
                const randomCharacter = randomCategory[Math.floor(Math.random() * randomCategory.length)];
                this.newPassword += randomCharacter;
            }
        }
        this.resulRandomPassword.textContent = this.newPassword;
    }

    addEventsListers() {
        this.gerateRandomPassword();
    }
}

const geratePassword = new GeratePassword();

document.getElementById('button-gerate-password').addEventListener('click', function () {
    geratePassword.addEventsListers();
});

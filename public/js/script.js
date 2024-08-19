class GeratePassword {
    constructor () {
        this.lowercaseLetters = document.getElementById('lowercaseLetters');
        noCheckboxes =  true;
    }
    geratePasssordLowCase() {
        for(i = 0; i< this.lowercaseLetters.lenght; ++i) {
            if(this.geratePasssordLowCase[i].checked) {
                noCheckboxes = false
                window.alert('teste')
            }
        }
    }
}
const geratePassword = new GeratePassword();


document.getElementById('button-gerate-password').addEventListener('click', function() {
    geratePassword.geratePasssordLowCase();
})
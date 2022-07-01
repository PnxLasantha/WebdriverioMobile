class LoginPage{

    get anmeldenBtn()
    {
        const anmeldenBtn =$$("//android.widget.TextView[@text='Anmelden']")
        return anmeldenBtn[2]
    }

    get emailTxtbox(){

        return $("//android.widget.EditText[@text='E-Mail']")
    }

    get passwortTxtbox(){

        return $("//android.widget.EditText[@text='Passwort']")
    }

    get passwortvergessenTxt(){

        return $("//android.widget.TextView[@text='Weiter mit Facebook']")
    }

    


}module.exports = new LoginPage()

	

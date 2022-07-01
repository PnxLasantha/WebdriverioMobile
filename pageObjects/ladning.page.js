class LandingPage{

    get skipBtn(){
        return $("//android.widget.TextView[@text='Skip']")
    }

    get anmeldenLabel()
    {
        return $("//android.widget.TextView[@text='Anmelden']")
    }

    get googleLogin(){

        return $("//android.widget.TextView[@text='Weiter mit Google']")
    }

    get emailLogin(){

        return $("//android.widget.TextView[@text='Mit E-Mail anmelden']")
    }

    get facebookLogin(){

        return $("//android.widget.TextView[@text='Weiter mit Facebook']")
    }

    get loginHeaderText(){

        return $("//android.widget.TextView[@text='ODER JETZT REGISTRIEREN']")
    }



}
module.exports = new LandingPage()
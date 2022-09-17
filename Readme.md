This automation framework was developed with Webdriverio and appium. The appium server should be installed but when running the automation please make sure the appium server is not
running, The framework itself will spin up an appium server to run the application.

The default emulator was used to run the automation but if needed please change the

**wdio.conf.js** file capabilities section if using different devices


### Running Tests

Open up a terminal and navigate the package.json file in the project. Then enter following

commands. Make sure the emulator is up and running. Also, the Appium server is not running.

    npm i 
    npm test 

#### Tools Used

Webdriverio version 7

Appium version 1.22.3
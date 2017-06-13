// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html

define(['selenium-webdriver'], function (webdriver) {

    describe('quando entrar na tela inicial', function () {

        it('deve aparecer texto no rodapé', function () {
            var By = webdriver.By;
            var until = webdriver.until;

            var driver = new webdriver.Builder()
                .forBrowser('chrome')
                .build();

            driver.get('http://localhost/lider');
            driver.findElement(By.className('footer')).then(function (e) {
                console.log('achei');
                e.getText().then(function (texto) {
                    console.log('texto' + texto);
                });

            });
        });

    });

});
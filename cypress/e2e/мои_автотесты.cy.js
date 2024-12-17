describe('Проверка на позитивный кейс авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         
         cy.get('#mail').type('german@dolnikov.ru'); // Ввод правильного логина
         cy.get('#pass').type('iLoveqastudio1'); // Ввод правильного пароля
         cy.get('#loginButton').click(); // Нажатие на кнопку
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Вижу текст после нажатия
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
 
        })
        it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio/');
            
            cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
            cy.get('#mailForgot').type('nenene@mail.ru'); // Ввожу имейл
            cy.get('#restoreEmailButton').click(); // Нажимаю отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
    
           })
           it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            
            cy.get('#mail').type('german@dolnikov.ru'); // Ввод правильного логина
            cy.get('#pass').type('iLoveqastudio78'); // Ввод неправильного пароля
            cy.get('#loginButton').click(); // Нажатие на кнопку
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст после нажатия
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
    
           })

           it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            
            cy.get('#mail').type('german11@dolnikov.ru'); // Ввод неправильного логина
            cy.get('#pass').type('iLoveqastudio1'); // Ввод правильного пароля
            cy.get('#loginButton').click(); // Нажатие на кнопку
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст после нажатия
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
    
           })

           it('Негативный кейс валидации', function () {
            cy.visit('https://login.qa.studio/');
            
            cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввод правильного пароля
            cy.get('#loginButton').click(); // Нажатие на кнопку
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Вижу текст после нажатия
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
    
           })

           it('Проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввод логина
            cy.get('#pass').type('iLoveqastudio1'); // Ввод правильного пароля
            cy.get('#loginButton').click(); // Нажатие на кнопку
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Вижу текст после нажатия
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Имеется крестик и он виден польз.
    
           })
           describe('Покупка аватара', function () {                                // название набора тестов
            it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
                 cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
                 cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
                 cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
                 cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
                 cy.wait(2000);
                 cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
                 cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
                 cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
                 cy.get('.credit').type('4620869113632996');                     // вводим номер карты
                 cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
                 cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
                 cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
                 cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
                 cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
                 cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
                 cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
             });
         });
        
    })
 

 
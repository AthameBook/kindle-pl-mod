
// string map for default mode
var WLLegalStringTable = {

  WLFAQHeader : "Najczęstsze pytania na temat zapisywania haseł sieci Wi-Fi",
  close       : "ZAMKNIJ",
  WLFAQMessageFormat : new MessageFormat("<b> 1. Co zyskuję przez zapisanie moich haseł do sieci Wi-Fi na moim koncie w serwisie Amazon? </b> </br> Po jednorazowym zapisaniu swoich haseł do sieci Wi-Fi na swoim koncie w serwisie Amazon, możemy tak skonfigurować inne Twoje kompatybilne urządzenia, abyś nie musiał ponownie wpisywać tego hasła na innych urządzeniach. </br> <b> 2. Czy moje hasła sieci Wi-Fi są bezpieczne? </b> </br> Tak. Jednorazowo zapisane na koncie w serwisie Amazon, twoje hasła sieci Wi-Fi są wysyłane przez bezpieczne połączenie i są zapisane w zakodowanym pliku na serwerze Amazonu. Amazon może użyć Twoich haseł Wi-Fi, aby połączyć z siecią jedno z Twoich kompatybilnych urządzeń i nie będzie udostępniał tych haseł nikomu bez Twojej zgody. Amazon przetwarza wszystkie informacje, które otrzymuje, włączając w to Twoje hasła sieci Wi-Fi, zgodnie z Polityką prywatności Amazonu ({privacyUrlString}). </br> <b> 3. Co powinienem zrobić jeśli zmienię moje hasło sieci Wi-Fi? </b> </br> Możesz zapisać swoje nowe hasło sieci Wi-Fi na koncie Amazonu przez ponowne uruchomienie na dowolnym kompatybilnym urządzeniu konfiguracji Wi-Fi. Jednorazowe połączenie z siecią Wi-Fi za pomocą nowego hasła wystarczy, by automatycznie zaktualizować to hasło na Twoim koncie w serwisie Amazon. </br> <b> 4. Czy poprzednio wpisane hasła na tym urządzeniu są zapisane na moim koncie w serwisie Amazon jeśli ja nie zaznaczałem opcji „Zapisz hasło w Amazon”? </b> </br> Nie, one nie są zapisane. Tylko hasła, które wpiszesz z zaznaczonym polem „Zapisz hasło w Amazon” zostaną zapisane. Jeśli pole wyboru pozostanie niezaznaczone – hasła sieci Wi-Fi nie będą zapisywane na Twoim koncie w serwisie Amazon. </br> <b> 5. Jak mogę usunąć moje hasła sieci Wi-Fi z mojego konta w serwisie Amazon? </b> </br> Możesz usunąć hasła do sieci Wi-Fi, które już masz zapisane na swoim koncie w serwisie Amazon kontaktując się z działem obsługi klienta przez formularz Contact Us na {deviceSupporUrlString}. Możesz również usunąć hasła sieci Wi-Fi zapisane na tym urządzeniu przez Ustawienia."),
  WLPrivacyUrlMessageFormat : new MessageFormat("wifilocker.privacyurl.{MarketPlace}"),
  WLDeviceSupportMessageFormat : new MessageFormat("wifilocker.devicesupporturl.{MarketPlace}")
};

// string map for large mode
var WLLegalStringTableLarge = {

  close       : "Zamknij"
};

//checks for large mode and constructs WLLegalStringTable based on the display mode

WLLegalStringTable = constructTableOnDisplayModeChange(WLLegalStringTable,WLLegalStringTableLarge);


/**
 * The available three-button dialog layouts are:
 *
 * BUTTON_LAYOUT_NORMAL:
 *   Lay the buttons out horizontally, with each having equal width.
 *
 * BUTTON_LAYOUT_STACKED:
 *   Put the middle button up above the other two.
 *
 * BUTTON_LAYOUT_AUTO:
 *   Like BUTTON_LAYOUT_STACKED when the device is in portrait.
 *   In landscape, the buttons are laid out horizontally, but the middle button
 *   uses half of the available width.
 */

// string map for default mode
var WifiWizardDialogStringTable = {
    passwordDialogButtonLayout        : BUTTON_LAYOUT_NORMAL,
    cancelSetUpTryAgainButtonLayout   : BUTTON_LAYOUT_NORMAL,
    cancelEnterAgainSetUpButtonLayout : BUTTON_LAYOUT_LISTED,
    title                   : "Sieci Wi-Fi ({numNetworks})",
    advancedOptionsTitle    : "Zaawansowane opcje",
    manualEntryButton       : "Wprowadź inną sieć Wi-Fi",
    networkNameLabel        : "Nazwa sieci",
    identityLabel           : "Nazwa użytkownika",
    passwordLabel           : "Hasło",
    connectionTypeLabel     : "Typ połączenia",
    ipAddressLabel          : "Adres IP",
    subnetMaskLabel         : "Maska podsieci",
    routerLabel             : "Bramka",
    dnsLabel                : "DNS",
    securityTypeLabel       : "Typ zabezpieczeń",
    wpaTypeLabel            : "Wersja",
    eapMethodLabel          : "Metoda EAP",
    phase2AuthLabel         : "Uwierzytelnienie faza 2",
    caCertLabel             : "Certyfikat CA",
    connectionTypeDhcp      : "DHCP",
    conenctionTypeStatic    : "Ręcznie",
    wpaTypePersonal         : "Osobiste",
    wpaTypeEnterprise       : "Enterprise",
    eapMethodPeap           : "PEAP",
    eapMethodTtls           : "TTLS",
    phase2AuthPap           : "PAP",
    phase2AuthMschapv2      : "MSCHAPv2",
    securityTypeOpen        : "Brak",
    securityTypeWep         : "WEP",
    securityTypeWpawpa2     : "WPA/WPA2",
    securityTypeWpa2        : "WPA2",
    done                    : "GOTOWE",
    availNetworksLabel      : "Dostępne sieci",
    disconnect              : "ROZŁĄCZ",
    enterAgain              : "WPROWADŹ PONOWNIE",
    setUp                   : "USTAWIENIA",
    okay                    : "OK",
    cancel                  : "ANULUJ",
    connect                 : "POŁĄCZ",
    wpsConnect              : "WPS",
    advanced                : "ZAAWANSOWANE",
    join                    : "INNE...",
    rescan                  : "ODŚWIEŻ",
    tryAgain                : "SPRÓBUJ PONOWNIE",
    passwordHide            : "Ukryj hasło",
    storeCredentials        : "Zapisz hasło w Amazon.",
    learnMoreLabel          : "Dowiedz się więcej",
    manualEntryTitle        : "Wprowadź dane sieci Wi-Fi",
    passwordEntryTitle      : "Wymagane jest hasło do sieci Wi-Fi",
    loginTitle              : "Login do sieci Wi-Fi",
    passwordErrorTitle      : "Nieprawidłowe hasło",
    defaultErrorTitle       : "Błąd sieci Wi-Fi",
    defaultError            : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". --"{error}"--. Wprowadź swoje hasło ponownie lub ręcznie ustaw swoją sieć. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    passwordFailedError     : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Wprowadzone hasło jest nieprawidłowe. Spróbuj wprowadzić hasło ponownie lub ręcznie ustaw sieć. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    noProfileTitle     : 'Sieć Wi-Fi nie jest skonfigurowana',
    noProfileError          : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Ta sieć nie jest skonfigurowana. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    failedToConnectError    : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Wprowadź swoje hasło ponownie lub ręcznie ustaw swoją sieć. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    failedToConnectEnterpriseError : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Sprawdź ustawienia swojej sieci lub skontaktuj się z Twoim administratorem systemu.',
    wifiNotReady            : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Dotknij przycisk głównej strony, a następnie ponownie połącz się z Wi-Fi. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    localNetworkFailedError : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Być może potrzebujesz sprawdzić swoją sieć lokalną. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    internetConnectFailedTitle : 'Nie udało się połączyć',
    internetConnectFailedError : 'Twój Kindle połączony z siecią Wi-Fi, ale nie może połączyć się z Internetem. Skontaktuj się ze swoim dostawcą usług internetowych w celu uzyskania pomocy.',
    profNetNameTooLongFailedTitle : 'Nazwa sieci jest zbyt długa',
    profNetNameTooLongFailedError : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Nazwa sieci jest zbyt długa. Czy chcesz ręcznie skonfigurować tę sieć?',
    passwordTooLongTitle    : 'Hasło jest za długie',
    passwordTooLongError    : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Wpisane hasło jest dłuższe niż dopuszcza to sieć Wi-Fi. Spróbuj ponownie wpisać swoje hasło. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    passwordTooShortTitle   : 'Hasło jest za krótkie',
    passwordTooShortError   : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". We wpisanym haśle brakuje jednego lub więcej znaków. Spróbuj ponownie wpisać swoje hasło. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    wpaEnterpriseErrorTitle : 'Nieobsługiwana sieć',
    wpaEnterpriseNotSupportedError : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Przemysłowe sieci Wi-Fi nie są obsługiwane przez Kindle. Spróbuj podłączyć się do innej sieci. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',    
    wpaEnterpriseAuthError  : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Spróbuj ponownie wpisać nazwę użytkownika i hasło. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    securityMismatchTitle   : 'Błąd zabezpieczeń',
    securityMismatchError   : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Typ zabezpieczeń, który wpisałeś nie jest zgodny z typem zabezpieczeń sieci Wi-Fi. Należy ręcznie skonfigurować sieć ponownie i wybrać odpowiedni typ zabezpieczeń. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    adhocNotSupportedTitle  : 'Nieobsługiwana sieć',
    adhocNotSupportedError  : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}". Sieci Wi-Fi peer-to-peer nie są obsługiwane przez Kindle. Spróbuj podłączyć się do innej sieci. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    profileFailedError      : 'Nie można skonfigurować sieci Wi-Fi "{essid}". Informacje dot. sieci, które wpisałeś są niepełne. Proszę sprawdzić konfigurację sieci i ponownie spróbować skonfigurować sieć. Jeśli masz problemy z połączeniem Kindle do sieci Wi-Fi, możesz znaleźć pomoc na www.amazon.com/devicesupport.',
    profileDeleteTitle      : 'Błąd',
    profileDeleteError      : 'Nie można usunąć profilu sieci Wi-Fi "{essid}".',
    scanning                : "Skanowanie",
    scanningForNetwork      : "Wyszukiwanie sieci",
    scanComplete            : "Wyszukiwanie zostało zakończone",
    connecting              : "Łączenie",
    connected               : "Połączono",
    connectionFailed        : "Nie udało się połączyć",
    noWifiFound             : "Nie znaleziono sieci Wi-Fi",
    wpsConnectionError      : 'Twój Kindle nie może połączyć z siecią Wi-Fi "{essid}" przy użyciu WPS. Czy chcesz ręcznie skonfigurować tą sieć.',
    wpsButtonNotPressedError : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}" przy użyciu WPS. Sprawdź czy przycisk WPS jest wciśnięty.',
    apRejectedError         : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Sprawdź czy ustawienia zabezpieczeń są prawidłowe i spróbuj jeszcze raz.',
    apDeniedError           : 'Twój Kindle nie może połączyć się z siecią Wi-Fi "{essid}". Punkt dostępu odrzucił żądanie połączenia. Sprawdź ustawienia blokowania MAC adresów w twojej bramce sieciowej i spróbuj ponownie.',
    forgetProfileTitle      : 'Czy zapomnieć tą sieć?',
    forgetProfileConfirmation : 'Czy jesteś pewien, że chcesz zapomnieć sieć "{essid}"?',
    forget                  : "ZAPOMNIJ",
    advancedDialogDescription : "Możesz skonfigurować połączenie z siecią Wi-Fi i opcje zabezpieczeń sieci, której nazwa znajduje się poniżej.",
    caCertificateNotFoundTitle : "Nie można znaleźć certyfikatu",
    caCertificateNotFoundError : 'Nie można zlokalizować certyfikatu bezpieczeństwa. Sprawdź, czy nazwa jest poprawna i spróbuj ponownie.',
    userGuidePart1 : 'Aby użyć trybu samolotowego, dotknij menu szybkich akcji',
    userGuidePart2 : 'na pasku narzędzi, a następnie dotknij Tryb samolotowy.'
};

// string map for large mode
var WifiWizardDialogStringTableLarge = {
    disconnect              : "Rozłącz",
    enterAgain              : "Wprowadź ponownie",
    setUp                   : "Ustawienia",
    cancel                  : "Anuluj",
    connect                 : "Połącz",
    advanced                : "Zaawansowane",
    join                    : "Inne...",
    rescan                  : "Odśwież",
    tryAgain                : "Spróbuj ponownie",
    forget                  : "Zapomnij"
};


//checks for large mode and constructs WifiWizardDialogStringTable based on the display mode

WifiWizardDialogStringTable = constructTableOnDisplayModeChange(WifiWizardDialogStringTable,WifiWizardDialogStringTableLarge);


var WifiWizardDialogAccessibilityStringTable = {
    closeButtonLabel     :    "Zamknij"
};

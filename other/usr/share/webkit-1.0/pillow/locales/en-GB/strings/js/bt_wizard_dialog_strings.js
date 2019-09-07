/*
 * bt_wizard_dialog_strings.js
 *
 * Copyright (c) 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * PROPRIETARY/CONFIDENTIAL
 *
 * Use is subject to license terms.
 */

// string map for default mode
var BTWizardDialogStringTable = {
    switchDialogButtonLayout: BUTTON_LAYOUT_NORMAL,
    btWizardTitle: new MessageFormat("Urządzenia Bluetooth ({numDevices,number,integer})"),
    subtitle: new MessageFormat("Urządzenia ({numDevices,number,integer})"),
    btWizardHeaderText: "Powiąż urządzenie audio Bluetooth, aby odsłuchać zawartość Audible lub skorzystać z czytnika ekranu VoiceView.",
    rescan: "PRZESKANUJ PONOWNIE",
    rescanDescription: "Skanuj w poszukiwaniu nowych urządzeń",
    pairNewDevice: "KREATOR BLUETOOTH",
    pairNewDeviceDescription: "Rozłącz i powiąż nowe urządzenie audio",
    disconnect: "ROZŁĄCZ",
    other: "INNE",
    connect: "POŁĄCZ",
    cancel: "ANULUJ",
    btWizardforgetDevice: "ZAPOMNIJ",
    btPairedDeviceforgetDevice: "ZAPOMNIJ URZĄDZENIE",
    tryAgain: "SPRÓBUJ PONOWNIE",
    btWizardForgetDeviceTitle: new MessageFormat("{device}"),
    btPairedDeviceForgetDeviceTitle: "Zapomnij urządzenie",
    btWizardErrorDeviceTitle: {
        Bond : "Nieudane powiązanie Bluetooth",
        Connect : "Połączenie Bluetooth nie powiodło się"
    },
    noDeviceDiscovered: "Nie znaleziono urządzeń",
    passcodeTitle: "Wymagane hasło do urządzenia",
    connectOrForgetDevice: new MessageFormat("{string}"),
    switchTextMessageFormat: new MessageFormat("Czy chcesz połączyć się z urządzeniem \"{string}\" lub je zapomnieć?"),
    btPairedWizardForgetTextMessageFormat: new MessageFormat("Jesteś obecnie połączony z {string}."),
    btWizardForgetTextMessageFormat: new MessageFormat("Czy chcesz odłączyć czytnik od urządzenia \"{string}\" lub je zapomnieć?"),
    forgetConfirm: "Czy na pewno chcesz zapomnieć o tym urządzeniu?<br><br>Spowoduje to wyłączenie czytnika ekranu VoiceView.<br><br>Aby ponownie włączyć VoiceView, naciśnij i przytrzymaj przycisk zasilania przez 9 sekund, a następnie przytrzymaj 2 palce na ekranie Kindle.",
    btWizardErrorTextMessageFormat: {
       Bond :  new MessageFormat("Nie można powiązać z urządzeniem audio Bluetooth \"{string}\".<br/><br/>Upewnij się, że urządzenie jest włączone i znajduje się w trybie parowania."),
       Connect :  new MessageFormat("Nie można połączyć się z urządzeniem audio Bluetooth \"{string}\".<br/><br/>Upewnij się, że urządzenie jest włączone i znajduje się w zasięgu."),
    },
    passKeyComparisonTitle: "Wymagane powiązanie Bluetooth",
    passKeyTextMessageFormat: new MessageFormat('"{string}" chciałbyś sparować z Kindle. Potwierdź, że poniższy numer jest wyświetlany na "{string}"'),
    confirm: "POTWIERDŹ",
    scanningForBTDevices: "Skanowanie w poszukiwaniu urządzeń Bluetooth",
    connectingToBtDevice: "Połączone urządzenie",
    pairingToBtDevice: "Powiązane urządzenie"
};

// string map for large mode
var BTWizardDialogStringTableLarge = {
    rescan: "Przeskanuj ponownie",
    pairNewDevice: "Kreator Bluetooth",
    disconnect: "Rozłącz",
    other: "Inne",
    tryAgain: "Spróbuj ponownie",
    cancel: "Anuluj",
    connect: "Połącz",
    btWizardforgetDevice: "Zapomnij",
    btPairedDeviceforgetDevice: "Zapomnij urządzenie",
    confirm: "Potwierdź"
};

//checks for large mode and constructs BTPairedDeviceStringTable based on the display mode
BTWizardDialogStringTable = constructTableOnDisplayModeChange(BTWizardDialogStringTable, BTWizardDialogStringTableLarge);

var BTAccessibilityStringTable = {
    close: "Zamknij"
};

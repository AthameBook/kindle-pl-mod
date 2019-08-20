
// string map for default mode
var BTPairedDeviceStringTable = {
    switchDialogButtonLayout: BUTTON_LAYOUT_NORMAL,
    title                   : "Bluetooth",
    subtitle                : new MessageFormat("Urządzenia ({numDevices,number,integer})"),
    headerText		    : "Należy upewnić się, że urządzenie Bluetooth jest włączone. Dotknij nazwę urządzenia, aby zapomnieć lub połączyć się z urządzeniem",
    pairNewDevice           : "KREATOR BLUETOOTH",
    pairNewDeviceDescription: "Rozłącz i sparuj nowe urządzenie audio",
    disconnect              : "ROZŁĄCZ",
    okay                    : "OK",
    cancel                  : "ANULUJ",
    connect	            : "POŁĄCZ",
    forget                  : "ZAPOMNIJ",
    forgetDevice            : "ZAPOMNIJ URZĄDZENIE",
    forgetDeviceTitle       : "Zapomnij urządzenie",
    connectOrForgetDevice   : "Połącz lub zapomnij urządzenie",
    noPairedDevice	    : "Brak sparowanych urządzeń",
    switchTextMessageFormat : new MessageFormat("Chcesz połączyć lub zapomnieć {string}?"),
    forgetTextMessageFormat : new MessageFormat("Obecnie jesteś połączony z {string}."),
    forgetConfirm           : "Czy na pewno chcesz zapomnieć to urządzenie?<br><br>Spowoduje to wyłączenie czytania z ekranu VoiceView. <br><br>Aby włączyć VoiceView ponownie naciśnij i przytrzymaj przycisk zasilania przez 9 sekund, a następnie przytrzymaj dwa palce na ekranie Kindle."
    
};

// string map for large mode
var BTPairedDeviceStringTableLarge = {
    pairNewDevice           : "Kreator Bluetooth",
    disconnect              : "Rozłącz",
    cancel                  : "Anuluj",
    connect                 : "Połącz",
    forget                  : "Zapomnij",
    forgetDevice            : "Zapomnij urządzenie"
};

//checks for large mode and constructs BTPairedDeviceStringTable based on the display mode
BTPairedDeviceStringTable = constructTableOnDisplayModeChange(BTPairedDeviceStringTable,BTPairedDeviceStringTableLarge);

var BTAccessibilityStringTable = {
    close 		    : "Zamknij"
};

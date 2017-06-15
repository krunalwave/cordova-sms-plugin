document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function sendSms() {
    var number = document.getElementById('numberTxt').value;
    var message = document.getElementById('messageTxt').value;
    console.log("number=" + number + ", message= " + message);

    //CONFIGURATION
    var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            // intent: 'INTENT'  // send SMS with the native android SMS messaging
            intent: '' // send SMS without open any other app
        }
    };

    var success = function () { alert('Message sent successfully'); };
    var error = function (e) { alert('Message Failed:' + e); };
    sms.send(number, message, options, success, error);
}

// function checkSMSPermission() {
//     var success = function (hasPermission) {
//         if (hasPermission) {
//             sms.send(...);
//         }
//         else {
//             // show a helpful message to explain why you need to require the permission to send a SMS
//             // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
//         }
//     };
//     var error = function (e) { alert('Something went wrong:' + e); };
//     sms.hasPermission(success, error);
// }
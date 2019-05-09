// MySQL API
var apis = 'api.php'; 

// set image directori
var imageDir = 'image';

// Replace with: your firebase account
var config = {
    apiKey: "AIzaSyAt_qxLgxqYqYu9TznfFKhDnSjQjFNHRy0",
    databaseURL: "https://hassan-54ad5.firebaseio.com"
};
firebase.initializeApp(config);

// create firebase child
var dbRef = firebase.database().ref(),
	messageRef = dbRef.child('message'),
	userRef = dbRef.child('user');

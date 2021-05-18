// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyBn32GXmYjmbhLaDlavWWGxAjZVnK7yXQc",
      authDomain: "kwitter-project-dc0dd.firebaseapp.com",
      databaseURL: "https://kwitter-project-dc0dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-dc0dd",
      storageBucket: "kwitter-project-dc0dd.appspot.com",
      messagingSenderId: "677279808043",
      appId: "1:677279808043:web:cd2d90177d53dfe224086e",
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    

user_name = localStorage.getItem

document.getElementById("user_name").innerHTML + "Welcome" + user_name + "!";

function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;

            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "kwitter.html";
}
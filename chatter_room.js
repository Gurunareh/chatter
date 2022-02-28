
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDO-dbzA_DTVYwbULQhktm2yzk5K4CY1ew",
      authDomain: "chatter-4e44a.firebaseapp.com",
      databaseURL: "https://chatter-4e44a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e44a",
      storageBucket: "chatter-4e44a.appspot.com",
      messagingSenderId: "586443028462",
      appId: "1:586443028462:web:ab060f6ebd4f2ebd9240ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="<h1>Welcome "+user_name+"!</h1>";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="chatter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="chatter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
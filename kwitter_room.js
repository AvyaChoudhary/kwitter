var firebaseConfig = {
      apiKey: "AIzaSyAxidjnce1vdrpkhf58s6rAfJLLsibM3LU",
      authDomain: "krappy-twiter.firebaseapp.com",
      databaseURL: "https://krappy-twiter-default-rtdb.firebaseio.com",
      projectId: "krappy-twiter",
      storageBucket: "krappy-twiter.appspot.com",
      messagingSenderId: "101216359655",
      appId: "1:101216359655:web:2e2e7d5a93df43b2d93e42"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
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
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
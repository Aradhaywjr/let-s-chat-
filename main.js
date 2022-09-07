var firebaseConfig = {
    apiKey: "AIzaSyAGKs6O-dL5NLAi2nD-JWo5PdYILki4ys4",
    authDomain: "let-s-chat-353fe.firebaseapp.com",
    databaseURL: "https://let-s-chat-353fe-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-353fe",
    storageBucket: "let-s-chat-353fe.appspot.com",
    messagingSenderId: "548817088200",
    appId: "1:548817088200:web:bb5f8a44d8a9d7ff50bffd",
    measurementId: "G-9N03VJZPXV"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem(user_name);

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
      {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       });
       
       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });
    });}
          getData();
    
          function redirectToRoomName(name)
          {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location = "kwitter_page.html";
          }

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
  }

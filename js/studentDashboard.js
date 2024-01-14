function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//inner sessions
function openSessions(evt, sessionType){
    var i, session_tabcontent, session_tablinks;

    session_tabcontent = document.getElementsByClassName("session_tabcontent");
    for (i = 0; i < session_tabcontent.length; i++){
        session_tabcontent[i].style.display = "none";
    }

    session_tablinks = document.getElementsByClassName("session_tablinks");
    for (i = 0; i < session_tablinks.length; i++){
        session_tablinks[i].className = session_tablinks[i].className.replace(" active", "");
    }

    document.getElementById(sessionType).style.display = "block";
    evt.currentTarget.className += " active";
}

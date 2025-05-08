function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
  }
  
  function showRegister() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    toggleButton.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  });
  
// Function to add location to map
function addLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Update the iframe src with the new center location
      document.getElementById("map").src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504723.943368106!2d19.582775280155683!3d42.55711999382983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13537af354bf7df1%3A0xbfffeedfabc31791!2sKosovo!5e0!3m2!1sen!2s!4v1746641491532!5m2!1sen!2s=${latitude},${longitude}&zoom=15`;
      alert("Your location has been added to the map.");
    }, function () {
      alert("Unable to retrieve your location.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Toggle the Crime Report form
function reportCrime() {
  const crimeForm = document.getElementById("crimeReportForm");
  crimeForm.style.display = crimeForm.style.display === "none" ? "block" : "none";
}

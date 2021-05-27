//Code used from https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript-elegantly'

var inactivityTime = function () {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  function loggedOut() {
      alert("You are now logged out due to inactivity.")
      logout()
      document.location.replace('/');
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(loggedOut, 3000)
      // 1000 milliseconds = 1 second
  }
};

inactivityTime();

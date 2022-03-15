var pageTitle = document.getElementById('title').textContent;
if (!(window.location.href.endsWith('/games/'))) {
  document.title = pageTitle + ' - Pringles';
}
var height = innerHeight;
var width = innerWidth;
if (width / height < 0.8) {
  // this means the user is using a mobile device
  window.isMobile = true; // just incase lol
  showMessage(`
    <h1>👋 Hello there!</h1>     
    <p>It seems like you're using a mobile device.</p>
    <p>You might want to use the desktop version of this site. Most of the games require a keyboard/mouse to work, and also this site's layout isn't exactly meant for mobile users. You can still view it anyway if you want to, but it might not look how you'd expect.</p>
    `, 'View Anyway');
}
else {
  if (getCookie('cookieConsent') == '') {
    showMessage(`
      <h1>👋 Hello there!</h1>
      <p>You seem to be new here! Welcome to this fancy little site of mine.</p>
      <br>
      <p>Just wanted to let you know that we use cookies. Because I'm apparantly supposed to tell you that or something. Not to track you or anything like that, just to store little pieces of info to make the site work.</p>
      <p>If you don't believe me, then you can check out <a href="https://github.com/john2212ho/john2212ho.github.io">the source code</a> to see for yourself :)</p>
    `, 'Close');
    setCookie('cookieConsent', 'seen', 99999);
  }
  else {
    if (getCookie('msg4') == '') {
      showMessage(`
        <h1>Credits</h1>
        <p>Created by !$%&#^R</p>
        
      `, 'Awesome');
      setCookie('msg4', 'seen', 100);
    }
  }
}

runFunctions();

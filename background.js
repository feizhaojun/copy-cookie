chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    chrome.cookies.getAll({url: sender.tab.url}, (cookies) => {
      cookies.forEach(el => {
        console.log(el);
        el.domain = 'localhost';
        el.url = "http://localhost";
        delete el.hostOnly;
        delete el.session;
        chrome.cookies.set(el);
      });
    });
    sendResponse('Copy HC Cookies to localhost successfully');
  }
);
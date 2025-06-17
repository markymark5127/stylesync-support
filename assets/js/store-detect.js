(function() {
  function getMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      return 'android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'ios';
    }
    return 'other';
  }

  function updateStoreLinks() {
    var os = getMobileOS();
    var appleLink = document.querySelector('.ios-store');
    var googleLink = document.querySelector('.android-store');
    if (os === 'android' && appleLink) {
      appleLink.style.display = 'none';
    } else if (os === 'ios' && googleLink) {
      googleLink.style.display = 'none';
    }
  }

  if (document.readyState !== 'loading') {
    updateStoreLinks();
  } else {
    document.addEventListener('DOMContentLoaded', updateStoreLinks);
  }
})();

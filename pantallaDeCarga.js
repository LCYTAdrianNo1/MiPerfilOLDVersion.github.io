window.addEventListener('load', function() {
    var loaderBar = document.getElementById('loader-bar');
    var loaderPercent = document.getElementById('loader-percent');
    var startTime = window.performance.timing.navigationStart;
    var interval = setInterval(function() {
      var currentTime = Date.now();
      var loadTime = currentTime - startTime;
      var totalTime = window.performance.timing.loadEventEnd - startTime;
      var percent = Math.round(loadTime / totalTime * 100);
      loaderBar.style.width = percent + '%';
      loaderPercent.innerHTML = percent + '%';
      if (percent == 100) {
        clearInterval(interval);
        setTimeout(function() {
          loader.style.display = 'none';
        }, 500);
      }
    }, 10);
  });
  
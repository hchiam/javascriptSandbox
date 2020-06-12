;(function () {
  var linksThatOpenNewWindow = Array.from(
    document.querySelectorAll('a[target="_blank"]')
  );
  linksThatOpenNewWindow.map(function (link) {
    var linksWithoutProtection = link.rel
      .replace("noopener", "")
      .replace("noreferrer", "")
      .trim();
    link.rel = (linksWithoutProtection + " noopener noreferrer").trim();
  });
})();

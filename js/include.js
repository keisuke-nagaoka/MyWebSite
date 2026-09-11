(function () {
  function replaceTokens(html, values) {
    return html.replace(/{{\s*(siteRoot|homeUrl|navPrefix)\s*}}/g, function (_, key) {
      return values[key] || "";
    });
  }

  function includeParts() {
    var root = document.body.getAttribute("data-root") || "";
    var values = {
      siteRoot: root,
      homeUrl: root || ".",
      navPrefix: root
    };
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-include]"));

    return Promise.all(targets.map(function (target) {
      var path = root + target.getAttribute("data-include");

      return fetch(path)
        .then(function (response) {
          if (!response.ok) {
            throw new Error(path + " could not be loaded.");
          }
          return response.text();
        })
        .then(function (html) {
          target.outerHTML = replaceTokens(html, values);
        });
    }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    includeParts()
      .then(function () {
        document.dispatchEvent(new CustomEvent("site:includes-loaded"));
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}());

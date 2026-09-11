(function () {
  var currentScript = document.currentScript;
  var root = currentScript ? currentScript.getAttribute("data-root") || "" : "";
  var title = currentScript ? currentScript.getAttribute("data-title") || "Keisuke Nagaoka" : "Keisuke Nagaoka";
  var description = currentScript ? currentScript.getAttribute("data-description") || "Keisuke Nagaokaのポートフォリオサイトです" : "Keisuke Nagaokaのポートフォリオサイトです";
  var canonical = currentScript ? currentScript.getAttribute("data-canonical") || "URLが入る" : "URLが入る";

  document.write([
    '<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">',
    '<meta property="og:type" content="website">',
    '<meta property="og:title" content="' + title + '">',
    '<meta property="og:url" content="' + canonical + '">',
    '<meta property="og:description" content="Keisuke Nagaokaのポートフォリオサイトです。">',
    '<meta property="og:image" content="' + root + 'img/ogp.png">',
    '<meta name="description" content="' + description + '">',
    '<title>' + title + '</title>',
    '<link rel="preconnect" href="https://fonts.gstatic.com">',
    '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined" rel="stylesheet">',
    '<link href="' + root + 'css/ress.css" media="all" rel="stylesheet" type="text/css">',
    '<link href="' + root + 'css/style.css" media="all" rel="stylesheet" type="text/css">',
    '<link rel="shortcut icon" href="' + root + 'img/favicon.ico">',
    '<link rel="canonical" href="' + canonical + '">'
  ].join("\n  "));
}());

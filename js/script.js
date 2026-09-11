function scrollToHash(hash) {
  if (!hash) {
    return;
  }

  var target = $(hash == "#" || hash == "" ? "html" : hash);
  if (!target.length) {
    return;
  }

  var navHeight = $(".header").outerHeight() || 0;
  var position = target.offset().top - navHeight;
  $("html, body").animate({ scrollTop: position, }, 300, "swing");
}

function initPageScripts() {

  //ページ内スクロール
  $('a[href^="#"]').off("click.siteScroll").on("click.siteScroll", function () {
    var href = $(this).attr("href");
    scrollToHash(href);
    if (href && href !== "#") {
      history.pushState(null, "", href);
    }
    return false;
  });

  //ページトップ
  $("#js-page-top").off("click.pageTop").on("click.pageTop", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
}

$(function () {
  initPageScripts();

  document.addEventListener("site:includes-loaded", function () {
    initPageScripts();
    scrollToHash(location.hash);
  });

});

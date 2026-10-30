(function ($) {
  "use strict";
  var lastScrollTop = 0;
  var $stickyNavbar = $(".sticky-header");
  var $mobileBreadcrumb = $(".wrapper-mobile-breadcrumb");
  var _$mobileBreadcrumbOffsetTop = $mobileBreadcrumb.offset().top;
  var appearNavAllow = !0;
  $(window).on("scroll.hiding", function () {
    var winScrollY = window.scrollY || $(window).scrollTop(),
      delta = winScrollY - lastScrollTop;
    if (Math.abs(delta) <= 5) {
      return;
    }
    if (delta > 0 && winScrollY > $stickyNavbar.outerHeight()) {
      appearNavAllow = !0;
      $stickyNavbar.addClass("hiding");
      $mobileBreadcrumb.addClass("on");
    } else {
      if (appearNavAllow) {
        $stickyNavbar.removeClass("hiding");
        $mobileBreadcrumb.removeClass("on");
      }
    }
    lastScrollTop = winScrollY;
  });

  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = window.scrollY || $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $("#basePage-up");
      if (windowpos > $stickyNavbar.outerHeight()) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("show");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("show");
      }
    }
  }

  headerStyle();
  var mobileWidth = 1400;
  var navcollapse = $(".navigation li.dropdown");
  $(window).on("resize", function () {
    navcollapse.children("ul").hide();
  });
  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children("ul").stop(!0, !1, !0).toggle();
    }
  });
  if ($(".main-header .navigation li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>',
    );
    if ($(window).innerWidth() <= mobileWidth) {
      $(".navigation li.dropdown > a, .navigation li.dropdown > .dropdown-btn").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings("ul").toggle();
        },
      );
    }
  }
  $(".wrapper-mobile-breadcrumb").on("click", function () {
    if ($(".wrapper-mobile-breadcrumb ul").is(":visible")) {
      $(".wrapper-mobile-breadcrumb i").removeClass("ti-angle-up").addClass("ti-angle-down");
      $(".wrapper-mobile-breadcrumb ul").slideUp();
    } else {
      $(".wrapper-mobile-breadcrumb i").removeClass("ti-angle-down").addClass("ti-angle-up");
      $(".wrapper-mobile-breadcrumb ul").slideDown();
    }
  });
  $("input[type='checkbox']").iCheck({ checkboxClass: "icheckbox_square-red" });
  $("#basePage-up").on("click", function () {
    $("html, body").animate({ scrollTop: $("html").offset().top }, 400);
  });
  $(".select-styled").on("click", function (e) {
    e.stopPropagation();
    if (!$(this).parent().hasClass("disabled")) {
      $(this).toggleClass("active").next("ul.select-options").toggle();
    }
  });
  $(document).on("click", "ul.select-options li", function (_e) {
    var $selectOption = $(this).parents(".select-options");
    var selectOptionLiLen = $selectOption.find("li").length;
    $selectOption.find("li").attr("data-checked", "");
    var replaceVal = $(this).data("replace");
    if (typeof replaceVal !== "undefined" && replaceVal != "") {
      $selectOption.prev(".select-styled").html(replaceVal).removeClass("active");
    } else {
      $selectOption.prev(".select-styled").html($(this).html()).removeClass("active");
    }
    $(this).attr("data-checked", "checked");
    $selectOption
      .siblings("select.select-hidden")
      .val($(this).attr("data-value"))
      .prop("selected", !0)
      .change();
    if ($selectOption.hasClass("shupple")) {
      for (var i = 0; i < selectOptionLiLen; i++) {
        $selectOption.append($selectOption.find("li[data-seq='" + i + "']"));
      }
      $selectOption.prepend($(this));
    }
    $selectOption.hide();
  });
  $(document).click(function () {
    $(".select-styled").removeClass("active");
    $("ul.select-options").hide();
  });
  if ($(".wow").length) {
    var wow = new WOW({ mobile: !1 });
    wow.init();
  }

  function factCounter() {
    if ($(".fact-counter").length) {
      $(".fact-counter .column.animated").each(function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({ countNum: $t.find(".count-text").text() }).animate(
            { countNum: n },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            },
          );
        }
      });
    }
  }

  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: { media: {} },
    });
  }

  function customTabProductPageTab() {
    if ($(".custom-tab-title").length) {
      var tabWrap = $(".tab-details-content");
      var tabClicker = $(".custom-tab-title ul li");
      tabWrap.children("div").hide();
      tabWrap.children("div").eq(0).show();
      tabClicker.on("click", function () {
        if ($("input#search").length && $("input#search").val() != "") {
          $("input#search").val("");
          $(".tab-content:visible .single-item").css("display", "block");
          $(".tab-content:visible .info-count .status").css("display", "none");
          var cntFiltered = $(".tab-content:visible .single-item").length;
          $(".tab-content:visible .info-count .cnt").text(cntFiltered);
        }
        if ($(".empty-result").length) {
          $(".empty-result").hide();
        }
        var tabName = $(this).data("tab-name");
        tabClicker.removeClass("active");
        $(this).addClass("active");
        var id = "#" + tabName;
        tabWrap.children("div").not(id).hide();
        tabWrap.children("div" + id).fadeIn("500");
        return !1;
      });
    }
  }

  if ($(".wrapper-latest-album").length) {
    $(".wrapper-latest-album").owlCarousel({
      loop: !0,
      margin: 0,
      dots: !0,
      nav: !0,
      autoplay: 5000,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: {
        0: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1200: { items: 1 },
      },
    });
  }
  if ($(window).width() <= 991 && $(".page-home .service-style-five .tab-details-content").length) {
    $(".service-style-five .tab-details-content").owlCarousel({
      loop: !0,
      margin: 0,
      autoplay: 5000,
      nav: !1,
      dots: !0,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsive: {
        0: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1200: { items: 2 },
      },
    });
  }
  if ($(".wrapper-partners").length) {
    if ($(window).width() > 992) {
      $(".wrapper-partners ul").owlCarousel({
        loop: !0,
        margin: 0,
        smartSpeed: 250,
        autoplay: !0,
        autoplayTimeout: 1500,
        nav: !1,
        dots: !1,
        responsive: { 0: { items: 5 }, 1200: { items: 5 } },
      });
    }
  }
  if ($(".page-home .wrapper-project-list").length) {
    $(".wrapper-project-list").owlCarousel({
      loop: !0,
      margin: 40,
      nav: !0,
      autoplay: 5000,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: {
        0: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        800: { items: 2 },
        1200: { items: 3 },
      },
    });
  }
  if ($(".main-slider-carousel").length) {
    $(".main-slider-carousel").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !0,
      dots: !0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: 5000,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1200: { items: 1 } },
    });
  }
  if ($(".three-column-carousel").length) {
    $(".three-column-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !0,
      navText: [
        '<span class="flaticon-back"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        600: { items: 1 },
        800: { items: 2 },
        1024: { items: 3 },
      },
    });
  }
  if ($(window).width() >= 991 && $(".wrapper-awards-history").length) {
    $(".wrapper-awards-history").owlCarousel({
      loop: !1,
      margin: 15,
      nav: !0,
      dots: !1,
      autoplay: !1,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: {
        0: { items: 1 },
        991: { items: 3 },
        1200: { items: 4 },
        1700: { items: 5 },
        2300: { items: 7 },
      },
    });
  }
  $(".owl-carousel").on("touchstart", "img", function (_e) {
    $(this).closest(".owl-carousel").trigger("stop.owl.autoplay");
  });
  $(".owl-carousel").on("touchend", "img", function (_e) {
    $(this).closest(".owl-carousel").trigger("play.owl.autoplay");
  });
  $(".owl-carousel").on("click", ".owl-dots, .owl-nav", function (_e) {
    $(this).closest(".owl-carousel").trigger("stop.owl.autoplay");
    $(this).closest(".owl-carousel").trigger("play.owl.autoplay");
  });
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");
      if ($(this).hasClass("active") !== !0) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }
      if ($(this).next(".acc-content").is(":visible")) {
        return !1;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }
  if ($(".custom-select-box").length) {
    $(".custom-select-box").selectmenu().selectmenu("menuWidget").addClass("overflow");
  }

  function enableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");
      $container.isotope({
        filter: "*",
        masonry: { columnWidth: ".masonry-item" },
        animationOptions: { duration: 500, easing: "linear" },
      });
      $filter.find("li").on("click", function () {
        var selector = $(this).attr("data-filter");
        try {
          $container.isotope({
            filter: selector,
            animationOptions: { duration: 500, easing: "linear", queue: !1 },
          });
        } catch (_err) {}
        return !1;
      });
      winDow.on("resize", function () {
        var selector = $filter.find("li.active").attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: { duration: 500, easing: "linear", queue: !1 },
        });
      });
      var filterItemA = $(".filter-btns li");
      filterItemA.on("click", function () {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }

  enableMasonry();
  jQuery(document).on("ready", function () {
    (function ($) {
      customTabProductPageTab();
      if ($(".page-publications").length) {
        var activeTabName = $("ul.tab-title li.active").data("tab-name");
        $(".tab-content").css("display", "none");
        $(".tab-content#" + activeTabName).css("display", "block");
      }
    })(jQuery);
  });
  $(window).on("scroll", function () {
    headerStyle();
    factCounter();
  });
  $(window).on("load", function () {
    enableMasonry();
  });
  var typewatch = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();
  $("button.navbar-toggle").on("click", function (e) {
    e.preventDefault();
    if ($(".header-bottom .navbar-collapse").is(":visible")) {
      $(".header-bottom .navbar-collapse").hide();
      $("html, body").css("overflow", "auto");
      $("html, body").css("overflow-x", "hidden");
    } else {
      $(".header-bottom .navbar-collapse").show();
      $("html, body").css("overflow", "hidden");
    }
    console.log("a");
  });
  if ($(".page-location").length > 0) {
    var container = document.getElementById("lab_map");
    var options = { center: new daum.maps.LatLng(37.582672, 127.026438), level: 3 };
    var map = new daum.maps.Map(container, options);
    map.setZoomable(!1);
    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    var markerPosition = new daum.maps.LatLng(37.582672, 127.026438);
    var marker = new daum.maps.Marker({ position: markerPosition });
    var markerPosition2 = new daum.maps.LatLng(37.583291, 127.025966);
    var marker2 = new daum.maps.Marker({ position: markerPosition2 });
    marker.setMap(map);
    marker2.setMap(map);
  }
  if ($("#typewriter-research").length) {
    var app = document.getElementById("typewriter-research");
    var writer = new Typewriter(app, { loop: !0, delay: 50 });
    writer
      .typeString("Deep Reinforcement Learning/Machine Learning (강화 학습/기계 학습)")
      .pauseFor(1500)
      .deleteAll(20)
      .typeString("Intelligent Networking on 5G/6G")
      .pauseFor(1500)
      .deleteAll(25)
      .typeString("Internet of Things (사물인터넷)")
      .pauseFor(1500)
      .deleteAll(25)
      .typeString("Smart Factory (스마트 팩토리)")
      .pauseFor(1500)
      .deleteAll(25)
      .typeString("Financial Engineering (금융 공학)")
      .pauseFor(1000)
      .deleteAll(35)
      .start();
  }
  if ($(window).width() <= 991 && $(".fact-counter .column").length) {
    $(".fact-counter .count-text").each(function () {
      $(this).text($(this).data("stop"));
    });
  }
  if ($(window).width() >= 992 && $(".page-members-professor").length) {
    let win = $(window);
    let _body = $("body");
    let mainProfile = $(".wrapper-profile");
    let mainProfileWidth = $(".wrapper-profile").width();
    let mainProfileTopOffset = mainProfile.offset().top;
    let _lastScrollTop = 0;
    win.scroll(function () {
      let scrollY = win.scrollY || win.scrollTop();
      if (scrollY >= mainProfileTopOffset - 120) {
        mainProfile.addClass("fixed");
        mainProfile.css("width", mainProfileWidth);
        console.log("a");
      } else {
        mainProfile.removeClass("fixed");
        mainProfile.css("width", "initial");
      }
    });
  }
  if ($(".page-publications").length) {
    $("input#search").on("keyup", function () {
      var $thisElement = $(this);
      typewatch(function () {
        var searchInput = $thisElement.val();
        if (searchInput == "") {
          $(".tab-content:visible .info-count .status").css("display", "none");
        } else {
          $(".tab-content:visible .info-count .status").css("display", "inline");
        }
        $(".tab-content:visible .single-item").css("display", "none");
        var cntFiltered = $(".tab-content:visible h5:contains('" + searchInput + "')").length;
        $(".tab-content:visible .info-count .cnt").text(cntFiltered);
        $(".tab-content:visible h5:contains('" + searchInput + "')")
          .parent()
          .css("display", "block");
        $(".empty-result").hide();
        if (cntFiltered == 0) {
          $(".tab-content:visible .empty-result").show();
        }
      }, 300);
    });
  }
  if ($(".page-projects").length) {
    var get_project_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var category = $(".filter-category li.active").text().replace("&", "and");
      var keyword = $.map($(".filter-keyword input:checked"), function (n, _i) {
        return n.value;
      }).join(",");
      var search = $("input#search").val();
      var encodedQueryString =
        "&" +
        encodeURIComponent("c=" + category) +
        "&" +
        encodeURIComponent("k=" + keyword) +
        "&" +
        encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "research/projects" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "research/get_project_list_ajax",
        method: "GET",
        data: { p: pageNo, c: category, k: keyword, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var projectHtml = "";
            var projectData = data.project_items;
            var lenProjectData = projectData.length;
            for (var i = 0; i < lenProjectData; i++) {
              projectHtml +=
                "<div class='col-xl-4 col-lg-4 col-md-12 col-sm-12 u-display-none'>\
									            <div class='item-project'>\
									              <div class='single-blog-post'>\
									                <div class='wrapper-img-holder'>\
									                  <div class='img-holder' style='background-image:url(\"" +
                baseUrl +
                "uploads/projects/" +
                projectData[i].thumb_img_url +
                "\"')'></div>\
									                  <div class='overlay'>\
									                    <div class='wrapper'>\
									                      <a href='" +
                baseUrl +
                "research/projects/" +
                projectData[i].no +
                "'><i class='ti-plus'></i></a>\
									                    </div>\
									                  </div>\
									                </div>\
									                <div class='text-holder'>\
									                  <div class='meta-box'>\
									                    <ul class='meta-info'>\
									                      <li>" +
                projectData[i].category +
                "</li>\
									                    </ul>\
									                  </div>\
									                  <h3 class='blog-title'><a href='" +
                baseUrl +
                "research/projects/" +
                projectData[i].no +
                "' class='line-clamp line-clamp-2'>" +
                projectData[i].title +
                "(" +
                projectData[i].partner +
                ")</a></h3>\
									                  <div class='text-box'>\
									                    <p class='line-clamp line-clamp-2'>" +
                projectData[i].content +
                "</p>\
									                  </div>\
									                  <div class='line-keyword'>";
              var kLength = projectData[i].keyword.length;
              for (var j = 0; j < kLength; j++) {
                projectHtml +=
                  "<span class='keyword'>#" + jQuery.trim(projectData[i].keyword[j]) + "</span> ";
              }
              projectHtml +=
                "</div>\
									                  <div class='line-period'>\
									                  \t<i class='fa fa-calendar'></i> " +
                projectData[i].start_date +
                " ~ " +
                projectData[i].end_date +
                "\
									                  </div>\
									                  <div class='line-footer'>\
									                    <a class='btn-two' href='" +
                baseUrl +
                "research/projects/" +
                projectData[i].no +
                "'>Read More<span class='flaticon-next'></span></a>\
									                  </div>\
									                </div>\
									              </div>\
									            </div>\
									          </div>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".wrapper-project-list").html(projectHtml);
            $(".wrapper-project-list div[class^='col']").fadeIn(400);
            if (data.total_cnt_item == 0) {
              $(".wrapper-project-list").html(
                "<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var categoryVal = $(".filter-category ul:not(.select-options) li.active").text();
      var checkedKeyword = $("input[name='keyword']:checked");
      var searchInput = $("input#search").val();
      if (searchInput != "" || checkedKeyword.length > 0 || categoryVal != "ALL") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $(".filter-category ul:not(.select-options) li").on("click", function () {
      var activeItem = $(this).text();
      $(".filter-category ul:not(.select-options) li").removeClass("active");
      $(this).addClass("active");
      $(".filter-category .select-styled").text(activeItem);
      $(".filter-category ul.select-options li").attr("data-checked", "");
      $(".filter-category ul.select-options li[data-value='" + activeItem + "']").attr(
        "data-checked",
        "checked",
      );
      get_project_item_by_filter();
      checkedIsFiltering();
    });
    $(".filter-category ul.select-options li").on("click", function () {
      var activeItemIndex = $(".filter-category ul.select-options li").index($(this));
      $(".filter-category ul:not(.select-options) li").removeClass("active");
      $(".filter-category ul:not(.select-options) li").eq(activeItemIndex).addClass("active");
      get_project_item_by_filter();
      checkedIsFiltering();
    });
    $("input[name='keyword']").on("ifChanged", function () {
      get_project_item_by_filter();
      checkedIsFiltering();
    });
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_project_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_project_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
    $(".btn-show-more").on("click", function () {
      if ($(".filter-keyword ul").hasClass("show")) {
        $(".filter-keyword ul").removeClass("show");
        $(".btn-show-more").html("<i class='fa fa-caret-down'></i> 더보기");
      } else {
        $(".filter-keyword ul").addClass("show");
        $(".btn-show-more").html("<i class='fa fa-caret-up'></i> 숨기기");
      }
    });
  }
  if ($(".page-essay").length) {
    var get_essay_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var search = $("input#search").val();
      var encodedQueryString = "&" + encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "activity/essay" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "activity/get_essay_list_ajax",
        method: "GET",
        data: { p: pageNo, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var essayHtml = "";
            var essayData = data.essay_items;
            var lenEssayData = essayData.length;
            for (var i = 0; i < lenEssayData; i++) {
              essayHtml +=
                "<tr class='u-display-none'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" +
                essayData[i].d +
                "</div>\
                        <span class='date-ym'>" +
                essayData[i].ym +
                "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" +
                baseUrl +
                "activity/essay/" +
                essayData[i].no +
                "'>\
                        <h2 class='sbj'>" +
                essayData[i].title +
                "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" +
                essayData[i].content +
                "</div>\
                        <div class='person'>\
                          <div class='content'>\
                            <span>Written by</span>\
                            <img src='" +
                essayData[i].writer.thumb_img_url +
                "' alt='" +
                essayData[i].writer.name +
                "'>\
                            <b>" +
                essayData[i].writer.name +
                "</b>\
                          </div>\
                        </div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" +
                essayData[i].regist_date +
                "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" +
                baseUrl +
                "activity/essay/" +
                essayData[i].no +
                "'>Read More</a>\
                    </td>\
                  </tr>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".board-list tbody").html(essayHtml);
            $(".board-list tbody tr").fadeIn(400);
            if (data.total_cnt_item == 0) {
              $(".board-list tbody").html(
                "<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var searchInput = $("input#search").val();
      if (searchInput != "") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_essay_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_essay_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
  }
  if ($(".page-conference").length) {
    var get_conference_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var search = $("input#search").val();
      var encodedQueryString = "&" + encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "activity/conference" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "activity/get_conference_list_ajax",
        method: "GET",
        data: { p: pageNo, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var conferenceHtml = "";
            var conferenceData = data.conference_items;
            var lenConferenceData = conferenceData.length;
            for (var i = 0; i < lenConferenceData; i++) {
              conferenceHtml +=
                "<tr class='u-display-none'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" +
                conferenceData[i].d +
                "</div>\
                        <span class='date-ym'>" +
                conferenceData[i].ym +
                "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" +
                baseUrl +
                "activity/conference/" +
                conferenceData[i].no +
                "'>\
                        <h2 class='sbj'>" +
                conferenceData[i].title +
                "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" +
                conferenceData[i].content +
                "</div>\
                        <div class='person'>\
                          <div class='content'>\
                            <span>Reviewed by</span>\
                            <img src='" +
                conferenceData[i].writer.thumb_img_url +
                "' alt='" +
                conferenceData[i].writer.name +
                "'>\
                            <b>" +
                conferenceData[i].writer.name +
                "</b>\
                          </div>\
                        </div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" +
                conferenceData[i].regist_date +
                "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" +
                baseUrl +
                "activity/conference/" +
                conferenceData[i].no +
                "'>Read More</a>\
                    </td>\
                  </tr>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".board-list tbody").html(conferenceHtml);
            $(".board-list tbody tr").fadeIn(400);
            if (data.total_cnt_item == 0) {
              $(".board-list tbody").html(
                "<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var searchInput = $("input#search").val();
      if (searchInput != "") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_conference_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_conference_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
  }
  if ($(".page-lab-news").length) {
    var get_news_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var search = $("input#search").val();
      var encodedQueryString = "&" + encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "activity/news" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "activity/get_news_list_ajax",
        method: "GET",
        data: { p: pageNo, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var newsHtml = "";
            var noticeData = data.notice_items;
            var lenNoticeData = noticeData.length;
            for (var i = 0; i < lenNoticeData; i++) {
              newsHtml +=
                "<tr class='u-display-none'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" +
                noticeData[i].d +
                "</div>\
                        <span class='date-ym'>" +
                noticeData[i].ym +
                "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" +
                baseUrl +
                "activity/news/" +
                noticeData[i].no +
                "'>\
                        <h2 class='sbj'><i class='ti-pin-alt'></i> " +
                noticeData[i].title +
                "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" +
                noticeData[i].content +
                "</div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" +
                noticeData[i].regist_date +
                "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" +
                baseUrl +
                "activity/news/" +
                noticeData[i].no +
                "'>Read More</a>\
                    </td>\
                  </tr>";
            }
            var newsData = data.news_items;
            var lenNewsData = newsData.length;
            for (var i = 0; i < lenNewsData; i++) {
              newsHtml +=
                "<tr class='u-display-none'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" +
                newsData[i].d +
                "</div>\
                        <span class='date-ym'>" +
                newsData[i].ym +
                "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" +
                baseUrl +
                "activity/news/" +
                newsData[i].no +
                "'>\
                        <h2 class='sbj'>" +
                newsData[i].title +
                "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" +
                newsData[i].content +
                "</div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" +
                newsData[i].regist_date +
                "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" +
                baseUrl +
                "activity/news/" +
                newsData[i].no +
                "'>Read More</a>\
                    </td>\
                  </tr>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".board-list tbody").html(newsHtml);
            $(".board-list tbody tr").fadeIn(400);
            if (lenNoticeData > 0 && data.not_notice_total_cnt == 0) {
              $(".board-list tbody").append(
                "<tr><td colspan='3' class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>",
              );
            } else if (lenNoticeData == 0 && data.not_notice_total_cnt == 0) {
              $(".board-list tbody").html(
                "<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var searchInput = $("input#search").val();
      if (searchInput != "") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_news_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_news_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
  }
  if ($(".page-lab-album").length) {
    var get_album_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var search = $("input#search").val();
      var encodedQueryString = "&" + encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "activity/album" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "activity/get_album_list_ajax",
        method: "GET",
        data: { p: pageNo, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var albumHtml = "";
            var albumData = data.album_items;
            var lenAlubmData = albumData.length;
            for (var i = 0; i < lenAlubmData; i++) {
              albumHtml +=
                "<div class='col-lg-4 col-md-6 col-sm-12 news-column'>\
                  <div class='single-news-content' style='background-image:url(\"" +
                baseUrl +
                "uploads/album/" +
                albumData[i].thumb_img_url +
                "\")'>\
                    <div class='content-box'>\
                      <h5><a href='" +
                baseUrl +
                "activity/album/" +
                albumData[i].no +
                "'>" +
                albumData[i].title +
                "</a></h5>\
                      <ul class='info-content'>\
                        <li>" +
                albumData[i].regist_date +
                "</li>\
                      </ul>\
                    </div>\
                    <div class='overlay'>\
                      <div class='wrapper'>\
                        <a href='" +
                baseUrl +
                "activity/album/" +
                albumData[i].no +
                "'><i class='ti-plus'></i></a>\
                      </div>\
                    </div>\
                  </div>\
                </div>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".default-blog-content .row").html(albumHtml);
            $(".default-blog-content .row .news-column").fadeIn(400);
            if (data.total_cnt_item == 0) {
              $(".default-blog-content .row").html(
                "<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var searchInput = $("input#search").val();
      if (searchInput != "") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_album_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_album_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
  }
  if ($(".page-seminar").length) {
    var get_seminar_item_by_filter = function (currentPageNo, paging) {
      if (currentPageNo === undefined) {
        currentPageNo = 1;
      }
      if (paging === undefined) {
        paging = !1;
      }
      var pageNo = currentPageNo;
      var search = $.trim($("input#search").val());
      var encodedQueryString = "&" + encodeURIComponent("s=" + search);
      history.replaceState(
        null,
        null,
        baseUrl + "activity/seminar" + "?p=" + pageNo + encodedQueryString,
      );
      $.ajax({
        url: baseUrl + "activity/get_seminar_list_ajax",
        method: "GET",
        data: { p: pageNo, s: search },
        dataType: "json",
      })
        .done(function (data) {
          if (data.response === "success") {
            var seminarHtml = "";
            var seminarData = data.seminar_items;
            var lenSeminarData = seminarData.length;
            for (var i = 0; i < lenSeminarData; i++) {
              seminarHtml +=
                "<div class='col-xl-4 col-lg-4 col-md-12 col-sm-12 news-column'>\
									            <div class='single-news-content inner-box big-column'>";
              if (seminarData[i].dday == "종료") {
                seminarHtml += "<div class='dday black'>" + seminarData[i].dday + "</div>";
              } else {
                seminarHtml += "<div class='dday'>" + seminarData[i].dday + "</div>";
              }
              seminarHtml +=
                "<figure class='image-box'>\
								                <img src='" +
                baseUrl +
                "uploads/seminar/dummy_image.jpg' alt='" +
                seminarData[i].title +
                "'>\
								                <div class='real-img' style='background-image:url(\"" +
                baseUrl +
                "uploads/seminar/" +
                seminarData[i].thumb_img_url +
                "\")'>\
								                <div class='overlay'>\
								                  <div class='wrapper'>\
								                    <a href='" +
                baseUrl +
                "activity/seminar/" +
                seminarData[i].no +
                "'><i class='ti-plus'></i></a>\
								                  </div>\
								                </div>\
								              </figure>\
								              <div class='content-box'>\
								                <h4><a href='" +
                baseUrl +
                "activity/seminar/" +
                seminarData[i].no +
                "'>" +
                seminarData[i].title +
                "</a></h4>\
								                <div class='person'>\
								                  <div class='content'>\
								                    <span>발표자: </span>\
								                    <img src='" +
                seminarData[i].presenter.thumb_img_url +
                "' alt='" +
                seminarData[i].presenter.name +
                "'>\
								                    <b>" +
                seminarData[i].presenter.name +
                "</b>\
								                  </div>\
								                </div>\
								                <ul class='pdt-info-content'>\
								                  <li><i class='ti-calendar'></i><span>" +
                seminarData[i].start_date +
                "</span></li>\
								                  <li><i class='ti-alarm-clock'></i><span>" +
                seminarData[i].start_time +
                "</span></li>\
								                  <li><i class='ti-location-pin'></i><span>" +
                seminarData[i].place +
                "</span></li>\
								                </ul>\
								              </div>\
								              <div class='line-footer'><a href='" +
                baseUrl +
                "activity/seminar/" +
                seminarData[i].no +
                "'>세미나 정보 보기<span class='flaticon-next'></span></a></div>\
								            </div>\
								          </div>";
            }
            $(".info-count .cnt").text(data.total_cnt_item);
            $("#pagination").html(data.pagination);
            $(".wrapper-seminar-list").html(seminarHtml);
            $(".wrapper-seminar-list .news-column").fadeIn(400);
            if (data.total_cnt_item == 0) {
              $(".wrapper-seminar-list").html(
                "<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>",
              );
            }
            if (paging) {
              $("html, body").scrollTop(0, 0);
            }
          }
        })
        .fail(function (_data) {})
        .always(function () {});
    };
    var checkedIsFiltering = function () {
      var searchInput = $("input#search").val();
      if (searchInput != "") {
        $(".info-count .status").css("display", "inline");
      } else {
        $(".info-count .status").css("display", "none");
      }
    };
    $("input#search").on("keyup", function () {
      typewatch(function () {
        get_seminar_item_by_filter();
        checkedIsFiltering();
      }, 300);
    });
    $(document).on("click", "ul.pagination li a", function (e) {
      e.preventDefault();
      get_seminar_item_by_filter($(this).data("ci-pagination-page"), !0);
    });
  }
  if ($(".page-open-courses").length) {
    $(window).scroll(function () {
      if ($(window).data("ajaxready") == !1) return;
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        if ($("input[name='next-token']").val() != "") {
          $(window).data("ajaxready", !1);
          $.ajax({
            url: baseUrl + "research/open_courses_ajax",
            method: "POST",
            data: {
              next_page_token: $("input[name='next-token']").val(),
              dmqat: $.cookie("dmqac"),
            },
            dataType: "json",
          })
            .done(function (data) {
              if (data.response === "success") {
                var videoHtml = "";
                if (data.video.nextPageToken !== undefined) {
                  $("input[name='next-token']").val(data.video.nextPageToken);
                } else {
                  $("input[name='next-token']").val("");
                }
                var cntItem = data.video.items.length;
                for (var i = 0; i < cntItem; i++) {
                  if (data.video.items[i].id.videoId !== undefined) {
                    var date = data.video.items[i].snippet.publishedAt.split("T")[0];
                    videoHtml +=
                      "<div class='col-xl-4 col-lg-6 col-md-12 col-sm-12'>\
											            <div class='youtube-video'>\
											              <iframe width='100%' height='300' src='https://www.youtube.com/embed/" +
                      data.video.items[i].id.videoId +
                      "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>\
											              <div class='content'>\
											                <h2 class='title line-clamp line-clamp-2'>" +
                      data.video.items[i].snippet.title +
                      "</h2>\
											                <div class='desc line-clamp line-clamp-2'>" +
                      data.video.items[i].snippet.description +
                      "</div>\
											                <div class='meta-info'>\
											                  <span><i class='ti-calendar'></i> " +
                      date +
                      "</span>\
											                </div>\
											              </div>\
											            </div>\
											          </div>";
                  }
                }
                $(".wrapper-youtube-list").append(videoHtml);
                console.log("fire");
                $(window).data("ajaxready", !0);
              }
            })
            .fail(function (_data) {})
            .always(function () {});
        }
      }
    });
  }
})(window.jQuery);

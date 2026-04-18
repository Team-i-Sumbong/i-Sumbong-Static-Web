(function () {
  var body = document.body;
  var toggleButton = document.querySelector(".mobile-menu-toggle");
  var drawer = document.querySelector(".mobile-nav-drawer");
  var backdrop = document.querySelector(".mobile-nav-backdrop");
  var drawerLinks = drawer ? drawer.querySelectorAll("a") : [];
  var menuIcon = toggleButton ? toggleButton.querySelector(".material-symbols-outlined") : null;
  var desktopMediaQuery = window.matchMedia("(min-width: 1025px)");
  var mobileBreakpoint = window.matchMedia("(max-width: 1024px)");

  if (!toggleButton || !drawer || !backdrop) {
    return;
  }

  if (!drawer.id) {
    drawer.id = "landing-mobile-nav";
  }

  toggleButton.type = "button";
  toggleButton.setAttribute("aria-controls", drawer.id);
  toggleButton.removeAttribute("onclick");
  backdrop.removeAttribute("onclick");

  function setMenuState(isOpen) {
    var isMobile = mobileBreakpoint.matches;
    var showMenu = isMobile && isOpen;

    body.classList.toggle("menu-open", showMenu);
    toggleButton.setAttribute("aria-expanded", String(showMenu));
    toggleButton.setAttribute("aria-label", showMenu ? "Close navigation menu" : "Open navigation menu");
    drawer.setAttribute("aria-hidden", String(isMobile ? !showMenu : false));
    backdrop.setAttribute("aria-hidden", String(!showMenu));

    if (menuIcon) {
      menuIcon.textContent = showMenu ? "close" : "menu";
    }
  }

  toggleButton.addEventListener("click", function () {
    setMenuState(!body.classList.contains("menu-open"));
  });

  backdrop.addEventListener("click", function () {
    setMenuState(false);
  });

  drawerLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && body.classList.contains("menu-open")) {
      setMenuState(false);
    }
  });

  if (typeof mobileBreakpoint.addEventListener === "function") {
    mobileBreakpoint.addEventListener("change", function () {
      setMenuState(false);
    });
  } else if (typeof mobileBreakpoint.addListener === "function") {
    mobileBreakpoint.addListener(function () {
      setMenuState(false);
    });
  }

  if (typeof desktopMediaQuery.addEventListener === "function") {
    desktopMediaQuery.addEventListener("change", function () {
      setMenuState(false);
    });
  } else if (typeof desktopMediaQuery.addListener === "function") {
    desktopMediaQuery.addListener(function () {
      setMenuState(false);
    });
  }

  setMenuState(false);
})();

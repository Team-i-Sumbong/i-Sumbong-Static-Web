(function () {
  var body = document.body;
  var layout = document.querySelector(".layout");
  var sidebar = document.querySelector(".sidebar");
  var menuButton = document.querySelector(".menu-btn");

  if (!body || !layout || !sidebar || !menuButton) {
    return;
  }

  var mobileQuery = window.matchMedia("(max-width: 992px)");
  var menuIcon = menuButton.querySelector(".material-symbols-outlined");
  var navLinks = sidebar.querySelectorAll(".nav-link");
  var backdrop = document.createElement("button");

  backdrop.type = "button";
  backdrop.className = "sidebar-backdrop";
  backdrop.setAttribute("aria-label", "Close navigation menu");
  backdrop.setAttribute("aria-hidden", "true");
  backdrop.tabIndex = -1;

  layout.insertBefore(backdrop, sidebar);

  if (!sidebar.id) {
    sidebar.id = "app-sidebar";
  }

  menuButton.type = "button";
  menuButton.onclick = null;
  menuButton.removeAttribute("onclick");
  menuButton.setAttribute("aria-controls", sidebar.id);

  sidebar.querySelectorAll(".nav-link.active").forEach(function (link) {
    link.setAttribute("aria-current", "page");
  });

  function setSidebarState(shouldOpen) {
    var isMobile = mobileQuery.matches;
    var isOpen = isMobile && shouldOpen;

    layout.classList.toggle("sidebar-open", isOpen);
    body.classList.toggle("sidebar-open", isOpen);
    sidebar.classList.toggle("mobile-open", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    sidebar.setAttribute("aria-hidden", String(isMobile ? !isOpen : false));
    backdrop.setAttribute("aria-hidden", String(!isOpen));

    if (menuIcon) {
      menuIcon.textContent = isOpen ? "close" : "menu";
    }
  }

  function toggleSidebar() {
    setSidebarState(!layout.classList.contains("sidebar-open"));
  }

  menuButton.addEventListener("click", function () {
    toggleSidebar();
  });

  backdrop.addEventListener("click", function () {
    setSidebarState(false);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (mobileQuery.matches) {
        setSidebarState(false);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && layout.classList.contains("sidebar-open")) {
      setSidebarState(false);
    }
  });

  function handleViewportChange() {
    setSidebarState(false);
  }

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", handleViewportChange);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(handleViewportChange);
  }

  setSidebarState(false);
})();

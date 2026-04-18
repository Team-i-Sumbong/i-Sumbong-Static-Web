(function () {
  var body = document.body;

  if (!body) {
    return;
  }

  var isAdmin = window.location.pathname.indexOf("/admin/") !== -1;
  var activeTrigger = null;
  var backdrop = document.createElement("button");
  var modal = document.createElement("div");
  var focusableSelectors = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(", ");

  backdrop.type = "button";
  backdrop.className = "dashboard-modal-backdrop";
  backdrop.setAttribute("aria-label", "Close dialog");
  backdrop.setAttribute("aria-hidden", "true");

  modal.className = "dashboard-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML =
    '<div class="dashboard-modal-card" role="dialog" aria-modal="true" aria-labelledby="dashboard-modal-title"></div>';

  body.appendChild(backdrop);
  body.appendChild(modal);

  var modalCard = modal.querySelector(".dashboard-modal-card");

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/\n/g, " ");
  }

  function lockScroll() {
    body.classList.add("modal-open");
  }

  function unlockScroll() {
    body.classList.remove("modal-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
    modalCard.innerHTML = "";
    unlockScroll();

    if (activeTrigger && typeof activeTrigger.focus === "function") {
      activeTrigger.focus();
    }

    activeTrigger = null;
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || !modal.classList.contains("is-open")) {
      return;
    }

    var focusables = modalCard.querySelectorAll(focusableSelectors);

    if (!focusables.length) {
      event.preventDefault();
      return;
    }

    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openModal(content) {
    modalCard.innerHTML = content;
    modal.classList.add("is-open");
    backdrop.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    lockScroll();

    var initialFocus =
      modalCard.querySelector("[data-modal-close]") ||
      modalCard.querySelector(focusableSelectors);

    if (initialFocus && typeof initialFocus.focus === "function") {
      initialFocus.focus();
    }
  }

  function profileContent() {
    if (isAdmin) {
      return (
        '<div class="dashboard-modal-shell">' +
        '<div class="dashboard-modal-head">' +
        '<div><p class="page-kicker">Profile</p><h2 id="dashboard-modal-title">Admin profile</h2><p class="window-note">Update the staff details and account information tied to your barangay dashboard access.</p></div>' +
        '<button type="button" class="dashboard-modal-close" data-modal-close aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>' +
        "</div>" +
        '<section class="window-section panel">' +
        '<div class="panel-header"><div><p class="section-label">Account</p><h2>Edit staff information</h2></div></div>' +
        '<div class="form-grid account-grid">' +
        '<div class="field"><label for="modal-admin-first-name">First Name</label><input id="modal-admin-first-name" type="text" value="Maria" /></div>' +
        '<div class="field"><label for="modal-admin-last-name">Last Name</label><input id="modal-admin-last-name" type="text" value="Lopez" /></div>' +
        '<div class="field"><label for="modal-admin-email">Email Address</label><input id="modal-admin-email" type="email" value="maria.lopez@isumbong.local" /></div>' +
        '<div class="field"><label for="modal-admin-contact">Mobile Number</label><input id="modal-admin-contact" type="text" value="+63 917 456 7821" /></div>' +
        '<div class="field"><label for="modal-admin-barangay">Barangay</label><select id="modal-admin-barangay"><option>Barangay Baybay</option><option>Barangay Poblacion</option><option>Barangay San Jose</option></select></div>' +
        '<div class="field"><label for="modal-admin-role">Account Type</label><select id="modal-admin-role"><option>Barangay Official</option><option selected>Barangay Staff</option></select></div>' +
        '<div class="field field-full"><label for="modal-admin-address">Street Address or Landmark</label><input id="modal-admin-address" type="text" value="Municipal compound, main office beside the barangay hall" /></div>' +
        '<div class="field"><label for="modal-admin-password">Password</label><input id="modal-admin-password" type="password" value="AdminSecure123!" /><small>Use at least 8 characters if you want to change your password.</small></div>' +
        '<div class="field"><label for="modal-admin-confirm-password">Confirm Password</label><input id="modal-admin-confirm-password" type="password" value="AdminSecure123!" /></div>' +
        "</div>" +
        '<div class="settings-checkboxes">' +
        '<label class="settings-check" for="modal-admin-terms"><input type="checkbox" id="modal-admin-terms" checked /><span>I agree to the Terms and Privacy Policy for my i-Sumbong account.</span></label>' +
        '<label class="settings-check" for="modal-admin-updates"><input type="checkbox" id="modal-admin-updates" /><span>I want to receive important account and report-related updates through the platform.</span></label>' +
        "</div>" +
        '<div class="button-row"><button type="button" class="button">Save Profile Changes</button><button type="button" class="button-secondary" data-modal-close><span class="material-symbols-outlined" aria-hidden="true">close</span><span>Close</span></button></div>' +
        "</section>" +
        "</div>"
      );
    }

    return (
      '<div class="dashboard-modal-shell">' +
      '<div class="dashboard-modal-head">' +
      '<div><p class="page-kicker">Profile</p><h2 id="dashboard-modal-title">Resident profile</h2><p class="window-note">Update the personal details and account information linked to your resident record.</p></div>' +
      '<button type="button" class="dashboard-modal-close" data-modal-close aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>' +
      "</div>" +
      '<section class="window-section panel">' +
      '<div class="panel-header"><div><p class="section-label">Account</p><h2>Edit resident information</h2></div></div>' +
      '<div class="form-grid account-grid">' +
      '<div class="field"><label for="modal-resident-first-name">First Name</label><input id="modal-resident-first-name" type="text" value="Juan" /></div>' +
      '<div class="field"><label for="modal-resident-last-name">Last Name</label><input id="modal-resident-last-name" type="text" value="Dela Cruz" /></div>' +
      '<div class="field"><label for="modal-resident-email">Email Address</label><input id="modal-resident-email" type="email" value="juan.delacruz@isumbong.local" /></div>' +
      '<div class="field"><label for="modal-resident-contact">Mobile Number</label><input id="modal-resident-contact" type="text" value="+63 912 345 6789" /></div>' +
      '<div class="field"><label for="modal-resident-barangay">Barangay</label><select id="modal-resident-barangay"><option>Barangay Baybay</option><option>Barangay Poblacion</option><option>Barangay San Jose</option></select></div>' +
      '<div class="field"><label for="modal-resident-role">Account Type</label><select id="modal-resident-role"><option selected>Resident</option><option>Barangay Official</option><option>Barangay Staff</option></select></div>' +
      '<div class="field field-full"><label for="modal-resident-address">Street Address or Landmark</label><input id="modal-resident-address" type="text" value="Blk 3 Lot 12, Rizal Street near the covered court" /></div>' +
      '<div class="field"><label for="modal-resident-password">Password</label><input id="modal-resident-password" type="password" value="Resident123!" /><small>Use at least 8 characters if you want to change your password.</small></div>' +
      '<div class="field"><label for="modal-resident-confirm-password">Confirm Password</label><input id="modal-resident-confirm-password" type="password" value="Resident123!" /></div>' +
      "</div>" +
      '<div class="settings-checkboxes">' +
      '<label class="settings-check" for="modal-resident-terms"><input type="checkbox" id="modal-resident-terms" checked /><span>I agree to the Terms and Privacy Policy for my i-Sumbong account.</span></label>' +
      '<label class="settings-check" for="modal-resident-updates"><input type="checkbox" id="modal-resident-updates" checked /><span>I want to receive important account and report-related updates through the platform.</span></label>' +
      "</div>" +
      '<div class="button-row"><button type="button" class="button">Save Profile Changes</button><button type="button" class="button-secondary" data-modal-close><span class="material-symbols-outlined" aria-hidden="true">close</span><span>Close</span></button></div>' +
      "</section>" +
      "</div>"
    );
  }

  function reportContent(trigger) {
    var row = trigger.closest("tr");
    var cells = row ? row.querySelectorAll("td") : [];
    var fallbackTitle = trigger.textContent ? trigger.textContent.trim() : "Community concern";
    var title = escapeHtml(trigger.dataset.title || fallbackTitle);
    var category = escapeHtml(trigger.dataset.category || (cells[1] ? cells[1].textContent.trim() : "Community concern"));
    var date = escapeHtml(trigger.dataset.date || (cells[2] ? cells[2].textContent.trim() : "Apr 4, 2026"));
    var area = escapeHtml(
      trigger.dataset.area ||
      (isAdmin
        ? (cells[3] ? cells[3].textContent.trim() : "Barangay Baybay")
        : "Barangay Baybay")
    );
    var statusCell = cells[isAdmin ? 4 : 3];
    var status = escapeHtml(trigger.dataset.status || (statusCell ? statusCell.textContent.trim() : "Pending"));
    var submitter = escapeHtml(trigger.dataset.submitter || "Resident report");
    var description = escapeHtml(
      trigger.dataset.description ||
      ("This " + String(category || "community concern").toLowerCase() + " report was filed for " + String(area || "the barangay") + " and is currently marked as " + String(status || "pending").toLowerCase() + ".")
    );
    var actionPrimary = isAdmin ? "Mark In Review" : "Close";
    var adminExtra =
      isAdmin
        ? '<div><p class="section-label">Submitted by</p><p class="window-note">' + submitter + "</p></div>"
        : "";

    return (
      '<div class="dashboard-modal-shell">' +
      '<div class="dashboard-modal-head">' +
      '<div><p class="page-kicker">Report Details</p><h2 id="dashboard-modal-title">' + title + '</h2><p class="window-note">' +
      (isAdmin
        ? "Review the full report details and decide the next action for this concern."
        : "Review the details of your submitted concern and check the latest status updates.") +
      '</p></div><button type="button" class="dashboard-modal-close" data-modal-close aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button></div>' +
      '<div class="window-meta">' +
      '<span class="window-chip"><span class="material-symbols-outlined" aria-hidden="true">calendar_today</span><span>' + date + "</span></span>" +
      '<span class="window-chip"><span class="material-symbols-outlined" aria-hidden="true">place</span><span>' + area + "</span></span>" +
      '<span class="window-chip"><span class="material-symbols-outlined" aria-hidden="true">pending_actions</span><span>' + status + "</span></span>" +
      "</div>" +
      '<section class="window-section panel"><div class="panel-heading-inline"><span class="material-symbols-outlined" aria-hidden="true">description</span><h2>Report summary</h2></div><div class="stack-list">' +
      '<div><p class="section-label">Category</p><p class="window-note">' + category + "</p></div>" +
      adminExtra +
      '<div><p class="section-label">Description</p><p class="window-note">' + description + "</p></div>" +
      "</div></section>" +
      '<section class="window-section panel"><div class="panel-heading-inline"><span class="material-symbols-outlined" aria-hidden="true">assignment_turned_in</span><h2>' +
      (isAdmin ? "Admin actions" : "Report actions") +
      '</h2></div><div class="button-row">' +
      (isAdmin
        ? '<button type="button" class="button"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><span>' + actionPrimary + "</span></button>"
        : "") +
      '<button type="button" class="button-secondary" data-modal-close><span class="material-symbols-outlined" aria-hidden="true">close</span><span>Back</span></button>' +
      "</div></section>" +
      "</div>"
    );
  }

  function announcementContent(trigger) {
    var title = escapeHtml(trigger.dataset.title);
    var category = escapeHtml(trigger.dataset.category || "Barangay Notice");
    var date = escapeHtml(trigger.dataset.date || "Apr 6, 2026");
    var preview = escapeHtml(trigger.dataset.preview || "");
    var bodyCopy = escapeHtml(trigger.dataset.body || preview || "No further announcement details were provided.");
    var imageSrc = trigger.dataset.imageSrc ? escapeAttribute(trigger.dataset.imageSrc) : "";
    var imageAlt = escapeAttribute(trigger.dataset.imageAlt || title);
    var priority = escapeHtml(trigger.dataset.priority || "");
    var author = escapeHtml(trigger.dataset.author || (isAdmin ? "Barangay Office" : "Community notice"));
    var imageMarkup = imageSrc
      ? '<div class="dashboard-modal-hero"><img src="' + imageSrc + '" alt="' + imageAlt + '" /></div>'
      : "";
    var priorityMarkup = priority ? '<span class="announcement-chip announcement-chip-priority">' + priority + "</span>" : "";
    var adminActions = isAdmin
      ? '<div class="button-row"><button type="button" class="button-secondary"><span class="material-symbols-outlined" aria-hidden="true">edit_square</span><span>Edit</span></button><button type="button" class="button-secondary"><span class="material-symbols-outlined" aria-hidden="true">push_pin</span><span>Pin</span></button><button type="button" class="button-secondary"><span class="material-symbols-outlined" aria-hidden="true">delete</span><span>Delete</span></button></div>'
      : "";

    return (
      '<div class="dashboard-modal-shell">' +
      imageMarkup +
      '<div class="dashboard-modal-head">' +
      '<div><p class="page-kicker">' + category + '</p><h2 id="dashboard-modal-title">' + title + '</h2><p class="window-note">' + preview + '</p></div>' +
      '<button type="button" class="dashboard-modal-close" data-modal-close aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>' +
      "</div>" +
      '<div class="window-meta"><span class="window-chip"><span class="material-symbols-outlined" aria-hidden="true">calendar_today</span><span>' + date + "</span></span><span class=\"window-chip\"><span class=\"material-symbols-outlined\" aria-hidden=\"true\">campaign</span><span>" + author + "</span></span>" + priorityMarkup + "</div>" +
      '<section class="window-section panel"><div class="panel-heading-inline"><span class="material-symbols-outlined" aria-hidden="true">article</span><h2>Announcement details</h2></div><p class="window-note dashboard-modal-copy">' + bodyCopy + "</p></section>" +
      adminActions +
      '<div class="button-row"><button type="button" class="button" data-modal-close><span class="material-symbols-outlined" aria-hidden="true">visibility</span><span>' + (isAdmin ? "Done Reviewing" : "Close Announcement") + "</span></button></div>" +
      "</div>"
    );
  }

  function buildContent(trigger) {
    var type = trigger.dataset.modalType;

    if (type === "profile") {
      return profileContent();
    }

    if (type === "report") {
      return reportContent(trigger);
    }

    if (type === "announcement") {
      return announcementContent(trigger);
    }

    return "";
  }

  function shouldIgnoreTrigger(event) {
    return !!event.target.closest("[data-modal-ignore]");
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-modal-close]")) {
      event.preventDefault();
      closeModal();
      return;
    }

    if (shouldIgnoreTrigger(event)) {
      return;
    }

    var trigger = event.target.closest("[data-modal-type]");

    if (!trigger) {
      return;
    }

    event.preventDefault();
    activeTrigger = trigger;
    openModal(buildContent(trigger));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      event.preventDefault();
      closeModal();
      return;
    }

    trapFocus(event);

    var trigger = event.target.closest(".announcement-card[data-modal-type]");

    if (
      trigger &&
      !modal.classList.contains("is-open") &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      activeTrigger = trigger;
      openModal(buildContent(trigger));
    }
  });

  backdrop.addEventListener("click", function () {
    closeModal();
  });
})();

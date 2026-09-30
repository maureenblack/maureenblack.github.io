"use strict";

/* EDIT YOUR LINKS HERE.
 * These professional links come from the supplied CV and project brief.
 * Keep the matching index.html hrefs in sync for visitors without JavaScript.
 * YOUR_SITE_URL is the only missing URL: add it to the commented canonical and
 * og:url tags in index.html after choosing the final GitHub Pages address.
 */
const SITE_CONFIG = Object.freeze({
  github: "https://github.com/maureenblack",
  linkedin: "https://www.linkedin.com/in/wepngongmaureen",
  cps: "https://github.com/cardano-foundation/CIPs/blob/master/CPS-0033/README.md",
  cpsPr: "https://github.com/cardano-foundation/CIPs/pull/1211",
  cv: "assets/Maureen-Wepngong-CV.pdf",
  productCv: "assets/cv/MaureenWepngongProductCV.pdf",
  email: "maureen@giiyotech.com",
  giiyo: "https://giiyotech.com/",
  koki: "https://kokiafrique.com/",
  googlePlay: "https://play.google.com/store/apps/details?id=com.giiyotech.koki",
  appStore: "https://apps.apple.com/app/id6772351386",
  portrait: "assets/maureen.jpg",
  portraitIsPlaceholder: false,
});

// Local paths above are relative to the site root, which is where this script lives,
// so they resolve correctly from /product/ and /blog/ pages too.
const SITE_ROOT = new URL(".", document.currentScript ? document.currentScript.src : window.location.href);
const resolveLink = (value) => (/^[a-z]+:/i.test(value) ? value : new URL(value, SITE_ROOT).href);

// Real hrefs in the HTML provide a complete, readable site without JavaScript.
document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  const value = SITE_CONFIG[key];
  if (typeof value !== "string" || !value || value.startsWith("YOUR_")) {
    link.hidden = true;
    return;
  }
  link.href = key === "email" ? `mailto:${value}` : resolveLink(value);
});
document.querySelectorAll("[data-email-text]").forEach((element) => {
  element.textContent = SITE_CONFIG.email;
});

// The monogram beneath the image covers a missing or unreadable portrait.
const portrait = document.getElementById("portrait-image");
if (portrait) {
  const showPortraitFallback = () => {
    portrait.hidden = true;
    const fallback = document.querySelector(".portrait-fallback");
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", "Maureen Wepngong");
    fallback.removeAttribute("aria-hidden");
  };
  portrait.addEventListener("error", showPortraitFallback);
  if (portrait.src !== resolveLink(SITE_CONFIG.portrait)) {
    portrait.src = resolveLink(SITE_CONFIG.portrait);
  }
  if (!SITE_CONFIG.portraitIsPlaceholder) portrait.alt = "Maureen Wepngong";
  if (portrait.complete && portrait.naturalWidth === 0) showPortraitFallback();
}

// A disclosure menu (not a modal): native links retain normal keyboard behaviour.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-nav");
const compactNavigation = window.matchMedia("(max-width: 760px)");

if (menuButton && navigation) {
  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
    navigation.classList.toggle("is-open", open);
  };

  menuButton.hidden = false;
  document.documentElement.classList.add("js");
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link || !compactNavigation.matches) return;
    setMenuOpen(false);
    // Move focus with in-page navigation so it does not remain in the hidden menu.
    const destination = document.querySelector(link.getAttribute("href"));
    if (destination) {
      destination.setAttribute("tabindex", "-1");
      destination.focus({ preventScroll: true });
      destination.addEventListener("blur", () => destination.removeAttribute("tabindex"), { once: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenuOpen(false);
  });
  document.addEventListener("focusin", (event) => {
    if (!event.target.closest(".site-header")) setMenuOpen(false);
  });
  compactNavigation.addEventListener("change", () => setMenuOpen(false));
}

// Subtle reading-position feedback without scroll event handlers or animation.
if ("IntersectionObserver" in window) {
  const navLinks = [...document.querySelectorAll("#primary-nav a[href^='#']")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
}

// Category filter on the writing index; without JavaScript every article stays listed.
const postFilter = document.querySelector(".post-filter");
if (postFilter) {
  const buttons = [...postFilter.querySelectorAll("button[data-filter]")];
  const rows = [...document.querySelectorAll("#post-list .post-row")];
  postFilter.hidden = false;
  postFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const category = button.dataset.filter;
    buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    rows.forEach((row) => {
      row.hidden = category !== "all" && row.dataset.category !== category;
    });
  });
}

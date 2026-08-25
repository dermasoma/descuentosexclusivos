"use strict";

const tiktokVideos = [
  {
    "id": "7664663442170727687",
    "url": "https://www.tiktok.com/@dermasoma/video/7664663442170727687"
  },
  {
    "id": "7666488173761006866",
    "url": "https://www.tiktok.com/@dermasoma/video/7666488173761006866"
  },
  {
    "id": "7665459481312005383",
    "url": "https://www.tiktok.com/@dermasoma/video/7665459481312005383"
  },
  {
    "id": "7600472991675321607",
    "url": "https://www.tiktok.com/@dermasoma/video/7600472991675321607"
  },
  {
    "id": "7600055639456419090",
    "url": "https://www.tiktok.com/@dermasoma/video/7600055639456419090"
  },
  {
    "id": "7599688084674235666",
    "url": "https://www.tiktok.com/@dermasoma/video/7599688084674235666"
  },
  {
    "id": "7397459663849016582",
    "url": "https://www.tiktok.com/@dermasoma/video/7397459663849016582"
  },
  {
    "id": "7396861996500651270",
    "url": "https://www.tiktok.com/@dermasoma/video/7396861996500651270"
  },
  {
    "id": "7395277094625840390",
    "url": "https://www.tiktok.com/@dermasoma/video/7395277094625840390"
  },
  {
    "id": "7294671553415974150",
    "url": "https://www.tiktok.com/@dermasoma/video/7294671553415974150"
  }
];
const tiktokGrid = document.querySelector("#tiktok-grid");
const tiktokModal = document.querySelector("#tiktok-modal");
const tiktokPlayer = document.querySelector("#tiktok-modal-player");
const tiktokOriginalLink = document.querySelector("#tiktok-original-link");
let lastTikTokTrigger = null;

const makeTikTokPlayerUrl = (videoId) => {
  const params = new URLSearchParams({
    autoplay: "1",
    controls: "1",
    progress_bar: "1",
    play_button: "1",
    volume_control: "1",
    fullscreen_button: "1",
    timestamp: "1",
    loop: "0",
    music_info: "1",
    description: "1",
    rel: "0",
    native_context_menu: "0",
    closed_caption: "1",
    muted: "0"
  });
  return `https://www.tiktok.com/player/v1/${videoId}?${params.toString()}`;
};

const openTikTokModal = (card) => {
  if (!tiktokModal || !tiktokPlayer || !tiktokOriginalLink) return;
  const videoId = card.dataset.tiktokId;
  const videoUrl = card.dataset.tiktokUrl;
  if (!videoId || !videoUrl) return;

  lastTikTokTrigger = card;
  tiktokPlayer.src = makeTikTokPlayerUrl(videoId);
  tiktokOriginalLink.href = videoUrl;
  tiktokModal.classList.add("is-open");
  tiktokModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => tiktokModal.querySelector(".tiktok-modal-close")?.focus());
};

const closeTikTokModal = () => {
  if (!tiktokModal || !tiktokPlayer) return;
  tiktokModal.classList.remove("is-open");
  tiktokModal.setAttribute("aria-hidden", "true");
  tiktokPlayer.src = "";
  if (!document.querySelector("#treatment-modal.is-open")) document.body.classList.remove("modal-open");
  lastTikTokTrigger?.focus();
};

tiktokGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-tiktok-id]");
  if (card) openTikTokModal(card);
});

tiktokModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-tiktok]")) closeTikTokModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && tiktokModal?.classList.contains("is-open")) closeTikTokModal();
});

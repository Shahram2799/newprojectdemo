function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const popoverLinks = document.querySelectorAll('.popoverlink');
  popoverLinks.forEach(link => {
    new bootstrap.Popover(link, {
      trigger: 'hover',
      placement: 'right',
      container: 'body'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});

document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
    const videoIframe = modal.querySelector("iframe");
    const originalSrc = videoIframe ? videoIframe.src : null;
     if (videoIframe && originalSrc) {
        modal.addEventListener("hide.bs.modal", () => {
        videoIframe.src = ""; // Clear video source on close
        });
        modal.addEventListener("shown.bs.modal", () => {
        videoIframe.src = originalSrc; // Restore video source on open
        });
    }
    });
});
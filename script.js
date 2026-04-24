/* ============================================
   ARTPAT DESIGN — script.js
   Lightbox for cases, marketing, brand items
   ============================================ */

(function () {
  'use strict';

  const overlay   = document.getElementById('lightboxOverlay');
  const lbImg     = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose   = document.getElementById('lightboxClose');

  function openLightbox(src, title) {
    lbImg.src = src;
    lbImg.alt = title || '';
    lbCaption.textContent = title || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after transition
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  // Close on button
  lbClose.addEventListener('click', closeLightbox);

  // Close on overlay click (outside image)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Bind all lightbox triggers
  document.querySelectorAll('.lightbox-trigger').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      const img   = el.dataset.img   || 'done.jpg';
      const title = el.dataset.title || '';
      openLightbox(img, title);
    });
  });

  // Also bind case-card overlays (whole card hover → overlay click)
  document.querySelectorAll('.case-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      const card  = overlay.closest('.case-card');
      const img   = card.dataset.img   || 'done.jpg';
      const title = card.dataset.title || '';
      openLightbox(img, title);
    });
  });

})();

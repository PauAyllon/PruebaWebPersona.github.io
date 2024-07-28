const images = document.querySelectorAll('.gallery img');
        let currentImageIndex = 0;

        function openLightbox(index) {
            currentImageIndex = index;
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = images[currentImageIndex].src;
            lightbox.style.display = 'flex';
        }

        function closeLightbox(event) {
            if (event.target.id === 'lightbox' || event.target.classList.contains('close')) {
                const lightbox = document.getElementById('lightbox');
                lightbox.style.display = 'none';
            }
        }

        function prevImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = images[currentImageIndex].src;
        }

        function nextImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % images.length;
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = images[currentImageIndex].src;
        }
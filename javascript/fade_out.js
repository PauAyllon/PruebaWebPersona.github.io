document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 10);

    const links = document.querySelectorAll('.transition-link');
    for (let link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute('href');

            document.body.classList.remove('loaded');
            
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 1000);
        });
    }
});
let carousels = document.getElementsByClassName('pic-slider'); +
+[].forEach.call(carousels, function(c) {
    +
    let next = c.getElementsByClassName('next')[0],
        +prev = c.getElementsByClassName('prev')[0],
        +inner = c.getElementsByClassName('pic-slider')[0],
        +imgs = inner.getElementsByTagName('div'),
        +currentImageIndex = 0,
        +width = 1415,

        for (let i = 0; i < imgs.length; i++) {
            +
            let b = document.createElement('span'); +
            b.classList.add('bubble'); +
            bubblesContainer.appendChild(b); +
            bubbles.push(b); +
            +b.addEventListener('click', function() {
                +currentImageIndex = i; +
                switchImg(); +
            }); +
        } +
        + function switchImg() {
            +inner.style.left = -width * currentImageIndex + 'px'; +
            +bubbles.forEach(function(b, i) {
                +
                if (i === currentImageIndex) {
                    +b.classList.add('active'); +
                } else {
                    +b.classList.remove('active'); +
                } +
            }); +
        } +
        +next.addEventListener('click', function() {
            +currentImageIndex++; +
            +
            if (currentImageIndex >= imgs.length) {
                +currentImageIndex = 0; +
            } +
            +switchImg(); +
        }); +
    +prev.addEventListener('click', function() {
        +currentImageIndex--; +
        +
        if (currentImageIndex < 0) {
            +currentImageIndex = imgs.length - 1; +
        } +
        +switchImg(); +
    }); +
    +switchImg(); +
});
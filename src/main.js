let accordionElements = document.querySelectorAll('.accordion');
let i;

for (i = 0; i < accordionElements.length; i++) {
    accordionElements[i].addEventListener('click', function() {
        console.log(this);
        this.classList.toggle('_active');

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.classList.remove('_active');
            panel.style.maxHeight = null;
        } else {
            panel.classList.add('_active');
            if (window.matchMedia('(max-width: 768px')) {
                panel.style.maxHeight = '400px';
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        };
    });
};
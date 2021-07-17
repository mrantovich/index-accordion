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
            panel.style.maxHeight = panel.scrollHeight + 'px';
        };
    });
};
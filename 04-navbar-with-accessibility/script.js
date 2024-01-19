const mobileMenuNavigationButton = document.getElementById('mobileMenuNavigationButton');
const navigationLinkList = document.getElementById('navigationLinkList');

mobileMenuNavigationButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navigationLinkList.classList.toggle('show-nav-links');

    // Toggle the hidden state and tabindex
    if (isExpanded) {
        // When hiding the menu
        navigationLinkList.setAttribute('hidden', true);
        updateTabIndex(navigationLinkList, -1); // Make links not focusable
    } else {
        // When showing the menu
        navigationLinkList.removeAttribute('hidden');
        updateTabIndex(navigationLinkList, 0); // Make links focusable
    }
});

function updateTabIndex(element, index) {
    const links = element.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('tabindex', index);
    });
}

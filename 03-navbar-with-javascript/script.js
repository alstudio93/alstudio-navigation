const mobileMenuNavigationButton = document.getElementById('mobileMenuNavigationButton');
const navigationLinkList = document.getElementById('navigationLinkList');

mobileMenuNavigationButton.addEventListener('click', () => {
    navigationLinkList.classList.toggle('show-nav-links');
});

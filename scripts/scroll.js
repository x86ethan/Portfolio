window.addEventListener('scroll', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const scrollThreshold = 50; // Change this value to adjust scroll trigger point

    if (window.scrollY > scrollThreshold) {
        nav.classList.add('nav-free');
    } else {
        nav.classList.remove('nav-free');
    }
});

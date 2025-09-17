window.addEventListener('scroll', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const scrollThreshold = 50; // Change this value to adjust scroll trigger point
    if (window.scrollY > scrollThreshold) {
        nav.classList.add('nav-free');
    } else {
        nav.classList.remove('nav-free');
    }
	
    var page = Math.floor((window.scrollY + window.innerHeight / 2)/ window.innerHeight);

    const nav_links = document.getElementsByClassName('nav-link');

    // First check if nav is still indicating the page
    if (!nav_links[page].classList.contains('nav-link-active')) {
        document.getElementsByClassName('nav-link-active')[0].classList.remove('nav-link-active')
        nav_links[page].classList.add('nav-link-active');
    }


    
    


	
});

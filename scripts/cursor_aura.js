	document.addEventListener('mousemove', function(e) {
		
	setTimeout(50);
		
  const halo = document.getElementById('cursor-aura');
  if (halo) {
    halo.style.left = e.clientX + 'px';
    halo.style.top = e.clientY + 'px';
  }
});
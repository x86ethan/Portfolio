document.addEventListener('DOMContentLoaded', () => {
    const skills = document.getElementsByClassName("skill");

    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener("click", (event) => {
            const activeElements = document.getElementsByClassName("is-expanded");

            for (var i = 0 ; i < activeElements.length ; i++) {
                if (event.currentTarget != activeElements[i]) {
                    activeElements[i].classList.remove("is-expanded");
                }
            }

            event.currentTarget.classList.toggle('is-expanded');

        });
    }
});
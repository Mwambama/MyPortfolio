// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#menu-icon');
    const navlinks = document.querySelector('.nav-links');

    // Toggle the 'active' class on the navlinks when the menu icon is clicked
    if (menuIcon) {
        menuIcon.onclick = () => {
            navlinks.classList.toggle('active');
        };
    }

    // // Optional: Close the mobile menu when a link is clicked
    // document.querySelectorAll('.nav-links a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         if (navlinks.classList.contains('active')) {
    //             navlinks.classList.remove('active');
    //         }
    //     });
    // });

});

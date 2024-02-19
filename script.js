// Function to toggle the display of details
function toggleDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === '') {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to gradually increase the opacity of the body, creating a fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0'; // Ensure the body is initially hidden
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 10); // Use a slight delay to ensure the CSS transition is applied
});

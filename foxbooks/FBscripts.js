document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the remote JSON file on GitHub
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course_id');

    const url = "https://raw.githubusercontent.com/jschneider17/SD330/main/foxbooks.json";
    
    fetch(url, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            // Process your JSON data here
            displayCourseList(data.courses);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayCourseList(courses) {
    // Display course list in the main content area
    const courseListContainer = document.getElementById('courseList');

    // Example: Display course names
    courseListContainer.innerHTML = '<h3>Course List</h3>';
    courseListContainer.innerHTML += '<ul>';
    courses.forEach(course => {
        courseListContainer.innerHTML += `<li><a href="courseBooks.html?course_id=${course.course_id}">${course.course_name}</a></li>`;
    });
    courseListContainer.innerHTML += '</ul>';
}

function updateBreadcrumbs(breadcrumbItems) {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    breadcrumbsContainer.innerHTML = '<strong></strong> ';

    breadcrumbItems.forEach((item, index) => {
        const isLastItem = index === breadcrumbItems.length - 1;

        if (isLastItem) {
            breadcrumbsContainer.innerHTML += `<span>${item.label}</span>`;
        } else {
            breadcrumbsContainer.innerHTML += `<a href="${item.url}">${item.label}</a> > `;
        }
    });
}
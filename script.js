document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Grab form input variables 
    const studentName = document.getElementById('studentName').value;
    const gradeLevel = document.getElementById('gradeLevel').value;
    const feedbackElement = document.getElementById('formFeedback');

    // Simple interaction logic simulation
    if(studentName && gradeLevel) {
        feedbackElement.textContent = `Thank you! The admission inquiry for ${studentName} has been successfully submitted.`;
        feedbackElement.className = "form-feedback success";
        
        // Reset the form values
        document.getElementById('admissionForm').reset();
    }
});

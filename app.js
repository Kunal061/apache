document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('cvFile');
    const uploadStatus = document.getElementById('uploadStatus');

    if (!fileInput.files.length) {
        uploadStatus.textContent = 'Please select a CV file to upload.';
        uploadStatus.style.color = 'red';
        return;
    }

    const file = fileInput.files[0];
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(file.type)) {
        uploadStatus.textContent = 'Invalid file type. Please upload a PDF or DOCX file.';
        uploadStatus.style.color = 'red';
        return;
    }

    // Simulate upload process (real upload functionality depends on backend)
    uploadStatus.style.color = 'green';
    uploadStatus.textContent = `"${file.name}" uploaded successfully! (Simulated)`;
});

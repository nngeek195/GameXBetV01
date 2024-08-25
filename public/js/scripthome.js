
// Function to update the user's profile photo on page load
function updateProfilePhoto() {
  const profilePhotoElements = document.querySelectorAll('.bg-center.bg-no-repeat.bg-cover');
  const savedImage = localStorage.getItem('profileImage');

  if (savedImage && profilePhotoElements.length > 0) {
      profilePhotoElements.forEach(element => {
          element.style.backgroundImage = `url('${savedImage}')`;
      });
  }
}

// Function to save a new profile photo and update it across all pages
function saveNewProfilePhoto(photoInput) {
  if (photoInput) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const newImageUrl = e.target.result;
          localStorage.setItem('profileImage', newImageUrl);
          updateProfilePhoto();  // Update the photo immediately after saving
      };
      reader.readAsDataURL(photoInput);
  }
}

// Call the function when the page loads to ensure the latest photo is shown
window.onload = function() {
  updateProfilePhoto();
};







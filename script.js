document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('💋 Kiss sent! 💋');
  });
});

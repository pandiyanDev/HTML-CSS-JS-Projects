document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-term');
  const events = document.querySelectorAll('.card');

  searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();

    events.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('.description').textContent.toLowerCase();

      if (title.includes(searchText) || description.includes(searchText)) {
        card.style.display = 'block';
      } else {
        card.style.display = "none";
      }
    })
  })
})
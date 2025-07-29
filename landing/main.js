document.querySelectorAll('.accordion__heading').forEach(heading => {
  heading.addEventListener('click', () => {
    const item = heading.parentElement;
    item.classList.toggle('active');
  });
});

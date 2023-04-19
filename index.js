const nextBtn = document.querySelector('#next-btn');
const container = document.querySelector('.container-frames');

nextBtn.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.projeto');
  const firstBox = boxes[0];
  firstBox.classList.add('active');
  setTimeout(() => {
    firstBox.remove();
    container.appendChild(firstBox);
    firstBox.classList.remove('active');
  }, 500);
});


const table = document.querySelector('table');

table.onkeydown = function(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const currentRow = event.target.parentNode;
    const nextRow = currentRow.nextElementSibling;

    if (nextRow) {
      nextRow.focus();
    }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const currentRow = event.target.parentNode;
    const prevRow = currentRow.previousElementSibling;

    if (prevRow) {
      prevRow.focus();
    }
  }
};

const headers = table.querySelectorAll('th');

headers.forEach((header) => {
  header.onkeydown = function(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextCell = event.target.nextElementSibling;

      if (nextCell) {
        nextCell.focus();
      }
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prevCell = event.target.previousElementSibling;

      if (prevCell) {
        prevCell.focus();
      }
    }
  };
});

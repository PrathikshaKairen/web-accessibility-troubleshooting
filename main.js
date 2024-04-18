document.addEventListener('DOMContentLoaded', function() {
  const showHideBtn = document.querySelector('.show-hide');
  const commentWrapper = document.querySelector('.comment-wrapper');

  showHideBtn.addEventListener('click', function() {
    const isExpanded = commentWrapper.hidden;
    commentWrapper.hidden = !isExpanded;
    showHideBtn.setAttribute('aria-expanded', !isExpanded);
    showHideBtn.textContent = isExpanded ? 'Show comments' : 'Hide comments';
  });

  const form = document.querySelector('.comment-form');
  const nameField = document.querySelector('#name');
  const commentField = document.querySelector('#comment');
  const list = document.querySelector('.comment-container');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitComment();
  });

  function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
  }
});

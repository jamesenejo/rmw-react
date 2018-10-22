const listenForClickEvents = () => document.addEventListener('click', (e) => {
  let userNav = document.getElementById('userNav');
  const { offsetParent } = e.srcElement;

  if (offsetParent) {
    if (
      (offsetParent.className === 'user-wrapper' && userNav.style.display === 'none') ||
      (offsetParent.className === 'user-wrapper' && userNav.style.display === '')
    ) {
      userNav.style.display = 'block';
    } else if (offsetParent.className === 'user-wrapper' && userNav.style.display === 'block') {
      userNav.style.display = 'none';
    } else {
      userNav.style.display = 'none';
    }
  } else {
    userNav.style.display = 'none';
  }
});

export default listenForClickEvents;

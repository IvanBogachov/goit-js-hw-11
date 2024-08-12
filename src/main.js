const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.gallery');


const searchParams = new URLSearchParams({
    _limit: 9,
    _sort: "id",
  });
const url = `https://jsonplaceholder.typicode.com/photos?${searchParams}`;

fetchUsersBtn.addEventListener('click', () => {
  fetchPhotos()
    .then(photos => renderUsers(photos))
    .catch(error => console.log(error));
});
console.log(url);
function fetchPhotos() {
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}


function renderUsers(photos) {
  const markup = photos
    .map(photo => {
      return `
        <li class="gallery-item">
        <a class="gallery-link" href="${photo.url}">
        <img class="gallery-image"
        src="${photo.thumbnailUrl}"
        alt="${photo.url}"
        />
        </a>
        </li>
      `;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}

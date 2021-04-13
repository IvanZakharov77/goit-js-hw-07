const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listImages = document.querySelector('#gallery')
images.forEach(img => {

  const elemetnList = document.createElement('li')
  elemetnList.classList.add('list')
  const listImg = document.createElement('img')
  listImg.src = img.url
  listImg.alt = img.alt
  listImg.classList.add('image')
  elemetnList.appendChild(listImg)
  listImages.appendChild(elemetnList)
})
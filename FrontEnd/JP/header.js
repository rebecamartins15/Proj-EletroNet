const dropdowns = document.querySelectorAll('.dropdown_menu-5');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseover', () => {
    dropdown.classList.add('open');
  });
  dropdown.addEventListener('mouseout', () => {
    dropdown.classList.remove('open');
  });
});

//Roger

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
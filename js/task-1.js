const itemCategories = document.querySelectorAll('.js-item');
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(category => {
  const title = category.querySelector('.js-title').textContent;
  const liTotal = category.querySelectorAll('.items-list > li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liTotal}`);
});

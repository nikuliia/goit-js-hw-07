const itemCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const liTotal = category.querySelectorAll('ul ul > li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liTotal}`);
});

const itemCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const liTotal = category.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liTotal}`);
});

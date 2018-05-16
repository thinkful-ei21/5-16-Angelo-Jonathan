/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

});

// store.items.push(Item.create('apples'));


// api.createItem('orange', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   })
// })

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
  // const item = items[0];
  // console.log('current name: ' + item.name);
  // store.findAndUpdate(item.id, {name: 'cheese'});
  // console.log('new name: ' + item.name);
});

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, 'foobar', () => {
//     console.log('updated!');
//   });
// });

// api.getItems((items) => {
//   const item = items[0];
//   console.log('current name: ' + item.name);
//   store.findAndUpdate(item.id, {name: 'chees'});
//   console.log('new name: ' + item.name);
// });


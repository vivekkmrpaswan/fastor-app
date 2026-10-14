// Placeholder images (Unsplash). Replace these URLs with your own
// local assets later, e.g. import pizza from './pizza.jpg'.
const u = (id, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const images = {
  pizza: u('photo-1513104890138-7c749659a591', 900),
  sushi: u('photo-1579871494447-9811cf80d66c', 300),
  curry: u('photo-1631452180519-c014fe946bc7', 300),
  lasagna: u('photo-1574894709920-11b28e7367e3', 300),
  cupcake: u('photo-1488477181946-6428a0291777', 300),
  shake: u('photo-1572490122747-3968b75cc699', 300),
  burger: u('photo-1568901346375-23c9450c58cd', 300),
}

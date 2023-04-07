## Product Catalog

[DEMO LINK](https://dahimohamed.github.io/product_catalog/)

## App
1. Put components into an `src/components` folder.
    - each component should be a folder with `index.ts`, `ComponentName.tsx`, `ComponentName.module.scss` files.
    - use CSS modules.
    - keep `.module.scss` files together with their components.
1. Advanced project structure:
    - `src/modules` folder. Inside per page modules `HomePage`, `CartPage`, ect. and `shared` folder. with shared content between modules.
    - inside each module is own `components` folder with the structure described above. And optionaly other files/folders: `hoocs`, `constants` and so on.
3. Add the sticky header with a logo, navigation, favorites and cart.
4. The footer with the link to the Github repo and `Back to top` button.
    - the content should limited to the same width as the page content;
    - `Back to top` button should scroll to the top smoothly;
5. Add `NotFoundPage` containing text `Page not found` for all the unknown URLs.
6. All changes the hover effects should be smooth.
7. Scale all image links by 10% on hover.
8. Implement all form element and icons according to the UI Kit
## Product pages
There should be 3 separate pages `/phones`, `/tablets` and `/accessories`.
1. Each page loads the data of required `type`.
1. Add an `h1` with `Phones/Tablets/Accessories page` (choose required).
1. Add `ProductsList` component showing all the `products`.
1. Implement a `Loader` to show it while waiting for the data from server.
1. In case of loading error show the something went wrong message with a reload button.
1. If there are no products available show the `There are no phones/tablets/accessories yet` message (choose required).
1. Add a `<select>` with the `Newest`, `Alphabetically` and `Cheapest` options to sort products by `age`, `title` or `price` (after discount).
    - save the sort value in the URL `?sort=age` and apply it after the page reload;
1. Add `Pagination` buttons and `Items on page` select element with `4`, `8`, `16` and `all` options.
    - it should limit the products you show to the user;
    - save pagination params in the url `?page=2&perPage=8` (`page=1` and `perPage=all` are the default values and should not be added to the URL;
    - Hide pagination elements if they does not make sense;
    - You can use the logic explained in [the React Pagination task](https://github.com/mate-academy/react_pagination#react-pagination);
## Shopping Cart page
Create a Cart page with a list of `CartItem`s at `/cart`.
Each item should have an `id`, `quantity` and a `product`.
Use the React Context or Redux to store Items.
1. `Add to cart` button in the `ProductCard` should add a product to the `Cart`.
1. If the product is already in the `Cart` the button should say `Added to cart` and do nothing.
1. Add ability to remove items from the `Cart` with a `x` button next to a `CartItem`.
1. Add message `Your cart is empty` when there are no products in the `Cart`
1. Add ability to change the item quantity in the `Cart` with `-` and `+` buttons (it should be > 0).
1. Total amount and quantity should be calculated automatically.
1. Show the quantity at the `Cart` icon in the header.
1. Save the `Cart` to the `localSotrage` on each change and read it on page load.
1. `Checkout` button should show a modal dialog with the text `Checkout is not implemented yet. Do you wan't to clear the Cart?`:
    - clear the Cart if the user confirms the order;
    - keep the Cart items and close the confirmation on cancel;
    - use the `confirm` function if you don't have a better solution.
## Home page
Implement Home page at available at `/`.
1. `<h1>Product Catalog</h1>` should be visually hidden.
1. `PicturesSlider`:
    - find your own images to peronalize the App;
    - change pictures automatically every 5 seconds;
    - the next buttons should show the first image after the last one;
    - dashes at the botton should allow to choose exact picture.
1. `ProductsSlider` for `Hot prices` block:
    - the products with a discount starting from the biggest absolute value;
    - `<` and `>` buttons should scroll products.
1. `Shop by category` block with the links to `/phones`, `/tablets` and `/accessories`.
1. Add `Brand new` block using `ProductsSlider` with products without a discount starting from the most expensive.
  
## Product details page
Create `ProductDetailsPage` available at `/product/:productId`. 
1. `ProductCard` image and title should be links to the product details page.
1. Use `Loader` when fetching the product details.
1. Show the details on the page:
    - fix one `Available color` and on `Select capacity` value for now;
    - `About` section should contain just a description (without any subheaders);
    - Choose `Tech specs` you want to show.
1. Add ability to choose a picture
1. Implement `You may also like` block with products chosen randomly:
    - create `getSuggestedProducts` method fetching the suggested products.
1. Add `Back` button working the same way as a Browser `Back` button.
1. Add `Breadcrumbs` at the top with
    - a Home page link;
    - a category page link (`Phones`, `Tablets`, `Accessories`);
    - the name of the product (just a text).
1. Show `Product was not found` if there is no product with a given id on the server.
## Favorites page
Create `Favorites` page with a `ProductsList` showing favorite products at `/favorites`.
1. Add/remove a product to favorites by pressing a heart button in the `ProductCard` element.
1. The heart should be highlighted if the product is already added to the favorites.
1. Use React Context or Redux to store the favorites.
1. Show the number of favorites at the `Favorites` icon in the header.
1. Save favorites to `localStorage` on each change and load the on page load.
## (*) Advanced tasks
### Search
Show `input:search` in the header when a page contains a `ProductList` to search in.
1. Save the `Search` value in the URL as a `?query=value` to apply on page load
1. Show `There are no phones/tablets/accessories/products matching the query` instead of `ProductList` when needed.
1. Add `debounce` to the search field.
### Other
1. Implement your own API with Node.js and Express.
1. Use PostgreSQL DB.
1. Save Orders to the DB after checkout.
1. Show the list of orders with all the saved orders at `/orders`.
1. Create Order details page at `/orders/:orderId` with ability to edit or cancel an order.
1. Implement the login/register functionality and show the author's email of each order in the list.
1. Restrict order editing only to its author.
1. Deploy the App and the API with the DB to the [Heroku](https://heroku.com)

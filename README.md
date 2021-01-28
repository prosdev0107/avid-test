# AVID Test App

Create a ReactJS project that uses this API (https://www.fakerestapi.com/datasets/api/v1/iphone-11-amazon-reviews.json).

1. Create a 3-column grid showing reviews fetched from API. Properties to display: 'review_rating', 'profile_name' and ‘review_title’. Add 2 buttons: “Show review text” and “Show review details”
2. For each review, show the number of stars based on the ‘review_rating’ property. (Example: “3.0 out of 5 stars” -> show ★★★☆☆)
3. When you click the “Show review text” button, display a popup that shows the ‘review_text’ property.
4. When you click the “Show review details” button, navigate to a different screen to view the details of that review (example: 'https://yourapp.com/reviews/:reviewID)
5. Host the app somewhere (e.g Heroku, Netlify, etc.)
6. Create a GitHub repository and share the link

- React App: https://immense-retreat-13409.herokuapp.com/
### Project stack:

- Create-React-App
- Material UI
- axios
- Heroku

### Prerequisites

```
node v8^
npm
yarn
```

### Install and Run in Local

Note: Use `yarn` rather than `npm`

Install dependencies

```
yarn 
```

```
yarn start
```

### npm scripts

- `yarn start` - run server 

## Code standard

- [Prettier](https://prettier.io/)

## Built With

- [React](https://reactjs.org) - React.JS
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - Create React App
- [Material UI](https://material-ui.com/) - Material UI

## Authors
Taylor Chen

## License

MIT

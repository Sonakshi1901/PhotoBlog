{/*A reducer is a function that accepts a state and also accepts the action. The
  based on the action type, we do some logic and we return a state or we return
  the action*/}

 export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
          return posts;
    case 'CREATE':
          return posts;
    default:
          return posts;
  }
}

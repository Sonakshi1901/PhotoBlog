import * as api from '../components/api';

{/*Action Creators*/}

{/*Here we are working with async datato actually fetch all the Posts
  so sometime is going to pass and for that we have to use redux thunk.
  Redux thunk allows us to in here specify an additional arrow function anywherewe write
  aync and in there as a property we get access to dispatch. So we created a function
  that returns another function. Now we can use all the async await capabilities so instead
  of returning the action, with redux thunk we can directly dispatch the action*/}

export const getPosts = () => async (dispatch) => {
    try {
      {/*Here data is posts and it is fetching all the posts and dispatching the action.*/}
      const { data } = await api.fetchPosts();

      dispatch({ type: 'FETCH_ALL' , payload: data });
    } catch (error) {
      console.log(error.message);
    }
}

export const createPost = () => async (dispatch) => {
  try {
    const { data } = await api.createPost();

    dispatch({ type: 'CREATE' , payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

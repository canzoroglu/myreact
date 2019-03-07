export const createProject = project => {
  return (dispatch, getState) => {
    //make async call to database

    //then dispatch
    dispatch({type: "CREATE_PROJECT", project});
  };
}

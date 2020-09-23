export function fetchAllUsers(page){
  return fetch(`https://reqres.in/api/users/?page=${page}`)
    .then(res => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error;
      }
    )
}

export function fetchSingleUser(id){
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error;
      }
    )
}
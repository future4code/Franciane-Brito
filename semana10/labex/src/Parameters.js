export const createTripUrl =
"https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trips"

export const axiosConfig = {
    headers: {
        auth: localStorage.getItem("token")
      }
};
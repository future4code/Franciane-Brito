export const goToHomePage = (history) => {
  history.push("/");
};

export const goToApplicationForm = (history) => {
  history.push("/application-form")
}

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToListTripsPage = (history) => {
  history.push("/list-trips")
}

export const goToTripDetailsPage = (history, id) => {
  history.push(`/trip-details/${id}`)
}

export const goToTripCandidate = (history, id) => {
  history.push(`/trip-candidate/${id}`)
}

export const goToCreateTripPage = (history) => {
  history.push("/create-trip")
}

/*  export const goToListTripsPage = (history) => {
   history.push("/list-trips")
 } */


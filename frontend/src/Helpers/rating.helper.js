
/**
 * Returns a boolean value based on the
 * `carId` and `type` parameters.
 * @param  {string} carId
 * @param  {string} type
 */
const hasRating = (carId, type) => {
  const carRatings = JSON.parse(localStorage.getItem('carRatings'));
  const rating =  carRatings.find((rating) => rating.carId === carId && rating.type === type);
  if (rating) {
    return true;
  }

  return false;
}

/**
 * Constrols the UI element disable state.
 * @param  {string} carId
 * @param  {string} type
 */
const ratingDisabled = (carId, type) => {
  const carRatings = JSON.parse(localStorage.getItem('carRatings'));
  const rating = carRatings.find((rating) => rating.carId === carId);

  if (rating && rating.type === type) {
    return false;
  } else if (rating && rating.type !== type) {
    return true;
  }

  return false;
}

module.exports = {
  hasRating,
  ratingDisabled,
}
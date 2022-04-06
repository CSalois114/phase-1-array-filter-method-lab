function findMatching(drivers, key) {
  return drivers.filter(driver => driver.toLowerCase() === key.toLowerCase());
}

function fuzzyMatch(drivers, key) {
  return drivers.filter(driver => {
     return driver.toLowerCase().charAt(0) === key.toLowerCase().charAt(0);
  })
}

function matchName(drivers, key) {
  return drivers.filter(driver => driver.name === key)
}
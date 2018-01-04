// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copy = Object.assign({}, driver, [key]:value)
  return copy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

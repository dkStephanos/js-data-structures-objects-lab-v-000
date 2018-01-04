// Write your solution in this file!
driver = {}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, [key]: value)
}

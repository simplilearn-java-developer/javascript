let isInternetEnabled = true
// Camel Case
let is_internet_enable = true
// Snake Case

let isGpsEnabled = true

console.log("Can I Navigate using Google Maps: " + (isInternetEnabled && isGpsEnabled))

let ewallet = 0
let isCreditCardLinked = false

console.log("Can I book a Cab: " + (ewallet > 0) || isCreditCardLinked)

// String Concatenation
console.log("Is Internet not Enabled: " + !isInternetEnabled)

// String Interpolation - Use Backticks
console.log(`Is Internet not Enabled: ${!isInternetEnabled}`)
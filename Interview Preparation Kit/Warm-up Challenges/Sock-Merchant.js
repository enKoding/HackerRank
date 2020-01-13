function sockMerchant(n, ar) {
  let pairs = 0
  let color = new Array()
  ar.forEach(i => {
    if (!color[i]) color[i] = i
    else {
      pairs++
      delete color[i]
    }
  })
  return pairs
}

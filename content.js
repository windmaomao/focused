let last
let clickEvt

function fade(on = true) {
  const filter = on ? 'opacity(0.2)' : 'none'
  return el => {
    el.style.filter = filter
  }
}
const fadeOn = fade()
const fadeOff = fade(false)

document.querySelectorAll("p").forEach(fadeOn)

clickEvt = e => {
  if (last) fadeOn(last)
  
  last = e.target
  fadeOff(last)
}

document.addEventListener('click', clickEvt)
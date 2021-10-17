let last
let clickEvt

let start = document.getElementById("start")
start.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
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
    }
  })
})

let stop = document.getElementById("stop")
stop.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      document.querySelectorAll("p").forEach(el => {
        el.style.filter = 'none' 
      })
      
      document.removeEventListener('click', clickEvt)
    }
  })
})
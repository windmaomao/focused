# Chrome Extension Focused

This extension reduces a web page’s distractions to minimium by providing a dimmed version first. As the user reads throught the page, more content gets revealed along the way. The content can stay revealed or go back to be dimmed after the user picks a new content. 

## Develop
First we can apply a general filter to the page by using a light dimmed color:
 
```css
p { color: #cfccc2 }
p { filter: opacity(0.2) }
```

And upon a click, the selected text reveals the color:

```javascript
let prev
document.addEventListener('click', e => {
  if (prev) prev.filter = ‘opacity(0.2)’
 
  prev = e.target
  el.style.filter = ‘opacity(1)’
})
```

const panels = document.querySelectorAll('.panel') // select all panels

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active')
  })
})

let root = document.documentElement

let interruptor = document.getElementById('interruptor').addEventListener('click', () => {
    root.classList.toggle('tema-claro')
})

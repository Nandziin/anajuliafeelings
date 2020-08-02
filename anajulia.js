function verificar() {
    var femocao = document.getElementsByName('rademoc')
    var tex = document.getElementById('texto')
    var imagem = document.getElementById('imagem')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var emocao = ''
    var arquivo = ''

    if (femocao[0].checked) {
        //feliz
        emocao = 'feliz'
        arquivo = 'ajfeliz.png'
    } else if (femocao[1].checked) {
        //triste
        emocao = 'triste'
        arquivo = 'ajtriste.png'
    } else if (femocao[2].checked) {
        //Com Sono
        emocao = 'com sono'
        arquivo = 'ajdormindo.png'
    } else if (femocao[3].checked) {
        //Fazendo careta
        emocao = 'fazendo careta'
        arquivo = 'ajcareta.png'    
    } 
        img.setAttribute('src', arquivo)
        imagem.innerHTML = ''
        tex.innerHTML = `Ana Júlia está ${emocao}.`
        imagem.appendChild(img)
        
}
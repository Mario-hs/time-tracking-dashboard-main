// Função para ler os dados do arquivo data.json e distribuir entre dia, semana e mês
async function getData(value) {
    // async é usado no começo da função quando é usado await
    try {
        // fetch promete busca o arquivo através da URL  
        // await para esperar a resposta do fetch
        let request = await fetch('./data.json')
        let data = await request.json()

        data.map((props) => {
            let time = value
            if (time === 1) {
                handleActiveButton('daily')
                showData(props, 'daily')
            } else if (time === 2) {
                handleActiveButton('weekly')
                showData(props, 'weekly')
            } else {
                handleActiveButton('monthly')
                showData(props, 'monthly')
            }
        })

    } catch (error) {
        console.error(error)
    }
}

// Função para mostrar os dados na tela
function showData(data, time) {
    let output = ''
    if (time === 'daily') {
        // o primeiro document.querySelctor é para zera as informações que possam estar no bloco
        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML = output

        output += `<p>${data.timeframes.daily.current}hrs</p>
                   <span>Last Week - ${data.timeframes.daily.previous}hrs</span>`

        // recebe e insere os valores no html
        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML += output
    } else if (time === 'monthly') {
        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML = output

        output += `<p>${data.timeframes.monthly.current}hrs</p>
                    <span>Last Week - ${data.timeframes.monthly.previous}hrs</span>`

        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML += output
    } else {
        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML = output

        output += `<p>${data.timeframes.weekly.current}hrs</p>
                <span>Last Week - ${data.timeframes.weekly.previous}hrs</span>`

        document.querySelector(`.${data.title}`).querySelector('.info').innerHTML += output
    }
}

// Função para trocar o botão de destaque colocando a classe active
function handleActiveButton(time) {
    if (time === 'daily') {
        // adiciona a classe no botão que foi clicado e remove a classe dos outros botões
        document.querySelector('#daily').classList.add('active')
        document.querySelector('#weekly').classList.remove('active')
        document.querySelector('#monthly').classList.remove('active')

    } else if (time === 'monthly') {

        document.querySelector('#monthly').classList.add('active')
        document.querySelector('#daily').classList.remove('active')
        document.querySelector('#weekly').classList.remove('active')

    } else {

        document.querySelector('#weekly').classList.add('active')
        document.querySelector('#daily').classList.remove('active')
        document.querySelector('#monthly').classList.remove('active')

    }
}

getData(2)
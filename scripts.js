async function getData(value) {
    try {
        let request = await fetch('./data.json')
        let data = await request.json()

        data.map((props) => {
            let time = value
            console.log('>', props)
            if (time == 1) {
                console.log('>>', props.timeframes.daily)
                handleActiveButton('daily')
            } else if (time == 2) {
                console.log('>>', props.timeframes.weekly)
                handleActiveButton('weekly')
            } else {
                console.log('>>', props.timeframes.monthly)
                handleActiveButton('monthly')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

function handleActiveButton(time) {
    // document.querySelector('#daily').classList.remove('active')
    // document.querySelector('#weekly').classList.remove('active')
    // document.querySelector('#monthly').classList.remove('active')

    if (document.querySelector(`#${time}`) != time) {
        document.querySelector(`#${time}`).classList.add('active')
    }
}


getData(2)
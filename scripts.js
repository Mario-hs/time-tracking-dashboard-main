getData()
function getData() {
    let request = new XMLHttpRequest()
    let url = 'data.json'

    request.open('GET', url)
    request.responseType = 'json';
    request.onreadystatechange = function () {
        let status = request.status
        if (status === 200) {
            if (request.response != null) {
                let data = request.response
                console.log("i")

                serverData(data)
            }
        } else {
            return null
        }
    }
    request.send()
}

// function handleData(props) {

//     // getData(serverData)

//     console.log(props)
//     // console.log(serverData)
//     return props
// }

const serverData = (db) => {
    function handleData(props) {

        if (props == 1) {
            console.log("dia")
        } else if (props == 2) {
            console.log("semana")
        } else if (props == 3) {
            console.log("mês")
        }

        console.log(props)
        // console.log(serverData)
        return props
    }


    console.log(db)
    let data = db
    return data
}
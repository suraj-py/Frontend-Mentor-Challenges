
let dayArray = []
let amountArray = []

let dayLabels = []
let amountLabels = []

function chartIt() {
    
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dayArray,
            datasets: [{
                data: amountArray,
                borderWidth: 1
            }]
        },
        options: {
        
        }
    });
}
async function getData() {
    let response = await fetch('data.json')
    let data = await response.json()
    console.log(data)
    data.forEach(item => {
        const day = item.day 
        const amount = item.amount

        dayLabels.push(day)
        amountLabels.push(amount)

        console.log(day, amount)
    })
}

getData()
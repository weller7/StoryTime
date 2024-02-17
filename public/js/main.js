const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const plotPointItem = document.querySelectorAll('span.not')

const todoComplete = document.querySelectorAll('span.given')
const plotPointComplete = document.querySelectorAll('span.complete')






// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deletePlot)
// })

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})
Array.from(plotPointItem).forEach((el)=>{
    el.addEventListener('click', markPlotPointComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(plotPointComplete).forEach((el)=>{
    el.addEventListener('click', markPlotPointIncomplete)
})


// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

async function markComplete(){
    const nameId = this.parentNode.dataset.id
    try{
        const response = await fetch('nameLists/markGiven', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': nameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

    
}

async function markIncomplete(){
    const nameId = this.parentNode.dataset.id
    try{
        const response = await fetch('nameLists/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': nameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



//functions for the story outline page (plot points)

// async function deletePlot(){
//     const plotId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('plotPoints/deletePlot', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'plotIdFromJSFile': plotId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

async function markPlotPointComplete(){
    const plotId = this.parentNode.dataset.id
    try{
        const response = await fetch('plotPoints/markPlotPointComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plotPointIdFromJSFile': plotId
            })
        })
        const data = await response.json()
        console.log(data)
        console.log(plotId)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markPlotPointIncomplete(){
    const plotId = this.parentNode.dataset.id
    try{
        const response = await fetch('plotPoints/markPlotPointIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plotPointIdFromJSFile': plotId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

    console.log(plotId)
}
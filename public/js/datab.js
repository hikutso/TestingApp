
const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
const search= document.getElementById('data1')
const search1=document.getElementById('data2')
const search2=document.getElementById('data3')
const search3=document.getElementById('data4')
const search4=document.getElementById('data5')


const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = search.value
    const email=search1.value
    const password=search2.value
    const additional=search3.value
    const field=search4.value


    messageTwo.textContent = '..'

    fetch('/contact/database?name=' + name + '&email=' + email + '&password=' + password + '&additional='+ additional +'&field='+ field).then((response) => {
        response.json().then((data) => { 
            console.log('connected')

            console.log(data)
            if (data.error) {
                messageOne.textContent = data.error
            }
           else if(data.documents.length===0){
                messageTwo.textContent='please provide other age'
                document.getElementById('data').value = ''
                
            }
             else {
                
                console.log(data)
                console.log("========================",typeof data.document,data.documents)
                var list = Array.from(data.documents)
                content = '<table><thead><th>NAME</th><th>AGE</th></thead>'
                for (var i of list){
                    content += '<tr><td style="width:100px;height:20px;text-align:center;">'+i.name+'</td>'+'<td style="width:100px;height:20px;text-align:center;">'+i.age+'</td></tr>'
                }
                content +="</table>"
                messageOne.innerHTML=content
                document.getElementById('data').value = ''
                
            }
        
        })
    })
})
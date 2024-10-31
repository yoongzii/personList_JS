

const personForm = document.getElementById('personForm')
const personName = document.getElementById('personName')
const personNumber = document.getElementById('personNumber')
const personList = document.getElementById('personList')
const completedList = document.getElementById('completed_list')
const groupName = document.querySelectorAll('groupName')
const familyCon = document.getElementById('familyCon')
const frenidCon = document.getElementById('frenidCon')
const workCon = document.getElementById('workCon')

window.addEventListener('DOMContentLoaded', function(){
   personName.focus()
})

personForm.addEventListener('submit', function(p){
   p.preventDefault()
   let addName = personName.value;
   let addNumber = personNumber.value;
   let addNn = `${addName} / ${addNumber}`
   personName.value = ''
   personNumber.value = ''
   // console.log(addName);
   // console.log(addNumber);


   // addText(addName, addNumber)
   addText(addNn)

})

function addText(addNn){
   // console.log(addNn);
   const personLi = document.createElement('li')
   const selectLi =document.createElement('select')
   const selectOp1 =document.createElement('option')
   const selectOp2 =document.createElement('option')
   const selectOp3 =document.createElement('option')

   personList.appendChild(personLi)
   personLi.innerText = addNn

   personList.appendChild(selectLi)
   selectLi.appendChild(selectOp1)
   selectLi.appendChild(selectOp2)
   selectLi.appendChild(selectOp3)

   selectOp1.innerText ='가족'
   selectOp2.innerText ='친구'
   selectOp3.innerText ='직장'
   selectOp1.value= 'family'
   selectOp2.value= 'frenid'
   selectOp3.value= 'work'


   // completedList.appendChild(selectLi)

}


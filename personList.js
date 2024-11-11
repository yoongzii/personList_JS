const playBtn = document.querySelector('.play button')
const prevBtn = document.querySelector('.prev_btn')
const twoPage = document.getElementById('wrap')
const onePage = document.getElementById('one_page')

const inputForm = document.getElementById('input_wrap')
const inputName = document.getElementById('input_name')
const inputTel = document.getElementById('input_tel')
const addList = document.querySelector('.addlist')
const familyList = document.querySelector('.family_list')
const friendList = document.querySelector('.friend_list')
const coworkerList = document.querySelector('.coworker_list')
const groupWrap = document.querySelectorAll('.group_wrap')


playBtn.addEventListener('click', function(){
   onePage.style.display = 'none'
   twoPage.style.display = 'block'
})

prevBtn.addEventListener('click',function(){
   onePage.style.display = 'block'
   twoPage.style.display = 'none'
})


const [group1, group2, group3, group4] = groupWrap

inputForm.addEventListener('submit', function (e) {
   e.preventDefault()
   const addName = inputName.value;
   const addTel = inputTel.value;

   addMember(addName, addTel)

   inputName.value = ''
   inputTel.value = ''
   inputName.focus()
   })

   function addMember(name, tel) {
   const addElement = document.createElement('li')

   const select = document.createElement('select')
   const option1 = document.createElement('option')
   const option2 = document.createElement('option')
   const option3 = document.createElement('option')
   const option4 = document.createElement('option')
   const divBtn = document.createElement('div')
   const deleteBtn = document.createElement('button')

   const lists = [
      {list: addList, group: 'group1'},
      {list: familyList, group: 'group2'},
      {list: friendList, group: 'group3'},
      {list: coworkerList, group: 'group4'}
   ];

   option1.innerText = '기타'
   option1.value = 'default'
   option2.innerText = '가족'
   option2.value = 'family'
   option3.innerText = '친구'
   option3.value = 'friend'
   option4.innerText = '직장'
   option4.value = 'coworker'

   addElement.innerHTML = `${name} / ${tel} `
   addElement.appendChild(select)

   deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>'


   addElement.appendChild(divBtn)
   divBtn.appendChild(deleteBtn)

   select.appendChild(option1)
   select.appendChild(option2)
   select.appendChild(option3)
   select.appendChild(option4)
   addList.appendChild(addElement)


   select.addEventListener('change', function () {
      // 부모 그룹에 addElement가 아직 포함되어 있는 경우, 해당 그룹에서 삭제
      if (addElement.parentNode === addList) {
         addList.removeChild(addElement)
      } else if (addElement.parentNode === familyList){
         familyList.removeChild(addElement)
      } else if (addElement.parentNode === friendList){
         friendList.removeChild(addElement)
      } else if (addElement.parentNode === coworkerList){
         coworkerList.removeChild(addElement)
      }

      // 그룹 이름에 맞는 리스트에 addElement 추가
      if (select.value === 'family') {
         group2.innerText = '가족'
         familyList.appendChild(addElement)
      } else if (select.value === 'friend') {
         group3.innerText = '친구'
         friendList.appendChild(addElement)
      } else if (select.value === 'coworker') {
         group4.innerText = '직장'
         coworkerList.appendChild(addElement)
      } else {
         group1.innerText = '전체'
         addList.appendChild(addElement)
      }

      // 각 그룹에 연락처가 없으면 그룹명을 비우기
      checkGroupEmpty(familyList, group2)
      checkGroupEmpty(friendList, group3)
      checkGroupEmpty(coworkerList, group4)
      checkGroupEmpty(addList, group1)

      lists.forEach(({list, group }) => {
         checkGroupEmpty(list, group);
   });
})//select


   deleteBtn.addEventListener('click',function(){
      addElement.remove()

      checkGroupEmpty(familyList, group2)
      checkGroupEmpty(friendList, group3)
      checkGroupEmpty(coworkerList, group4)
      checkGroupEmpty(addList, group1)

      lists.forEach(({ list, group }) => {
         checkGroupEmpty(list, group);
  });

})

}//addMember ()

// 그룹에 연락처가 없으면 그룹명을 초기화
function checkGroupEmpty(ulList, group) {
   if (ulList.children.length === 0) {
      group.innerText = ''
   }
}





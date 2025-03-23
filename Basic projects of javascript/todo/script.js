
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoLIst = document.querySelector('.todo-list');
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(todoInput.value)
  // todoInput.value = '';
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
              <h1 class="text">${newTodoText}</h1>
              <div class="todo-buttons">
              <button class="todo-btn done  btn">Done</button>
              <button class="todo-btn remove  btn">Remove</button>
              </div>`;
    newLi.innerHTML = newLiInnerHtml;   
    todoLIst.append(newLi)       
todoInput.value = '';

});

todoLIst.addEventListener('click', (e) =>{
//    console.log(e.target)
//  check user click on done button 

if(e.target.classList.contains("remove")){
    // console.log("you want to remove something");
    const targetedLi = e.target.parentNode.parentNode;
    // console.log(targetedLi)
    // targetedLi.style.display = 'none'
    targetedLi.remove();

}
if(e.target.classList.contains("done")){
    // console.log('great !!!');
    const lih1 = e.target.parentNode.previousElementSibling;
    lih1.style.textDecoration = 'line-through';
    console.log(lih1)
}
})
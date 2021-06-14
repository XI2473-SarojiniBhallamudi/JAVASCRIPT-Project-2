const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const genTemp = todo =>{
const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;
list.innerHTML += html;
};

addForm.addEventListener('submit',e=>{
e.preventDefault();
// const Todo = addForm.add.value;
 const todo = addForm.add.value.trim();
 if(todo.length){
  genTemp(todo);
 addForm.reset();
 }

});
// code to delete todos
list.addEventListener('click',e=>{
if(e.target.classList.contains('delete'))
{
    e.target.parentElement.remove();
}
});
const filtertodos =(term) =>{


     Array.from(list.children)
        .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>todo.classList.add('filtered'));

     Array.from(list.children)
        .filter((todo)=>todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>todo.classList.remove('filtered'));
}; 
// search
search.addEventListener('keyup',()=>{
const term = search.value.trim().toLowerCase();
filtertodos(term);
});
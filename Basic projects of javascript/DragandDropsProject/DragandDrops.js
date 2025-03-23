const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

for(const list of lists){
    list.addEventListener('dragstart', (e) =>{
        let selected = e.target;
        
        rightBox.addEventListener('dragover', (e) =>{
            e.preventDefault();
        })
        rightBox.addEventListener('drop', (e) =>{
            rightBox.appendChild(selected);
            selected = null;
        })


        leftBox.addEventListener('dragover', (e) =>{
            e.preventDefault();
        })
        leftBox.addEventListener('drop', (e) =>{
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}
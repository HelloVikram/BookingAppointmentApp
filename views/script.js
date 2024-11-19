


async function getData() {
    try {
        let result = await axios.get("http://localhost:3000/user/get-user");
           console.log(result.data.allusers);
            result.data.allusers.forEach(element => {
                showOnScreen(element);
            });
    
    } catch (err) {
        console.log(err);
    }
} getData();
const add = document.querySelector('form');
add.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const phone = event.target.phone.value;
    const email=event.target.email.value
    obj = {
       username:username,
       phone:phone,
       email:email
    }
   console.log(obj);
    async function postData(obj) {
        try{
            const result=await  axios.post("http://localhost:3000/user/add-user", obj);
            showOnScreen(result.data.userdetails);
        }catch(err){
            console.log("post Data error",err);
        }    
    }
    postData(obj);
    document.querySelector('#username').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#phone').value="";
})
function showOnScreen(obj) {
    const ul = document.querySelector('ul');
    const list = document.createElement('li');
    list.innerText=`${obj.username}-${obj.email}`;
    const deletebtn = document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.type = 'button';
    const editbtn = document.createElement('button');
    editbtn.innerText='Edit';
    editbtn.type = 'button';
    list.appendChild(deletebtn);
    list.appendChild(editbtn);
    
    deletebtn.addEventListener('click', (event) => {
        event.preventDefault();
        const listitem = event.target.parentElement;
        listitem.remove();
        async function deleteData() {
            try {
                let result = await axios.delete(`http://localhost:3000/user/delete-user/${obj.id}`);
                console.log(result);
            } catch (err) {
                console.log(err);
            }
        }
        deleteData();
    })
    editbtn.addEventListener('click', (event) => {
        event.preventDefault();
        axios
            .delete(`http://localhost:3000/user/delete-user/${obj.id}`)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        document.querySelector('#username').value = obj.username;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#phone').value=obj.phone;
        const listitem = event.target.parentElement;
        listitem.remove();
    })
    ul.appendChild(list);
}


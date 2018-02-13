let date = new Date();

document.getElementById('date').textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
document.getElementById('time').textContent = `${date.getHours()}:${date.getMinutes()+1}`;

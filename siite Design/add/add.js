
let workerIndex = 1; // Already have index 0 in HTML
const addBtn = document.querySelector('.add-btn');
const workersContainer = document.getElementById('workers-container');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const workerDiv = document.createElement('div');
  workerDiv.classList.add('worker-group');
  workerDiv.innerHTML = `
    <hr>
    <label>Worker Name:</label>
    <input type="text" name="workers[${workerIndex}][name]" placeholder="Name" required><br>

    <label>Salary:</label>
    <input type="number" name="workers[${workerIndex}][salary]" placeholder="Salary" required><br>

    <label>Extra Details:</label>
    <textarea name="workers[${workerIndex}][extra]" placeholder="Extra details (optional)"></textarea>
  `;

  workersContainer.appendChild(workerDiv);
  workerIndex++;
});
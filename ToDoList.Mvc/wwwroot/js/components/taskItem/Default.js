const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    const id = task.dataset.id;
    let editBtn = task.querySelector('.edit');
    let checkbox = task.querySelector(`#IsCompleted-${id}`);
    let form = task.querySelector('form[name="updateCompletedForm"]');

    editBtn.addEventListener('click', () => {
        task.querySelector(`[for="IsCompleted-${id}"]`).classList.add('d-none');
        editBtn.classList.add('disabled');
        task.querySelector('.editable-group').classList.remove('d-none');

        checkbox.disabled = false;
    });

    checkbox.addEventListener('change', () => {        
        form.submit();
    });

    task.querySelector('.cancel').addEventListener('click', () => {
        location.reload();
    });
});
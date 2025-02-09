const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement("button");

        listItem.textContent = input.value;
        deleteButton.textContent = 'X';

        listItem.append(deleteButton);
        list.append(listItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        });
        input.value = '';
        input.focus();

    }
});
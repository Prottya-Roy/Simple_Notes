window.addEventListener('load', () => {
	const form = document.querySelector("#new-note-form");
	const input = document.querySelector("#new-note-input");
	const list_el = document.querySelector("#notes");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const note = input.value;

		const note_el = document.createElement('div');
		note_el.classList.add('note');
        note_el.classList.add('active');

		const note_content_el = document.createElement('div');
		note_content_el.classList.add('content');

		note_el.appendChild(note_content_el);

		const note_input_el = document.createElement('input');
		note_input_el.classList.add('text');
		note_input_el.type = 'text';
		note_input_el.value = note;
		note_input_el.setAttribute('readonly', 'readonly');

		note_content_el.appendChild(note_input_el);

		const note_actions_el = document.createElement('div');
		note_actions_el.classList.add('actions');
		
		const note_edit_el = document.createElement('button');
		note_edit_el.classList.add('edit');
		note_edit_el.innerText = 'Edit';

		const note_delete_el = document.createElement('button');
		note_delete_el.classList.add('delete');
		note_delete_el.innerText = 'Delete';

		note_actions_el.appendChild(note_edit_el);
		note_actions_el.appendChild(note_delete_el);

		note_el.appendChild(note_actions_el);

		list_el.appendChild(note_el);

		input.value = '';

		note_edit_el.addEventListener('click', (e) => {
			if (note_edit_el.innerText.toLowerCase() == "edit") {
				note_edit_el.innerText = "Save";
				note_input_el.removeAttribute("readonly");
				note_input_el.focus();
			} else {
				note_edit_el.innerText = "Edit";
				note_input_el.setAttribute("readonly", "readonly");
			}
		});

		note_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(note_el);
		});
	});
});
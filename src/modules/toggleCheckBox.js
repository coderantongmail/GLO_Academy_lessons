export default function toggleCheckBox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(element => {
        element.addEventListener('change', function() {
            if (this.checked)
            {
                this.nextElementSibling.classList.add('checked');
            }
            else
            {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}

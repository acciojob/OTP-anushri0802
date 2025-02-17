document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.code-box');
    const firstInput = document.getElementById('code-1');
    
    // Set focus on the first input field
    firstInput.focus();
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            if (event.target.value.length > 0 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                if (event.target.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});

document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var income = document.getElementById('income').value;
    var extraIncome = document.getElementById('extra-income').value;
    var ageGroup = document.getElementById('age-group').value;
    var deductions = document.getElementById('deductions').value;

    var totalIncome = parseInt(income) + parseInt(extraIncome);
    var taxableIncome = totalIncome - parseInt(deductions);

    var tax = 0;

    if (taxableIncome <= 800000) {
        tax = 0;
    } else {
        if (ageGroup < 40) {
            tax = (taxableIncome - 800000) * 0.3;
        } else if (ageGroup < 60) {
            tax = (taxableIncome - 800000) * 0.4;
        } else {
            tax = (taxableIncome - 800000) * 0.1;
        }
    }

    document.getElementById('result').innerHTML = 'Tax: ' + tax.toFixed(2);
});

document.querySelectorAll('.form-group input, .form-group select').forEach(function(element) {
    element.addEventListener('input', function() {
        var errorIcon = this.nextElementSibling;
        errorIcon.style.display = 'none';

        if (this.value === '') {
            errorIcon.style.display = 'inline-block';
        }
    });
});
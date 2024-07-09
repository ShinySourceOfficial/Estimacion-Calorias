document.getElementById('Send').addEventListener('click', function(event) {
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const minutes = document.getElementById('minutes').value;
    const activity = document.querySelector('input[name="gridRadios"]:checked');

    if (isNaN(weight) || weight <= 0) {
        alert('Por favor, ingresa un peso válido!'); //Me hubiera gustado utilizar la advertencia de bootstrap, pero al usarla obliga a
        return;                                      //reiniciar la página, al final me decante a hacerlo de esta manera.
    } else if (weight < 1) {
        alert('El peso ingresado es inferior a lo permitido!');
        return;
    } else if (weight > 120) {
        alert('El peso ingresado es superior a lo permitido!');
        return;
    } else if (isNaN(minutes) || minutes <= 0) {
        alert('Por favor, ingresa una cantidad de minutos válida!');
        return;
    } else if (minutes < 5) {
        alert('Los minutos ingresados son inferiores a lo permitido!');
        return;
    } else if (minutes > 150) {
        alert('Los minutos ingresados son superiores a lo permitido!');
        return;
    }

    let activityType = activity.id;
    let met = 0;

    if (activityType === 'walk') {
        met = 3.5;
    } else if (activityType === 'run') {
        met = 8.0;
    }
    
    const calories = met * 3.5 * weight * (minutes/200);

    document.getElementById('result').textContent = `Hola buenas, tus calorias quemadas fueron ${calories.toFixed(2)}`;
});
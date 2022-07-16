let weight = 5.2;

let recomendation = weight < 4 ? console.log("Пора перекусити"): // w<4
    (weight > 4) && (weight <= 5.5)  ? console.log('Вага в нормі'): // 4<w<=5.5
    console.log('Пора на тренування');// w > 5.5

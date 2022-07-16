function finalGrade(exam, numTask){
    if        (exam > 90 || numTask > 10){
        console.log(`Підсумкова оцінка: 100`)
    } else if (exam > 75 || numTask >= 5){
        console.log(`Підсумкова оцінка: 90`)
    } else if (exam > 50 || numTask >= 2){
        console.log(`Підсумкова оцінка: 75`)
    } else {
        console.log(`Підсумкова оцінка: 0`)
    }
}
finalGrade(55,0);
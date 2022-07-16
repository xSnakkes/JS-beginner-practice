# JS-beginner-practice
Практика JS 1.
Створіть змінну за допомогою camelCase, snake_case та PascalCase і надайте їм значення від 0 до 2-х. Виведіть значення цих змінних на екран за допомогою методу alert та console.log. Скажіть, чим кардинально відрізняється alert та console.log?

Практика JS 2.
Дано рядок str = 'HTML'. Застосуйте до неї певний метод рядків, щоб усі літери стали короткими. Виведіть результат у консоль. Якщо є труднощі, подивіться, що таке методи рядків.

Практика JS 3.
Запитайте ім'я користувача за допомогою методу prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я {ім'я}'.

Практика JS 4.
Даний масив ['Саша', 'Петя', 'Оксана'], зробіть із нього ['Оксанa', 'Олег', 'Саша']. Реалізуйте це завдання двома способами. У першому вихідний масив має бути змінений, у другому - не може бути змінений.

Практика JS 5.
Напишіть скрипт, який приймає з клавіатури 2 числа, і якщо перше більше за друге, то виводить на екран їх суму, якщо ж навпаки - твір. Якщо числа однакові, виводить на екран цифри однакові.

Практика JS 6.
Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000]. Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5.

Практика JS 7.
Вага записана у змінну weight. Рекомендацію записуй рядком у змінну recommendation. Якщо вага до 4 кг (не включаючи це значення), рекомендація – "Пора перекусити". Якщо вага від 4 кг включно до 5.5 кг включно - 'Вага в нормі'.Якщо вага більше 5.5 кг - 'Пора на тренування'. Як умови, використовуй значення weight 1, 3, 4, 5, 10. Рекомендацію виводь у консоль.

Практика JS 8.
Напишіть функцію, яка обчислює підсумкову оцінку студента в залежності від двох параметрів: оцінки за іспит та кількість виконаних проектів. Ваша функція повинна приймати два аргументи: іспит – оцінка за іспит (від 0 до 100); проекти – кількість реалізованих проектів (від 0 і вище); Ця функція має повертати число (підсумкова оцінка). Є чотири типи підсумкових оцінок:
                                100, якщо оцінка за іспит більша за 90 або кількість виконаних проектів більша за 10.
                                90, якщо оцінка за іспит більша за 75 або кількість виконаних проектів не менше ніж 5.
                                75, якщо оцінка за іспит більше 50 або кількість виконаних проектів не менше ніж 2.
                                0, в інших випадках
                                
                                
                                
Практика JS 9.
Напишіть функцію, яка приймає масив, а повертає добуток елементів масиву, помножених по порядку один на одного.
Приклад коду:
   example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24

Практика JS 10.
Напишіть функцію, яка прийматиме масив з іменами, і повертатиме масив, але вже з віддаленими небажаними іменами. Масив із небажаними іменами має бути всередині вашої функції: const unwantedNames = [“Дима”, “Саша”, ”Ольга”, ”Микита”].
 Приклад коду:
   example(['Микита', 'Саша', 'Анастасія', 'Дима', 'Санич', 'Ольга', ]) => [Анастасія','Санич']
   example(['Олексій', 'Семен', 'Василиса', 'Діма', 'Максим', 'Ольга', ]) => ['Олексій','Семен','Василиса','Максим']
   example(['Алішер', 'Ольга', ]) => ['Алішер']
   
   
Практика JS 11.
У цій вправі повинні написати програму, яка прийматиме як параметри два масиви цілих чисел. Необхідно знайти твір кожного масиву, після чого знайти різницю двох масивів, незалежно від того, який з них більше. Якщо напишіть рішення в один рядок, будете молодці.
Приклад коду:
 example([3, 2, 5], [1, 4, 4]) => 14
   example([9, 7, 2], [5, 2, 2]) => 106
   example([11, 2, 5], [1, 10, 8]) => 30
   example([4, 4, 7], [3, 9, 3]) => 31
   example([15, 20, 25], [10, 30, 25]) => 0
   
Практика JS 12.
Завершіть функцію, яка приймає два цілих числа ( a, b, де a <  b) і повертає масив усіх цілих чисел між вхідними параметрами, включаючи їх.
Приклад коду:
   between(1, 4) => [1, 2, 3, 4]
   between(-2, 2) => [-2, -1, 0, 1, 2]
   between(20, 25) => [20, 21, 22, 23, 24, 25]
  
Практика JS 13.
Напишіть функцію, яка перетворює шістнадцяткове число (задане у вигляді рядка) на десяткове число.
  Приклад коду:
   hexToDec('1') => 1
   hexToDec('a') => 10
   hexToDec('10') => 16
   hexToDec('FF') => 255
   hexToDec('-C') => 12
   
Практика JS 14.
Видаліть n знаків оклику в пропозиції зліва направо. n – позитивне ціле число.
  Приклад коду:
   remove("Hi!",1) => "Hi"
   remove("Hi!",100) => "Hi"
   remove("Hi!!!",1) => "Hi!!"
   remove("Hi!!!",100) => "Hi"
   remove("!Hi",1) => "Hi"
   remove("!Hi!",1) => "Hi!"
   remove("!Hi!",100) => "Hi"
   remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"
   

Практика JS 15.
Ви повинні реалізувати функцію, яка повертає різницю між найбільшим та найменшим значенням у списку , отриманому як аргумент функції. Масив, який отримує функція як аргумент, може містити позитивні та негативні числа. Якщо масив порожній або має значення, поверніть нуль. Спочатку масив буде поданий у невідсортованому вигляді. Приклад: maxDiff([1, 2, 3, -4]); // Поверне 7, тому що: 3 - (-4) == 7
Приклад коду:
   maxDiff([0, 1, 2, 3, 4, 5, 6]) => 6
   maxDiff([-0, 1, 2, -3, 4, 5, -6]) => 11
   maxDiff([0, 1, 2, 3, 4, 5, 16]) => 16
   maxDiff([16]) => 0
   maxDiff([]) => 0
   
Практика JS 16.
Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.
Приклад коду:
   example ('Сьогодні чудовий день. З самого ранку ми підемо на озеро, купатися.', 5) => ['Сьогодні', 'Відмінний', 'самого', 'підемо', 'купатися']
   example('Над містом хмари, коридори, береги, проспект, річка.', 7) => ['коридори', 'проспект']
   
Практика JS 17.
Виверт, який я вивчив у початковій школі, щоб визначити, чи ділиться число на три, полягає в тому, щоб скласти всі цілі числа в числі і розділити отриману суму на три. Якщо від поділу суми на три немає залишку, то вихідне число також поділяється на три. Враховуючи серію цифр у вигляді рядка, визначте, чи число, подане рядком, ділиться на три. Примітка: Уникайте використання оператора % (залишок від поділу). Число, яке прийматиме функція - завжди буде рядок.
Приклад коду:
   divisibleByThree('123') => true
   divisibleByThree('19254') => true
   divisibleByThree('88') => false
   divisibleByThree('1') => false
   
Практика JS 18.
Жодних розмов. Жодних пояснень. Тільки ТЗ та результат, який має бути. Подивіться, що має вийти на виході і напишіть цю функцію.
Приклад коду:
   spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
   spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

23.	Практика JS 19.
Якщо число парне, перетворіть його на двійкове. Якщо число непарне, перетворіть його на шістнадцяткове.
Приклад коду:
   evensAndOdds(2) => '10'
   evensAndOdds(13) => 'd'

24.	Практика JS 20.
Необхідно реалізувати функцію, яка на вході приймає масив з різними типами даних = = gt; ['a', 1, 2, false, 'b'], а повертає об'єкт, у якому ці типи даних розсортовані за ключами.
Приклад коду:
{
   number: [1, 2],
   string: ['a', 'b'],
   boolean: [false]
}

Практика JS 21.
Дано рядок, що складається з букв a, b, c. Ваше завдання змінити розташування літер a та b, але не чіпати c.
Приклад коду:
   switcheroo('abc') =>'bac'
   switcheroo('aaabcccbaaa') =>'bbbacccabbb'
   switcheroo('ccccc') =>'ccccc'
   switcheroo('acb') =>'bca'
   switcheroo('aabacbaa') =>'bbabcabb'

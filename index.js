// Navbar Alert
function brand() {
    alert("Cari apa???\nNgga ada apa apa disini, Klik Oke ajaa😪😪");
    alert("Kok Muncul Lagi??\nKlik Oke lagi🙄🤨");
    alert("Yahh Muncul Lagii😁😋");
    alert("have a nice day🥰🥰");
}
function project() {
    alert("Calculator itu Projectnya🤗😉");
    alert("thanks for dropping by🤗😉");
    alert("good luck🤗😉");
}
function contact() {
    alert("Pengen tau kontaknya yaa??\nNggaa ada 🤣🤣");
    alert("Awas muncul lagi😁😋");
    alert("don't forget to smile😊😊🤗😉");
}


// Navbar Toggle 
// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function () {
//     nav.classList.toggle('slide');
// });

// Setting
const setting = document.querySelectorAll('#setting .btn');

// Tombol Light
setting[0].addEventListener('click', function () {
    const darkOut = document.querySelectorAll('.dark-out');
    const darkIn = document.querySelectorAll('.dark-in');

    for (let i = 0; i < darkOut.length; i++) {
        darkOut[i].classList.remove('dark-out');
        darkOut[i].classList.add('light-out');
    }
    for (let i = 0; i < darkIn.length; i++) {
        darkIn[i].classList.remove('dark-in');
        darkIn[i].classList.add('light-in');
    }
    document.body.style.backgroundColor = '#ececec';
    document.body.style.color = 'black';

    const pContent = document.querySelector('.history-content p');
    if (pContent !== null) {
        pContent.style.borderBottom = "1px solid black"
    }
});

// Tombol Dark
setting[1].addEventListener('click', function () {
    const lightOut = document.querySelectorAll('.light-out');
    const lightIn = document.querySelectorAll('.light-in');

    for (let i = 0; i < lightOut.length; i++) {
        lightOut[i].classList.remove('light-out');
        lightOut[i].classList.add('dark-out');
    }
    for (let i = 0; i < lightIn.length; i++) {
        lightIn[i].classList.remove('light-in');
        lightIn[i].classList.add('dark-in');
    }

    const pContent = document.querySelector('.history-content p');
    if (pContent !== null) {
        pContent.style.borderBottom = "1px solid cyan"
    }
    document.body.style.backgroundColor = '#091921';
    document.body.style.color = 'cyan';
});

// Tombol Font Default
setting[2].addEventListener('click', function () {
    const calc = document.getElementById('calculator');
    calc.style.fontFamily = 'Montserrat';
});

// Tombol Font Digital
setting[3].addEventListener('click', function () {
    const calc = document.getElementById('calculator');
    calc.style.fontFamily = 'Orbitron';
});

// Tombol Clear History
setting[4].addEventListener('click', function () {
    const history = document.querySelector('#history .history-content');
    const p = history.querySelectorAll('p');
    // console.log(p);
    for (let i = 0; i < p.length; i++) {
        history.removeChild(p[i]);
    }
});

// Calculator
const calculator = {
    displayNum: '0',
    operator: null,
    firstNum: null,
    operasi: false,
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.innerText = calculator.displayNum;
}

function clear() {
    calculator.displayNum = '0';
    calculator.operator = null;
    calculator.firstNum = null;
    calculator.operasi = false;
}

function input(digit) {
    if (calculator.displayNum === '0') {
        if (digit === '.') {
            calculator.displayNum = '0.';
        } else {
            calculator.displayNum = digit;
        }
    } else {
        calculator.displayNum += digit;
    }
}

function operasi(operator) {
    if (!calculator.operasi) {
        calculator.operator = operator;
        calculator.firstNum = calculator.displayNum;
        calculator.displayNum = '0';
        calculator.operasi = true;
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function calculate(op) {
    if (op == '+') {

        // Insert to History
        const his = document.querySelector('.history-content');
        let secondNum = calculator.displayNum;

        calculator.displayNum = parseFloat(calculator.firstNum) + parseFloat(calculator.displayNum);

        const hasil = document.createTextNode(calculator.firstNum + op + secondNum + ' = ' + calculator.displayNum);
        const p = document.createElement('p');
        p.appendChild(hasil);
        his.appendChild(p);

    } else if (op == '-') {
        const his = document.querySelector('.history-content');
        let secondNum = calculator.displayNum;

        calculator.displayNum = parseFloat(calculator.firstNum) - parseFloat(calculator.displayNum);

        const hasil = document.createTextNode(calculator.firstNum + op + secondNum + ' = ' + calculator.displayNum);
        const p = document.createElement('p');
        p.appendChild(hasil);
        his.appendChild(p);

    } else if (op == '*') {
        const his = document.querySelector('.history-content');
        let secondNum = calculator.displayNum;

        calculator.displayNum = parseFloat(calculator.firstNum) * parseFloat(calculator.displayNum);

        const hasil = document.createTextNode(calculator.firstNum + op + secondNum + ' = ' + calculator.displayNum);
        const p = document.createElement('p');
        p.appendChild(hasil);
        his.appendChild(p);

    } else if (op == '/') {
        const his = document.querySelector('.history-content');
        let secondNum = calculator.displayNum;

        calculator.displayNum = parseFloat(calculator.firstNum) / parseFloat(calculator.displayNum);

        const hasil = document.createTextNode(calculator.firstNum + op + secondNum + ' = ' + calculator.displayNum);
        const p = document.createElement('p');
        p.appendChild(hasil);
        his.appendChild(p);
    }
    updateDisplay();
}

// Numpad
const buttons = document.querySelectorAll('.keypad .numpad');
for (let btn of buttons) {
    btn.addEventListener('click', function (e) {
        // Clear/AC
        if (e.target.classList.contains('clear')) {
            clear();
            updateDisplay();
            return;
        }
        // invers
        if (e.target.classList.contains('invers')) {
            calculator.displayNum *= -1;
            updateDisplay();
            return;
        }
        // DEL
        if (e.target.classList.contains('del')) {
            const del = calculator.displayNum.length - 1;
            if (del == 0) {
                calculator.displayNum = '0';
            } else {
                calculator.displayNum = calculator.displayNum.substring(0, del);
            }
            updateDisplay();
            return
        }
        // Percent
        if (e.target.classList.contains('percent')) {
            calculator.displayNum /= 100;
            updateDisplay();
            return;
        }
        // Operator
        if (e.target.classList.contains('operator')) {
            operasi(e.target.innerText);
            return;
        }
        // Equals atau Sama dengan
        if (e.target.classList.contains('equals')) {
            calculate(calculator.operator);
            clear();
            return;
        }

        input(e.target.innerText);
        updateDisplay();
    })
}
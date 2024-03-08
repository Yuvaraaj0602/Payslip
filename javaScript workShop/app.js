

const displayValue = () => {
    let basicpay = Number(document.getElementById('basicpay').value)
    let hra = (basicpay / 10);
    let da = (basicpay / 20);
    let travel = (basicpay * 15 / 100)
    let pf = (basicpay * 15 / 100)
    let grosspay = basicpay + hra + da + travel + pf
    let netpay = grosspay - pf

    document.getElementById('hra').value = hra
    document.getElementById('da').value = da
    document.getElementById('travel').value = travel
    document.getElementById('pf').value = pf
    document.getElementById('grosspay').value = grosspay
    document.getElementById('netpay').value = netpay
}
document.getElementById('basicpay'), addEventListener('keyup', displayValue)

const print=()=>{
    let basicpay = Number(document.getElementById('basicpay').value)
    let hra = (basicpay / 10);
    let da = (basicpay / 20);
    let travel = (basicpay * 15 / 100)
    let pf = (basicpay * 15 / 100)
    let grosspay = basicpay + hra + da + travel + pf
    let netpay = grosspay - pf

    document.getElementById('value').innerHTML+=`<tr><td>${basicpay}</td><td>${hra}</td><td>${da}</td><td>${travel}</td><td>${pf}</td><td>${grosspay}</td><td>${netpay}</td></tr>`
}
document.getElementById('print').addEventListener('click',print)

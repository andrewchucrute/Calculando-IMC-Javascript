export function CalcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


export function NotaNumber(value) {
return isNaN(value) || value == ""
}
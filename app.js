function calcularImposto(salario) {
    if (salario <= 2259.20) return faixaIsenta(salario);
    if (salario <= 2826.65) return faixa1(salario);
    if (salario <= 3751.05) return faixa2(salario);
    if (salario <= 4664.68) return faixa3(salario);
    return faixa4(salario);
}

function faixaIsenta(salario) {
    return 0;
}
function faixa1(salario) {
    return salario * 0.075 - 169.44;
}
function faixa2(salario) {
    return salario * 0.15 - 381.44;
}
function faixa3(salario) {
    return salario * 0.225 - 662.77;
}
function faixa4(salario) {
    return salario * 0.275 - 896.00;
}

function aliquotaEfetiva(salario, imposto) {
    return (imposto / salario) * 100;
}

function calcular() {
    const salario = parseFloat(document.getElementById("salario").value);
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um valor de salário válido!");
        return;
    }

    const imposto = calcularImposto(salario);
    const aliquota = aliquotaEfetiva(salario, imposto);

    document.getElementById("resultado").innerHTML =
        `<p><strong>Imposto devido:</strong> R$ ${imposto.toFixed(2)}</p>
         <p><strong>Alíquota efetiva:</strong> ${aliquota.toFixed(2)}%</p>`;
}
function limpar() {
    document.getElementById("salario").value = "";
    document.getElementById("resultado").innerHTML = "";
}

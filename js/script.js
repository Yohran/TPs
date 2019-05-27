var operacao;
//Equação de segundo grau
function Calcular() {
    var a = Number(document.all['coefA'].value);    // Coeficiente A
    var b = Number(document.all['coefB'].value)// Coeficiente B
    var c = Number(document.all['coefC'].value)// Coeficiente C
    var delta = eval((b*b)-(4*a*c));          // Valor de delta
    var x1 = eval((-1)*b + (Math.sqrt(delta)))/(2*a);    // Primeira solução
    var x2 = eval((-1)*b - (Math.sqrt(delta)))/(2*a);    // Segunda solução
    var rep1 = document.all['delta'];
    var rep2 = document.all['x1'];
    var rep3 = document.all['x2'];
    if (isNaN(a) || a == "" || a == "0" || a == "00" || a == "000" || a == "0000" || a == "00000" || a == "0." || a == "0.0" || a == "0.00" || a == "0.000" || a == "0.0000") {
        alert("Digite um valor numérico não-nulo no coeficiente a");
        document.ecuation.coefA.focus();
        return false;         
    }
    if (isNaN(b) || b == "") {
        alert("Digite um valor numérico no coeficiente b");
        document.ecuation.coefB.focus();
        return false;         
    }
    if (isNaN(c) || c == "") {
        alert("Digite um valor numérico no coeficiente c");
        document.ecuation.coefC.focus();
        return false;         
    }
    rep1.innerHTML = delta;
    if (delta < 0) {          
        rep2.innerHTML = "Número Complexo";
        rep3.innerHTML = "Número Complexo";
    }
    else {          
        rep2.innerHTML = x1;
        rep3.innerHTML = x2;
    }
}
// Média Ponderada
function Media() {
    var notaA = Number(document.all['notaA'].value);
    var notaB = Number(document.all['notaB'].value);
    var notaC = Number(document.all['notaC'].value);
    var total = Number((notaA + notaB + notaC) / 3);
    var resp = document.all['total'];
    if (total <= 4.9) {
        resp.innerHTML = "Conceito E";
    }
    else if (total <= 5.9) {
        resp.innerHTML = "Conceito D";
    }
    else if (total <= 6.9) {
        resp.innerHTML = "Conceito C";
    }
    
    else if (total <= 7.9) {
        resp.innerHTML = "Conceito B";
    }
        
        
    else if (total >= 8){
        resp.innerHTML = "Conceito A"
    }
        
        
    else {
        resp.innerHTML = "Erro!";
    }
}
//ordem crescente
function ordem() {
    var numa = Number(document.all['numa'].value);
    var numb = Number(document.all['numb'].value);
    var numc = Number(document.all['numc'].value);
    var res = document.all['cre'];
    if (numa > numb && numb > numc) {  
        res.innerHTML = numc + "," + numb + "," + numa;  
    }

    else if (numa > numc && numc > numb) {
        res.innerHTML = numb + "," + numc + "," + numa;       
    }

    else if (numb > numa && numa > numc) {
        res.innerHTML = numc + "," + numa + "," + numb;  
    
    }

    else if (numb > numc && numc > numa) {
        res.innerHTML = numa + "," + numc + "," + numb;  
     
    }

    else if (numc > numa && numa > numb) {
        res.innerHTML = numb + "," + numa + "," + numc;  
    }

    else if (numc > numb && numb > numa) {
        res.innerHTML = numa + "," + numb + "," + numc;   
    }   
    else{
        res.innerHTML = "ERRO! NÚMEROS IGUAIS";
    }

}
// Data Cronologica
function dt() {
   var a = document.all['data1'];
   var b = document.all['data2'];
   var ano1 = a.value;
   var ano2 = b.value;
   var data = document.all['data'];
   if(ano1 > ano2){
        data.innerHTML = ano2;
   }else if(ano2 > ano1){
        data.innerHTML = ano1;
   }
   else{
       data.innerHTML = "datas iguais";
   }
}
//Raiz e soma
function changeOperation(op){
    operacao = op.value;
    op = op.value;
    
    if(op == "SOMA"){
        document.all['EntradaRAIZ'].style = "display: none;";
        document.all['lbdRAIZ'].style = "display: none;";
        document.all['EntradaSOMAR1'].style="display:block;";
        document.all['EntradaSOMAR2'].style="display:block;";
        document.all['lbdSOMAR1'].style="display:block;";
        document.all['lbdSOMAR2'].style="display:block;";
    }
    else{
        document.all['EntradaRAIZ'].style = "display: block;";
        document.all['lbdRAIZ'].style = "display: block;";
        document.all['EntradaSOMAR1'].style="display:none;";
        document.all['EntradaSOMAR2'].style="display:none;";
        document.all['lbdSOMAR1'].style="display:none;";
        document.all['lbdSOMAR2'].style="display:none;";
    }
}
function menu(){
    var raiz = Number(document.all['EntradaRAIZ'].value);
    var resposta = document.all['rdbRes']; 
    var s1 = Number(document.all['EntradaSOMAR1'].value);
    var s2 = Number(document.all['EntradaSOMAR2'].value);
    var resposta = document.all['rdbRes'];
    if (operacao == "SOMA") {
        resposta.innerHTML = (s1+s2);
    }
    else if(operacao == "RAIZ"){
        resposta.innerHTML = Math.sqrt(raiz);
    }
    else{
        alert("informe um valor");
    }
}
// Salários
function sal() 
{
    var bon;
    var aux;
    var resp = document.all['sal'];
    for (x = 1; x <= 25; x++) 
    {
        var salarios = prompt("Digite o salario do funcionario"+x);
        if(salarios != "" || salarios > 0)
        {
            if (salarios <= 5000)
            { 
                bon = salarios * 0.05;
            }
            else if (salarios > 500 && salarios <= 1200)
            { 
                bon = salarios * 0.12;
            }
            else
            {
                bon = 0;
            }
            if (salarios <= 600) 
            {
                aux = 150;
            }
            else
            { 
                aux = 100;
            }    
        }
        else
        {
            x--;
        }
        var salario = parseInt(salarios);
        var total = salario += bon += aux;
        resp.innerHTML += "Novo salário do funcionário " + x + " é de: R$" + total+"<br>";
     }
}
// Números primos
function primo() 
{
    var pri = Number(document.all['pri'].value);
    var primo = document.all['prim'];
    var cont = 0;
    for (x = 1; x<= pri; x++) {
        if (pri%x == 0) 
        {
            cont++;    
        }
    }
    if (cont == 2)
    {
        primo.innerHTML = "O número "+ pri + " é primo";
    }
    else 
    {
        primo.innerHTML = "O número "+ pri + " não é primo";
    }
}
//fibonnaci
function fibo() 
{
    var seq = Number(document.all['fibo'].value);
    var fim = document.all['fibonacci'];
    var a = 1, b = 0, temp;
    if(seq == "")
    {
        alert("Digite um valor para sequencia")
    }
    else
    {
        for(x = seq; x >= 0; x-- )
        {
            temp = a;
            a = a + b;
            b = temp;
            fim.innerHTML +=  a + "-";
        }
          
    }
}
//vinhos
function vinho() 
{
    
    var vinho = document.all['vinho'];
    alert("Digite os números dos vinhos que estão no estoque sendo eles 1 - Tinto, 2 - Branco e 3- Rosê");
    var t = 0;
    var b = 0;
    var r = 0;
    var x;
    for (x = 1; x <= 50; x++) 
    {
        var n = prompt("Digite o número do vinho:" + x);
        if (n == 1) 
        {
            t = t+1;   
        } 
        else if(n == 2) 
        {
            b = b+1;
        }
        else if(n == 3)
        {
            r = r+1;
        }
        else
        {
            alert("Erro!");
            x--;
        }
        
    }
    
    var tp = (t*100)/50;
    var tb = (b*100)/50;
    var tr = (r*100)/50;
    vinho.innerHTML = "Vinho Tinto = " + tp + "% <br> Vinho Branco = " + tb + "%<br> Vinho Rosê = " + tr + "%";

}
//fatorial
function fator() 
{
    var fat = document.all['fat'].value;
    var fatorial = document.all['fatorial'];
	//var fato = prompt("digite o valor a se fatorar");
	
    var res;
    var ab;
    var at = fat;
    var ant = fat-1;
    for(ab = fat; ab > 1; ab--)
	{
        res = at*ant;
        ant--;
        at = res;
    }
	fatorial.innerHTML = res;   
}
function pn()
{
    var n = [];
    var p = [];
    var num = [];
    var r = document.all['re'];
    var rn = document.all['ren'];

    for(x = 1; x < 9; x++)
    {
        var numero =  prompt("Digita aqui os números: ");
        num.push(numero);
        if (numero >= 0) 
        {
            p.push(numero);

        } else 
        {
            n.push(numero);
        }
    }

    for(x = 0; x < p.length; x++)
    {
        r.innerHTML += ' ' + p[x] + ' ';
    }
    for(x = 0; x < n.length; x++)
    {
        rn.innerHTML += ' ' + n[x] + ' ';
    }
}
function nm() 
{
    var nm =[];
    var r = document.all['resposta'];
    
    for(x = 1; x < 9; x++)
    {
        var n = prompt("Digite os números: ");
        
        if(n >= 50) 
        {
            nm.push(n);
            r.innerHTML += n + " na posição " + x + '<br>';
        }
        else
        {
            r.innerHTML += "Não existe número na condição <br>";           
        }
    }
}
function Verificacao(){
	var v1 = [];
	var c1, res;
	var preResposta = document.all['rep'];

	for (var i=0; i < 10; i++){
		c1 = Number(prompt("Digite um numero para a posicao " + i));
		res = c1 % 2;

		if (res == 0) {
			v1[i] = c1 + 5;
		}else {
			v1[i] = c1 * 5;
		}

	}

	preResposta.innerHTML = '';

	for (var i=0; i < 10; i++){
		preResposta.innerHTML += 'O valor para a posicao ' + i + ' - ' + v1[i] + '<br>';

	}
}

function Ordena(){
	var v1 = [];
	var aux;
	var preResposta = document.all['r'];
	
	for (var i=0; i < 20; i++){
		v1[i] = Number(prompt("Digite um numero para a posicao " + i));
		
	}

	for (var j=0; j < 20; j++){

		for (var i=0; i < 20; i++){
			if (v1[i] > v1[i+1]){
				aux = v1[i];
				v1[i] = v1[i+1];
				v1[i+1] = aux;
			}
		}
	}

	for (var i=0; i < 20 ; i++){
		preResposta.innerHTML += 'Valor :' + v1[i] + '<br>';
    }
}

function Vetor100(){
	var v1 = [];
	var qtd, nro, ctrl;
	var preResposta = document.all['resp'];


	qtd = 0;

	for (var i=0; i < 100; i++){
		nro = Number(prompt("Digite um numero para a posicao " + i));
		if (nro == 0){
			i = 100;
			//break;
		}else {
			v1[i] = nro;
			ctrl = nro;
 		}	
	}

	for (var i=0; i < v1.length ; i++){
		if (v1[i] == ctrl){
			qtd++;
		}
	}
    preResposta.innerHTML = 'Existe(m) ' + qtd + ' numero(s) identico(s) ao ultimo digitado';
}

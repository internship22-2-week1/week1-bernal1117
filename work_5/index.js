function tokensZ(s) {
    const r = [];
    let token = '';
    for (const caracter of s) {
        if ('^*/+-'.indexOf(caracter) > -1) {
            if (token === '' && caracter === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token), caracter);
                token = '';
            }
        } else {
            token += caracter;
        }
    }
    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
  }
  
  function calc(tokens) {
    const precedencia = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}];
    let operador;
    for (const operators of precedencia) {
        const ntokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operador = operators[token];
            } else if (operador) {
                ntokens[ntokens.length - 1] = 
                    operador(ntokens[ntokens.length - 1], token);
                operador = null;
            } else {
                ntokens.push(token);
            }
        }
        tokens = ntokens;
    }
    if (tokens.length > 1) {
        console.log('Error, no se puede hacer este calculo');
        return tokens;
    } else {
        return tokens[0];
    }
  }
  console.log(calc(4-7+8+9/2*3))
  
  const calculateButton = document.getElementById('calcular');
  const entrada = document.getElementById('entrada');
  const result = document.getElementById('resultado');
  calculateButton.addEventListener('click', function() {
    result.innerHTML = "La respuesta es: " + calc(tokensZ(entrada.value));
  });
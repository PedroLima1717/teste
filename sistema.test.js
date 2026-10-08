const { verificarMaioridade } = require('./sistema');

test('verifica se a idade é maior ou igual a 18', () => {
    expect(verificarMaioridade(15)).toBe(false);
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(21)).toBe(true);
});
//////////////////////////////////////////////////////////
test('Calcular de o IMC bate com as informações passadas', () => {
    const { calcularIMC } = require('./sistema');
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
});
////////////////////////////////////////////////////////////
test('Formatar nome e sobrenome', () => {
    const { formatarNome } = require('./sistema');
    expect(formatarNome('João', 'Silva')).toBe('Silva, João');
});
///////////////////////////////////////////////////////////
test('Verifica se o número é par', () => {
    const { ehPar } = require('./sistema');
    expect(ehPar(10)).toBe(true);
});
/////////////////////////////////////////////
test('Converter Celsius para Fahrenheit', () => {
    const { celsiusParaFahrenheit } = require('./sistema');
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
});
/////////////////////////////////////////////////////////
test('Adicionar hobby a lista', () => {
    const { adicionarHobby } = require('./sistema');
    const lista = ['futebol', 'leitura'];
    const hobby = 'música';
    expect(adicionarHobby(lista, hobby)).toEqual(['futebol', 'leitura', 'música']);
});
/////////////////////////////////////////////////////////
test('Divisão de dois números', () => {
    const { dividir } = require('./sistema');
    expect(dividir(10, 2)).toBe(5);
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
});
//////////////////////////////////////////////////////////
test('Criar objeto aluno', () => {
    const { criarAluno } = require('./sistema');
    const aluno = criarAluno('Maria', 'Engenharia');
    expect(aluno).toEqual({ nome: 'Maria', curso: 'Engenharia', ativo: true });
});
///////////////////////////////////////////////////////////
test('Aplicar desconto no preço', () => {
    const { aplicarDesconto } = require('./sistema');
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(200, 25)).toBe(150);
});
/////////////////////////////////////////////////////////
test('Validar tamanho da senha', () => {
    const { validarTamanhoSenha } = require('./sistema');
    expect(validarTamanhoSenha('senha123')).toBe(true);
    expect(validarTamanhoSenha('1234567')).toBe(false);
});

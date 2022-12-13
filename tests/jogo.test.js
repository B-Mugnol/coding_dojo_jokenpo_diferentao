const jogar_jokenpo = require('../src/jogo');

test('Joga mac e linux ganha mac', () => {
	expect(jogar_jokenpo('mac', 'linux')).toMatch(/^mac$/);
	expect(jogar_jokenpo('linux', 'mac')).toMatch(/^mac$/);
});

test('Joga linux e windows ganha linux', () => {
	expect(jogar_jokenpo('linux', 'windows')).toMatch(/^linux$/);
	expect(jogar_jokenpo('windows', 'linux')).toMatch(/^linux$/);
});

test('Joga mac e windows ganha windows', () => {
	expect(jogar_jokenpo('mac', 'windows')).toMatch(/^windows$/);
	expect(jogar_jokenpo('windows', 'mac')).toMatch(/^windows$/);
});

test('Joga undefined ou nulo retorna error', () => {
	expect(jogar_jokenpo(undefined, null)).toMatch(/^error$/);
	expect(jogar_jokenpo(null, undefined)).toMatch(/^error$/);
});

test('Joga string qualquer e mac retorna error', () => {
	expect(jogar_jokenpo('string qualquer', 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', 'string qualquer')).toMatch(/^error$/);
	expect(jogar_jokenpo('1234', '5678')).toMatch(/^error$/);
});

test('Jogadores letra maiuscula', () => {
	expect(jogar_jokenpo('MAC', 'LINUX')).toMatch(/^mac$/);
	expect(jogar_jokenpo('LINUX', 'MAC')).toMatch(/^mac$/);
	expect(jogar_jokenpo('MAC', 'WINDOWS')).toMatch(/^windows$/);
	expect(jogar_jokenpo('WINDOWS', 'MAC')).toMatch(/^windows$/);
	expect(jogar_jokenpo('WINDOWS', 'LINUX')).toMatch(/^linux$/);
	expect(jogar_jokenpo('LINUX', 'WINDOWS')).toMatch(/^linux$/);
});

test('Jogadores primeira letra maiuscula', () => {
	expect(jogar_jokenpo('Mac', 'Linux')).toMatch(/^mac$/);
	expect(jogar_jokenpo('Linux', 'Mac')).toMatch(/^mac$/);
	expect(jogar_jokenpo('Mac', 'Windows')).toMatch(/^windows$/);
	expect(jogar_jokenpo('Windows', 'Mac')).toMatch(/^windows$/);
	expect(jogar_jokenpo('Windows', 'Linux')).toMatch(/^linux$/);
	expect(jogar_jokenpo('Linux', 'Windows')).toMatch(/^linux$/);
});

test('Joga igual retorna empate', () => {
	expect(jogar_jokenpo('mac', 'mac')).toMatch(/^empate$/);
	expect(jogar_jokenpo('linux', 'linux')).toMatch(/^empate$/);
	expect(jogar_jokenpo('windows', 'windows')).toMatch(/^empate$/);
});

test('Joga invalido igual retorna error', () => {
	expect(jogar_jokenpo('pedro', 'pedro')).toMatch(/^error$/);
	expect(jogar_jokenpo('joao', 'joao')).toMatch(/^error$/);
	expect(jogar_jokenpo('joao', 'JOAO')).toMatch(/^error$/);
});

test('Joga caracteres especiais retorna error', () => {
	expect(jogar_jokenpo('%-\\$\t\n\v*+=/#@', 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', '%-\\$\t\n\v*+=/#@')).toMatch(/^error$/);
	expect(jogar_jokenpo('%-\\$\t\n\v*+=/#@', '%-\\$\t\n\v*+=/#@')).toMatch(/^error$/);
});

test('Joga não-strings retorna error', () => {
	expect(jogar_jokenpo({ nome: 'bob' }, 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['joao', 'pedro'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['linux'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['li', 'nux'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['li', '\bnux'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['linux', 'joao'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['joao', 'linux'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo(['linux', 'linux'], 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', { nome: 'bob' })).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['joao', 'pedro'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['linux'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['li', 'nux'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['li', '\bnux'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['linux', 'joao'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['joao', 'linux'])).toMatch(/^error$/);
	expect(jogar_jokenpo('mac', ['linux', 'linux'])).toMatch(/^error$/);
	expect(jogar_jokenpo(25, 'mac')).toMatch(/^error$/);
	expect(jogar_jokenpo('linux', 565)).toMatch(/^error$/);
	expect(jogar_jokenpo('linux', 9999999999)).toMatch(/^error$/);
	expect(jogar_jokenpo(true, 'windows')).toMatch(/^error$/);
});

test('Joga mac e linux com whitespace retorna mac', () => {
	expect(jogar_jokenpo(' linux', 'mac ')).toMatch(/^mac$/);
	expect(jogar_jokenpo('\tlinux', 'mac\t')).toMatch(/^mac$/);
	expect(jogar_jokenpo('\flinux', ' mac\f')).toMatch(/^mac$/);
	expect(jogar_jokenpo(' \nlinux', ' mac\n')).toMatch(/^mac$/);
	expect(jogar_jokenpo(' \rlinux', ' mac\r')).toMatch(/^mac$/);
	expect(jogar_jokenpo(' \vlinux', ' mac\v')).toMatch(/^mac$/);
});

test('Joga mac com string vazia retorna erro', () => {
	expect(jogar_jokenpo('', 'mac ')).toMatch(/^error$/);
    expect(jogar_jokenpo('mac', '')).toMatch(/^error$/);
});

test('Joga maclinux com string vazia retorna erro', () => {
	expect(jogar_jokenpo('', 'maclinux')).toMatch(/^error$/);
    expect(jogar_jokenpo('maclinux', '')).toMatch(/^error$/);
});

test('Joga maclinux com whitespace vazia retorna erro', () => {
	expect(jogar_jokenpo(' ', 'maclinux')).toMatch(/^error$/);
    expect(jogar_jokenpo('maclinux', ' ')).toMatch(/^error$/);
});

test('Joga inputs invalidos para combinacoes validas retorna erro', () => {
    expect(jogar_jokenpo('m', 'aclinux')).toMatch(/^error$/);
	expect(jogar_jokenpo('ma', 'clinux')).toMatch(/^error$/);
    expect(jogar_jokenpo('macl', 'inux')).toMatch(/^error$/);
    expect(jogar_jokenpo('macli', 'nux')).toMatch(/^error$/);
    expect(jogar_jokenpo('maclin', 'ux')).toMatch(/^error$/);
    expect(jogar_jokenpo('maclinu', 'x')).toMatch(/^error$/);
});

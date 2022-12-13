function jogar_jokenpo(jogador_a, jogador_b) {
	// Garantir que é string
	if (typeof jogador_a != "string" || typeof jogador_b != "string")
		return 'error'

	// Normalização da string
	jogador_a = jogador_a.trim().toLowerCase()
	jogador_b = jogador_b.trim().toLowerCase()

	// Validar string
	if (!jogador_a || !jogador_b)
		return 'error'
	if (jogador_a != 'linux' && jogador_a != 'windows' && jogador_a != 'mac')
		return 'error'
	if (jogador_b != 'linux' && jogador_b != 'windows' && jogador_b != 'mac')
		return 'error'
	let jogador_ab = jogador_a + jogador_b

	// Decide vencedor ou empate
	if (jogador_ab == 'linuxwindows' || jogador_ab == 'windowslinux')
		return 'linux'
	else if (jogador_ab == 'macwindows' || jogador_ab == 'windowsmac')
		return 'windows'
	else if (jogador_ab == 'maclinux' || jogador_ab == 'linuxmac')
		return 'mac'
	return 'empate'
}

module.exports = jogar_jokenpo;

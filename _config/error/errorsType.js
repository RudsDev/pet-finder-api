module.exports = {
	USUARIO_INVALID: {
		status: 401,
		message: global.TEXTS.login_invalid
	},
	USUARIO_NAO_ATIVO: {
		status: 401,
		message: global.TEXTS.user_inactive
	},
	USUARIO_NAO_VERIFICADO: {
		status: 401,
		message: global.TEXTS.user_unverified
	},
	USUARIO_NAO_ENCONTRADO: {
		status: 400,
		message: global.TEXTS.usuario_nao_encontrado
	},
	SENHA_ATUAL_NAO_CONFERE: {
		status: 400,
		message: global.TEXTS.senha_atual_nao_confere
	},
	USUARIO_NAO_PODE_SER_EXCLUIDO_EXISTE_OBJETO: {
		status: 400,
		message: global.TEXTS.usuario_nao_pode_ser_excluido_existe_objeto
	},
	USUARIO_NAO_PODE_SER_EXCLUIDO_EXISTE_COLECOES: {
		status: 400,
		message: global.TEXTS.usuario_nao_pode_ser_excluido_existe_colecoes
	},
	EMAIL_JA_CADASTRADO: {
		status: 400,
		message: global.TEXTS.email_ja_cadastrado
	},
	EXISTE_USUARIO_VINCULADO_CURADORIA: {
		status: 400,
		message: global.TEXTS.existe_usuario_vinculado_curadoria
	},
	EXISTE_OBJETO_NA_COLECAO: {
		status: 400,
		message: global.TEXTS.objeto_nao_pode_ser_excluido_colecao
	},
	EXISTE_OBJETO_FAVORITO: {
		status: 400,
		message: global.TEXTS.existe_objeto_em_favorito
	},
	EXISTE_CURADORIA_COM_MESMO_NOME: {
		status: 400,
		message: global.TEXTS.existe_curadoria_com_mesmo_nome
	},
	EXISTE_OBJETO_COM_MESMO_TITULO: {
		status: 400,
		message: global.TEXTS.existe_objeto_com_mesmo_titulo
	},
	EXISTE_OBJETO_COM_MESMA_URL: {
		status: 400,
		message: global.TEXTS.existe_objeto_com_mesma_url
	},
	EXISTE_TIPO_COM_MESMO_NOME: {
		status: 400,
		message: global.TEXTS.existe_tipo_com_mesmo_nome
	},
	PROPRIEDADE_NAO_PODE_SER_EXCLUIDA: {
		status: 400,
		message: global.TEXTS.propriedade_nao_pode_ser_excluida
	},
	TERMO_SEM_ACEITE: {
		status: 401,
		message: global.TEXTS.termo_uncheck
	},
	LOGIN_SENHA_INVALIDO: {
		status: 401,
		message: global.TEXTS.login_invalid
	},
	RESTRICT_EXCLUSAO_AREA: {
		status: 500,
		message: global.TEXTS.restrict_area_exclusao
	},
	RESTRICT_EXCLUSAO_CURADORIA_OBJETO: {
		status: 500,
		message: global.TEXTS.restrict_curadoria_objeto
	},
	RESTRICT_EXCLUSAO_CURADORIA_USUARIO: {
		status: 500,
		message: global.TEXTS.restrict_curadoria_usuario
	},
	RESTRICT_TIPO_EXCLUSAO: {
		status: 500,
		message: global.TEXTS.restrict_tipo_exclusao
	},
	UNAUTHORIZED: {
		status: 401,
		message: global.TEXTS.restrict_access
	},
	INVALID_TOKEN: {
		status: 401,
		message: global.TEXTS.invalid_token
	},
	NO_TOKEN: {
		status: 401,
		message: global.TEXTS.no_token
	},
	TOKEN_DE_RECUPERACAO_EXPIRADO: {
		status: 401,
		message: global.TEXTS.token_recuperacao_expirado
	}
}

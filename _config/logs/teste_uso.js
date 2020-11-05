// Arquivo para rodar teste

// no terminal:
// npm i winston --save
// npm i winston-daily-rotate-file --save
// cd .\api\_config\logs
// node teste_uso

const logar = require('./index')

logar.erro('Erro, mensagem livre', { quem: 'Ruds', fez: 'Tentou logar', onde: 'Login site' })
logar.info('Mensagem livre', { quem: 'Fernanda', fez: 'Visitou o curso', onde: 'Curso', extras: { antigo: { teste: 'teste' }, novo: { teste: 'teste2' } } })
logar.alerta('Mensagem livre', { quem: 'Rebeca', fez: 'Enviou email', onde: 'Envio email' })
logar.alerta('Mensagem alerta sem json')

const http = require('http')

const server = http.createServer((req, res) => {
	const resp = []
	resp['/'] = '<h1>Home</h1>'
	resp['/contato'] = '<h1>Contato</h1>'
	resp['semURL'] = '<h1>URL sem resposta definida!</h1>'

	res.end(resp[req.url] || resp['semURL'])
})

server.listen(3000, 'localhost', () => {
	console.log('Servidor de pé em: http://localhost:3000')
	console.log('Pra desligar o servidor: ctrl + c')
})
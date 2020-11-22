## Scripts

No diretório deste projeto, você pode executar:  

### `npm install`  

Instala as dependências deste projeto na pasta node_modules local.  

### `npm start`  

Executa a aplicação Backend em modo de desenvolvimento.  
Abrir http://localhost:8080 para visualizar no navegador.  

## Web API REST

| Métodos 	| URLs                              	| Ações                                                      	|
|---------	|-----------------------------------	|------------------------------------------------------------	|
| POST    	| /api/colaboradores                	| Criar um novo colaborador                                  	|
| GET     	| /api/colaboradores                	| Recuperar todos os colaboradores do banco                  	|
| GET     	| /api/colaboradores/:id            	| Recuperar um colaborador pelo ':id'                        	|
| PUT     	| /api/colaboradores/:id            	| Atualizar um colaborador pelo ':id'                        	|
| DELETE  	| /api/colaboradores/:id            	| Apagar um colaborador pelo ':id'                           	|
| DELETE  	| /api/colaboradores                	| Deletar todo os colaboradores                              	|
| GET     	| /api/colaboradores?nome=[keyword] 	| Encontre todos os colaboradores cujo nome contém 'keyword' 	|
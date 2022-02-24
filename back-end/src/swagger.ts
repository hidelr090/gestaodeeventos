const swaggerDoc = {
    "swagger": "2.0",
    "info": {
        "title": "App Gestão de Eventos",
        "version": "1.0.0",
        "description": "Aplicativo destinado a criação, gerenciamento e venda de ingressos.",
        "contact": {
            "name": "Swagger API",
            "url": "https://swagger.io",
            "email": ""
        },
    },
    "servers":[
        {
            "url": "http://localhost:8080/v1",
            "description":"API Test Local Server"
        }
    ],
    "securityDefinitions": {
        "bearerAuth": {
            "type": "apiKey",
            "name": "authorization",
            "in": "header"
        }
    },
    "paths":{
        "/customer": {
            "post": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Customer"
                    }
                }],
                "summary": "Registrar um novo usuario.",
                "consumes": ["application/json"],
                "tags": ["Customer"],
                "description": "Registrar um novo usuario.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Customer"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Customer"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "get": {
                "summary": "Listar todos os usuarios cadastrados.",
                "consumes": ["application/json"],
                "tags": ["Customer"],
                "description": "Listar todos os usuarios cadastrados.",
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Customer"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "patch": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Customer"
                    }
                }],
                "summary": "Atualizar dados cadastrais do usuario.",
                "consumes": ["application/json"],
                "tags": ["Customer"],
                "security": [{ "bearerAuth": [] }],
                "description": "Atualizar dados cadastrais do usuario.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Customer"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Customer"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        },
        "/auth/customer": {
            "post": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Login"
                    }
                }],
                "summary": "Autenticacao do usuario.",
                "consumes": ["application/json"],
                "tags": ["Customer"],
                "description": "Autenticacao do usuario.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Login"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Login"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        },
        "/organization": {
            "post": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Organization"
                    }
                }],
                "summary": "Registrar um novo usuario.",
                "consumes": ["application/json"],
                "tags": ["Organization"],
                "description": "Registrar um novo usuario.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Organization"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Organization"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "get": {
                "summary": "Listar todas as organizacoes cadastradas.",
                "consumes": ["application/json"],
                "tags": ["Organization"],
                "description": "Listar todas as organizacoes cadastradas.",
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Organization"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "patch": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Organization"
                    }
                }],
                "summary": "Atualizar dados cadastrais da organizacao cadastrada.",
                "consumes": ["application/json"],
                "tags": ["Organization"],
                "security": [{ "bearerAuth": [] }],
                "description": "Atualizar dados cadastrais da organizacao cadastrada.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Organization"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Organization"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        },
        "/auth/organization": {
            "post": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Login"
                    }
                }],
                "summary": "Autenticacao do usuario.",
                "consumes": ["application/json"],
                "tags": ["Organization"],
                "description": "Autenticacao do usuario.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Login"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Login"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        },
        "/event": {
            "post": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Event"
                    }
                }],
                "summary": "Registrar um novo evento.",
                "security": [{ "bearerAuth": [] }],
                "consumes": ["application/json"],
                "tags": ["Event"],
                "description": "Registrar um novo evento.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Event"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Event"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "get": {
                "parameters":[
                    {
                        "name": "name",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },{
                        "name":"description",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },{
                        "name":"location",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "summary": "Filtro de Eventos",
                "consumes": ["application/json"],
                "tags": ["Event"],
                "description": "Filtrar eventos por nome, descricao e local",
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Event"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "patch": {
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "schema": {
                        "$ref":"#/components/schemas/Event"
                    }
                }],
                "summary": "Atualizar dados cadastrais do evento.",
                "consumes": ["application/json"],
                "tags": ["Event"],
                "security": [{ "bearerAuth": [] }],
                "description": "Atualizar dados cadastrais do evento.",
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Event"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Event"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        },
        "/ticket": {
            "post": {
                "parameters": [
                    { 
                        "name": "body",
                        "in": "body",
                        "schema": {
                            "$ref":"#/components/schemas/Ticket"
                        }
                    },
                    {
                        "name": "event_id",
                        "in": "query",
                        "schema": {
                            "type": "uuid"
                        }
                    }
                ],
                "summary": "Efetivar a compra de um ou mais ingressos.",
                "consumes": ["application/json"],
                "tags": ["Ticket"],
                "description": "Efetivar a compra de um ou mais ingressos.",
                "security": [{ "bearerAuth": [] }],
                "requestBody":{
                    "content":{
                        "application/json":{
                            "schema":{
                                "$ref": "#/components/schemas/Ticket"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Ticket"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
            "get": {
                "parameters":[
                    {
                        "name": "event_id",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "summary": "Listar todos os ingressos associados ao evento informado.",
                "consumes": ["application/json"],
                "tags": ["Ticket"],
                "description": "Listar todos os ingressos associados ao evento informado.",
                "responses": {
                    "200": {
                        "description": "Sucesso",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "items":{
                                        "$ref": "#/components/schemas/Ticket"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            },
        }
    },
    "components":{
        "schemas":{
            "Customer":{
                "type": "object",
                "properties":{
                    "name":{
                        "type": "string",
                        "description": "Nome do usuario",
                        "example": "João da Silva"
                    },
                    "email":{
                        "type": "string",
                        "description": "Email do usuario",
                        "example": "joaodasilva@hotmail.com"
                    },
                    "password_hash":{
                        "type": "string",
                        "description": "Senha do usuario",
                        "example": "123456"
                    },
                    "cpf":{
                        "type": "string",
                        "description": "CPF do usuario",
                        "example": "12345678909"
                    },
                    "phone":{
                        "type": "string",
                        "description": "Telefone do usuario",
                        "example": "11999999999"
                    },
                    "participation":{
                        "type": "number",
                        "description": "Participação do usuario",
                        "example": "0.00"
                    },
                }
            },
            "Login":{
                "type": "object",
                "properties":{
                    "email":{
                        "type": "string",
                        "description": "Email do usuario",
                        "example": "joaodasilva@hotmail.com"
                    },
                    "password_hash":{
                        "type": "string",
                        "description": "Senha do usuario",
                        "example": "123456"
                    },
                }
            },
            "Organization":{
                "type": "object",
                "properties":{
                    "name":{
                        "type": "string",
                        "description": "Nome da organização",
                        "example": "UFBA"
                    },
                    "email":{
                        "type": "string",
                        "description": "Email da organização",
                        "example": "ufba@ufba.edu.br"
                    },
                    "password_hash":{
                        "type": "string",
                        "description": "Senha da organização",
                        "example": "123456"
                    },
                    "cnpj":{
                        "type": "string",
                        "description": "CNPJ da organização",
                        "example": "12345678909"
                    },
                    "phone":{
                        "type": "string",
                        "description": "Telefone da organização",
                        "example": "11999999999"
                    },
                    "description":{
                        "type": "string",
                        "description": "Descrição da organização",
                        "example": "UFBA é uma universidade brasileira."
                    },
                    "address":{
                        "type": "string",
                        "description": "Endereço da organização",
                        "example": "Rua dos bobos, nº 0"
                    },
                }
            },
            "Event":{
                "type": "object",
                "properties":{
                    "name":{
                        "type": "string",
                        "description": "Nome do evento",
                        "example": "Festa de aniversário"
                    },
                    "description":{
                        "type": "string",
                        "description": "Descrição do evento",
                        "example": "Festa de aniversário da UFBA."
                    },
                    "start_date":{
                        "type": "string",
                        "description": "Data do evento",
                        "example": "2020-01-01"
                    },
                    "location":{
                        "type": "string",
                        "description": "Local do evento",
                        "example": "UFBA"
                    },
                    "capacity":{
                        "type": "number",
                        "description": "Capacidade do evento",
                        "example": "100"
                    },
                    "price":{
                        "type": "number",
                        "description": "Preço do evento",
                        "example": "100.00"
                    },
                }
            },
            "Ticket":{
                "type": "object",
                "properties":{
                    "payment_method":{
                        "type": "string",
                        "description": "Forma de pagamento",
                        "example": "Cartão de crédito"
                    }
                }
            }    
        }
    },
    "securitySchemes":{
        "bearerAuth":{
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
        }
    }
}

export default swaggerDoc;
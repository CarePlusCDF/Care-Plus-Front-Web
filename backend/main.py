from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# modelo de login
class Login(BaseModel):
    carteirinha: int
    senha: str

# rota inicial
@app.get("/")
def home():
    return {
        "mensagem": "Care+ Backend Online"
    }

# rota login
@app.post("/login")
def login(usuario: Login):

    # simulação
    if usuario.carteirinha == 123 and usuario.senha == "123@":

        return {
            "success": True,
            "mensagem": "Login realizado com sucesso"
        }

    return {
        "success": False,
        "mensagem": "Carteirinha ou senha inválida"
    }
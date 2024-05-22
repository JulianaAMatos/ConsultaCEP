# ConsultaCEP
# consulta-cep-api
Projeto de consumo de API de CEP do ViaCEP

## API's

As API's possuem alguns elementos que servem à  sua utilização:

- **Ponto de entrada**: É o endereço do serviço acessado e que pode ser acessado através de um navegador ou uma ferramenta de consumo de API's. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>

- **Recursos**: São os serviços de dados disponíveis para consumo.Exemplo:<https://dadosabertos.camara.leg.br/api/v2/deputados>

-**Parâmetros**: São informações ou filtros que servem para enviar dados de consulta ou para serem processadas pela API. Os parâmetros podem ser passados para API através da URL ou no corpo(body) da requisição.Exemplo: <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=tiririca>

-**Métodos**: São as formas de consumo de uma API, 
que podem ser:
      - _POST_ :Inserção de dados **C** (CREATE)
      - _GET_  : Obtenção de dados **R** (READ)
      - _PUT_ e _PATCH_: Atualização **U** (UPDATE)
      - _DELETE_ : Remoção de dados **D** (DELETE) 

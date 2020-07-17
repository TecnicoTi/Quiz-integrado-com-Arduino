<?php

class Proprietario {
    private String $nome;
    private Int $cpf;
    private Int $rg;
    private String $dataNascimento;
    private String $rua;
    private String $bairro;
    private String $cidade;
    private String $estado;
    private Int $cep;
    private String $complemento;

    public function getNome() { 
        return $this->nome;
    }
    public function setNome(String $nomeSetter) {
         $this->nome = $nomeSetter;
    }

    public function getCpf() { 
        return $this->cpf;
    }
    public function setCpf(String $cpfSetter) {
         $this->cpf = $cpfSetter;
    }

    public function getRg() { 
        return $this->rg;
    }
    public function setRg(String $rgSetter) {
         $this->rg = $rgSetter;
    }

    public function getdataNascimento() { 
        return $this->dataNascimento;
    }
    public function setndataNascimento(String $dataNascimentoSetter) {
         $this->dataNascimento = $dataNascimentoSetter;
    }

    public function getRua() { 
        return $this->rua;
    }
    public function setRua(String $ruaSetter) {
         $this->rua = $ruaSetter;
    }

    public function getBairro() { 
        return $this->bairro;
    }
    public function setBairro(String $bairroSetter) {
         $this->bairro = $bairroSetter;
    }

    public function getCidade() { 
        return $this->cidade;
    }
    public function setCidade(String $cidadeSetter) {
         $this->cidade = $cidadeSetter;
    }
    
    public function getEstado() { 
        return $this->estado;
    }
    public function setEstado(String $estadoSetter) {
         $this->estado = $estadoSetter;
    }

    public function getCep() { 
        return $this->cep;
    }
    public function setCep(String $cepSetter) {
         $this->cep = $cepSetter;
    }

    public function getComplemento() { 
        return $this->complemento;
    }
    public function setComplemento(String $complementoSetter) {
         $this->complemento = $complementoSetter;
    }

    public function __Constructor(String $nomeConstructor, Int $cpfConstructor, Int $rgConstructor) {
        $this->nome= $nomeConstructor;
        $this->cpf= $cpfConstructor;
        $this->rg= $rgConstructor;
    }
}
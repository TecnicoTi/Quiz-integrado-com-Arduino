function formatanome(input_nome) {
    var letra, tamanho;
    tamanho = input_nome.length;
    for (var i = 0; i < tamanho; i++) {
        letra = input_nome.charAt(i);
        if (letra == " ")
            if ((i + 1) < tamanho) {
                letra = input_nome.charAt(i + 1).toUpperCase();
                input_nome = input_nome.substring(0, i + 1);
                input_nome += letra;
                input_nome += document.getElementById("input_nome").value.substring(i + 2, tamanho);
            }
    }
    if (tamanho > 0) {
        letra = input_nome.charAt(0).toUpperCase();
        input_nome = input_nome.substring(1, tamanho);
        input_nome = letra + input_nome;
    }
    document.getElementById("input_nome").value = input_nome;
}

function func_facil() {
    var nome = $('#input_nome').val();
    // Constante da lista de perguntas
    const perguntasLISTA = [
        'Nesses pares, ambos são mamíferos',                                 //Questão 1
        'Qual dessas aves não voa',                                //Questão 2
        'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',                                //Questão 3
        'Qual é o país do jogador Messi e Cristiano Ronaldo?',                                //Questão 4
        'A esperança é...',                                //Questão 5
        'Qual é o nome Do Clube, que os pais do elenco criaram quando adolescentes? (Serie Riverdale).',                       //Questão 6
        'Tráfico de drogas é um crime hediondo? (Ou seja, mais grave que os demais, como o homicídio e o estupro)',             //Questão 7
        'É permitido usar maconha para fins medicinais?',                                //Questão 8
        '2 + 2 = peixe ' +
        ' / 3 + 3 = oito' +
        ' / 7 + 7 = ___. ' +
        'O que devemos colocar no lugar do "__" para que a sentença seja verdadeira?',                         //Questão 9
        'Qual ou quais meses tem 28 dias?',          //Questão 10
        'Quantas casas decimais tem o número pi?',  //Questão 11
        'Atualmente, quantos elementos químicos a tabela periódica possui?',  //Questão 12
        'Quais os países que têm a maior e a menor expectativa de vida do mundo?', //Questão 13
        'O que a palavra legend significa em português?',  //Questão 14
        'Qual o número mínimo de jogadores numa partida de futebol?',//Questão 15
        'Quais os principais autores do Barroco no Brasil?', //Questão 16
        'Quais as duas datas que são comemoradas em novembro?', // Questão 17
        'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?', // Questão 18
        'Em que período da pré-história o fogo foi descoberto?', //Questão 19
        '“It is six twenty”. Que horas são em inglês?',// Questão 20
        'Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?',// Questão 21
        'Qual destes países é transcontinental?', // Questão 22
        'Em qual das orações abaixo a palavra foi empregada incorretamente?',//Questão 23
        'Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?', //Questão 24
        'Quais os planetas do sistema solar? ', // Questao 25
        'Qual o maior animal terrestre que temos?', // Questao 26
        'As pessoas de qual tipo sanguíneo são consideradas doadores universais?', // Questao 27
        'Quais são os cromossomos que determinam o sexo masculino?', // Questão 28
        'Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?', // questão 29
    ]
    // Constante da lista de respostas
    const respostasLISTA = [{

        res: "Baleia azul e golfinhos",                     //Questão 1
        op2: "Girafas e tartarugas",
        op3: "Porcos e pinguins",
        op1: "Morcegos e galinhas",
    },
        {
            op1: "Galinha",
            op2: "Cegonha",
            res: "Pinguim",                    //Questão 2
            op3: "Pato",
        },
        {

            op1: "Tem entre 2 a 4 litros. São retirados 450 mililitros.",
            op2: "Tem 10 litros. São retirados 2 litros.",                      //Questão 3
            res: "Tem entre 4 a 6 litros. São retirados 450 mililitros.",
            op3: "Tem 7 litros. São retirados 1,5 litros",
        },
        {
            op3: "França e Argentina",
            op1: "Portugal e Argentina",
            op2: "Barcelona e Portugal",                    //Questão 4
            res: "Argentina e Portugal",
        },
        {
            res: "O sonho de homem acordado",
            op1: "O pior dos males",                    //Questão 5
            op2: "A ultima que morre",
            op3: "Tudo para ser humano",
        },
        {
            res: "Clube da meia noite",
            op1: "Clube da Gargula",                    //Questão 6
            op2: "Clube de Riverdale",
            op3: "Clube das Meninas má",
        },
        {
            op3: "Sim, sempre",
            op1: "Depende do entendimento do juiz ou da juíza que estiver analisando o caso",                    //Questão 7
            op2: "Não",
            res: "Pode ser igualado a crime hediondo a depender da situação",
        },

        {
            op2: "Não",
            op1: "Sim, apenas é necessário ter prescrição médica",                     //Questão 8
            res: "Sim, mas é necessário ter prescrição médica e autorização do governo",
            op3: "Não, pois a maconha não se utiliza mais para meios medicinais, desde 1999 a maconha parou de ser utilizada em meios da medicina",
        },
        {
            res: "Triângulo",
            op1: "Quatorze",                    //Questão 9
            op2: "77",
            op3: "14.",

        },
        {
            op3: "Todos exceto Fevereiro",
            res: "Todos",                    //Questão 10
            op1: "Somente Agosta e Abril",
            op2: "Só fevereiro",
        },
        {
            op3: "Milhares.",
            res: "Infinitas.",
            op2: "Centenas.",           //Questao 11
            op1: "Vinte.",
        },
        {
            op3: "113",
            op2: "109",     //Questão 12
            op1: "108",
            res: "118",
        },
        {
            res: "Japão e Serra Leoa.",
            op3: "Austrália e Afeganistão.",        //Questão 13
            op2: "Itália e Chade.",
            op1: "Angola e Congo.",
        },
        {
            op3: "Legenda.",
            op2: "Conto.",  //Questao 14
            res: "Lenda.",
            op1: "Hitória.",
        },
        {
            op3: "8.",
            op2: "10.",  //Questão 15
            op1: "5.",
            res: "7.",
        },
        {
            res: "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira.",
            op3: "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri.", //Questão 16
            op2: "Álvares de Azevedo, Gregório de Matos e Bento Teixeira.",
            op1: "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira.",
        },
        {
            op3: "Black Friday e Dia da Árvore.",
            res: "Proclamação da República e Dia Nacional da Consciência Negra.",   //Questão 17
            op2: "Dia do Médico e Dia de São Lucas.",
            op1: "Dia de Finados e Dia Nacional do Livro.",
        },
        {
            op3: "Saci.",
            res: "Caipora.",           //Questao 18
            op2: "Lobisomem.",
            op1: "Boitatá.",
        },
        {
            op3: "Paleolítico.",  //Questão 19
            res: "Neolítico.",
            op2: "Idade dos Metais.",
            op1: "Período da Pedra Polida.",
        },
        {
            op3: "12:06.",
            res: "6:20.",  //Questão 20
            op2: "2:20.",
            op1: "12:20.",
        },
        {
            op3: "Ele cabe.",  //Questao 21
            res: "Eu caibo.",
            op2: "Eu cabo.",
            op1: "Nenhuma das Alternativas.",
        },
        {
            op3: "Filipinas.",
            res: "Rússia.", //Questão 22
            op2: "Istambul.",
            op1: "Groenlândia.",
        },
        {
            op3: "Mais uma vez, portou-se mal.",
            res: "É um homem mal.", // Questao 23
            op2: "Esse é o mal de todos.",
            op1: "Mal falou nele, e o fulano apareceu.",
        },
        {
            op3: "A Filosofia.",
            res: "A Mitologia.",   //Questao 24
            op2: "A Biologia.",
            op1: "A Matemática.",
        },
        {
            op3: "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus.",
            res: "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio.",
            op2: "Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio.", //Questão 25
            op1: "Terra, Vênus, Saturno, Júpiter, Marte, Netuno, Mercúrio.",
        },
        {
            op3: "Girafa.",
            res: "Elefante africano.",  //Questão 26
            op2: "Dinossauro.",
            op1: "Ser Humano.",
        },
        {
            op3: "Tipo A.",
            res: "Tipo O.",
            op2: "Tipo b.", //Questão 27
            op1: "Tipo ABO.",
        },
        {
            op3: "OS V.",
            res: "OS Y.",
            op2: "OS X.", // Questão 28
            op1: "Os W.",
        },
        {
            op3: "veias.",
            res: "Arterias.", // Questão 29
            op2: "Átrios.",
            op1: "Ventrículos",
        },
    ]
    $(document).on('click', '#action_seguinte', function () {
        let list = []
        // Gerador de número aleatórios
        for (let i = 0; i < 29; i++) {
            let ran = Math.floor(Math.random() * 29)
            while (list.includes(ran)) {
                ran = Math.floor(Math.random() * 29)
            }
            list.push(ran)
        }
        // Irá fechar o modal anterior
        $('#ExemploModalCentralizado').modal('hide')
        // Nome, Buttons e Questões do modal:

        let acendeLed = 2;
        //let ligaservo= 10;
        Swal.mixin({
            input: 'radio',
            showCancelButton: false,
            progressSteps: ['1', '2', '3', '4', '5', '6'],
            inputValidator: (value) => {
                if (!value) {
                    return 'SELECIONE UMA RESPOSTA';
                }
                if (value == "res") {
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('correta', acendeLed);
                    console.log("Correta");
                    acendeLed++;
                    socket.emit('servonovezero');

                } else {
                    console.log("Errada");
                    acendeLed++;
                }
            }
        }).queue([{
            title: 'Questão 1',
            // Retorna a pergunta a partir do numero gerado aleatorio
            text: perguntasLISTA[list[0]],
            confirmButtonText: 'Seguinte &rarr;',
            inputOptions: respostasLISTA[list[0]],
            // imageUrl: 'https://png.pngtree.com/templates/md/20180519/md_5b003e81ed143.jpg',

        },
            {
                title: 'Questão 2',
                text: perguntasLISTA[list[1]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[1]]

            },
            {
                title: 'Questão 3',
                text: perguntasLISTA[list[2]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[2]]


            },
            {
                title: 'Questão 4',
                text: perguntasLISTA[list[3]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[3]]

            },
            {
                title: 'Questão 5',
                text: perguntasLISTA[list[4]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[4]]

            },
            {
                title: 'Questão 6',
                text: perguntasLISTA[list[5]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[5]]

            },

        ]).then((result) => {
            // Then = após executar o código acima irá executar a função abaixo

            // Cada respostas certo = +1 ponto
            let pontuacao = 0
            // Caso o que foi inserido for igual a reposta irá adicionar um ponto
            if (result.value) {

                if (result.value[0] == "res") {
                    pontuacao++;
                }
                if (result.value[1] == "res") {
                    pontuacao++;
                }
                if (result.value[2] == "res") {
                    pontuacao++;
                }
                if (result.value[3] == "res") {
                    pontuacao++;
                }
                if (result.value[4] == "res") {
                    pontuacao++;
                }
                if (result.value[5] == "res") {
                    pontuacao++;
                }

            }

            var nome = $('#input_nome').val();
            // Formula para calcular a porcentagem e arredondar para inteiro
            // Caso de troca mudar ".toFixed(numero de casas decimais)"
            porcentagem = ((pontuacao / 6) * 100).toFixed(0)
            // Se a pontuação for maior que 70 irá retornar o seguinte modal:
            if (porcentagem > 60) {
                Swal.fire({
                    title: '<b>PARABÉNS ' + nome + ' !!!</b>',
                    type: 'success',
                    text: `Sua pontuação foi de ${porcentagem}%.` + 'Receba seu premio 😀🍔',
                    timer: 4000,
                    showConfirmButton: false,
                }).then(function () {
                    // Após 2 segundos irá fechar o modal chamar uma função PHP do arduino

                }).then(function () {
                    // Após 1 segundo irá reinicar a página
                    setTimeout(() => {
                    }, 4000);
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })
                // Senão irá retornar o seguinte modal:
            } else {
                Swal.fire({
                    title: 'Que pena ' + nome + ', :/ Tente novamente',
                    type: 'error',
                    text: `Sua pontuação foi de ${porcentagem}%.😢 ` + nome + ' Se esforce mais',
                    timer: 5000,
                    showConfirmButton: false,
                }).then(function () {

                    // Após 5 segundos irá fechar o modal e dar reload na página
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })

            }
        })
    })
}

// AS FUNÇÕES ABAIXO SEGUEM O MESMO EXEMPLO
function func_medio() {
    // Constante da lista de perguntas
    var nome = $('#input_nome').val();

    const perguntasLISTA = [
        'Quanto tempo garrafas de plástico e jornal, respectivamente, demoram para se decompor?', // Questao 1
        'De que são constituídos os diamantes?',//                   Questao 2
        'Qual o significado das setas do símbolo internacional da reciclagem? ♻', //                   Questao 3
        'Quem Roberta beijou para fazer ciúmes em Diego no Canadá?(Rebelde)',//                   Questao 4
        'Porque (na primeira temporada) Roberta termina com Diego? (Rebelde)',//                   Questao 5
        'Qual foi primeiro presidente do Brasil?',//                   Questao 6
        'A partir de que quantidade a pessoa pode ser acusada por tráfico de drogas?',//                   Questao 7
        'De quem é a célebre frase “Penso, logo existo!”?',//                   Questao 8
        'Qual é a cidade brasileira onde está o Rio Tietê',//                   Questao 9
        'Listras azuis e brancas intercaladas e um sol no canto superior esquerdo caracterizam a bandeira de qual país da América do  Norte?',//                   Questao 10
        'De onde é a invenção do chuveiro elétrico?',//                   Questao 11
        'Quais o menor e o maior país do mundo?',//                   Questao 12
        'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',//                   Questao 13
        'Quem pintou "Guernica"?',//                   Questao 14
        'Quanto tempo a luz do Sol demora para chegar à Terra?',//                   Questao 15
        'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',//                   Questao 16
        'Qual a nacionalidade de Che Guevara?',//                   Questao 17
        'Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:',//                   Questao 18
        'Qual a altura da rede de vôlei nos jogos masculino e feminino?',//                   Questao 19
        'Qual das alternativas abaixo apenas contêm classes de palavras?',//                   Questao 20
        'Qual a montanha mais alta do Brasil?',//                   Questao 21
        'Qual a velocidade da luz?',//                   Questao 22
        'Quais destas construções famosas ficam nos Estados Unidos?',//                   Questao 23
        'Quais destas doenças são sexualmente transmissíveis?',//                   Questao 24
        'Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?',//                   Questao 25
        'Que líder mundial ficou conhecida como “Dama de Ferro”?',//                   Questao 26
        'Quais os nomes dos três Reis Magos?',//                   Questao 27
        'Qual a religião monoteísta que conta com o maior número de adeptos no mundo?',//                   Questao 28
        'Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?',//                   Questao 29
        'Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?',//                   Questao 30
    ]
    // Constante da lista de respostas
    const respostasLISTA = [{
        op1: "1000 anos",
        op2: "1 milhão de anos",                //Questao 1
        res: "450 anos e 6 semanas",
        op3: "50 anos",
    },
        {
            op1: "Rênio",               //Questao 2
            op2: "Grafite",
            op3: "Ósmio",
            res: "Carbono",
        },
        {
            op1: "Coleta, separação e consumo",
            op2: "Papel, vidro e plástico",
            res: "Fabricação, utilização e reutilização",               //Questao 3
            op3: "Lixo, reaproveitamento e fabricação",
        },
        {
            res: "Miguel",
            op1: "Nicco",               //Questao 4
            op2: "Pedro",
            op3: "Théo",
        },
        {
            op1: "Porque ela gostava do Miguel",
            op2: "Porque ela descobriu que ele tinha feito uma aposta com Thomas",
            res: "Porque ele traiu ela",               //Questao 5
            op3: "Porque Roberta não gostava do Diego",
        },
        {
            op3: "Sergio Moro",
            op1: "Lula",               //Questao 6
            op2: "Ranieri Mazzilli",
            res: "Deodoro da Fonseca",
        },
        {
            op1: "A quantidade mínima varia de acordo com o tipo de droga",
            op2: "Nenhuma das alternativas",               //Questao 7
            op3: "A definição fica a critério do entendimento do juiz ou da juíza envolvido no caso",
            res: "Apreensão de mais de 10g de qualquer droga",
        },
        {
            op1: "Galileu Galilei",               //Questao 8
            op2: "Platão",
            res: "Descartes",
            op3: "Sócrates",
        },
        {
            op1: "Rio de Janeiro",               //Questao 9
            res: "São Paulo",
            op2: "Recife",
            op3: "Porto Alegre",
        },
        {
            op1: "Brasil",               //Questao 10
            op2: "Uruguai",
            res: "Nenhuma alternativa",
            op3: "Argentina",
        },
        {
            op3: "França.",
            res: "Brasil.",
            op2: "Austrália.",  //Questao 11
            op1: "Inglaterra.",
        },
        {
            op3: "Nauru e China.",          //questao 12
            res: "Vaticano e Rússia.",
            op2: "Índia e Rússia.",
            op1: "Canadá e Estados Unidos.",
        },
        {
            op3: "Jânio Quadros.",
            res: "João Goulart.",           //Questao 13
            op2: "Getúlio Vargas.",
            op1: "João Figueiredo.",
        },
        {
            op3: "Paul Cézanne.",
            res: "Pablo Picasso.",       //Questao 14
            op2: "Salvador Dalí.",
            op1: "Tarsila do Amaral.",
        },
        {
            op3: "segundos .",
            res: "8 minutos.",
            op2: "1 dia.",      //Questão 15
            op1: "12 horas.",
        },
        {
            op3: "Fabiano coseu seu paletó antes de sair.",
            res: "Fabiano pegou seu paletó antes de sair.",     //Questão 16
            op2: "Fabiano pegou o saco antes de sair.",
            op1: "Fabiano fechou o saco antes de cair.",
        },
        {
            op3: "Cubana.",
            res: "Argentina.", //Questão 17
            op2: "Peruana.",
            op1: "Boliviana.",
        },
        {
            op3: "Tubarão branco, crocodilo e sucuri.",
            res: "Hiena, urso branco e lobo cinzento.",
            op2: "Tigre, gavião e orca.",       //Questao 18
            op1: "Leão, tubarão branco e urso cinzento.",
        },
        {
            op3: "2,4 para ambos.",
            res: "2,43 m e 2,24 m.",       // Questao 19
            op2: "2,5 m e 2,0 m.",
            op1: "2,45 m e 2,15 m.",
        },
        {
            op3:"Vogais, semivogais e consoantes.",
            op2:"Artigo, verbo transitivo e verbo intransitivo.",    //Questão 20
            res:"Substantivo, verbo e preposição.",
            op1:"Fonologia, Morfologia e Sintaxe.",
        },
        {
            op3:"Pico Paraná.",
            op2:"Corcovado(Cristo Redentor RJ).",    //Questão 21
            res:"Pico da Neblina.",
            op1:"Pico Maior de Friburgo.",
        },
        {
            op3:"300 000 000 metros por segundo (m/s.",
            op2:"150 000 000 metros por segundo (m/s).",    //Questão 22
            res:"299 792 458 metros por segundo (m/s).",
            op1:"199 792 458 metros por segundo (m/s).",
        },
        {
            op3:") Estátua da Liberdade, Big Ben e The High Line.",
            op2:"Angkor Wat, Taj Mahal e Skywalk no Grand Canyon.",    //Questão 23
            res:"Estátua da Liberdade, Golden Gate Bridge e Empire State Building.",
            op1:"Lincoln Memorial, Sidney Opera House e Burj Khalifa.",
        },

        {
            op3:"Aids, tricomoníase e ebola.",
            op2:"Chikungunya, aids e herpes genital.",    //Questão 24
            res:"Gonorreia, clamídia e sífilis.",
            op1:"Botulismo, cistite e gonorreia.",
        },
        {
            op3:"Justiça para os menos favorecidos.",
            op2:"Intolerância religiosa.",    //Questão 25
            res:"Igualdade das raças.",
            op1:"Luta contra o Apartheid.",
        },
        {
            op3:"Dilma Rousseff.",
            op2:"Angela Merkel.",    //Questão 26
            res:"Margaret Thatcher.",
            op1:"Hillary Clinton.",
        },
        {
            op3:"Gaspar, Nicolau e Natanael.",
            op2:"Belchior, Gaspar e Nataniel.",    //Questão 27
            res:"Belchior, Gaspar e Baltazar.",
            op1:"Gabriel, Benjamim e Melchior.",
        },
        {
            op3:"Judaísmo.",
            op2:"Hinduísmo.",    //Questão 28
            res:"Cristianismo.",
            op1:"Islamismo.",
        },
        {
            op3:"Yuri Gagarin, em 1961.",
            op2:"Charles Conrad, em 1969.",    //Questão 29
            res:"Buzz Aldrin, em 1969.",
            op1:"Charles Duke, em 1971.",
        },
        {
            op3:"Marie Curie.",
            op2:"Blaise Pascal.",    //Questão 30
            res:"Louis Pasteur.",
            op1:"Antoine Lavoisier.",
        },
    ]
    $(document).on('click', '#action_seguinte', function () {
        let list = []
        // Gerador de número aleatórios
        for (let i = 0; i < 29; i++) {
            let ran = Math.floor(Math.random() * 29)
            while (list.includes(ran)) {
                ran = Math.floor(Math.random() * 29)
            }
            list.push(ran)
        }
        // Irá fechar o modal anterior
        $('#ExemploModalCentralizado').modal('hide')
        // Nome, Buttons e Questões do modal:
        let acendeLed = 2;
        Swal.mixin({
            input: 'radio',

            showCancelButton: false,
            progressSteps: ['1', '2', '3', '4', '5', '6'],
            inputValidator: (value) => {
                if (!value) {
                    return 'SELECIONE UMA RESPOSTA';
                }
                if (value == "res") {
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('correta', acendeLed);
                    console.log("Correta");
                    acendeLed++;
                } else {
                    console.log("Errada");
                    acendeLed++;
                }
            }
        }).queue([{
            title: 'Questão 1',
            // Retorna a pergunta a partir do numero gerado aleatorio
            text: perguntasLISTA[list[0]],
            confirmButtonText: 'Seguinte &rarr;',
            inputOptions: respostasLISTA[list[0]]
        },
            {
                title: 'Questão 2',
                text: perguntasLISTA[list[1]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[1]]

            },
            {
                title: 'Questão 3',
                text: perguntasLISTA[list[2]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[2]]

            },
            {
                title: 'Questão 4',
                text: perguntasLISTA[list[3]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[3]]

            },
            {
                title: 'Questão 5',
                text: perguntasLISTA[list[4]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[4]]

            },
            {
                title: 'Questão 6',
                text: perguntasLISTA[list[5]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[5]]

            },

        ]).then((result) => {
            // Then = após executar o código acima irá executar a função abaixo
            // Cada respostas certo = +1 ponto
            let pontuacao = 0
            // Caso o que foi inserido for igual a reposta irá adicionar um ponto
            if (result.value) {
                // const answers = JSON.stringify(result.value)
                // Se a pergunta tiver retornar res (respostasFacil) aumenta a pontução
                if (result.value[0] == "res") {
                    pontuacao++
                }
                if (result.value[1] == "res") {
                    pontuacao++
                }
                if (result.value[2] == "res") {
                    pontuacao++
                }
                if (result.value[3] == "res") {
                    pontuacao++
                }
                if (result.value[4] == "res") {
                    pontuacao++
                }
                if (result.value[5] == "res") {
                    pontuacao++
                }

            }
            // Formula para calcular a porcentagem e arredondar para inteiro
            // Caso de troca mudar ".toFixed(numero de casas decimais)"
            var nome = $('#input_nome').val();
            porcentagem = ((pontuacao / 6) * 100).toFixed(0)

            // Se a pontuação for maior que 70 irá retornar o seguinte modal:
            if (porcentagem > 70) {
                Swal.fire({
                    title: '<b>PARABÉNS ' + nome + ' !!!</b>',
                    type: 'success',
                    text: `Sua pontuação foi de ${porcentagem}%.` + 'Receba seu premio 😀🍔',
                    timer: 4000,
                    showConfirmButton: false,

                }).then(function () {
                    // Após 2 segundos irá fechar o modal chamar uma função PHP do arduino

                }).then(function () {
                    // Após 1 segundo irá reinicar a página
                    setTimeout(() => {

                    }, 4000);
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })
                // Senão irá retornar o seguinte modal:
            } else {
                Swal.fire({
                    title: 'Que pena ' + nome + ', :/ Tente novamente',
                    type: 'error',
                    text: `Sua pontuação foi de ${porcentagem}%.😢 ` + nome + ' Se esforce mais',
                    timer: 5000,
                    showConfirmButton: false,

                }).then(function () {
                    // Após 5 segundos irá fechar o modal e dar reload na página
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })
            }

        })
    })
}

function func_dificil() {
    // Constante da lista de perguntas
    var nome = $('#input_nome').val();

    const perguntasLISTA = [
        'Qual destes champions não tem cc (Crowd Control)?',
        'Quando começou o governo de Vargas?',
        'Quanto é 55 x 34 x 5 x 0 x 43 x 65 x 205?',
        'O que é, o que é... De manhã, tem 4 patas, De tarde, tem 2, De noite, tem 3.',
        'Em que lugar vivem mais cangurus do que pessoas',
        'Quantos olhos a maior parte das aranhas têm?',
        'Qual é respectivamente o animal mais lento e o mais veloz?',
        'O etanol é produzido através de qual fonte de energia?',
        'Qual o livro mais vendido no mundo, depois da Bíblia?',
        'O que a palavra legend significa em português?',
        'Qual o grupo em que todas as palavras foram escritas corretamente?', //Questão 11
        'Qual o livro mais vendido no mundo a seguir à Bíblia?',// Questao 12
        'Em que ordem surgiram os modelos atômicos?',//Questao 13
        'Em qual local da Ásia o português é língua oficial?', // Questao 14
        '“It is six twenty”. Que horas são em inglês?',//questao 15
        'Quem é o autor de “O Príncipe”?',//Questao 16
        'Qual das alternativas menciona apenas símbolos nacionais?',// Questao 17
    ]
    // Constante da lista de respostas
    const respostasLISTA = [{
        op1: "Bardo",
        res: "Master Yi",
        op2: "Zilean",
        op3: "Teemo",
    },
        {
            op1: "1925",
            res: "1930",
            op2: "1932",
            op3: "1935",
        },
        {
            op1: "5.357.316.250",
            op2: "635.789.018.750",
            op3: "545.355",
            res: "0",
        },
        {
            op2: "As letras",
            op1: "A ave",
            res: "O Homem",
            op3: "Um gato",
        },
        {
            op1: "Nova Zelândia",
            op2: "Africa do norte",
            res: "Austrália",
            op3: "África do Sul",
        },
        {
            res: "Quatro pares",
            op1: "Quatro",
            op2: "Dois",
            op3: "Seis",
        },
        {
            res: "Bicho preguiça e guepardo",
            op1: "Tartatuga e leão",
            op2: "Leão e cavalo",
            op3: "Bicho preguiça e zebra",
        },
        {
            op1: "Solar",
            op2: "Eólica",
            op3: "Geotérmica",
            res: "Biomassa",
        },
        {
            op1: "O Senhor dos Anéis",
            res: "Dom Quixote",
            op2: "O Pequeno Príncipe",
            op3: "Bela e a Fera",
        },
        {
            res: "Lenda",
            op1: "Legenda",
            op2: "Legendário", // questao 10
            op3: "Conto",
        },
        {
            res: "Asterisco, beneficente, meteorologia, entretido",
            op1: "Asterístico, beneficiente, meteorologia, entertido",
            op2: "Asterisco, beneficente, metereologia, entretido",          // questao 11
            op3: "Asterístico, beneficiente, metereologia, entretido",
        },
        {
            res: "Dom Quixote.",
            op1: "O Senhor dos Anéis.",
            op2: "O Pequeno Príncipe.",          // questao 12
            op3: "Ela, a Feiticeira.",
        },
        {
            res: "Dalton, Thomson, Rutherford, Rutherford-Bohr .",
            op1: "Thomson, Dalton, Rutherford, Rutherford-Bohr.",
            op2: "Rutherford-Bohr, Rutherford, Thomson, Dalton.",          // questao 13
            op3: "Dalton, Rutherford-Bohr, Thomson, Rutherford.",
        },
        {
            res: "Macau.",
            op1: "Portugal.",
            op2: "Filipinas.",          // questao 14
            op3: "Moçambique.",
        },
        {
            res: "6:20.",
            op1: "12:06.",
            op2: "6:02.",          // questao 15
            op3: "12:20.",
        },
        {
            res: "Maquiavel.",
            op1: "Antoine de Saint-Exupéry.",
            op2: "Montesquieu.",          // questao 16
            op3: "Thomas Hobbes.",
        },
        {
            res: "Bandeira nacional, armas nacionais, hino nacional e selo nacional.",
            op1: "Bandeira insígnia da presidência, bandeira nacional, brasão, hinos e selo.",
            op2: "Bandeira nacional, brasão, hino nacional e hino da independência.",          // questao 17
            op3: "Bandeira nacional, cores nacionais, hino nacional e hino da independência.",
        },
    ]
    $(document).on('click', '#action_seguinte', function () {
        let list = []
        // Gerador de número aleatórios
        for (let i = 0; i < 10; i++) {
            let ran = Math.floor(Math.random() * 10)
            while (list.includes(ran)) {
                ran = Math.floor(Math.random() * 10)
            }
            list.push(ran)
        }
        // Irá fechar o modal anterior
        $('#ExemploModalCentralizado').modal('hide')
        // Nome, Buttons e Questões do modal:
        let acendeLed = 2;
        Swal.mixin({
            input: 'radio',
            showCancelButton: false,
            progressSteps: ['1', '2', '3', '4', '5', '6'],
            inputValidator: (value) => {
                if (!value) {
                    return 'SELECIONE UMA RESPOSTA';
                }
                if (value == "res") {
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('correta', acendeLed);
                    console.log("Correta");
                    acendeLed++;
                } else {
                    console.log("Errada");
                    acendeLed++;
                }
            }
        }).queue([{
            title: 'Questão 1',
            // Retorna a pergunta a partir do numero gerado aleatorio
            text: perguntasLISTA[list[0]],
            confirmButtonText: 'Seguinte &rarr;',
            inputOptions: respostasLISTA[list[0]]
        },
            {
                title: 'Questão 2',
                text: perguntasLISTA[list[1]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[1]]

            },
            {
                title: 'Questão 3',
                text: perguntasLISTA[list[2]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[2]]

            },
            {
                title: 'Questão 4',
                text: perguntasLISTA[list[3]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[3]]

            },
            {
                title: 'Questão 5',
                text: perguntasLISTA[list[4]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[4]]

            },
            {
                title: 'Questão 6',
                text: perguntasLISTA[list[5]],
                confirmButtonText: 'Seguinte &rarr;',
                inputOptions: respostasLISTA[list[5]]

            },

        ]).then((result) => {
            // Then = após executar o código acima irá executar a função abaixo

            // Cada respostas certo = +1 ponto
            let pontuacao = 0
            // Caso o que foi inserido for igual a reposta irá adicionar um ponto
            if (result.value) {

                // Se a pergunta tiver retornar res (respostasFacil) aumenta a pontução
                if (result.value[0] == "res") {
                    pontuacao++
                }
                if (result.value[1] == "res") {
                    pontuacao++
                }
                if (result.value[2] == "res") {
                    pontuacao++
                }
                if (result.value[3] == "res") {
                    pontuacao++
                }
                if (result.value[4] == "res") {
                    pontuacao++
                }
                if (result.value[5] == "res") {
                    pontuacao++
                }

            }

            // Formula para calcular a porcentagem e arredondar para inteiro
            // Caso de troca mudar ".toFixed(numero de casas decimais)"
            var nome = $('#input_nome').val();
            porcentagem = ((pontuacao / 6) * 100).toFixed(0)
            // Se a pontuação for maior que 70 irá retornar o seguinte modal:
            if (porcentagem >= 70) {
                Swal.fire({
                    title: '<b>PARABÉNS ' + nome + ' !!!</b>',
                    type: 'success',
                    text: `Sua pontuação foi de ${porcentagem}%.` + 'Receba seu premio 😀🍔',
                    timer: 4000,
                    showConfirmButton: false,
                }).then(function () {
                    // Após 2 segundos irá fechar o modal chamar uma função PHP do arduino
                }).then(function () {
                    // Após 1 segundo irá reinicar a página
                    setTimeout(() => {

                    }, 4000);
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })
                // Senão irá retornar o seguinte modal:
            } else {
                Swal.fire({
                    title: 'Que pena ' + nome + ', :/ Tente novamente',
                    type: 'error',
                    text: `Sua pontuação foi de ${porcentagem}%.😢 ` + nome + ' Se esforce mais',
                    timer: 5000,
                    showConfirmButton: false,

                }).then(function () {
                    // Após 5 segundos irá fechar o modal e dar reload na página
                    location.reload();
                    var socket = io.connect('http://127.0.0.1:8000');
                    socket.emit('desligar');
                })
            }
        })
    })
}
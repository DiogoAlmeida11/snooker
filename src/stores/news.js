import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [
            {
                id:1,
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                id:2,
                titulo: "Da prisão do pai à terapia com porcos: Ronnie O'Sullivan no seu melhor",
                descricao: "Vida do melhor jogador de snooker de sempre é digna de um filme",
                imagem: "../src/assets/news2.jpg",
                noticia: "Mas nem tudo foram rosas na vida de 'The Rocket'. O pai foi preso por homicídio nos primórdios da sua carreira desportiva. Aos 17 anos já ganhava tudo, mas as drogas e o álcool intrometeram-se no meio das bolas e dos tacos. Acabou por entrar num programa de reabilitação pois a sua saúde corria perigo.",
                data: "13/12/2023",
            },
            {
                id:3,
                titulo: "Insólito: Mark Williams apanhado a dormir",
                descricao: "Tricampeão mundial adormeceu durante um jogo com Anthony Hamilton",
                data: "30/09/2021",
                noticia: "Quem é que nunca passou pelas brasas? Acontece a todos e nem as estrelas escapam ao insólito. Foi o que sucedeu com Mark Williams. O britânico, de 46 anos, três vezes campeão mundial de snooker (2000, 2003 e 2018), adormeceu durante o jogo com Anthony Hamilton a contar para o campeonato britânico e na qual saiu perdedor por 5-6.O jogador justificou a 'distração' pelo facto de ter estado infetado com a Covid-19 em outubro e desde aí tem-se sentido mais 'cansado'.'Em 30 anos como profissional foi a primeira vez que dormi na cadeira', confessou Mark Williams, esclarecendo que ter adormecido não teve a ver com o adversário. 'Simplesmente não me tenho sentido bem desde a doença.'",
                imagem: "../src/assets/news3.jpg"
            },
            {
                id:4,
                titulo: "Dois ativistas ambientais anti-petróleo interromperam Mundial em Sheffield",
                descricao: "Na camisola de um podia ler-se a frase 'Just Stop Oil'",
                imagem: "../src/assets/news4.jpg",
                noticia: "Dois ativistas ambientais pertencentes ao grupo 'Just Stop Oil' interromperam esta segunda-feira os jogos do Mundial de snooker, em Sheffield, Inglaterra, com um dos indivíduos a lançar um pó de cor laranja em cima de uma das mesas. No Crucible Theatre, em Sheffield, apenas um dos dois ativistas conseguiu levar a ação até ao fim, na mesa onde Robert Milkins e Joe Perry se enfrentavam, sendo que o outro elemento, do sexo feminino, foi intercetado quando tentava fazer o mesmo, no duelo entre Mark Allen e Fan Zhengyi.Eles [ativistas] exigem que o governo interrompa quaisquer novos projetos de combustíveis fósseis e convoquem as instituições desportivas do Reino Unido a unirem-se à resistência civil contra as políticas genocidas do governo, escreveu o grupo.",
                data: "18/04/2023",
            },
            {
                id:5,
                titulo: "Ronnie O'Sullivan campeão do mundo de snooker pela sexta vez",
                descricao: "O inglês bateu o compatriota Kyren Wilson, por 18-8, na final, no Crucible Theatre, em Sheffield",
                imagem: "../src/assets/news5.jpg",
                noticia: "O inglês Ronnie O'Sullivan conquistou este domingo o título mundial de snooker pela sexta vez, ao bater o compatriota Kyren Wilson, por 18-8, na final, no Crucible Theatre, em Sheffield. O'Sullivan, de 44 anos, sucedeu ao compatriota Judd Trump, ao repetir os êxitos de 2001, 2004, 2008, 2012 e 2013, na sua sétima final, com menos um título do escocês e recordista Stephen Hendry, mas em igualdade igualando os número de conquistas do também inglês Steve Davis e do galês Ray Reardon. 'The Rocket' teve um percurso difícil até ao embate decisivo, eliminando o chinês Ding Junhui, na segunda ronda, o antigo campeão do mundo Mark Williams, nos quartos de final, e o três vezes vencedor do Mundial Mark Selby, nas 'meias'.",
                data: "16/08/2020",
            },
            {   
                id:6,
                titulo: "Amador James Cahill afasta Ronnie O'Sullivan na abertura do Mundial de snooker",
                descricao: "'Sempre acreditei que podia vencer qualquer um', justificou",
                imagem: "../src/assets/news6.jpg",
                noticia: "O britânico Ronnie O'Sullivan, cinco vezes campeão, foi esta terça-feira eliminado na primeira ronda do Campeonato do Mundo de snooker, ao perder com o compatriota James Cahill, o primeiro jogador amador na história da prova, por 10-8. No Crucible Theatre, em Sheffield, o número um mundial, que regressou à liderança da hierarquia no final de março, na qual tinha estado pela última vez em 2010, terminou a sessão de abertura na segunda-feira a perder por, por 5-4, mas ainda conseguiu empatar o encontro a oito 'frames'.",
                data: "23/04/2019",
            },
        ],

    }),
    getters: {
        allNews: (state) => state.news,
        filteredNewsByTitle: (state) => (title) =>
      state.news.filter((newsItem) =>
        newsItem.titulo.toLowerCase().includes(title.toLowerCase())
      ),
    }
});

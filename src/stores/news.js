import { defineStore } from 'pinia';

export const usePlayersStore = defineStore('news', {
    state: () => ({
        news: [
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
            {
                titulo: "Show de Murphy no Snooker Shoot Out",
                descricao: "faz 147 pontos em 7:18 minutos e deixa adversário... a ver",
                imagem: "../src/assets/news1.jpg",
                noticia: "Shaun Murphy, campeão mundial de snooker em 2005, deu 'show' na primeira ronda do Snooker Shoot Out 2023/24. O segundo cabeça-de-série do torneio eliminou o húngaro Bulcsú Révész sem dar hipóteses ao adversário, atingindo o máximo de pontos (147) em menos de 8 minutos (7:18). Foi a primeira vez que um jogador atingiu o máximo de pontos num jogo do Snooker Shoot Out, competição que iniciou em 1990 e que decorre de forma ininterrupta desde 2011.",
                data: "07/12/2023",
            },
        ],

    }),
    getters: {
        allNews: (state) => state.news,
    }
});

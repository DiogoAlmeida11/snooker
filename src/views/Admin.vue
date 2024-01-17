<template>
    <div>
        <label>Novo Player</label>
        <form @submit.prevent="addPlayer">
            <p><label for="name">Nome</label> <input v-model="name" id="name"></p>
            <p><label for="nationality">Nacionalidade</label> <input v-model="nationality" id="nationality"></p>
            <p><label for="age">Idade</label> <input  v-model="idade" id="age"></p>
            <p><label for="photo">Foto</label> <input v-model="photo" id="photo"></p>
            <p><label for="firstSeasonAsPro">1ª Temporada como Pro</label> <input  v-model="firstSeasonAsPro" id="firstSeasonAsPro"></p>
            <p><label for="numrankingtitles">Nº Títulos</label> <input  v-model="numRankingTitles" id="numrankingtitles"></p>
            <p><label for="ranking">Ranking Atual</label> <input  v-model="ranking" id="ranking"></p>

            <p><button type="submit">Adicionar Player</button></p>
        </form>
    </div>
    <br/><br/>
    <div>
        <label>Nova Notícia</label>
        <form @submit.prevent="addNews">
            <p><label for="title">Título</label> <input v-model="titulo" id="title"></p>
            <p><label for="desc">Descrição</label> <input v-model="descricao" id="desc"></p>
            <p><label for="img">Imagem</label> <input v-model="imagem" label="Imagem"></p>
            <p><label for="noticia">Notícia</label> <input type="text" v-model="noticia" label="noticia"></p>

            <p><button type="submit">Adicionar Notícia</button></p>
        </form>
    </div>
</template>

<script>
import { usePlayersStore } from '@/stores/players';
import { useNewsStore} from '@/stores/news'
    export default {
        data() {
            return {
                playerStore: usePlayersStore(),
                newsStore: useNewsStore(),
                name:'',
                nationality:'',
                idade: '',
                photo: '',
                firstSeasonAsPro: '',
                numRankingTitles: '',
                ranking: '',
                titulo: '',
                descricao: '',
                imagem: '',
                noticia: '',
            }
        },
        methods: {
            addPlayer() {
                try {
                    this.playerStore.add(this.name, this.nationality, this.idade, this.photo, this.firstSeasonAsPro, this.numRankingTitles, this.ranking)
                    this.$router.push({name: 'players'})
                } catch (error) {
                    alert(`Error: ${error.message}`)
                }
            },
            addNews() {
                try {
                    this.newsStore.add(this.titulo, this.descricao, this.imagem, this.noticia)
                    this.$router.push({name: 'news'})
                } catch (error) {
                    alert(`Error: ${error.message}`)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
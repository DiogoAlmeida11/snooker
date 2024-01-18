import { defineStore } from 'pinia';

export const useCalendarStore = defineStore('callendar', {
    state: () => ({
        callendar: [
            {
                id:1,
                data: "2024-01-18",
                Torneiro: "World Grand Prix",
                Hora: "13:00",
                Jogadores: "Ford T. vs Wilson G.",
            },
            {
                id:2,
                data: "2024-01-19",
                Torneiro: "World Grand Prix",
                Hora: "13:00",
                Jogadores: "Zhou Y. vs O'Sullivan R.",
            },
            {
                id:3,
                data: "2024-01-20",
                Torneiro: "World Grand Prix",
                Hora: "14:00",
                Jogadores: "Saengkham N. vs Ding J.",
            },
            {
                id:4,
                data: "2024-01-21",
                Torneiro: "World Grand Prix",
                Hora: "14:00",
                Jogadores: "Zhang A. vs Allen M.",
            },
            {
                id:5,
                data: "2024-01-22",
                Torneiro: "World Grand Prix",
                Hora: "19:00",
                Jogadores: "Allen M. vs Williams M.",
            },
            {   
                id:6,
                data: "2024-01-23",
                Torneiro: "World Grand Prix",
                Hora: "19:00",
                Jogadores: "Williams M. vs Williams M.",
            },
        ],

    }),
    getters: {
        allCallendar: (state) => state.callendar,
      
    },
    actions: {
        
    }
});

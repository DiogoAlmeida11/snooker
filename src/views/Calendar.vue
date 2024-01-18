<template>
  <div>
    <h1>Calendário de Eventos</h1>
    <p>Veja os próximos torneios e resultados anteriores.</p>

    
    <Calendar :attributes="attributes" />
   
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { useCalendarStore  } from '../stores/callendar';

export default {
  name: 'CalendarIntegration',
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    
    const callendarEvents = useCalendarStore ().allCallendar;
   

  
    const attributes = callendarEvents.map(event => ({
  popover: {
    label: `${event.Torneiro} - ${event.Hora} - ${event.Jogadores}`,
  },
  key: `event-${event.id}`, 
  content: 'red', 
  highlight: {
      color: 'blue',
      fillMode: 'outline',
      contentClass: 'italic',
  },
  dates: new Date(event.data),
  order: 1,
}));

    return {
      date: new Date(),
      attributes: attributes,
    };
  },
};
</script>

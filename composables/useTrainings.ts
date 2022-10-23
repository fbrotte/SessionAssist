import { defineStore } from 'pinia'

export const useTrainings = defineStore('trainings', () => {
  const data = ref([
    {
      title: 'Jambes',
      info: 'Lundi',
      slug: 'jambes',
      exercices: 
        [
          {
            name: 'Squat',
            rep: 6,
            serie: 4,
            repo: 90
          },
          {
            name: 'Presse',
            rep: 6,
            serie: 4,
            repo: 90
          },
        ],
    },
    {
      title: 'Pec Biceps',
      info: 'Mercredi',
      slug: 'pec-biceps'
    },
    {
      title: 'Epaule',
      info: 'Vendredi',
      slug: 'epaule',
    }
  ])

  function get(slug :string){
    return data.value.find(e => e.slug === slug)
  }

  function remove(){
    console.log('delete')
  }

  return { data, get, remove }
})

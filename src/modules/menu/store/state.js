import { ref } from 'vue'

export default {
  scrollWidth: ref(0),
  containerSize: ref(0),
  quantityPages: ref(5),
  pages: ref({
    welcome:  {
      label: 'Início',
      to: 0,
      from: 0
    },
    repositories:  {
      label: 'Meus Repositórios',
      to: 0,
      from: 0
    },
    skills:  {
      label: 'Minhas Skills',
      to: 0,
      from: 0
    },
    contact:  {
      label: 'Contate-me',
      to: 0,
      from: 0
    },
    about:  {
      label: 'Sobre mim',
      to: 0,
      from: 0
    }
  })
}

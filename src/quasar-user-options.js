
import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import lang from 'quasar/lang/pt-BR.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Loading,
  Notify,
  QTable,
  QTh,
  QTr,
  QTd
} from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Loading,
    Notify,
  },
  components:{
    QTable,
    QTh,
    QTr,
    QTd
  },
  lang: lang,
  iconSet: iconSet
}

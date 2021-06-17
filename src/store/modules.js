import { store as home } from '../modules/public/home'
import { store as projects } from '../modules/public/projetos'
import { store as redirect } from '../modules/redirect'
import { store as mainMenu } from '../modules/components/main_menu'
import { store as accordion } from '../modules/components/accordion'
import { store as messages } from '../modules/components/messages'
import { store as login } from '../modules/auth/login'
import { store as user } from '../modules/administration/user'
import { store as dashboard } from '../modules/administration/dashboard'
import { store as client } from '../modules/administration/client'
import { store as refCodes } from '../modules/administration/refCodes'
import { store as contracts } from '../modules/administration/contract'
import { store as services } from '../modules/administration/services'
import { store as notation } from '../modules/administration/notation'
import { store as transaction } from '../modules/financials/transaction'
import { store as receipt } from '../modules/financials/receipt'
import { store as debt } from '../modules/financials/debt'

export default {
  home,
  login,
  projects,
  redirect,
  mainMenu,
  accordion,
  messages,
  user,
  dashboard,
  client,
  refCodes,
  contracts,
  services,
  notation,
  transaction,
  receipt,
  debt,
}

import { services as home } from '../modules/public/home'
import { services as login } from '../modules/auth/login'
import { services as projects } from '../modules/public/projetos'
import { services as user } from '../modules/administration/user'
import { services as client } from '../modules/administration/client'
import { services as refCodes } from '../modules/administration/refCodes'
import { services as contract } from '../modules/administration/contract'
import { services as service } from '../modules/administration/services'
import { services as notation } from '../modules/administration/notation'

export default {
  home,
  login,
  projects,
  user,
  client,
  refCodes,
  contract,
  service,
  notation
}

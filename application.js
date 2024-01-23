import Alpine from 'alpinejs'

window.Alpine = Alpine
import { multiselect } from "./multiselect"

Alpine.data('multiselect', multiselect)
Alpine.start()

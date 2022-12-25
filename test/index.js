import { needsImplementations } from './spec.js';
import WsClient from './../exports/ws.js'
import HttpClient from './../exports/http.js'

try {
  const wsNeeds = needsImplementations(new WsClient())
  if (wsNeeds.length > 0) throw new Error(`ws: missing implementations ${wsNeeds.length > 2 ? wsNeeds.join(', ') : wsNeeds.join(' & ')}`)

  const httpNeeds = needsImplementations(new HttpClient())
  if (httpNeeds.length > 0) throw new Error(`http: missing implementations ${httpNeeds.length > 2 ? httpNeeds.join(', ') : httpNeeds.join(' & ')}`)
} catch (error) {
  console.error(error);
}
import ReactDOM from 'react-dom'
import { App } from './app'
import * as ToGuitar from '@to-guitar'
import './style/global.scss'

window.ToGuitar = ToGuitar

ReactDOM.render(App(), document.getElementById('app'))

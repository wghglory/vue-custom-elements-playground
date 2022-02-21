// tailwind css here, and it will be built inside dist/style.css
import '@/styles/index.css';

import {defineCustomElement} from 'vue';
import {CurrentTime, Card} from './components';

const CurrentTimeComponent = defineCustomElement(CurrentTime);
const CardComponent = defineCustomElement(Card);

customElements.define('dv-current-time', CurrentTimeComponent);
customElements.define('dv-card', CardComponent);

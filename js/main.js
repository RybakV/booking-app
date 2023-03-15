import { offers } from './data.js';
import { renderOffers } from "./cards.js";
import { offerTypeListener, offerCheckinListener } from "./form.js";

renderOffers(offers);
offerTypeListener();
offerCheckinListener();





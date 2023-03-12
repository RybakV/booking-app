const offerSettings = {
  authorsNames: ['Ben','joe','Sam'],
  titles: ['Good Apartment','Nice House','Big Room'],
  quantity: 10,
  offerType: ['palace', 'flat', 'house', 'bungalow'],
  price: {
    min: 1000,
    max: 8000,
  },
  checkins: ['12:00',' 13:00', '14:00'],
  checkouts: ['12:00',' 13:00', '14:00'],
  features: ['WiFi', 'dishwasher',' parking', 'washer', 'elevator', 'conditioner'],
  descriptions: ['Beautiful place for vacay.','Good place for conferences.', 'Nice and cheap choice for tourists.'],
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  avatarsQuantity: {
    min: 1,
    max: 8,
  },
  rooms: {
    min: 1,
    max: 4,
  },
  guests: {
    min: 1,
    max: 4,
  },
  location: {
    x: {
      min: 35.65000,
      max: 35.70000
    },
    y: {
      min: 139.70000,
      max: 139.80000
    }
  }
}

function GetOffer(i){
  this.id = i;
  this.author = offerSettings.authorsNames[randomNumber(0, offerSettings.authorsNames.length -1)];
  this.avatarUrl = `./img/avatars/user${randomNumber(offerSettings.avatarsQuantity.min,offerSettings.avatarsQuantity.max)}.png`;
  this.location = location();
  this.offer = {};
  this.offer.title = offerSettings.titles[randomNumber(0, offerSettings.titles.length -1)];
  this.offer.address = location();
  this.offer.price = randomNumber(offerSettings.price.min, offerSettings.price.max);
  this.offer.type = offerSettings.offerType[randomNumber(0, offerSettings.offerType.length -1)];
  this.offer.rooms = randomNumber(offerSettings.rooms.min,offerSettings.rooms.max);
  this.offer.guests = randomNumber(offerSettings.guests.min,offerSettings.guests.max);
  this.offer.checkin = offerSettings.checkins[randomNumber(0, offerSettings.checkins.length -1)];
  this.offer.checkout = offerSettings.checkouts[randomNumber(0, offerSettings.checkouts.length -1)];
  this.offer.features = chooseRandom(offerSettings.features, randomNumber(0, offerSettings.features.length -1));
  this.offer.description = offerSettings.descriptions[randomNumber(0, offerSettings.descriptions.length -1)];
  this.offer.photos = chooseRandom(offerSettings.photos, randomNumber(0, offerSettings.photos.length -1));
}
const offers = [];
function getStartData(){
  for(let i = 0; i < offerSettings.quantity; i++) {
    let item = new GetOffer(1);
    offers.push(item);
  }

}
getStartData();
console.log(offers);

function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomLocationNumber(min, max){
  min = Math.ceil(min * 100000);
  max = Math.floor(max * 100000);
  return Math.floor(Math.random() * (max - min + 1) + min)/100000;
}

function chooseRandom(arr, num){
  const res = [];
  for(let i = 0; i < num; ){
    const random = Math.floor(Math.random() * arr.length);
    if(res.indexOf(arr[random]) !== -1){
      continue;
    }
    res.push(arr[random]);
    i++;
  }
  return res;
}

function location() {
  return {
    x: randomLocationNumber(offerSettings.location.x.min, offerSettings.location.x.max),
    y: randomLocationNumber(offerSettings.location.y.min, offerSettings.location.y.max)
  }
}




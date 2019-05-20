var cats = [
  {
    name: "Luna",
    clicks: 0,
    nicknames: ["Moon", "Puusy"],
    url:
      "http://www.pethealthnetwork.com/sites/default/files/how-do-i-trim-my-kittens-nails524581937.jpg"
  },
  {
    name: "Chloe",
    clicks: 0,
    nicknames: ["Cool", "Coco"],
    url:
      "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"
  },
  {
    name: "Bella",
    clicks: 0,
    nicknames: ["Beauty", "B"],
    url: "https://hairstylecamp.com/wp-content/uploads/cat-1.jpg"
  },
  {
    name: "Lucy",
    clicks: 0,
    nicknames: ["Lucky", "Lulu"],
    url: "http://funlava.com/wp-content/uploads/2013/03/cute-cats-wallpaper.jpg"
  },
  {
    name: "Lily",
    clicks: 0,
    nicknames: ["Rose", "Love"],
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7sbQ24kc_kL53W7xQNvio_991tFpoPp-mMZ5Dn9LMo_4h6Sm"
  }
];

var Cat = function(data) {
  var self = this;
  this.name = ko.observable(data.name);
  this.url = ko.observable(data.url);
  this.clicks = ko.observable(data.clicks);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    if (this.clicks() < 10) {
      return "Newborn";
    } else if (this.clicks() < 20) {
      return "Baby";
    } else if (this.clicks() < 40) {
      return "Toddler";
    } else if (this.clicks() < 80) {
      return "Child";
    } else if (this.clicks() < 160) {
      return "Teen";
    } else if (this.clicks() < 320) {
      return "Adult";
    } else {
      return "Elderly";
    }
  }, this);
};

var ViewModel = function() {
  var self = this;

  self.catsList = ko.observableArray([]);
  cats.forEach(cat => {
    self.catsList().push(new Cat(cat));
  });

  self.setCurrCat = function(cat) {
    self.currCat(cat);
  };

  self.currCat = ko.observable(self.catsList()[0]);

  self.incrClicks = function() {
    self.currCat().clicks(self.currCat().clicks() + 1);
  };
};

window.addEventListener("load", function() {
  viewModel = new ViewModel();
  ko.applyBindings(viewModel);
});

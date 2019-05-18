function ViewModel() {
  this.name = ko.observable("Lilly");
  this.url = ko.observable(
    "https://hairstylecamp.com/wp-content/uploads/cat-1.jpg"
  );
  this.clicks = ko.observable(0);

  this.incrClicks = function() {
    this.clicks(this.clicks() + 1);
  };

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
}

window.addEventListener("load", function() {
  ko.applyBindings(new ViewModel());
});

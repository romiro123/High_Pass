document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.763166842693195, 37.623482572120345],
      zoom: 14,
      controls: []
    }, {
      suppressMapOpenBlock: true
    });

    var myPlacemark = new ymaps.Placemark([55.769397571174984, 37.63964738699702], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/marker-map.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [-5, -10]
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  }
});

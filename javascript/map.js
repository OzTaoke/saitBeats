
    YMaps.jQuery(function () {
      var map = new YMaps.Map(YMaps.jQuery("#map")[0]);
      map.setCenter(new YMaps.GeoPoint(37.588144, 55.75), 14);

      var s = new YMaps.Style();
      s.iconStyle = new YMaps.IconStyle();
      s.iconStyle.href = "image/marker.png";
      s.iconStyle.size = new YMaps.Point(46, 57);
      s.iconStyle.offset = new YMaps.Point(-35, -52);

      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.580256,55.759238),{style: s});
      map.addOverlay(placemark); 
      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.604516,55.749666),{style: s});
      map.addOverlay(placemark); 
      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.582457,55.742823),{style: s});
      map.addOverlay(placemark); 
      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.625882,55.753625),{style: s});
      map.addOverlay(placemark); 


    });



    
    
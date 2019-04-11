require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/widgets/BasemapGallery",
    /* "esri/widgets/BasemapToggle" */
], function (Map, MapView, BasemapGallery, BasemapToggle) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.71511, 34.09042],
        zoom: 11,

    });

    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: false
            }
        }
    });

    /* var basemapToggle = new BasemapToggle({
        view: view,
        secondMap: "streets-navigation-vector"

    }); */

    view.ui.add(basemapGallery, "bottom-right");


});
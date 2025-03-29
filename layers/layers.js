var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: 'ชัยภูมิ2',
                interactive: true,
                title: '<img src="styles/legend/2_1.png" /> ชัยภูมิ2'
            });

lyr_Positron_0.setVisible(true);lyr_2_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_2_1];
lyr_2_1.set('fieldAliases', {'amphoe': 'amphoe', 'lat': 'lat', 'long': 'long', 'ชาย': 'ชาย', 'จำนวนปรากร': 'จำนวนปรากร', 'field_6': 'field_6', 'area_sqkm': 'area_sqkm', 'อัตราป่วย': 'อัตราป่วย', });
lyr_2_1.set('fieldImages', {'amphoe': '', 'lat': '', 'long': '', 'ชาย': '', 'จำนวนปรากร': '', 'field_6': '', 'area_sqkm': '', 'อัตราป่วย': '', });
lyr_2_1.set('fieldLabels', {'amphoe': 'no label', 'lat': 'no label', 'long': 'no label', 'ชาย': 'no label', 'จำนวนปรากร': 'no label', 'field_6': 'no label', 'area_sqkm': 'no label', 'อัตราป่วย': 'no label', });
lyr_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
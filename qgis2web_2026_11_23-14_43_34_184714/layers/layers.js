var wms_layers = [];


        var lyr_BingMapRu_0 = new ol.layer.Tile({
            'title': 'Bing Map Ru',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=ru-ru&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_LmitedeSuiza_1 = new ol.format.GeoJSON();
var features_LmitedeSuiza_1 = format_LmitedeSuiza_1.readFeatures(json_LmitedeSuiza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitedeSuiza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitedeSuiza_1.addFeatures(features_LmitedeSuiza_1);
var lyr_LmitedeSuiza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitedeSuiza_1, 
                style: style_LmitedeSuiza_1,
                popuplayertitle: 'Límite de Suiza',
                interactive: true,
                title: '<img src="styles/legend/LmitedeSuiza_1.png" /> Límite de Suiza'
            });
var format_Cuerposdeagua_2 = new ol.format.GeoJSON();
var features_Cuerposdeagua_2 = format_Cuerposdeagua_2.readFeatures(json_Cuerposdeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerposdeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerposdeagua_2.addFeatures(features_Cuerposdeagua_2);
var lyr_Cuerposdeagua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuerposdeagua_2, 
                style: style_Cuerposdeagua_2,
                popuplayertitle: 'Cuerpos de agua',
                interactive: true,
                title: '<img src="styles/legend/Cuerposdeagua_2.png" /> Cuerpos de agua'
            });
var format_Rutas_3 = new ol.format.GeoJSON();
var features_Rutas_3 = format_Rutas_3.readFeatures(json_Rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_3.addFeatures(features_Rutas_3);
var lyr_Rutas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_3, 
                style: style_Rutas_3,
                popuplayertitle: 'Rutas',
                interactive: true,
                title: '<img src="styles/legend/Rutas_3.png" /> Rutas'
            });
var format_Ferrocarriles_4 = new ol.format.GeoJSON();
var features_Ferrocarriles_4 = format_Ferrocarriles_4.readFeatures(json_Ferrocarriles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarriles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarriles_4.addFeatures(features_Ferrocarriles_4);
var lyr_Ferrocarriles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarriles_4, 
                style: style_Ferrocarriles_4,
                popuplayertitle: 'Ferrocarriles',
                interactive: true,
                title: '<img src="styles/legend/Ferrocarriles_4.png" /> Ferrocarriles'
            });
var format_BernaCapitalSuiza_5 = new ol.format.GeoJSON();
var features_BernaCapitalSuiza_5 = format_BernaCapitalSuiza_5.readFeatures(json_BernaCapitalSuiza_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BernaCapitalSuiza_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BernaCapitalSuiza_5.addFeatures(features_BernaCapitalSuiza_5);
var lyr_BernaCapitalSuiza_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BernaCapitalSuiza_5, 
                style: style_BernaCapitalSuiza_5,
                popuplayertitle: 'Berna Capital Suiza',
                interactive: true,
                title: '<img src="styles/legend/BernaCapitalSuiza_5.png" /> Berna Capital Suiza'
            });

lyr_BingMapRu_0.setVisible(true);lyr_LmitedeSuiza_1.setVisible(true);lyr_Cuerposdeagua_2.setVisible(true);lyr_Rutas_3.setVisible(true);lyr_Ferrocarriles_4.setVisible(true);lyr_BernaCapitalSuiza_5.setVisible(true);
var layersList = [lyr_BingMapRu_0,lyr_LmitedeSuiza_1,lyr_Cuerposdeagua_2,lyr_Rutas_3,lyr_Ferrocarriles_4,lyr_BernaCapitalSuiza_5];
lyr_LmitedeSuiza_1.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'datum_aenderung': 'datum_aenderung', 'datum_erstellung': 'datum_erstellung', 'erstellung_jahr': 'erstellung_jahr', 'erstellung_monat': 'erstellung_monat', 'grund_aenderung': 'grund_aenderung', 'herkunft': 'herkunft', 'herkunft_jahr': 'herkunft_jahr', 'herkunft_monat': 'herkunft_monat', 'revision_jahr': 'revision_jahr', 'revision_monat': 'revision_monat', 'revision_qualitaet': 'revision_qualitaet', 'objektart': 'objektart', 'see_flaeche': 'see_flaeche', 'landesflaeche': 'landesflaeche', 'name': 'name', 'icc': 'icc', 'einwohnerzahl': 'einwohnerzahl', });
lyr_Cuerposdeagua_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'NAME': 'Nombre', 'NAME_LANG': 'Nombre e idioma', 'GROESSTE_S': 'Categoría de tamaño', 'SEESPIEGEL': 'Altitud del espejo de agua', 'SG': 'Categoría de tamaño', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de objeto', 'SHAPELENGT': 'SHAPELENGT', 'SHAPEAREA': 'SHAPEAREA', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rutas_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'ROUTEN_NR': 'Número de ruta', 'EROEFFNUNG': 'EROEFFNUNG', 'LB': 'LB', 'FB': 'FB', 'FBP': 'FBP', 'CUT_BEGIN': 'CUT_BEGIN', 'CUT_END': 'CUT_END', 'CUT_FB_BEG': 'CUT_FB_BEG', 'CUT_FB_END': 'CUT_FB_END', 'STUFE': 'STUFE', 'KUNSTBAUTE': 'Tipo de estructura', 'BELAGSART': 'Tipo de pavimento', 'GETRENNT': 'GETRENNT', 'IM_BAU': 'En construcción', 'VERFUEGBAR': 'VERFUEGBAR', 'VRKBEDEUT': 'Importancia vial ', 'CAP_STYLE': 'CAP_STYLE', 'EXTR_TYPE': 'EXTR_TYPE', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de vía', 'SHAPELENGT': 'SHAPELENGT', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Ferrocarriles_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'EROEFFNUNG': 'EROEFFNUNG', 'LB': 'LB', 'CUT_BEGIN': 'CUT_BEGIN', 'CUT_END': 'CUT_END', 'STUFE': 'Nivel', 'KUNSTBAUTE': 'Tipo de estructura', 'ANZ_SPUR': 'ANZ_SPUR', 'IM_BAU': 'En construcción', 'CAP_STYLE': 'CAP_STYLE', 'EXTR_TYPE': 'EXTR_TYPE', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de ferrocarril', 'SHAPELENGT': 'SHAPELENGT', 'SHAPE_Length': 'SHAPE_Length', });
lyr_BernaCapitalSuiza_5.set('fieldAliases', {'fid': 'fid', 'bfs_nummer': 'Código BFS', 'ciudad': 'Ciudad', 'poblacion': 'Población', });
lyr_LmitedeSuiza_1.set('fieldImages', {'id': 'TextEdit', 'uuid': 'TextEdit', 'datum_aenderung': 'DateTime', 'datum_erstellung': 'DateTime', 'erstellung_jahr': 'Range', 'erstellung_monat': 'Range', 'grund_aenderung': 'TextEdit', 'herkunft': 'TextEdit', 'herkunft_jahr': 'Range', 'herkunft_monat': 'Range', 'revision_jahr': 'Range', 'revision_monat': 'Range', 'revision_qualitaet': 'TextEdit', 'objektart': 'TextEdit', 'see_flaeche': 'TextEdit', 'landesflaeche': 'TextEdit', 'name': 'TextEdit', 'icc': 'TextEdit', 'einwohnerzahl': 'Range', });
lyr_Cuerposdeagua_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'NAME': 'TextEdit', 'NAME_LANG': 'TextEdit', 'GROESSTE_S': 'Range', 'SEESPIEGEL': 'Range', 'SG': 'TextEdit', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPEAREA': 'Hidden', 'SHAPE_Length': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_Rutas_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'ROUTEN_NR': 'TextEdit', 'EROEFFNUNG': 'Hidden', 'LB': 'Hidden', 'FB': 'Hidden', 'FBP': 'Hidden', 'CUT_BEGIN': 'Hidden', 'CUT_END': 'Hidden', 'CUT_FB_BEG': 'Hidden', 'CUT_FB_END': 'Hidden', 'STUFE': 'Hidden', 'KUNSTBAUTE': 'TextEdit', 'BELAGSART': 'TextEdit', 'GETRENNT': 'Hidden', 'IM_BAU': 'TextEdit', 'VERFUEGBAR': 'Hidden', 'VRKBEDEUT': 'TextEdit', 'CAP_STYLE': 'Hidden', 'EXTR_TYPE': 'Hidden', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPE_Length': 'Hidden', });
lyr_Ferrocarriles_4.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'EROEFFNUNG': 'Hidden', 'LB': 'Hidden', 'CUT_BEGIN': 'Hidden', 'CUT_END': 'Hidden', 'STUFE': 'TextEdit', 'KUNSTBAUTE': 'TextEdit', 'ANZ_SPUR': 'Hidden', 'IM_BAU': 'TextEdit', 'CAP_STYLE': 'Hidden', 'EXTR_TYPE': 'Hidden', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPE_Length': 'Hidden', });
lyr_BernaCapitalSuiza_5.set('fieldImages', {'fid': 'Hidden', 'bfs_nummer': 'TextEdit', 'ciudad': 'TextEdit', 'poblacion': 'Range', });
lyr_LmitedeSuiza_1.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', 'datum_aenderung': 'no label', 'datum_erstellung': 'no label', 'erstellung_jahr': 'no label', 'erstellung_monat': 'no label', 'grund_aenderung': 'no label', 'herkunft': 'no label', 'herkunft_jahr': 'no label', 'herkunft_monat': 'no label', 'revision_jahr': 'no label', 'revision_monat': 'no label', 'revision_qualitaet': 'no label', 'objektart': 'no label', 'see_flaeche': 'no label', 'landesflaeche': 'no label', 'name': 'no label', 'icc': 'no label', 'einwohnerzahl': 'no label', });
lyr_Cuerposdeagua_2.set('fieldLabels', {'NAME': 'inline label - always visible', 'NAME_LANG': 'inline label - always visible', 'GROESSTE_S': 'inline label - always visible', 'SEESPIEGEL': 'inline label - always visible', 'SG': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_Rutas_3.set('fieldLabels', {'ROUTEN_NR': 'inline label - always visible', 'KUNSTBAUTE': 'inline label - always visible', 'BELAGSART': 'inline label - always visible', 'IM_BAU': 'inline label - always visible', 'VRKBEDEUT': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_Ferrocarriles_4.set('fieldLabels', {'STUFE': 'inline label - always visible', 'KUNSTBAUTE': 'inline label - always visible', 'IM_BAU': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_BernaCapitalSuiza_5.set('fieldLabels', {'bfs_nummer': 'inline label - always visible', 'ciudad': 'inline label - always visible', 'poblacion': 'inline label - always visible', });
lyr_BernaCapitalSuiza_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
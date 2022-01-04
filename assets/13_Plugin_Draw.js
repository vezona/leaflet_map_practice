import{L as f}from"./leaflet-src.js";import"./leaflet.draw.js";import{_ as M}from"./index.js";import{j as I,o as U,c as T,g as y}from"./vendor.js";(function(c){var p={};function l(r){if(p[r])return p[r].exports;var a=p[r]={i:r,l:!1,exports:{}};return c[r].call(a.exports,a,a.exports,l),a.l=!0,a.exports}return l.m=c,l.c=p,l.d=function(r,a,h){l.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:h})},l.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},l.t=function(r,a){if(a&1&&(r=l(r)),a&8||a&4&&typeof r=="object"&&r&&r.__esModule)return r;var h=Object.create(null);if(l.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:r}),a&2&&typeof r!="string")for(var u in r)l.d(h,u,function(m){return r[m]}.bind(null,u));return h},l.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(a,"a",a),a},l.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},l.p="",l(l.s=2)})([function(c,p){c.exports=void 0},function(c,p,l){},function(c,p,l){l.r(p),l(0);function r(){L.StyleEditor.formElements.ColorElement=L.StyleEditor.formElements.FormElement.extend({createContent:function(){this.options.colorPickerDiv=L.DomUtil.create("div","leaflet-styleeditor-colorpicker",this.options.uiElement),this._getColorRamp().forEach(this._setSelectCallback,this)},_getColorRamp:function(){return this.options.colorRamp||(this.options.parentForm instanceof L.StyleEditor.forms.MarkerForm&&!!this.options.styleEditorOptions.markerType.options.colorRamp?this.options.colorRamp=this.options.styleEditorOptions.markerType.options.colorRamp:this.options.colorRamp=this.options.styleEditorOptions.colorRamp),this.options.colorRamp},_setSelectCallback:function(t){var e=L.DomUtil.create("div","leaflet-styleeditor-color",this.options.colorPickerDiv);e.style.backgroundColor=t,L.DomEvent.addListener(e,"click",this._selectColor,this)},_selectColor:function(t){t.stopPropagation(),this.setStyle(this.options.styleEditorOptions.util.rgbToHex(t.target.style.backgroundColor)),this.options.styleEditorOptions.currentElement.target instanceof L.Marker&&this.options.styleEditorOptions.markerType.setNewMarker()}})}function a(){L.StyleEditor.formElements.FormElement=L.Class.extend({initialize:function(t){t&&L.setOptions(this,t),!this.options.title&&!!this.options.styleOption&&(this.options.title=this.options.styleOption.charAt(0).toUpperCase()+this.options.styleOption.slice(1))},create:function(t){this.options.uiElement=L.DomUtil.create("div","leaflet-styleeditor-uiElement",t),this.createTitle(),this.createContent()},createTitle:function(){var t=L.DomUtil.create("label","leaflet-styleeditor-label",this.options.uiElement);t.innerHTML=this.options.title+":"},createContent:function(){},show:function(){this.style(),this.showForm()},showForm:function(){this.options.styleEditorOptions.util.showElement(this.options.uiElement)},hide:function(){this.options.styleEditorOptions.util.hideElement(this.options.uiElement)},style:function(){},lostFocus:function(){},setStyle:function(t){var e=this.options.styleEditorOptions.util.getCurrentElement(),o=[e];e instanceof L.LayerGroup&&(o=Object.values(e._layers));for(var n=0;n<o.length;n++){var s=o[n];if(s instanceof L.Marker)this.options.styleEditorOptions.markerType.setStyle(this.options.styleOption,t);else{var d={};d[this.options.styleOption]=t,s.setStyle(d),s.options[this.options.styleOption]=t}this.options.styleEditorOptions.util.fireChangeEvent(s)}this.options.parentForm.style()}})}function h(){L.StyleEditor.formElements.DashElement=L.StyleEditor.formElements.FormElement.extend({createContent:function(){var t=this.options.uiElement,e=L.DomUtil.create("div","leaflet-styleeditor-stroke",t);e.style.backgroundPosition="0px -75px",L.DomEvent.addListener(e,"click",function(){this.setStyle("1")},this),e=L.DomUtil.create("div","leaflet-styleeditor-stroke",t),e.style.backgroundPosition="0px -95px",L.DomEvent.addListener(e,"click",function(){this.setStyle("10, 10")},this),e=L.DomUtil.create("div","leaflet-styleeditor-stroke",t),e.style.backgroundPosition="0px -115px",L.DomEvent.addListener(e,"click",function(){this.setStyle("15, 10, 1, 10")},this)}})}function u(){L.StyleEditor.formElements.IconElement=L.StyleEditor.formElements.FormElement.extend({_selectOptionWrapperClasses:"leaflet-styleeditor-select-option-wrapper leaflet-styleeditor-hidden",_selectOptionClasses:"leaflet-styleeditor-select-option",createContent:function(){var t=this.options.uiElement,e=L.DomUtil.create("div","leaflet-styleeditor-select",t);this.options.selectBoxImage=this._createSelectInputImage(e),L.DomEvent.addListener(e,"click",this._toggleSelectInput,this)},style:function(){var t=this.options.styleEditorOptions.markerType.getIconOptions();this._styleSelectInputImage(this.options.selectBoxImage,t.icon,t.iconColor),this._createColorSelect(this.options.styleEditorOptions.markerType.options.iconOptions.iconColor),this._hideSelectOptions()},lostFocus:function(){this._hideSelectOptions()},_createSelectInputImage:function(t){var e=L.DomUtil.create("div","leaflet-styleeditor-select-image-wrapper",t);return L.DomUtil.create("div","leaflet-styleeditor-select-image",e)},_styleSelectInputImage:function(t,e,o){if(!(!e&&(e=t.getAttribute("value"),!e))){var n=this.options.styleEditorOptions.markerType.getIconOptions();o&&(n.iconColor=o),t.innerHTML="",this.options.styleEditorOptions.markerType.createSelectHTML(t,n,e),t.setAttribute("value",e)}},_createColorSelect:function(t){if(this.options.selectOptions||(this.options.selectOptions={}),!(t in this.options.selectOptions)){var e=this.options.uiElement,o=L.DomUtil.create("ul",this._selectOptionWrapperClasses,e);this.options.styleEditorOptions.util.getMarkersForColor(t).forEach(function(n){var s=L.DomUtil.create("li",this._selectOptionClasses,o),d=this._createSelectInputImage(s);this._styleSelectInputImage(d,n,t)},this),this.options.selectOptions[t]=o,L.DomEvent.addListener(o,"click",function(n){n.stopPropagation();var s=n.target;if(s.nodeName!=="UL"){if(s.parentNode.className==="leaflet-styleeditor-select-image")s=s.parentNode;else for(;s&&s.className!=="leaflet-styleeditor-select-image";)s=s.childNodes[0];this._selectMarker({target:s},this)}},this)}},_toggleSelectInput:function(t){var e=this._getCurrentColorElement(this.options.styleEditorOptions.util.rgbToHex(this.options.styleEditorOptions.markerType.options.iconOptions.iconColor)),o=!1;e&&(o=L.DomUtil.hasClass(e,"leaflet-styleeditor-hidden")),this._hideSelectOptions(),o&&this.options.styleEditorOptions.util.showElement(e)},_selectMarker:function(t){var e=this._getValue(t.target);this.options.selectBoxImage.setAttribute("value",e),this.setStyle(e),this._hideSelectOptions()},_getValue:function(t){return t.getAttribute("value")},_getCurrentColorElement:function(t){return this.options.selectOptions[t]||this._createColorSelect(t),this.options.selectOptions[t]},_hideSelectOptions:function(){for(var t in this.options.selectOptions)this.options.styleEditorOptions.util.hideElement(this.options.selectOptions[t])}})}function m(){L.StyleEditor.formElements.OpacityElement=L.StyleEditor.formElements.FormElement.extend({createContent:function(){this.options.label=L.DomUtil.create("span","leaflet-styleeditor-input-span",this.options.uiElement);var t=this.options.slider=L.DomUtil.create("input","leaflet-styleeditor-input",this.options.uiElement);t.type="range",t.max=1,t.min=0,t.step=.01,t.value=.5,L.DomEvent.addListener(t,"change",this._setStyle,this),L.DomEvent.addListener(t,"input",this._setStyle,this),L.DomEvent.addListener(t,"keyup",this._setStyle,this),L.DomEvent.addListener(t,"mouseup",this._setStyle,this)},style:function(){this.options.slider.value=this.options.styleEditorOptions.util.getStyle(this.options.styleOption),this.options.label.innerText=parseInt(100*this.options.slider.value)+"%"},_setStyle:function(){this.setStyle(this.options.slider.value)}})}function g(){L.StyleEditor.formElements.PopupContentElement=L.StyleEditor.formElements.FormElement.extend({options:{title:"Description"},createContent:function(){var t=this.options.uiElement,e=this.options.descTextAreaField=L.DomUtil.create("textarea","leaflet-styleeditor-input",t);L.DomEvent.addListener(e,"change",this._setStyle,this)},style:function(){var t=this.options.styleEditorOptions.util.getCurrentElement();t&&t.options&&(this.options.descTextAreaField.value=t.options.popupContent||"")},_setStyle:function(){var t=this.options.styleEditorOptions.util.getCurrentElement(),e=this.options.descTextAreaField.value,o=[t];t instanceof L.LayerGroup&&(o=Object.values(t._layers));for(var n=0;n<o.length;n++){var s=o[n];if(s&&s.getPopup&&s.bindPopup){var d=s.getPopup();d?d.setContent(e):s.bindPopup(e),s.options=s.options||{},s.options.popupContent=e}}this.setStyle(e)}})}function E(){L.StyleEditor.formElements.SizeElement=L.StyleEditor.formElements.FormElement.extend({createContent:function(){var t=this.options.uiElement,e=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-small",t);L.DomEvent.addListener(e,"click",function(){this.setStyle(this.options.styleEditorOptions.markerType.options.size.small)},this),e=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-medium",t),L.DomEvent.addListener(e,"click",function(){this.setStyle(this.options.styleEditorOptions.markerType.options.size.medium)},this),e=L.DomUtil.create("div","leaflet-styleeditor-sizeicon sizeicon-large",t),L.DomEvent.addListener(e,"click",function(){this.setStyle(this.options.styleEditorOptions.markerType.options.size.large)},this)}})}function v(){L.StyleEditor.formElements.WeightElement=L.StyleEditor.formElements.FormElement.extend({createContent:function(){this.options.label=L.DomUtil.create("span","leaflet-styleeditor-input-span",this.options.uiElement);var t=this.options.weight=L.DomUtil.create("input","leaflet-styleeditor-input",this.options.uiElement);t.type="range",t.min=0,t.max=20,t.step=1,t.value=4,L.DomEvent.addListener(t,"change",this._setStyle,this),L.DomEvent.addListener(t,"input",this._setStyle,this),L.DomEvent.addListener(t,"keyup",this._setStyle,this),L.DomEvent.addListener(t,"mouseup",this._setStyle,this)},style:function(){this.options.weight.value=this.options.styleEditorOptions.util.getStyle(this.options.styleOption),this.options.label.innerText=this.options.weight.value},_setStyle:function(){this.setStyle(this.options.weight.value)}})}function k(){L.StyleEditor.forms.Form=L.Class.extend({initialize:function(t){t&&L.setOptions(this,t),this.options.initializedElements=[]},create:function(t){this.options.parentUiElement=t;for(var e=this.getFormElements(),o=Object.keys(e),n=0;n<o.length;n++){var s=this.getFormElementClass(o[n],e);s!==void 0&&(s.create(t),this.options.initializedElements.push(s))}},hide:function(){this.hideFormElements(),this.hideForm()},hideFormElements:function(){for(var t=0;t<this.options.initializedElements.length;t++)this.options.initializedElements[t].hide()},hideForm:function(){this.options.styleEditorOptions.util.hideElement(this.options.parentUiElement)},show:function(){this.preShow(),this.showFormElements(),this.showForm(),this.style()},preShow:function(){},showFormElements:function(){for(var t=0;t<this.options.initializedElements.length;t++)this.showFormElement(this.options.initializedElements[t])},showForm:function(){this.options.styleEditorOptions.util.showElement(this.options.parentUiElement)},style:function(){for(var t=0;t<this.options.initializedElements.length;t++)this.options.initializedElements[t].style()},lostFocus:function(){for(var t=0;t<this.options.initializedElements.length;t++)this.options.initializedElements[t].lostFocus()},showFormElement:function(t){this.showFormElementForStyleOption(t.options.styleOption)?t.show():t.hide()},getFormElements:function(){var t;return this.options.formOptionKey in this.options.styleEditorOptions.forms?t=this.options.styleEditorOptions.forms[this.options.formOptionKey]:t=this.options.formElements,t},getFormElementClass:function(t){var e=this.getFormElements(),o=Object.keys(e);if(o.indexOf(t)>=0){var n=e[t];if(n){if(typeof n=="boolean")return this.getFormElementStandardClass(t);"formElement"in n&&"boolean"in n&&(n=n.formElement);try{var s=new n({styleOption:t,parentForm:this,styleEditorOptions:this.options.styleEditorOptions});if(s instanceof L.StyleEditor.formElements.FormElement)return s}catch{}}return this.getFormElementStandardClass(t)}},showFormElementForStyleOption:function(t){var e=this.getFormElements();if(t in e){var o=e[t];if(typeof o=="function")try{return o(this.options.styleEditorOptions.util.getCurrentElement())}catch{return!0}return typeof o=="boolean"?o:"boolean"in o?typeof o.boolean=="function"?o.boolean(this.options.styleEditorOptions.util.getCurrentElement()):o.boolean:!0}return!1},getFormElementStandardClass:function(t){return new this.options.formElements[t]({styleOption:t,parentForm:this,styleEditorOptions:this.options.styleEditorOptions})}})}function C(){L.StyleEditor.forms.GeometryForm=L.StyleEditor.forms.Form.extend({options:{formOptionKey:"geometry",formElements:{color:L.StyleEditor.formElements.ColorElement,opacity:L.StyleEditor.formElements.OpacityElement,weight:L.StyleEditor.formElements.WeightElement,dashArray:L.StyleEditor.formElements.DashElement,fillColor:L.StyleEditor.formElements.ColorElement,fillOpacity:L.StyleEditor.formElements.OpacityElement,popupContent:L.StyleEditor.formElements.PopupContentElement}},showFormElements:function(){for(var t=0;t<this.options.initializedElements.length;t++)this.options.initializedElements[t].options.styleOption.indexOf("fill")===0?this.options.styleEditorOptions.util.fillCurrentElement()?this.showFormElement(this.options.initializedElements[t]):this.options.initializedElements[t].hide():this.showFormElement(this.options.initializedElements[t])}})}function S(){L.StyleEditor.forms.MarkerForm=L.StyleEditor.forms.Form.extend({options:{formOptionKey:"marker",formElements:{icon:L.StyleEditor.formElements.IconElement,color:L.StyleEditor.formElements.ColorElement,size:L.StyleEditor.formElements.SizeElement,popupContent:L.StyleEditor.formElements.PopupContentElement}}})}function O(){L.StyleEditor.marker.Marker=L.Marker.extend({markerForm:L.StyleEditor.forms.MarkerForm,options:{size:{small:[20,50],medium:[30,70],large:[35,90]},selectIconSize:[],selectIconClass:"",iconOptions:{}},initialize:function(t){L.setOptions(this,t),L.setOptions(this,this.options),this.options.selectIconClass!==""&&!this.options.selectIconClass.startsWith("leaflet-styleeditor-select-image")&&(this.options.selectIconClass="leaflet-styleeditor-select-image-"+this.options.selectIconClass)},setNewMarker:function(){var t=this._createMarkerIcon(),e=this.options.styleEditorOptions.currentElement.target;e.setIcon(t),e instanceof L.LayerGroup?e.eachLayer(function(o){L.DomUtil.addClass(o.getElement(),"leaflet-styleeditor-marker-selected")}):L.DomUtil.addClass(e.getElement(),"leaflet-styleeditor-marker-selected")},setStyle:function(t,e){t!=="icon"&&(t="icon"+t.charAt(0).toUpperCase()+t.slice(1)),this.setIconOptions(t,e),this.setNewMarker()},createSelectHTML:function(t,e,o){},getIconOptions:function(){try{this.options.iconOptions=this.options.styleEditorOptions.currentElement.target.options.icon.options}catch{}return Object.keys(this.options.iconOptions).length>0?this.options.iconOptions:(this.options.iconOptions.iconColor=this._getDefaultMarkerColor(),this.options.iconOptions.iconSize=this.options.styleEditorOptions.markerType.options.size.small,this.options.iconOptions.icon=this.options.styleEditorOptions.util.getDefaultMarkerForColor(this.options.iconOptions.iconColor),this.options.iconOptions=this._ensureMarkerIcon(this.options.iconOptions),this.options.iconOptions)},resetIconOptions:function(){var t=this;Object.keys(this.getIconOptions()).forEach(function(e){return t.setStyle(e,t.options.iconOptions[e])})},setIconOptions:function(t,e){var o=this.getIconOptions();o[t]=e},_createMarkerIcon:function(){var t=this.getIconOptions();return this.createMarkerIcon(t)},_ensureMarkerIcon:function(t){var e=this.options.styleEditorOptions.util.getMarkersForColor(t.iconColor);return e.includes(t.icon)||(t.icon=this.options.styleEditorOptions.util.getDefaultMarkerForColor(t.iconColor)),t},_getDefaultMarkerColor:function(){var t=this.options.colorRamp,e=this.options.styleEditorOptions.colorRamp,o=[];typeof t!="undefined"&&t!==null?(o=t.filter(function(s){return e.includes(s)}),o.length===0&&(o=t)):o=e;var n=this.options.styleEditorOptions.defaultMarkerColor;return n!==null&&!o.includes(n)&&(n=null),n===null&&(n=this.options.styleEditorOptions.defaultColor,n!==null&&!o.includes(n)&&(n=null),n===null&&(n=o[0])),this.options.styleEditorOptions.util.rgbToHex(n)},sizeToName:function(t){var e=Object.keys(this.options.size);if(typeof t=="string"){t==="s"?t="small":t==="m"?t="medium":t==="l"&&(t="large");for(var o=0;o<e.length;o++)if(this.options.size[e[o]]===t)return e[o]}for(var n=Object.values(this.options.size),s=0;s<n.length;s++)if(JSON.stringify(t)===JSON.stringify(n[s]))return e[s];return e[0]},sizeToPixel:function(t){return t=this.sizeToName(t),this.options.size[t]}})}function D(){L.StyleEditor.marker.DefaultMarker=L.StyleEditor.marker.Marker.extend({createMarkerIcon:function(t,e){e||(e="");var o=t.iconSize;return new L.Icon({iconUrl:this._getMarkerUrlForStyle(t),iconSize:t.iconSize,iconColor:t.iconColor,icon:t.icon,className:e,iconAnchor:[o[0]/2,o[1]/2],popupAnchor:[0,-o[1]/2]})},createSelectHTML:function(t,e,o){var n={};n.iconSize=this.options.size.small,n.icon=o,n.iconColor=e.iconColor,t.innerHTML=this.createMarkerIcon(n,this.options.selectIconClass).createIcon().outerHTML},_getMarkerUrlForStyle:function(t){return this._getMarkerUrl(t.iconSize,t.iconColor,t.icon)},_getMarkerUrl:function(t,e,o){t=this.sizeToName(t)[0],e.indexOf("#")===0?e=e.replace("#",""):e=this.options.styleEditorOptions.util.rgbToHex(e,!0);var n="https://api.tiles.mapbox.com/v3/marker/pin-"+t;return o&&(n+="-"+o),n+"+"+e+".png"},options:{selectIconClass:"defaultmarker",markers:["circle-stroked","circle","square-stroked","square","triangle-stroked","triangle","star-stroked","star","cross","marker-stroked","marker","religious-jewish","religious-christian","religious-muslim","cemetery","rocket","airport","heliport","rail","rail-metro","rail-light","bus","fuel","parking","parking-garage","airfield","roadblock","ferry","harbor","bicycle","park","park2","museum","lodging","monument","zoo","garden","campsite","theatre","art-gallery","pitch","soccer","america-football","tennis","basketball","baseball","golf","swimming","cricket","skiing","school","college","library","post","fire-station","town-hall","police","prison","embassy","beer","restaurant","cafe","shop","fast-food","bar","bank","grocery","cinema","pharmacy","hospital","danger","industrial","warehouse","commercial","building","place-of-worship","alcohol-shop","logging","oil-well","slaughterhouse","dam","water","wetland","disability","telephone","emergency-telephone","toilets","waste-basket","music","land-use","city","town","village","farm","bakery","dog-park","lighthouse","clothing-store","polling-place","playground","entrance","heart","london-underground","minefield","rail-underground","rail-above","camera","laundry","car","suitcase","hairdresser","chemist","mobilephone","scooter"]}})}function b(){L.StyleEditor.marker.GlyphiconMarker=L.StyleEditor.marker.Marker.extend({getMarkerHtml:function(t,e,o){var n=this._getMarkerUrl(t,e);return'<div class="leaflet-styleeditor-marker leaflet-styleeditor-marker-'+this.sizeToName(t)[0]+'" style="background-image: url('+n+');"><div class="leaflet-styleeditor-fill"></div><i class="glyphicon '+o+'"></i><div class="leaflet-styleeditor-fill"></div></div>'},createMarkerIcon:function(t){var e=t.iconSize;return L.divIcon({className:"leaflet-styleeditor-glyphicon-marker-wrapper",html:this.getMarkerHtml(e,t.iconColor,t.icon),icon:t.icon,iconColor:t.iconColor,iconSize:e,iconAnchor:[e[0]/2,e[1]/2],popupAnchor:[0,-e[1]/2]})},setStyle:function(t,e){t!=="icon"&&(t="icon"+t.charAt(0).toUpperCase()+t.slice(1));var o=this.options.iconOptions;o[t]!==e&&(o[t]=e,this.setNewMarker())},createSelectHTML:function(t,e,o){t.innerHTML=this.getMarkerHtml("s",e.iconColor,o)},_getMarkerUrlForStyle:function(t){return this._getMarkerUrl(t.iconSize,t.iconColor,t.icon)},_getMarkerUrl:function(t,e,o){t=this.sizeToName(t)[0],e.indexOf("#")===0?e=e.replace("#",""):e=this.options.styleEditorOptions.util.rgbToHex(e,!0);var n="https://api.tiles.mapbox.com/v3/marker/pin-"+t;return n+"+"+e+".png"},options:{markers:["glyphicon-plus","glyphicon-asterisk","glyphicon-plus","glyphicon-euro","glyphicon-minus","glyphicon-cloud","glyphicon-envelope","glyphicon-pencil","glyphicon-glass","glyphicon-music","glyphicon-search","glyphicon-heart","glyphicon-star","glyphicon-star-empty","glyphicon-user","glyphicon-film","glyphicon-th-large","glyphicon-th","glyphicon-th-list","glyphicon-ok","glyphicon-remove","glyphicon-zoom-in","glyphicon-zoom-out","glyphicon-off","glyphicon-signal","glyphicon-cog","glyphicon-trash","glyphicon-home","glyphicon-file","glyphicon-time","glyphicon-road","glyphicon-download-alt","glyphicon-download","glyphicon-upload","glyphicon-inbox","glyphicon-play-circle","glyphicon-repeat","glyphicon-refresh","glyphicon-list-alt","glyphicon-lock","glyphicon-flag","glyphicon-headphones","glyphicon-volume-off","glyphicon-volume-down","glyphicon-volume-up","glyphicon-qrcode","glyphicon-barcode","glyphicon-tag","glyphicon-tags","glyphicon-book","glyphicon-bookmark","glyphicon-print","glyphicon-camera","glyphicon-font","glyphicon-bold","glyphicon-italic","glyphicon-text-height","glyphicon-text-width","glyphicon-align-left","glyphicon-align-center","glyphicon-align-right","glyphicon-align-justify","glyphicon-list","glyphicon-indent-left","glyphicon-indent-right","glyphicon-facetime-video","glyphicon-picture","glyphicon-map-marker","glyphicon-adjust","glyphicon-tint","glyphicon-edit","glyphicon-share","glyphicon-check","glyphicon-move","glyphicon-chevron-right","glyphicon-plus-sign","glyphicon-minus-sign","glyphicon-remove-sign","glyphicon-ok-sign","glyphicon-question-sign","glyphicon-info-sign","glyphicon-screenshot","glyphicon-remove-circle","glyphicon-ok-circle","glyphicon-ban-circle","glyphicon-arrow-left","glyphicon-arrow-right","glyphicon-arrow-up","glyphicon-arrow-down","glyphicon-share-alt","glyphicon-resize-full","glyphicon-resize-small","glyphicon-exclamation-sign","glyphicon-gift","glyphicon-leaf","glyphicon-fire","glyphicon-eye-open","glyphicon-eye-close","glyphicon-warning-sign","glyphicon-plane","glyphicon-calendar","glyphicon-random","glyphicon-comment","glyphicon-magnet","glyphicon-chevron-up","glyphicon-chevron-down","glyphicon-retweet","glyphicon-shopping-cart","glyphicon-bullhorn","glyphicon-bell","glyphicon-certificate","glyphicon-thumbs-up","glyphicon-thumbs-down","glyphicon-hand-right","glyphicon-hand-left","glyphicon-hand-up","glyphicon-hand-down","glyphicon-circle-arrow-right","glyphicon-circle-arrow-left","glyphicon-circle-arrow-up","glyphicon-circle-arrow-down","glyphicon-globe","glyphicon-wrench","glyphicon-tasks","glyphicon-filter","glyphicon-briefcase","glyphicon-fullscreen","glyphicon-dashboard","glyphicon-paperclip","glyphicon-heart-empty","glyphicon-link","glyphicon-phone","glyphicon-pushpin","glyphicon-usd"]}})}function w(){L.StyleForm=L.Class.extend({initialize:function(t){L.setOptions(this,t),this.createMarkerForm(),this.createGeometryForm(),this.addDOMEvents()},addDOMEvents:function(){L.DomEvent.addListener(this.options.styleEditorOptions.map,"click",this.lostFocus,this),L.DomEvent.addListener(this.options.styleEditorDiv,"click",this.lostFocus,this)},clearForm:function(){this.options.styleEditorOptions.markerForm.hide(),this.options.styleEditorOptions.geometryForm.hide()},createMarkerForm:function(){var t=L.DomUtil.create("div","leaflet-styleeditor-interior-marker",this.options.styleEditorInterior);this.options.styleEditorOptions.markerForm.create(t)},createGeometryForm:function(){var t=L.DomUtil.create("div","leaflet-styleeditor-interior-geometry",this.options.styleEditorInterior);this.options.styleEditorOptions.geometryForm.create(t)},showMarkerForm:function(){this.clearForm(),this.options.styleEditorOptions.markerForm.show()},showGeometryForm:function(){this.clearForm(),this.options.styleEditorOptions.geometryForm.show()},fireChangeEvent:function(t){this.options.styleEditorOptions.util.fireChangedEvent(t)},lostFocus:function(t){for(var e=t.target,o=0;o<10&&e;o++){if(!!e.className&&L.DomUtil.hasClass(e,"leaflet-styleeditor-interior"))return;e=e.parentNode}this.options.styleEditorOptions.markerForm.lostFocus(),this.options.styleEditorOptions.geometryForm.lostFocus()}})}function _(){L.Control.StyleEditor=L.Control.extend({options:{position:"topleft",colorRamp:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"],defaultColor:null,markerType:L.StyleEditor.marker.DefaultMarker,markers:null,defaultMarkerIcon:null,defaultMarkerColor:null,geometryForm:L.StyleEditor.forms.GeometryForm,ignoreLayerTypes:[],forms:{},openOnLeafletDraw:!0,openOnLeafletEditable:!0,showTooltip:!0,strings:{cancel:"Cancel",cancelTitle:"Cancel Styling",tooltip:"Click on the element you want to style",tooltipNext:"Choose another element you want to style"},useGrouping:!0,styleEditorEventPrefix:"styleeditor:",currentElement:null,_editLayers:[],_layerGroups:[]},initialize:function(t){t&&L.setOptions(this,t),this.options.util=new L.StyleEditor.Util({styleEditorOptions:this.options}),this.options.markerType=new this.options.markerType({styleEditorOptions:this.options}),this.options.markerForm=new this.options.markerType.markerForm({styleEditorOptions:this.options}),this.options.geometryForm=new this.options.geometryForm({styleEditorOptions:this.options}),this.getDefaultIcon=this.options.markerType._createMarkerIcon.bind(this.options.markerType),this.createIcon=this.options.markerType.createMarkerIcon.bind(this.options.markerType)},onAdd:function(t){return this.options.map=t,this.createUi()},fireEvent:function(t,e){this.options.util.fireEvent(t,e)},createUi:function(){var t=this.options.controlDiv=L.DomUtil.create("div","leaflet-control-styleeditor leaflet-control leaflet-bar"),e=this.options.controlUI=L.DomUtil.create("a","leaflet-control-styleeditor-interior",t);e.title="Style Editor";var o=this.options.cancelUI=L.DomUtil.create("div","leaflet-control-styleeditor-cancel leaflet-styleeditor-hidden",t);o.innerHTML=this.options.strings.cancel,o.title=this.options.strings.cancelTitle;var n=this.options.styleEditorDiv=L.DomUtil.create("div","leaflet-styleeditor",this.options.map._container);this.options.styleEditorHeader=L.DomUtil.create("div","leaflet-styleeditor-header",n);var s=L.DomUtil.create("div","leaflet-styleeditor-interior",n);return this.addDomEvents(),this.addEventListeners(),this.addButtons(),this.options.styleForm=new L.StyleForm({styleEditorDiv:n,styleEditorInterior:s,styleEditorOptions:this.options}),t},addDomEvents:function(){L.DomEvent.disableScrollPropagation(this.options.styleEditorDiv),L.DomEvent.disableScrollPropagation(this.options.controlDiv),L.DomEvent.disableScrollPropagation(this.options.cancelUI),L.DomEvent.disableClickPropagation(this.options.styleEditorDiv),L.DomEvent.disableClickPropagation(this.options.controlDiv),L.DomEvent.disableClickPropagation(this.options.cancelUI),L.DomEvent.on(this.options.controlDiv,"click",function(){this.toggle()},this)},addEventListeners:function(){this.addLeafletDrawEvents(),this.addLeafletEditableEvents()},addLeafletDrawEvents:function(){!this.options.openOnLeafletDraw||!L.Control.Draw||(this.options.map.on("layeradd",this.onLayerAdd,this),this.options.map.on(L.Draw.Event.CREATED,this.onLayerCreated,this))},addLeafletEditableEvents:function(){!this.options.openOnLeafletEditable||!L.Editable||(this.options.map.on("layeradd",this.onLayerAdd,this),this.options.map.on("editable:created",this.onLayerCreated,this))},onLayerCreated:function(t){this.removeIndicators(),this.options.currentElement=t.layer},onLayerAdd:function(t){this.options.currentElement&&t.layer===this.options.util.getCurrentElement()&&this.enable(t.layer)},onRemove:function(){this.disable(),this.removeDomEvents(),this.removeEventListeners(),L.DomUtil.remove(this.options.styleEditorDiv),L.DomUtil.remove(this.options.cancelUI),delete this.options.styleEditorDiv,delete this.options.cancelUI},removeEventListeners:function(){this.options.map.off("layeradd",this.onLayerAdd),L.Draw&&this.options.map.off(L.Draw.Event.CREATED,this.onLayerCreated),L.Editable&&this.options.map.off("editable:created",this.onLayerCreated)},removeDomEvents:function(){L.DomEvent.off(this.options.controlDiv,"click",function(){this.toggle()},this)},addButtons:function(){var t=L.DomUtil.create("button","leaflet-styleeditor-button styleeditor-nextBtn",this.options.styleEditorHeader);t.title=this.options.strings.tooltipNext,L.DomEvent.on(t,"click",function(e){e.preventDefault(),this.hideEditor(),L.DomUtil.hasClass(this.options.controlUI,"enabled")&&this.createTooltip(),e.stopPropagation()},this)},toggle:function(){L.DomUtil.hasClass(this.options.controlUI,"enabled")?this.disable():this.enable()},enable:function(t){this._layerIsIgnored(t)||(L.DomUtil.addClass(this.options.controlUI,"enabled"),this.options.map.eachLayer(this.addEditClickEvents,this),this.showCancelButton(),this.createTooltip(),t!==void 0&&(this.isEnabled()&&this.removeIndicators(),this.initChangeStyle({target:t})))},isEnabled:function(){return L.DomUtil.hasClass(this.options.controlUI,"enabled")},disable:function(){this.isEnabled()&&(this.options._editLayers.forEach(this.removeEditClickEvents,this),this.options._editLayers=[],this.options._layerGroups=[],this.hideEditor(),this.hideCancelButton(),this.removeTooltip(),L.DomUtil.removeClass(this.options.controlUI,"enabled"))},addEditClickEvents:function(t){if(!this._layerIsIgnored(t)){if(this.options.useGrouping&&t instanceof L.LayerGroup)this.options._layerGroups.push(t);else if(t instanceof L.Marker||t instanceof L.Path){var e=t.on("click",this.initChangeStyle,this);this.options._editLayers.push(e)}}},removeEditClickEvents:function(t){t.off("click",this.initChangeStyle,this)},addIndicators:function(){if(!!this.options.currentElement){var t=this.options.currentElement.target;t instanceof L.LayerGroup?t.eachLayer(function(e){e instanceof L.Marker&&e.getElement()&&L.DomUtil.addClass(e.getElement(),"leaflet-styleeditor-marker-selected")}):t instanceof L.Marker&&t.getElement()&&L.DomUtil.addClass(t.getElement(),"leaflet-styleeditor-marker-selected")}},removeIndicators:function(){if(!!this.options.currentElement){var t=this.options.util.getCurrentElement();t instanceof L.LayerGroup?t.eachLayer(function(e){e.getElement()&&L.DomUtil.removeClass(e.getElement(),"leaflet-styleeditor-marker-selected")}):t.getElement()&&L.DomUtil.removeClass(t.getElement(),"leaflet-styleeditor-marker-selected")}},hideEditor:function(){L.DomUtil.hasClass(this.options.styleEditorDiv,"editor-enabled")&&(this.removeIndicators(),L.DomUtil.removeClass(this.options.styleEditorDiv,"editor-enabled"),this.fireEvent("hidden"))},hideCancelButton:function(){L.DomUtil.addClass(this.options.cancelUI,"leaflet-styleeditor-hidden")},showEditor:function(){var t=this.options.styleEditorDiv;L.DomUtil.hasClass(t,"editor-enabled")||(L.DomUtil.addClass(t,"editor-enabled"),this.fireEvent("visible"))},showCancelButton:function(){L.DomUtil.removeClass(this.options.cancelUI,"leaflet-styleeditor-hidden")},initChangeStyle:function(t){this.removeIndicators(),this.options.currentElement=this.options.useGrouping?this.getMatchingElement(t):t,this.addIndicators(),this.showEditor(),this.removeTooltip();var e=t;e instanceof L.Layer||(e=t.target),this.fireEvent("editing",e),e instanceof L.Marker?(this.options.markerType.resetIconOptions(),this.showMarkerForm(e)):this.showGeometryForm(e)},showGeometryForm:function(t){this.fireEvent("geometry",t),this.options.styleForm.showGeometryForm()},showMarkerForm:function(t){this.fireEvent("marker",t),this.options.styleForm.showMarkerForm()},createTooltip:function(){!this.options.showTooltip||(this.options.tooltipWrapper||(this.options.tooltipWrapper=L.DomUtil.create("div","leaflet-styleeditor-tooltip-wrapper",this.options.map.getContainer())),this.options.tooltip||(this.options.tooltip=L.DomUtil.create("div","leaflet-styleeditor-tooltip",this.options.tooltipWrapper)),this.options.tooltip.innerHTML=this.options.strings.tooltip)},getMatchingElement:function(t){for(var e=null,o=t.target,n=0;n<this.options._layerGroups.length;++n)if(e=this.options._layerGroups[n],e&&o!==e&&e.hasLayer(o))return(!e.options||!e.options.opacity)&&(e.options=o.options,o.setIcon&&(e.setIcon=function(s){e.eachLayer(function(d){d instanceof L.Marker&&d.setIcon(s)})})),this.getMatchingElement({target:e});return t},removeTooltip:function(){this.options.tooltip&&this.options.tooltip.parentNode&&(this.options.tooltip.remove(),this.options.tooltip=void 0)},_layerIsIgnored:function(t){return t===void 0?!1:this.options.ignoreLayerTypes.some(function(e){return t.styleEditor&&t.styleEditor.type.toUpperCase()===e.toUpperCase()})}}),L.control.styleEditor=function(i){return i||(i={}),new L.Control.StyleEditor(i)}}function F(){L.StyleEditor.Util=L.Class.extend({initialize:function(t){t&&L.setOptions(this,t)},fireEvent:function(t,e){this.options.styleEditorOptions.map.fireEvent(this.options.styleEditorOptions.styleEditorEventPrefix+t,e)},fireChangeEvent:function(t){this.fireEvent("changed",t)},hideElement:function(t){t&&L.DomUtil.addClass(t,"leaflet-styleeditor-hidden")},rgbToHex:function(t,e){if(t||(t=this.options.styleEditorOptions.defaultColor,t.indexOf("#")!==0&&(t="#"+t)),t.indexOf("#")===0)return e&&t.replace("#",""),t;if(t.indexOf("(")<0)return"#"+t;var o=t.substring(4).replace(")","").split(","),n=this._componentToHex(parseInt(o[0],10))+this._componentToHex(parseInt(o[1],10))+this._componentToHex(parseInt(o[2],10));return e?n:"#"+n},getCurrentElement:function(){return this.options.styleEditorOptions.currentElement?this.options.styleEditorOptions.currentElement.target!==void 0?this.options.styleEditorOptions.currentElement.target:this.options.styleEditorOptions.currentElement:null},setCurrentElement:function(t){this.options.styleEditorOptions.currentElement.target=t},fillCurrentElement:function(){return this.getCurrentElement().options.fill},getStyle:function(t){var e=this.getCurrentElement(),o=e.options[t];return o||null},setStyle:function(t,e){var o=this.getCurrentElement();if(o instanceof L.Marker)this.options.styleEditorOptions.markerType.setStyle(t,e);else{var n={};n[t]=e,o.setStyle(n)}this.fireChangeEvent(o)},showElement:function(t){t&&L.DomUtil.removeClass(t,"leaflet-styleeditor-hidden")},_componentToHex:function(t){var e=t.toString(16);return e.length===1?"0"+e:e},getMarkersForColor:function(t){t=this.rgbToHex(t);var e=this.options.styleEditorOptions.markerType.options.markers,o=this.options.styleEditorOptions.markers;if(Array.isArray(e)||(Object.keys(e).includes(t)?e=e[t]:e=e.default),o!==null){if(!Array.isArray(o)){var n=Object.keys(o);n.includes(t)?o=o[t]:n.includes("default")?o=o.default:o=e}return e.filter(function(s){return o.includes(s)})}return e},getDefaultMarkerForColor:function(t){t=this.rgbToHex(t);var e=this.getMarkersForColor(t),o=[],n=this.options.styleEditorOptions.defaultMarkerIcon;return n!==null&&(typeof n=="string"&&o.push(n),Object.keys(n).includes(t)&&o.push(n[t])),n=this.options.styleEditorOptions.markerType.options.defaultMarkerIcon,n!==void 0&&(typeof n=="string"&&o.push(n),Object.keys(n).includes(t)&&o.push(n[t])),o.filter(function(s){return e.includes(s)}),o.length>0?o[0]:e[0]}})}l(1),L.StyleEditor={marker:{},forms:{},formElements:{}},L.Marker.include({styleEditor:{type:"Marker"}}),L.Polygon.include({styleEditor:{type:"Polygon"}}),L.Polyline.include({styleEditor:{type:"Polyline"}}),L.Rectangle.include({styleEditor:{type:"Rectangle"}}),F(),a(),r(),h(),u(),m(),g(),E(),v(),k(),C(),S(),O(),D(),b(),w(),_(),p.default=L}]);const x={setup(){let c,p,l;const r=()=>{const a=[25.0263064,121.5262934];c=f.map("map",{zoomControl:!1,attributionControl:!1}).setView(a,10),p=f.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),c.addLayer(p),l=f.featureGroup().addTo(c),new f.Control.Draw({position:"topright",draw:{circle:!1,rectangle:{showArea:!1}},edit:{featureGroup:l}}).addTo(c),c.on("draw:created",m=>{console.log(m),l.addLayer(m.layer)}),f.control.styleEditor().addTo(c)};return I(()=>{r()}),{}}},z={class:"wrap"},P=y("div",{id:"map"},null,-1),H=y("div",{class:"info"},null,-1),A=[P,H];function G(c,p,l,r,a,h){return U(),T("div",z,A)}var W=M(x,[["render",G]]);export{W as default};

(function(e){function a(a){for(var t,r,n=a[0],c=a[1],l=a[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,a=0;a<o.length;a++){for(var s=o[a],t=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(t=!1)}t&&(o.splice(a--,1),e=r(r.s=s[0]))}return e}var t={},i={app:0},o=[];function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,a,s){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(s,t,function(a){return e[a]}.bind(null,t));return s},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,a,s){e.exports=s("56d7")},"0ed7":function(e,a,s){},"10c2":function(e,a,s){},"1cbc":function(e,a,s){},"2fc4":function(e,a,s){},"3c25":function(e,a,s){"use strict";var t=s("fff9"),i=s.n(t);i.a},"3ea0":function(e,a,s){},"3fa5":function(e,a,s){},"56d7":function(e,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("2b0e"),i=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("NavBar"),e.showHelp?s("transition",{attrs:{name:"fade"}},[s("a",{staticClass:"to-up-bt",attrs:{href:"#app"},on:{click:function(a){e.showHelp=!1}}},[s("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]):e._e(),s("transition",{attrs:{name:"fade"}},[s("router-view",{staticStyle:{"margin-top":"20px"}})],1)],1)},o=[],r={name:"app",data:function(){return{showHelp:!1}},created:function(){var e=this;setInterval((function(){e.showHelp=document.getElementById("html").scrollTop>300}),500)}},n=r,c=s("2877"),l=Object(c["a"])(n,i,o,!1,null,null,null),d=l.exports,u=(s("f9e3"),s("2dd8"),s("5f5b")),p=s("8c4f"),m=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[e._v("👨‍💻️ RUP")]),s("div",{staticClass:"info"},[s("p",{staticClass:"phase"},[e._v(" Bienvenido a nuestro blog! Disfruta de su contenido. Selecciona una de las opciones que aparecen arriba. ")])])])])])}],h={name:"Home"},f=h,v=(s("5849"),Object(c["a"])(f,m,b,!1,null,"11e52895",null)),g=v.exports,_=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[s("h2",{staticClass:"phase mb-4"},[e._v("🔁 Fases del RUP")]),s("hr"),s("div",{staticClass:"row"},e._l(e.fases,(function(a,t){return s("div",{key:"a"+t,staticClass:"col-6 mb-3"},[s("div",{staticClass:"tag-name"},[e._v(e._s(a.name))]),s("b-img",{attrs:{src:a.src,"fluid-grow":""}})],1)})),0),s("hr"),s("h2",{staticClass:"phase mb-4"},[e._v("👨‍🔧️ Disciplinas del RUP")]),s("hr"),s("div",{staticClass:"row"},e._l(e.disciplinas,(function(a,t){return s("div",{key:"b"+t,staticClass:"col-6 mb-3"},[s("div",{staticClass:"tag-name red"},[e._v(e._s(a.name))]),s("b-img",{attrs:{src:a.src,fluid:""}})],1)})),0)])],1)},C=[],w={name:"Images",data:function(){return{fases:[],disciplinas:[]}},methods:{add:function(e,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0===s?this.fases.push({name:e,src:a}):this.disciplinas.push({name:e,src:a})}},created:function(){this.add("🏠 Inicio","https://1.bp.blogspot.com/-jtZPCQ_4cAU/XbCX7L5AvVI/AAAAAAAAAo4/HI3JGdl57RcnxE4ebcqGD2wk2TE4CX8AACEwYBhgL/s1600/1278360_beb4_3.jpg"),this.add("🔧 Elaboración","https://1.bp.blogspot.com/-dXunrY3FI74/XbCX77cKKRI/AAAAAAAAApM/XmdfeBwgiLwR0ClxAbKw2S25y6MPBA-VACEwYBhgL/s1600/65437551-negocios-equipo-de-trabajo-profesional-presentaci%25C3%25B3n-de-la-formaci%25C3%25B3n-del-personal-reuni%25C3%25B3n-de-personal-seminari.jpg"),this.add("🏗️ Construcción","https://media.istockphoto.com/vectors/webpage-building-and-software-technology-development-vector-id898623886"),this.add("😄 Transición","https://1.bp.blogspot.com/-bsFfnlKrPZs/XbCX7DZuxZI/AAAAAAAAApA/qYLWm6EKwy0jSGt9kjySK5er2euaTDSfQCEwYBhgL/s1600/13-ideas-para-tener-exito-en-tu-primera-reunion-con-un-potencial-nuevo-cliente.png"),this.add("👨‍💼️ Modelado de negocio","https://1.bp.blogspot.com/-t8ioB2dS874/XbCcVbPw7iI/AAAAAAAAAqc/3j_4-nyG1tIWqH-qkleJJX5grDnnTmM4ACEwYBhgL/s1600/meeting_1r8.png",1),this.add("📝 Requerimientos","https://1.bp.blogspot.com/-8vSfodPTHhE/XbCcUAJjgvI/AAAAAAAAAqg/oV6lBIQtHiIrq0QqKOgOwxkqWifnLivaACEwYBhgL/s1600/KarlaRequerimientos1200Comprimido.jpg",1),this.add("📊 Análisis y 🎨 Diseño","https://www.juangalera.com/wp-content/uploads/2017/08/disen%CC%83o-web-jerez-de-la-frontera-desarrollo-web.jpg",1),this.add("👨‍💻️ Implementación","https://1.bp.blogspot.com/-QPZDg026aJk/XbCcVs9vqwI/AAAAAAAAAqc/AZcx79Zh6TYVIuEBFOjyY5sM55-SZz3UACEwYBhgL/s1600/trabajo-colaborativo-dise-o-desarrollo-web-4_orig.png",1),this.add("📝 Pruebas","https://www.criptomonedaseico.com/wp-content/uploads/2018/09/www.criptomonedaseico.com-crisis-de-bitcoin-evitada-por-el-descubrimiento-de-errores-de-software-750x430.jpg",1),this.add("🚀 Despliegue","https://1.bp.blogspot.com/-lN48aNVR4r0/XbCcVD9o_4I/AAAAAAAAAqk/9Bs9w2-w2scMCNdGJGgbY4L-NOPZyR3HACEwYBhgL/s1600/man-1351346_960_720.png",1),this.add("💼 Gestión del proyecto","https://1.bp.blogspot.com/-m6TEcMac29Q/XbCcU_pX8tI/AAAAAAAAAqU/-UjB_u10Ego6DWw3zKEv9srOrjQ5OQhUACEwYBhgL/s1600/depositphotos_71550381-stock-illustration-business-management-meeting.jpg",1),this.add("🛠️ Configuración y control de cambios","https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170809252/84748293-icono-de-l%C3%ADnea-de-vector-de-configuraci%C3%B3n-de-equipo-aislado-sobre-fondo-blanco-icono-de-l%C3%ADnea-de-configurac.jpg",1),this.add("🌎 Ambiente","https://1.bp.blogspot.com/-nNuNJd4wCWI/XbCcUoQkITI/AAAAAAAAAqY/ezfSETgf1eEqAJEQNs92d1fDqdME0djeQCEwYBhgL/s1600/contenidotexto.jpg",1)}},y=w,A=Object(c["a"])(y,_,C,!1,null,"364aa855",null),j=A.exports,k=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[e._l(e.videos,(function(a,t){return s("div",{key:t,staticClass:"mb-3"},[s("div",{staticClass:"tag-name"},[e._v(e._s(a.name))]),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item",attrs:{src:a.src,allowfullscreen:""}})])])})),s("h2",{staticClass:"phase mb-4"},[e._v("📕 Bibliografías")]),s("hr"),s("Biography",{attrs:{src:"http://blogs.upn.edu.pe/ingenieria/wp-content/uploads/sites/4/2016/10/upn_blog_ing_software-rup_12-oct.jpg",href:"https://youtu.be/AY5Dh3XYshk"}},[e._v("Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube.")]),s("Biography",{attrs:{src:"https://cdn.goconqr.com/uploads/slide_property/image/735278/desktop_a2ab7898-7965-49a8-a47f-de4c93be620f.jpg",href:"https://www.youtube.com/watch?v=7paA_3VxSrQ"}},[e._v("Ingenieros2011 (2016). Ejemplo RUP. 2019, de Youtube.")])],2)],1)},q=[],x={name:"Images",data:function(){return{videos:[]}},methods:{add:function(e,a){this.videos.push({name:e,src:a})}},created:function(){this.add("🤔 ¿Qué es la metodología RUP?","https://www.youtube.com/embed/AY5Dh3XYshk"),this.add("💭 ¿Cómo se usa en la vida diaria?","https://www.youtube.com/embed/7paA_3VxSrQ")}},E=x,S=Object(c["a"])(E,k,q,!1,null,"2962b7cb",null),B=S.exports,P=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center"}},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",controls:"",indicators:"",background:"black","img-width":"1024","img-height":"480"}},e._l(e.slides,(function(e,a){return s("b-carousel-slide",{key:"s"+a,attrs:{caption:e.caption,text:e.text,"img-src":e.src}})})),1),s("p",{staticClass:"mt-3"},[s("a",{attrs:{href:"https://www.itson.mx/oferta/isw/Documents/mapa_isw2016_v4_seriacion_simplificada_febrero2017.pdf"}},[e._v("Ver mapa curricular oficial del ITSON 2016.")])]),s("p",[s("a",{attrs:{href:"https://www.itson.mx/oferta/isw/Paginas/isw.aspx"}},[e._v("Ir a la oferta académica de ISW del ITSON.")])])],1)],1)},I=[],D={name:"CurricularMap",data:function(){return{slides:[]}},created:function(){this.slides.push({caption:"🏠 Mapa curricular de Ingeniería en Software plan 2016 ITSON",text:"",src:"assets/mapa.png"}),this.slides.push({caption:"🏠 Fase de Inicio",text:"",src:"assets/Diapositiva1.PNG"}),this.slides.push({caption:"🔧 Fase de Elaboración",text:"",src:"assets/Diapositiva2.PNG"}),this.slides.push({caption:"🏗️ Fase de Construcción",text:"",src:"assets/Diapositiva3.PNG"}),this.slides.push({caption:"😄 Fase de Transición",text:"",src:"assets/Diapositiva4.PNG"})}},U=D,O=Object(c["a"])(U,P,I,!1,null,"4cf9c8aa",null),Q=O.exports,z=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("transition",{attrs:{name:"fade"}},[e.showBookmarks?s("b-list-group",{staticClass:"floating-navbar"},[s("b-list-group-item",{attrs:{href:"#rup"}},[e._v("👨‍💻️ RUP")]),s("b-list-group-item",{attrs:{href:"#caracteristicas"}},[e._v("📜 Características")]),s("b-list-group-item",{attrs:{href:"#ciclo-de-vida"}},[e._v("🍃 Ciclo de vida")]),s("b-list-group-item",{attrs:{href:"#disciplinas"}},[e._v("👨‍🔧️ Disciplinas")]),s("b-list-group-item",{attrs:{href:"#flujo-de-trabajo"}},[e._v("💼 Flujo de trabajo")]),s("b-list-group-item",{attrs:{href:"#roles"}},[e._v("👨‍💻 Roles")]),s("b-list-group-item",{attrs:{href:"#bibliografias"}},[e._v("📕 Bibliografías")])],1):e._e()],1),s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title",attrs:{id:"rup"}},[e._v("👨‍💻️ RUP")]),s("div",{staticClass:"info"},[s("p",{staticClass:"block"},[e._v("El presente blog se refiere al tema “Rational Unified Process (RUP)” el cual puede ser definido como un proceso de ingeniería de software, para producir software de calidad, que cumpla con las normas a nivel mundial y que ofrezca flexibilidad en plazos y presupuestos.")]),s("p",{staticClass:"phase center mb-4",attrs:{id:"caracteristicas"}},[e._v("📜 Características")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏢 Dirigido por Casos de Uso")]),s("p",{staticClass:"block"},[e._v("Se define un caso de uso como un fragmento de funcionalidad del sistema que proporciona al usuario un valor añadido. Los casos de uso representan los requisitos funcionales del sistema.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🎯 Proceso centrado en la arquitectura")]),s("p",{staticClass:"block"},[e._v("La arquitectura es la estructura de los componentes importantes de un sistema interactuando mediante interfaces. Es una vista del diseño completo con las características más importantes resaltadas, dejando los detalles de lado.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🔄 Proceso iterativo e incremental")]),s("p",{staticClass:"block"},[e._v(" Cada mini proyecto es una iteración que resulta en un incremento. Las iteraciones hace referencia a pasos en el flujo de trabajo, y los incrementos a crecimientos en el producto. Las iteraciones deben estar controladas, esto significa que deben seleccionarse y ejecutarse de una forma planificada. ")]),s("p",{staticClass:"phase center mb-4",attrs:{id:"ciclo-de-vida"}},[e._v("🍃 Ciclo de vida")]),s("p",{staticClass:"block"},[e._v("El ciclo de vida del software del RUP se descompone en cuatro fases secuenciales. En cada extremo de una fase se realiza una evaluación para determinar si los objetivos de la fase se han cumplido. Una evaluación satisfactoria permite que el proyecto se mueva a la próxima fase.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏠 Inicio")]),s("p",{staticClass:"block"},[e._v("Se enfoca hacia la comprensión del problema y la tecnología, la delimitación del ámbito del proyecto, la eliminación de los riesgos críticos, y al establecimiento de una base de la arquitectura.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🔧 Elaboración")]),s("p",{staticClass:"block mb-4"},[e._v("Durante la fase de elaboración se especifican en detalle la mayoría de los casos de uso del producto y se diseña la arquitectura.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🏗️ Construcción")]),s("p",{staticClass:"block mb-4"},[e._v("Durante la fase de construcción se crea el producto. La línea base de la arquitectura crece hasta convertirse en el sistema completo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("😄 Transición")]),s("p",{staticClass:"block mb-4"},[e._v(" Durante la fase de transición se asegurar que el software está disponible para los usuarios finales, principalmente incluye pruebas, la preparación del producto para su entrega y ajustes menores debido a la retroalimentación del usuario. ")]),s("p",{staticClass:"phase mb-4",attrs:{id:"disciplinas",name:"disciplinas"}},[e._v("👨‍🔧️ Disciplinas")]),s("p",{staticClass:"block"},[e._v("Cada disciplina es un conjunto de actividades relacionadas (flujos de trabajo) vinculadas a un área específica dentro del proyecto total. A continuación se describe rápidamente cada una de estas disciplinas.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💼️ Modelado de negocio")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos comprender la estructura y la dinámica de la organización, comprender problemas actuales e identificar posibles mejoras, comprender los procesos de negocio.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Requerimientos")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📊 Análisis y 🎨 Diseño")]),s("p",{staticClass:"block mb-4"},[e._v("Esta disciplina tiene como objetivos establecer lo que el sistema debe hacer, definir los límites del sistema, y una interfaz de usuario, realizar una estimación del costo y tiempo de desarrollo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💻️ Implementación")]),s("p",{staticClass:"block mb-4"},[e._v("En este flujo de trabajo se implementan las clases y objetos en archivos fuente, binarios, ejecutables y demás. El resultado final de este flujo de trabajo es un sistema ejecutable.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Pruebas")]),s("p",{staticClass:"block mb-4"},[e._v("Este flujo de trabajo es el encargado de evaluar la calidad del producto que estamos desarrollando, pero no para aceptar o rechazar el producto al final del proceso de desarrollo, sino que debe ir integrado en todo el ciclo de vida.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🚀 Despliegue")]),s("p",{staticClass:"block mb-4"},[e._v("El objetivo de este flujo de trabajo es producir con éxito distribuciones del producto y distribuirlo a los usuarios.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("💼 Gestión del proyecto")]),s("p",{staticClass:"block mb-4"},[e._v("La Gestión del proyecto nos permite lograr un balance al gestionar objetivos, riesgos y restricciones para desarrollar un producto que sea acorde a los requisitos de los clientes y los usuarios.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠️ Configuración y control de cambios")]),s("p",{staticClass:"block mb-4"},[e._v("La finalidad de este flujo de trabajo es mantener la integridad de todos los artefactos que se crean en el proceso, así como de mantener información del proceso evolutivo que han seguido.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🌎 Ambiente")]),s("p",{staticClass:"block mb-4"},[e._v("La finalidad de este flujo de trabajo es dar soporte al proyecto con las adecuadas herramientas, procesos y métodos. Brinda una especificación de las herramientas que se van a necesitar en cada momento, así como definir la instancia concreta del proceso que se va a seguir.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠 Artefactos")]),s("p",{staticClass:"block mb-4"},[e._v("Un producto o artefacto es un trozo de información que es producido, modificado o usado durante el proceso de desarrollo de software.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"flujo-de-trabajo"}},[e._v("💼 Flujo de trabajo")]),s("p",{staticClass:"block mb-4"},[e._v("Un flujo de trabajo describe la secuencia en que se realizan las actividades en una disciplina, quienes la realizan (trabajadores) y que artefactos producen.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"roles"}},[e._v("👨‍💻 Roles")]),s("p",{staticClass:"block"},[e._v("Son los personajes encargados de la realización de las actividades definidas dentro de los flujos de trabajo de cada una de las disciplinas del RUP, estos actores se dividen en varias categorías.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📊 Analistas")]),s("p",{staticClass:"block"},[e._v("Son los encargados de ponerse de acuerdo con el cliente y recibir los requerimientos.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💻️ Desarrolladores")]),s("p",{staticClass:"block"},[e._v("Son los que desarrollan el software encargado por el cliente, según los requerimientos y el criterio del analista.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("👨‍💼️ Gestores")]),s("p",{staticClass:"block"},[e._v("Son los jefes de proyecto. Se encargan de mantener en orden el equipo.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("⛑️ Apoyo")]),s("p",{staticClass:"block"},[e._v("Desempeñan diferentes roles, como documentadores, artistas, administradores de sisteas, etc.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("📝 Especialistas en pruebas")]),s("p",{staticClass:"block"},[e._v("Se encargan de hacer las pruebas del software requerido o llevar el diseño de las pruebas.")]),s("p",{staticClass:"sub-phase mb-4"},[e._v("🛠️ Otros roles")]),s("p",{staticClass:"block"},[e._v("Estas personas pueden desempeñar cualquier rol, como desarrollador, gestor, etc.")]),s("p",{staticClass:"phase mb-4",attrs:{id:"bibliografias"}},[e._v("📕 Bibliografías")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://dsc.itmorelia.edu.mx/web/images/logo.png",href:"http://dsc.itmorelia.edu.mx/~jcolivares/courses/pm10a/rup.pdf",white:"yes",bgcolor:"white"}},[e._v("Gustavo Torossi. (s/f). El Proceso Unificado de Desarrollo de Software. 2019, de Departamento de Sistemas y Computación del Instituto Tecnológico de Morelia.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://3.bp.blogspot.com/-GQI9FjY84MM/Ti4rVWnVY4I/AAAAAAAAAB8/MBOTgUxDPno/s240/usac-sin-fondo.png",href:"http://biblioteca.usac.edu.gt/tesis/08/08_0308_CS.pdf",white:"yes",bgcolor:"white"}},[e._v("Julio Cesar Rueda Chacón. (2006). Aplicación de la metodología RUP para el desarrollo de rápido de aplicaciones. 2019, de Universidad de San Carlos de Guatemala.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"http://rd.udb.edu.sv:8080/jspui/image/logo.gif",href:"http://rd.udb.edu.sv:8080/jspui/bitstream/11715/478/1/47400_tesis.pdf",white:"yes",bgcolor:"white"}},[e._v("Belloso Cicilia, Claudia Ivonne. (2009). Monografía sobre la metodología de desarrollo de software, rational unified proccess (RUP). 2019, de Universidad Don Bosco.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://www.uaeh.edu.mx/images/uaeh_logo_color.png",href:"https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/11150/Flujo%20de%20trabajo%20del%20análisis%20y%20diseño%20de%20Rup.pdf",white:"yes",bgcolor:"white"}},[e._v("Sergio Demián Gracián Hernández. (2006). Flujo de trabajo del análisis y diseño del RUP. 2019, de Universidad Autónoma del Estado de Hidalgo.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://www.unam.mx/sites/default/files/images/eventos/acciones_0.jpg",href:"http://www.ptolomeo.unam.mx:8080/xmlui/bitstream/handle/132.248.52.100/175/A8%20Cap%C3%ADtulo%205.pdf?sequence=8",white:"yes",bgcolor:"white"}},[e._v("s/a. (s/f). Proceso Unificado Rational Aplicado. 2019, de Repositorio digital de la Facultad de Ingeniería de la Universidad de la UNAM.")]),s("Biography",{staticClass:"mb-3",staticStyle:{border:"2px solid white"},attrs:{src:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/3b/bd/a0/3bbda010-224e-f149-e1b4-ec9dcf3b649f/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/320x0w.jpg",href:"https://youtu.be/AY5Dh3XYshk",white:"yes",bgcolor:"white"}},[e._v("Julián Vanegas. (2016). Metodología RUP. 22 de octubre del 2019, de YouTube .")])],1)])])],1)},R=[],G={name:"RUP",data:function(){return{showBookmarks:!0}},created:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.showBookmarks=!1)}},M=G,N=(s("c005"),Object(c["a"])(M,z,R,!1,null,"788cd7b8",null)),T=N.exports,Y=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("b-container",{staticClass:"main",staticStyle:{"text-align":"center","background-color":"transparent"}},[s("iframe",{staticStyle:{"background-color":"white"},attrs:{frameborder:"0",height:"900",marginheight:"0",marginwidth:"0",src:"https://docs.google.com/forms/d/e/1FAIpQLSfjOX4FLuHJPEVJk14UULa38ghZ47v0zl20yNwchDPFHCKElw/viewform?embedded=true",width:"640"}},[e._v("Cargando…")])])],1)},L=[],$={name:"Images",data:function(){return{videos:[]}},methods:{add:function(e,a){this.videos.push({name:e,src:a})}},created:function(){this.add("🤔 ¿Qué es la metodología RUP?","https://www.youtube.com/embed/AY5Dh3XYshk"),this.add("💭 ¿Cómo se usa en la vida diaria?","https://www.youtube.com/embed/7paA_3VxSrQ")}},V=$,X=Object(c["a"])(V,Y,L,!1,null,"32835ac7",null),F=X.exports,H=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"frame"},[s("div",{staticClass:"body"},[s("Quiz",{attrs:{questions:e.questions}})],1)])},J=[],K={name:"QuizV",data:function(){return{questions:[]}},methods:{},created:function(){this.questions.push({title:"👨‍💻️ ¿Qué es RUP?",answers:["Un proceso para hacer una base de datos.","Una metodología para desarrollar software.","Es el nombre del procedimiento donde el cliente da los requerimientos."],correct:1}),this.questions.push({title:"🍃 ¿Qué es un ciclo de vida?",answers:["Es el que determina la vida del producto.","Es el proceso donde se codifica el producto.","Es una fase secuencial para determinar si los objetivos se han cumplido."],correct:2}),this.questions.push({title:"🏗️ ¿Qué ocurre en la fase de construcción?",answers:["Se crea el producto.","Se construyen las bases del producto.","No sé."],correct:0}),this.questions.push({title:"👨‍🔧️ ¿Qué son las disciplinas?",answers:["Se encarga de estudiar los estándares para hacer software.","Normas utilizadas para desarrollar productos.","Conjunto de actividades de un área específica del proyecto."],correct:2}),this.questions.push({title:"📝 ¿Qué ocurre en la disciplina de requerimientos?",answers:["Establecer lo que el sistema debe hacer, realizar estimaciones, etc.","Conocer los requerimientos del cliente.","Requerir al desarrollador hacer el producto."],correct:0}),this.questions.push({title:"🚀 ¿Para qué sirve la disciplina de despliegue?",answers:["Almacenar el código.","Distribuir el producto al usuario final.","Se hacen pruebas del producto."],correct:1}),this.questions.push({title:"📊 ¿Qué hacen los analistas?",answers:["Analizan la información","Llegan a un acuerdo con el cliente.","No sé"],correct:1}),this.questions.push({title:"👨‍💻️ ¿Qué hacen los desarrolladores?",answers:["Hacer el procedimiento indicado.","Crear el esquema de análisis.","Desarrollar el software requerido."],correct:2})}},Z=K,W=(s("ac6e"),Object(c["a"])(Z,H,J,!1,null,"07fbf3b0",null)),ee=W.exports,ae=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},se=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"frame"},[s("iframe",{attrs:{src:"https://www.puzzlefast.com/en/puzzles/2019102723204536/embedded-puzzle"}},[e._v("Cargando…")])])}],te={name:"Activity"},ie=te,oe=(s("b3dc"),Object(c["a"])(ie,ae,se,!1,null,"57f56647",null)),re=oe.exports,ne=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%","padding-top":"8%"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[e._v("👪 Acerca de")]),e._m(0),s("Biography",{staticClass:"mb-3",attrs:{src:"https://avatars0.githubusercontent.com/u/520683?s=460&v=4",href:"https://github.com/BrayanIribe",bgcolor:"white",color:"black"}},[s("p",[e._v("👨‍💻️ Desarrollador y 📊 Analista.")]),s("p",[e._v("Brayan Alexis Iribe Ruiz.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"assets/mavely.jpg",bgcolor:"white",color:"black"}},[s("p",[e._v("📊 Analista.")]),s("p",[e._v("Alexa Mavely Sanchez Bojorquez.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"assets/paul.jpg",bgcolor:"white",color:"black"}},[s("p",[e._v("📝 Documentación.")]),s("p",[e._v("Paul Alejandro Becerra Candia.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"assets/chafino.jpg",bgcolor:"white",color:"black"}},[s("p",[e._v("🎨 Diseñador.")]),s("p",[e._v("Héctor Daniel Chafino Orduño.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"assets/soqui.jpeg",bgcolor:"white",color:"black"}},[s("p",[e._v("📝 Documentación.")]),s("p",[e._v("Rafael García Soqui.")])]),s("h3",{staticClass:"mt-4 mb-5",staticStyle:{"font-weight":"lighter"}},[e._v("👨‍💻️ Tecnologías utilizadas")]),s("Biography",{staticClass:"mb-3",attrs:{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",href:"https://github.com",bgcolor:"white",color:"black"}},[s("p",[e._v("✅ Github Pages.")]),s("p",[e._v("Gracias a Github Pages este proyecto fue posible. Nos ofreció hospedaje gratuito 🚀 deployments rápidos.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"https://cdn.changelog.com/uploads/icons/topics/nnG/icon_large.png?v=63694227909",href:"https://vuejs.org",bgcolor:"white",color:"black"}},[s("p",[e._v("✅ Vue.js.")]),s("p",[e._v("Gracias al framework Vue.js, este proyecto es una realidad. Aceleró de una manera radical el desarrollo y se mantiene el código organizado gracias a sus estándares.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"https://bootstrap-vue.js.org/_nuxt/icons/icon_512.67aef2.png",href:"https://bootstrap-vue.js.org/",bgcolor:"white",color:"black"}},[s("p",[e._v("✅ BootrstrapVue.")]),s("p",[e._v("Gracias al framework BootstrapVue se pudo ahorrar mucho tiempo en el diseño del sitio web.")])]),s("Biography",{staticClass:"mb-3",attrs:{src:"http://ww.monterrey2016.com/sites/default/files/sites/default/files/images/equipos/logos/logo_potros_itson_1.png",href:"https://itson.mx",bgcolor:"white",color:"black"}},[s("p",[e._v("✅ Orgullosamente Potros ITSON.")]),s("p",[e._v("Somos alumnos del ITSON, cursando el primer semestre (2019) de la licenciatura Ingeniería en Software.")])]),e._m(1)],1)])])},ce=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"info"},[s("p",{staticClass:"block mt-3"},[e._v(" Este blog fue creado a partir de una asignación de la materia Ingeniería en Software en el ITSON durante el segundo parcial en el semestre 2019-B. ")]),s("p",{staticClass:"block mt-3"},[e._v("👨‍🏫️ Docente: Verónica Sierra García.")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{staticClass:"mb-5"},[s("a",{staticClass:"text-white",attrs:{href:"https://github.com/BrayanIribe/blog-isw-itson"}},[e._v("👀 ¿Interesado en ver el código del proyecto? Da clic aquí! ✅")])])}],le={name:"About"},de=le,ue=(s("5e80"),Object(c["a"])(de,ne,ce,!1,null,"7d3e06f7",null)),pe=ue.exports,me=[{path:"/",component:g,name:"Inicio"},{path:"/rup",component:T,name:"👨‍💻️ ¿Qué es RUP?"},{path:"/images",component:j,name:"🖼️ Imágenes"},{path:"/videos",component:B,name:"🎥 Vídeos"},{path:"/poll",component:F,name:"🗳 Encuesta"},{path:"/quiz",component:ee,name:"📝 Quiz"},{path:"/activity",component:re,name:"🕹️ Actividad"},{path:"/curricular-map",component:Q,name:"🎓 Mapa curricular"},{path:"/about",component:pe,name:"👪 Acerca de"},{path:"*",component:g}],be=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("b-navbar",{attrs:{toggleable:"xl",type:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav-text-collapse",right:""}}),s("transition",{attrs:{name:"fade"}},["/"!=e.$route.fullPath?s("b-navbar-brand",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.$router.push("/")}}},[e._v("👨‍💻️ RUP")]):e._e()],1),s("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto",attrs:{right:""}},e._l(e.routes,(function(a,t){return s("b-nav-item",{key:t,class:{active:e.$route.fullPath===a.path},attrs:{right:""},on:{click:function(s){return e.pickRoute(a)}}},[e._v(e._s(a.name))])})),1)],1)],1)},he=[],fe=(s("d81d"),{name:"NavBar",data:function(){return{routes:[]}},methods:{pickRoute:function(e){this.$router.push(e.path)}},created:function(){var e=this;this.$routes.map((function(a){"/"!==a.path&&"*"!==a.path&&e.routes.push(a)}))}}),ve=fe,ge=(s("7ef4"),Object(c["a"])(ve,be,he,!1,null,"4aaaf4c8",null)),_e=ge.exports,Ce=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"quiz"},[e.actual<e.iQuestions.length?[s("div",{staticClass:"questions"},e._l(e.iQuestions,(function(a,t){return s("div",{key:"q"+t,class:{selected:e.actual===t,success:e.actual>t&&a.answer===a.correct,error:e.actual>t&&a.answer!==a.correct}},[e._v(e._s(t+1))])})),0),s("div",{staticClass:"question-body"},[s("div",{staticClass:"title"},[e._v(e._s(this.question.title))]),e._l(this.question.answers,(function(a,t){return s("div",{key:"a"+t,staticClass:"answer",on:{click:function(a){return e.pick(t)}}},[s("font-awesome-icon",{attrs:{icon:"chevron-right"}}),e._v(" "+e._s(a)+" ")],1)}))],2)]:[s("div",{staticClass:"status"},[e.approve?[s("div",{staticClass:"badge mb-3"},[s("font-awesome-icon",{attrs:{icon:"check"}})],1),s("h1",[e._v("Felicidades 🎉! Eres muy inteligente 🧠, sigue así!")])]:[s("div",{staticClass:"badge mb-3"},[e.approve?e._e():s("font-awesome-icon",{attrs:{icon:"times"}})],1),s("h1",[e._v("Chalee! No pasaste el Quiz! 😬😿")])],s("h2",[e._v(e._s(this.aciertos)+"/"+e._s(this.iQuestions.length))])],2),s("div",{staticClass:"answers"},e._l(this.iQuestions,(function(a,t){return s("div",{key:"qa"+t,staticClass:"question"},[s("h4",[e._v(e._s(t+1)+" - "+e._s(a.title))]),a.answer!==a.correct?s("p",{staticClass:"text-danger"},[s("font-awesome-icon",{attrs:{icon:"times"}}),e._v(" "+e._s(a.answers[a.answer])+" ")],1):e._e(),s("p",{staticClass:"text-primary"},[s("font-awesome-icon",{attrs:{icon:"check"}}),e._v(" "+e._s(a.answers[a.correct])+" ")],1)])})),0),s("b-button",{staticClass:"mt-5",attrs:{variant:"primary",block:""},on:{click:e.restart}},[e._v("¡Quiero volver a hacer el Quiz!")])]],2)},we=[],ye={props:["questions"],name:"Quiz",data:function(){return{actual:0,iQuestions:[]}},computed:{question:function(){return this.iQuestions[this.actual]},aciertos:function(){var e=0;return this.iQuestions.map((function(a){a.answer===a.correct&&e++})),e},approve:function(){var e=this.aciertos/this.iQuestions.length;return e>7}},methods:{restart:function(){this.iQuestions.map((function(e){e.answer=-1})),this.actual=0},pick:function(e){this.question.answer=e,this.actual++}},created:function(){var e=this;this.questions.map((function(a){a=JSON.parse(JSON.stringify(a)),a.answer=-1,e.iQuestions.push(a)}))}},Ae=ye,je=(s("a898"),Object(c["a"])(Ae,Ce,we,!1,null,"76b75520",null)),ke=je.exports,qe=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},xe=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"row footer"},[s("div",{staticClass:"col-sm-12 thanks-to"},[s("a",{staticClass:"logo itson",attrs:{href:"https://itson.mx"}}),s("a",{staticClass:"logo vue",attrs:{href:"https://vuejs.org"}}),s("a",{staticClass:"logo github",attrs:{href:"https://github.com/BrayanIribe"}})])])])}],Ee={name:"Footer"},Se=Ee,Be=(s("7094"),Object(c["a"])(Se,qe,xe,!1,null,"d845c4da",null)),Pe=Be.exports,Ie=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"bio",style:e.bg},[s("div",{staticClass:"pic",style:e.image}),s("div",{staticClass:"info"},[s("div",{staticClass:"quote"},[e._t("default")],2),s("a",{class:{white:"yes"===this.white},attrs:{href:e.href}},[e._v(e._s(e.href))])])])},De=[],Ue=(s("99af"),{props:["src","href","white","bgcolor","color"],name:"Biography",computed:{image:function(){return"background-image: url('".concat(this.src,"'); ")+(this.bgcolor?"background-color: "+this.bgcolor:"")},bg:function(){return this.bgcolor&&this.color?"background-color: ".concat(this.bgcolor,"; color: ").concat(this.color):null}}}),Oe=Ue,Qe=(s("3c25"),Object(c["a"])(Oe,Ie,De,!1,null,"4cc5718c",null)),ze=Qe.exports,Re=s("ecee"),Ge=s("c074"),Me=s("ad3d");s("2fc4");t["default"].config.productionTip=!1,t["default"].prototype.$routes=me,t["default"].use(u["a"]),Re["c"].add(Ge["c"]),Re["c"].add(Ge["b"]),Re["c"].add(Ge["a"]),Re["c"].add(Ge["d"]),t["default"].component("font-awesome-icon",Me["a"]),t["default"].component("Quiz",ke),t["default"].component("NavBar",_e),t["default"].component("Footer",Pe),t["default"].component("Biography",ze);var Ne=new p["a"]({routes:me});t["default"].use(p["a"]),new t["default"]({router:Ne,render:function(e){return e(d)}}).$mount("#app")},5849:function(e,a,s){"use strict";var t=s("10c2"),i=s.n(t);i.a},"5e80":function(e,a,s){"use strict";var t=s("6766"),i=s.n(t);i.a},6766:function(e,a,s){},7094:function(e,a,s){"use strict";var t=s("0ed7"),i=s.n(t);i.a},"7ef4":function(e,a,s){"use strict";var t=s("b660"),i=s.n(t);i.a},a898:function(e,a,s){"use strict";var t=s("3fa5"),i=s.n(t);i.a},ac6e:function(e,a,s){"use strict";var t=s("b65f"),i=s.n(t);i.a},b3dc:function(e,a,s){"use strict";var t=s("3ea0"),i=s.n(t);i.a},b65f:function(e,a,s){},b660:function(e,a,s){},c005:function(e,a,s){"use strict";var t=s("1cbc"),i=s.n(t);i.a},fff9:function(e,a,s){}});
//# sourceMappingURL=app.d4e4299e.js.map
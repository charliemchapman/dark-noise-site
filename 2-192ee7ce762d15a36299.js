(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(n,e){n.exports={appstore_link:"https://itunes.apple.com/app/id1465439395",playstore_link:null,google_analytics_ID:null,presskit_download_link:null,video_or_screenshot:"screenshot",app_url:"https://darknoise.app/",path_prefix:"/",app_name:"Dark Noise",app_price:null,app_description:"Simple, fast, white noise app for iOS.",app_keywords:["White Noise","Ambient Noise","Meditation"],your_name:"Charlie Chapman",your_link:"https://charliemchapman.com",your_city:"St. Louis",email_address:"dev.charliemchapman@gmail.com",linkedin_username:null,facebook_username:null,instagram_username:null,twitter_username:"DarkNoiseApp",github_username:null,youtube_username:null,features:[{title:"Simple",description:"A beautiful, clean interface makes it easy to find and play your favorite noises.",fontawesome_icon_name:"star"},{title:"Fast",description:"With widgets, quick actions, and Siri Shortcuts support, you can start up a noise in seconds, in any environment.",fontawesome_icon_name:"bolt"},{title:"1 Price, All Noises",description:"All noises are included with 1 price, so you'll have access to every noise you see now, or added in the future.",fontawesome_icon_name:"dollar-sign"}],header_background:"rgba(0, 0, 0, 0.1)",topbar_title_color:"#ffffff",cover_overlay_color_rgba:"rgba(40, 32, 51, 0.9)",device_color:"black",body_background_color:"#0a0117",primary_text_color:"#000",content_width:"1170px",font:'"Helvetica Neue", sans-serif',link_color:"#802bff",app_title_color:"#ffffff",app_price_color:"#ffffff",app_description_color:"#ffffff",feature_title_color:"#ffffff",feature_text_color:"#999999",feature_icons_foreground_color:"#802bff",feature_icons_background_color:"#f6f6f6",social_icons_foreground_color:"#666666",social_icons_background_color:"#e6e6e6",footer_text_color:"#888888"}},148:function(n,e,t){"use strict";var i=t(150),a=t(0),o=t.n(a),r=t(4),p=t.n(r),l=t(153),s=t.n(l);function d(n){var e=n.description,t=n.lang,a=n.meta,r=n.keywords,p=n.title,l=i.data.site,d=e||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:p,titleTemplate:l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:p},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:image",content:"https://darknoise.app/app-icon-dark-noise-512.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:p.a.string,lang:p.a.string,meta:p.a.array,keywords:p.a.arrayOf(p.a.string),title:p.a.string.isRequired},e.a=d},149:function(n,e,t){"use strict";var i=t(0),a=t.n(i),o=t(4),r=t.n(o),p=t(151),l=t.n(p),s=t(152),d=t(147),c=t.n(d);function f(){var n=l()(["\n  html {\n    font-size: 62.5%;\n    font-family: ",";\n    line-height: 1;\n  }\n\n  body {\n    font-size: 2rem;\n    background-color: ",";\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  // Better font rendering\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n  }\n\n  a:link,\n  a:hover,\n  a:visited,\n  a:active {\n    color: ",";\n    text-decoration: none;\n  }\n\n  // Various resets\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n  }\n\n  .imageWrapper {\n    // Sets the background image in the header area\n    height: 714px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: top;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerImage {\n    position: unset !important;\n    height: 0 !important;\n    display: block !important;\n    \n  }\n  .headerImage > div{\n    padding-bottom: 0 !important;\n  }\n  .headerImage img {\n    z-index: -1;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerBackground {\n    height: 115px;\n    background-color: ",";\n  }\n\n  .container {\n    // Set up the container for the site content\n    display: grid;\n    margin: auto;\n    max-width: ",';\n    padding-left: 15px;\n    padding-right: 15px;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: 115px 876px auto auto;\n    grid-column-gap: 30px;\n    grid-template-areas:\n      "h h h h h h h h h h h h"\n      "p p p p p i i i i i i i"\n      "c c c c c c c c c c c c"\n      "f f f f f f f f f f f f";\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .container {\n      // Set up the container for the site content\n      grid-template-rows: 115px 811px auto auto;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .container {\n      grid-column-gap: 0px;\n      grid-template-columns: 1;\n      grid-template-rows: 115px auto auto auto auto;\n      grid-template-areas:\n        "h h h h h h h h h h h h"\n        "i i i i i i i i i i i i"\n        "p p p p p p p p p p p p"\n        "c c c c c c c c c c c c"\n        "f f f f f f f f f f f f";\n    }\n  }\n\n  header {\n    grid-area: h;\n    display: flex;\n  }\n\n  .logo {\n    display: flex;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    height: 115px;\n  }\n\n  .logo > p {\n    color: ',";\n    display: flex;\n    font-weight: bold;\n    padding-bottom: 1px;\n  }\n\n  .headerIcon {\n    width: 50px;\n    height: 50px;\n    -webkit-clip-path: url(#shape);\n    clip-path: url(#shape);\n    margin-right: 15px;\n  }\n\n  // Navigation Links\n  nav {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 115px;\n  }\n\n  nav > ul {\n    color: #fff;\n    display: flex;\n    list-style-type: none;\n  }\n\n  nav > ul li {\n    padding-left: 50px;\n    text-align: right;\n  }\n\n  nav > ul li:first-child {\n    padding-left: 0px;\n  }\n\n  nav > ul li a:link,\n  nav > ul li a:visited {\n    text-decoration: none;\n    color: rgba(",", 0.6);\n  }\n\n  nav > ul li a:hover,\n  nav > ul li a:active {\n    text-decoration: none;\n    color: rgba(",", 1);\n  }\n\n  // App Title, Price, Description and Links\n\n  .appInfo {\n    grid-area: i;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 140px;\n    align-content: flex-start;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appInfo {\n      padding-top: 50px;\n      justify-content: center;\n    }\n  }\n\n  .appIconShadow {\n    display: flex;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  .appIconLarge {\n    width: 120px;\n    height: 120px;\n    -webkit-clip-path: url(#shape120);\n    clip-path: url(#shape120);\n  }\n\n  .appNamePriceContainer {\n    display: flex;\n    flex: 0 1 auto;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    margin-left: 30px;\n  }\n\n  .appName {\n    color: ",";\n  }\n\n  .appPrice {\n    color: ",";\n    font-weight: normal;\n    margin-top: 13px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .appNamePriceContainer {\n      width: 100%;\n      margin-left: 0px;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .appName {\n      margin-top: 30px;\n      text-align: center;\n    }\n\n    .appPrice {\n      margin-top: 13px;\n      text-align: center;\n    }\n  }\n\n  .appDescriptionContainer {\n    font-size: 2.5rem;\n    font-weight: normal;\n    width: 100%;\n    align-items: flex-start;\n    margin-top: 45px;\n    flex: 0 1 auto;\n    line-height: 1.5;\n  }\n\n  .appDescription {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appDescription {\n      text-align: center;\n    }\n  }\n\n  .downloadButtonsContainer {\n    display: inline-block;\n    margin-top: 42px;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  @media only screen and (max-width: 992px) {\n    .downloadButtonsContainer {\n      text-align: center;\n    }\n  }\n\n  .playStore {\n    height: 75px;\n    margin-right: 24px;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .playStore {\n      margin-right: 24px;\n      margin-bottom: 0px;\n    }\n  }\n\n  @media only screen and (max-width: 528px) {\n    .playStore {\n      margin-right: 0px;\n      margin-bottom: 24px;\n    }\n  }\n\n  .appStore {\n    height: 75px;\n  }\n\n  // iPhone Device Preview\n\n  .iphonePreview {\n    grid-area: p;\n    background-size: 400px auto;\n    background-repeat: no-repeat;\n    margin-top: 68px;\n  }\n\n  .iphoneScreen {\n    width: 349px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer {\n    width: 349px;\n    height: 755px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer > video {\n    width: 349px;\n    height: 755px;\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .iphonePreview {\n      background-size: 370px auto;\n    }\n\n    .iphoneScreen {\n      width: 322px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer {\n      width: 322px;\n      height: 698px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer > video {\n      width: 322px;\n      height: 698px;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .iphonePreview {\n      display: flex;\n      background-size: 260px auto;\n      background-position: center 0;\n      margin-top: 47px;\n      justify-content: center;\n      padding-bottom: 75px;\n    }\n\n    .iphoneScreen {\n      width: 226px;\n      height: 488px;\n      -webkit-clip-path: url(#screenMask);\n      clip-path: url(#screenMask);\n      margin: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer {\n      width: 226px;\n      height: 488px;\n      margin-left: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer > video {\n      width: 226px;\n      height: 488px;\n    }\n  }\n\n  // Feature List\n\n  .features {\n    grid-area: c;\n    display: flex;\n    flex: 0 1 auto;\n    align-content: flex-start;\n    justify-content: flex-start;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    margin-top: 93px;\n  }\n\n  .feature {\n    display: flex;\n    padding-top: 63px;\n    padding-left: 15px;\n    padding-right: 15px;\n    width: calc(100% / 3);\n  }\n\n  .feature:nth-child(-n + 3) {\n    padding-top: 0px;\n  }\n\n  .feature:nth-child(3n) {\n    padding-right: 0px;\n  }\n\n  .feature:nth-child(3n + 1) {\n    padding-left: 0px;\n  }\n\n  .iconBack {\n    color: ",";\n  }\n\n  .iconTop {\n    color: ",";\n  }\n\n  .socialIconBack {\n    color: ",";\n  }\n\n  .socialIconTop {\n    color: ",";\n  }\n\n  .featureText {\n    margin-left: 18px;\n  }\n\n  .featureText > h3 {\n    color: ",";\n  }\n\n  .featureText > p {\n    color: ",";\n    margin-top: 8px;\n    line-height: 1.5;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .features {\n      flex-grow: 1;\n      flex-direction: row;\n      flex-wrap: wrap;\n      margin-top: 11px;\n    }\n\n    .feature {\n      display: flex;\n      padding-top: 41px;\n      padding-left: 15px;\n      padding-right: 15px;\n      width: 100%;\n    }\n\n    .feature:nth-child(-n + 3) {\n      padding-top: 41px;\n    }\n\n    .feature:nth-child(1) {\n      padding-top: 0px;\n    }\n\n    .feature:nth-child(3n) {\n      padding-right: 15px;\n    }\n\n    .feature:nth-child(3n + 1) {\n      padding-left: 15px;\n    }\n  }\n\n  // Footer\n\n  footer {\n    grid-area: f;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: center;\n  }\n\n  .footerText {\n    color: ",";\n    display: block;\n    line-height: 1.5;\n    width: 100%;\n    text-align: center;\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n\n  .footerIcons {\n    padding-bottom: 70px;\n    display: flex;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .footerText {\n      color: ",';\n      display: block;\n      line-height: 1.5;\n      width: 100%;\n      text-align: center;\n      padding-top: 54px;\n      padding-bottom: 61px;\n    }\n\n    .footerIcons {\n      padding-bottom: 70px;\n      display: flex;\n    }\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .privacyPolicy {\n    grid-area: p; \n    color: white\n    line-height: normal;\n  }\n\n  .privacyPolicy h1 {\n    margin-top: 40px;\n    margin-bottom:30px;\n  }\n\n  .privacyPolicy p {\n    margin-top: 10px;\n    margin-bottom:30px;\n  }\n\n  .privacyPolicy ul {\n    margin-top: 10px;\n    margin-bottom:30px;\n    margin-left: 30px\n  }\n\n  .privacyPage {\n    display: block;\n    grid-template-areas: "h h h h h h h h h h h h" "p p p p p p p p p p p p" "c c c c c c c c c c c c" "f f f f f f f f f f f f";\n  }\n']);return f=function(){return n},n}var h=Object(s.a)(f(),c.a.font,c.a.body_background_color,c.a.body_background_color,c.a.link_color,c.a.header_background,c.a.content_width,c.a.topbar_title_color,c.a.topbar_title_color,c.a.topbar_title_color,c.a.app_title_color,c.a.app_price_color,c.a.app_description_color,c.a.feature_icons_background_color,c.a.feature_icons_foreground_color,c.a.social_icons_background_color,c.a.social_icons_foreground_color,c.a.feature_title_color,c.a.feature_text_color,c.a.footer_text_color,c.a.footer_text_color),u=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),e)};u.propTypes={children:r.a.node.isRequired};e.a=u},150:function(n){n.exports={data:{site:{siteMetadata:{title:"Dark Noise",description:"Simple, fast, white noise app for iOS.",author:"DarkNoiseApp"}}}}},155:function(n,e,t){"use strict";var i=t(8);e.__esModule=!0,e.default=void 0;var a,o=i(t(7)),r=i(t(32)),p=i(t(73)),l=i(t(74)),s=i(t(0)),d=i(t(4)),c=function(n){var e=(0,l.default)({},n);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f={},h=function(n){var e=c(n),t=e.fluid?e.fluid.src:e.fixed.src;return f[t]||!1},u=[];var g=function(n,e){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(n){n.forEach(function(n){u.forEach(function(e){e[0]===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(a.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),a).observe(n),u.push([n,e])},m=function(n){var e=n.src?'src="'+n.src+'" ':'src="" ',t=n.sizes?'sizes="'+n.sizes+'" ':"",i=n.srcSetWebp?"<source type='image/webp' srcset=\""+n.srcSetWebp+'" '+t+"/>":"",a=n.srcSet?'srcset="'+n.srcSet+'" ':"",o=n.title?'title="'+n.title+'" ':"",r=n.alt?'alt="'+n.alt+'" ':'alt="" ',p=n.width?'width="'+n.width+'" ':"",l=n.height?'height="'+n.height+'" ':"",s=n.opacity?n.opacity:"1";return"<picture>"+i+"<img "+p+l+t+a+e+r+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(n.transitionDelay?n.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=s.default.forwardRef(function(n,e){var t=n.sizes,i=n.srcSet,a=n.src,o=n.style,r=n.onLoad,d=n.onError,c=(0,p.default)(n,["sizes","srcSet","src","style","onLoad","onError"]);return s.default.createElement("img",(0,l.default)({sizes:t,srcSet:i,src:a},c,{onLoad:r,onError:d,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(n){function e(e){var t;t=n.call(this,e)||this;var i=!0,a=!1,o=e.fadeIn,p=h(e);!p&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,a=!0),"undefined"==typeof window&&(i=!1),e.critical&&(i=!0,a=!1);var l=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:i,imgLoaded:!1,IOSupported:a,fadeIn:o,hasNoScript:l,seenBefore:p},t.imageRef=s.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)((0,r.default)(t))),t.handleRef=t.handleRef.bind((0,r.default)((0,r.default)(t))),t}(0,o.default)(e,n);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var n=this.imageRef.current;n&&n.complete&&this.handleImageLoaded()}},t.handleRef=function(n){var e=this;this.state.IOSupported&&n&&g(n,function(){var n=h(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:n}),e.setState({isVisible:!0,imgLoaded:n})})},t.handleImageLoaded=function(){var n,e,t;n=this.props,e=c(n),t=e.fluid?e.fluid.src:e.fixed.src,f[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var n=c(this.props),e=n.title,t=n.alt,i=n.className,a=n.style,o=void 0===a?{}:a,r=n.imgStyle,p=void 0===r?{}:r,d=n.placeholderStyle,f=void 0===d?{}:d,h=n.placeholderClassName,u=n.fluid,g=n.fixed,y=n.backgroundColor,b=n.Tag,w=n.itemProp,_="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},p,f),k=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},p),S={title:e,alt:this.state.isVisible?"":t,style:v,className:h};if(u){var z=u;return s.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},s.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),z.base64&&s.default.createElement(x,(0,l.default)({src:z.base64},S)),z.tracedSVG&&s.default.createElement(x,(0,l.default)({src:z.tracedSVG},S)),_&&s.default.createElement(b,{title:e,style:{backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&s.default.createElement("picture",null,z.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),s.default.createElement(x,{alt:t,title:e,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:t,title:e},z))}}))}if(g){var I=g,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},o);return"inherit"===o.display&&delete L.display,s.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&s.default.createElement(x,(0,l.default)({src:I.base64},S)),I.tracedSVG&&s.default.createElement(x,(0,l.default)({src:I.tracedSVG},S)),_&&s.default.createElement(b,{title:e,style:{backgroundColor:_,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&s.default.createElement("picture",null,I.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),s.default.createElement(x,{alt:t,title:e,width:I.width,height:I.height,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:t,title:e,width:I.width,height:I.height},I))}}))}return null},e}(s.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var _=y;e.default=_}}]);
//# sourceMappingURL=2-192ee7ce762d15a36299.js.map
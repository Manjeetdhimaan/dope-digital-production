"use strict";(self.webpackChunkdope_digital=self.webpackChunkdope_digital||[]).push([[16],{7016:(y,c,o)=>{o.r(c),o.d(c,{AllServicesModule:()=>C});var l=o(9808),t=o(5767),v=o(8131),a=o(1026),e=o(1223),d=o(5746),u=o(9230),g=o(5082),m=o(3493);function f(i,n){if(1&i&&(e.TgZ(0,"div")(1,"b"),e._UZ(2,"h6",9),e.qZA(),e._UZ(3,"br"),e.qZA()),2&i){const s=e.oxw();e.xp6(2),e.Q6J("innerHTML",null==s.service?null:s.service.reasons,e.oJD)}}function p(i,n){if(1&i&&(e.TgZ(0,"div",16)(1,"div",17)(2,"h6"),e._uU(3),e.qZA()()()),2&i){const s=n.index,r=e.oxw();e.xp6(3),e.hij("\u2022 ",null==r.service?null:r.service.includes[s],"")}}const h=[{path:"",component:(()=>{class i{constructor(s,r){this.dataService=s,this.router=r,this.isLoading=!1,this.isSingleServiceHeader=!1}ngOnInit(){var s;this.isLoading=!0,this.serviceArray=this.dataService.serviceArray.slice(),this.dataService.getServices().map(r=>{this.router.url.toLowerCase()=="/"+r.name.toLowerCase().split(" ").join("-")&&(this.router.url.toLowerCase(),this.service=r,this.isLoading=!1)}),this.router.url.toLowerCase()!=="/"+(null===(s=this.service)||void 0===s?void 0:s.name.toLowerCase().split(" ").join("-"))&&(this.router.navigate(["/404notfound"]),this.isLoading=!1),this.subscription=this.dataService.getSelectedService.subscribe(r=>{this.service=r})}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(d.D),e.Y36(t.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-all-services"]],decls:27,vars:8,consts:[["id","services",1,"our-services","section"],[1,"container"],[1,"row"],["animation","fadeInLeft","delay","100","duration","800","offset","1500","triggerOnce","true",1,"col-lg-6","align-self-center","wow"],[1,"left-image"],[3,"src","alt"],["animation","fadeInRight","delay","100","duration","800","offset","1500","triggerOnce","true",1,"col-lg-6","wow"],[1,"section-heading"],[3,"innerHtml"],[3,"innerHTML"],[4,"ngIf"],["class","col-lg-12",4,"ngFor","ngForOf"],["id","portfolio",1,"our-portfolio","section"],[1,"col-lg-6","offset-lg-3",2,"margin-bottom","-122px"],["animation","bounceIn","delay","100","duration","800","offset","100","triggerOnce","true",1,"section-heading","wow"],[3,"serviceArray","isSingleServiceHeader"],[1,"col-lg-12"],[1,"first-bar","progress-skill-bar"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7),e._UZ(8,"h2",8)(9,"p",9),e.qZA(),e.TgZ(10,"div",2),e.YNc(11,f,4,1,"div",10),e.YNc(12,p,4,1,"div",11),e.qZA()()()()(),e.TgZ(13,"div",12)(14,"div",1)(15,"div",2)(16,"div",13)(17,"div",14)(18,"h2"),e._uU(19,"See What Other "),e.TgZ(20,"em"),e._uU(21,"Services"),e.qZA(),e._uU(22," We "),e.TgZ(23,"span"),e._uU(24,"Provide"),e.qZA()()()(),e._UZ(25,"app-single-service",15),e.qZA()(),e._UZ(26,"app-footer"),e.qZA()),2&s&&(e.xp6(5),e.Q6J("src",null==r.service?null:r.service.imgSrc,e.LSH)("alt",null==r.service?null:r.service.title),e.xp6(3),e.Q6J("innerHtml",null==r.service?null:r.service.header,e.oJD),e.xp6(1),e.Q6J("innerHTML",null==r.service?null:r.service.title,e.oJD),e.xp6(2),e.Q6J("ngIf",null==r.service?null:r.service.reasons),e.xp6(1),e.Q6J("ngForOf",r.service.includes),e.xp6(13),e.Q6J("serviceArray",r.serviceArray)("isSingleServiceHeader",r.isSingleServiceHeader))},directives:[u.C,l.O5,l.sg,g.j,m.c],styles:["@media (max-width: 992px){.our-services[_ngcontent-%COMP%]{margin-top:0}}"]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[t.Bz.forChild(h)],t.Bz]}),i})();var A=o(987),Z=o(6941);let C=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[],imports:[[l.ez,t.Bz,v.o,Z.K,a.d,A.e,S]]}),i})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,a,t){e.exports=t(93)},81:function(e,a,t){},83:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(66),c=t.n(r),m=(t(81),t(83),t(8)),o=t(106),i=t(99),s=t(92),E=t(94),u=t(104),d=t(12),g=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{key:"sm",expand:"sm",className:"mb-3 menu header",fixed:"top"},l.a.createElement(i.a,{fluid:!0},l.a.createElement(o.a.Brand,null,l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:"./images/logo.png",className:"logo",alt:"logo"}))),l.a.createElement(o.a.Toggle,{"aria-controls":"offcanvasNavbar-expand-".concat("sm"),onClick:c}),l.a.createElement(o.a.Offcanvas,{id:"offcanvasNavbar-expand-".concat("sm"),"aria-labelledby":"offcanvasNavbarLabel-expand-".concat("sm"),placement:"start",restoreFocus:!1,show:t,onHide:function(){r(!1)}},l.a.createElement(s.a.Header,{closeButton:!0},l.a.createElement(s.a.Title,{id:"offcanvasNavbarLabel-expand-".concat("sm")},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:"./images/logo.png",className:"logo",alt:"logo",onClick:c})))),l.a.createElement(s.a.Body,null,l.a.createElement(E.a,{className:"justify-content-end flex-grow-1 pe-3"},l.a.createElement(d.b,{className:"nav-link",to:"/booking",onClick:c},"BOOKING"),l.a.createElement(d.b,{className:"nav-link",to:"/cargo",onClick:c},"CARGO"),l.a.createElement(d.b,{className:"nav-link",to:"/terminals",onClick:c},"TERMINALS"),l.a.createElement(u.a,{title:"SERVICES",id:"offcanvasNavbarDropdown-expand-".concat("sm")},l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/interstate",onClick:c},"Inter-State Travels")),l.a.createElement(u.a.Divider,null),l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/cargo-transport",onClick:c},"Cargo & Parcel Transport"))),l.a.createElement(d.b,{className:"nav-link",to:"/about",onClick:c},"ABOUT"),l.a.createElement(d.b,{className:"nav-link",to:"/contact",onClick:c},"CONTACT"),l.a.createElement(d.b,{className:"nav-link",to:"/faq",onClick:c},"FAQ")),l.a.createElement(d.b,{to:"/",onClick:c,className:" btn-C"},"Login / Sign Up"))))))},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null))},b=t(102),v=t(79),f=t(105),N=t(77),k=t(101),h=t(107),C=t(78),y=t(61),S=function(){var e=Object(n.useState)("booking"),a=Object(m.a)(e,2),t=a[0],r=a[1],c=(new Date).toISOString().slice(0,10),o=new Date,i=new Date(o.getFullYear(),o.getMonth()+1,0).toISOString().slice(0,10);return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{id:"controlled-tab-example",activeKey:t,onSelect:function(e){return r(e)},className:"mb-3",variant:"pill"},l.a.createElement(h.a,{eventKey:"booking",title:"Book a Seat"},l.a.createElement(f.a,{className:"bookingForm",method:"POST"},l.a.createElement("div",{className:"form-item"},l.a.createElement(C.a,null,"Travelling From"),l.a.createElement(f.a.Select,{"aria-label":"Default select example",name:"bookingFrom",required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"Abuja - Jabi"),l.a.createElement("option",{value:"2"},"Abuja - Zuba"),l.a.createElement("option",{value:"3"},"Kaduna - Mando"))),l.a.createElement("div",{className:"form-item"},l.a.createElement(C.a,null,"Travelling To"),l.a.createElement(f.a.Select,{"aria-label":"Default select example",name:"bookingTo",required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"Abuja - Jabi"),l.a.createElement("option",{value:"2"},"Abuja - Zuba"),l.a.createElement("option",{value:"3"},"Kaduna - Mando"))),l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(C.a,null,"Departure Date:"),l.a.createElement(f.a.Control,{type:"date",name:"departureDate",id:"departureDate",required:!0,min:c,max:i}))),l.a.createElement("br",null),l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(f.a.Control,{type:"submit",name:"addBooking",id:"btn-book",value:"Proceed"}))))),l.a.createElement(h.a,{eventKey:"bookingStatusForm",title:"Check Booking"},l.a.createElement(f.a,{name:"checkBooking",method:"POST"},l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(C.a,null,"Check Your Booking Status"),l.a.createElement(f.a.Control,{type:"text",id:"code-input",name:"bookingCode",placeholder:"Enter Booking Code",required:!0}))),l.a.createElement(y.a,null,l.a.createElement(f.a.Control,{type:"submit",name:"checkBooking",id:"btn-book",value:"Proceed"})))),l.a.createElement(h.a,{eventKey:"track",title:"Track Cargo"},l.a.createElement(f.a,{name:"trackCargoForm",method:"POST"},l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(C.a,null,"Track Your Cargo"),l.a.createElement(f.a.Control,{type:"text",id:"code-input",name:"trackingCode",placeholder:"Enter Tracking Code",required:!0}))),l.a.createElement(y.a,null,l.a.createElement(f.a.Control,{type:"submit",name:"trackCargo",id:"btn-book",value:"Proceed"}))))))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home-1st align-self-center"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:6,className:"home-1st-text"},l.a.createElement("h1",null,"Croc-City: The safe, swift and comfortable way to travel and deliver courier across Nigeria"),l.a.createElement("p",null,"we aim to become Nigeria's leading transport and courier service provider.")),l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:5,className:"home-1st-booking"},l.a.createElement(S,null)))),l.a.createElement("div",{className:"travel"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:5,className:"travel-text align-self-center"},l.a.createElement("h1",null,"Travel Safe with Style & Comfort"),l.a.createElement("p",null,"- courtesy of our Fast, Reliable and Hitch-free Trips")),l.a.createElement(v.a,{md:7,className:"travel-photo"},l.a.createElement("div",{className:"p1"}),l.a.createElement("div",{className:"p2"}),l.a.createElement("div",{className:"p3"})))),l.a.createElement("div",{className:"travel"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:7,className:"pay-photo"},l.a.createElement("img",{className:"photo1",alt:"card payment",src:"./images/cardpayment.jpg"}),l.a.createElement("img",{className:"photo2",alt:"card payment",src:"./images/phone.jpg"})),l.a.createElement(v.a,{md:5,className:"travel-text align-self-center"},l.a.createElement("h1",null,"Pay for your Trips Online"),l.a.createElement("p",null,"- swift & secured payment powered by PayStack")))),l.a.createElement("div",{className:"home-cargo"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:12,className:"travel-text text-center"},l.a.createElement("h3",null,"Let us handle your cargo & parcel transport. We deliver fast and intact!")),l.a.createElement(v.a,{md:4,className:"cargo-photos"},l.a.createElement("img",{src:"./images/cargo2.jpg",alt:"cargo1"})),l.a.createElement(v.a,{md:4,className:"cargo-photos"},l.a.createElement("img",{src:"./images/cargo1.jpg",alt:"cargo1"})),l.a.createElement(v.a,{md:4,className:"cargo-photos"},l.a.createElement("img",{src:"./images/cargo3.jpg",alt:"cargo1"})))),l.a.createElement("div",{className:"subscribe"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:6,className:"subscribe-text"},l.a.createElement("p",null,"Stay updated with our latest offers, promos and new features.")),l.a.createElement(v.a,{md:6,className:"subscribe-form"},l.a.createElement(f.a,{name:"subscribeForm",action:"#",method:"POST"},l.a.createElement(b.a,{className:"mb-3"},l.a.createElement(f.a.Group,{as:v.a},l.a.createElement(f.a.Control,{type:"email",name:"subscriber_email",required:!0,placeholder:"Enter Email"})),l.a.createElement(f.a.Group,{as:v.a},l.a.createElement(N.a,{className:"btn-subscribe"},"Subscribe"))))))))},F=t(5),w=(new Date).toISOString().slice(0,10),x=new Date,O=new Date(x.getFullYear(),x.getMonth()+1,0).toISOString().slice(0,10),D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:3}),l.a.createElement(v.a,{md:6,className:"booking-page"},l.a.createElement(f.a,{className:"bookingForm",method:"POST"},l.a.createElement("div",{className:"form-item"},l.a.createElement(C.a,null,"Travelling From"),l.a.createElement(f.a.Select,{"aria-label":"Default select example",name:"bookingFrom",required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"Abuja - Jabi"),l.a.createElement("option",{value:"2"},"Abuja - Zuba"),l.a.createElement("option",{value:"3"},"Kaduna - Mando"))),l.a.createElement("div",{className:"form-item"},l.a.createElement(C.a,null,"Travelling To"),l.a.createElement(f.a.Select,{"aria-label":"Default select example",name:"bookingTo",required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"Abuja - Jabi"),l.a.createElement("option",{value:"2"},"Abuja - Zuba"),l.a.createElement("option",{value:"3"},"Kaduna - Mando"))),l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(C.a,null,"Departure Date:"),l.a.createElement(f.a.Control,{type:"date",name:"departureDate",id:"departureDate",required:!0,min:w,max:O}))),l.a.createElement("br",null),l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(f.a.Control,{type:"submit",name:"addBooking",id:"btn-book",value:"Proceed"}))))),l.a.createElement(v.a,{md:3}))))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:3}),l.a.createElement(v.a,{md:6,xs:12,className:"four-0-four"},l.a.createElement("img",{src:"./images/404.png",alt:"404 Error"})),l.a.createElement(v.a,{md:3}))))},P=t(62),A=t(32),B=(new Date).getFullYear(),I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:4,className:"contact"},l.a.createElement("h3",null,"Contact"),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.b}),"\xa0 Head Office: No. 2, Sabon-Tasha, Mando, Kaduna, Kaduna State."),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.c}),"\xa0 (+234) 08027643043, 08051300974"),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.a}),"\xa0 info@croccity.com")),l.a.createElement(v.a,{md:4,className:"quick-links"},l.a.createElement("h3",null,"Quick Links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about"},"About Us")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/booking"},"Booking")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/cargo"},"Cargo")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/terminals"},"Terminals")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/terms-and-conditions"},"Terms & Conditions")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/privacy-policy"},"Privacy Policy")))),l.a.createElement(v.a,{md:4,className:"follow-us"},l.a.createElement("h3",null,"Connect with Us"),l.a.createElement("p",null,"Facebook",l.a.createElement(P.a,{icon:["fab","github"]})))),l.a.createElement("div",{className:"author text-center"},l.a.createElement("p",null,"Copyright \xa9 ",B," | Croc-City Shuttle Limited | All Rights Reserved."),"Developed by ",l.a.createElement("a",{href:"https://gowise.com.ng",target:"_blank",rel:"noopener noreferrer"},"Nenisoft"))))},K=function(e){var a=Object(F.e)();return Object(n.useEffect)(function(){window.scrollTo(0,0)},[a]),l.a.createElement(l.a.Fragment,null,e.children)},q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:3}),l.a.createElement(v.a,{md:6,className:"booking-page"},l.a.createElement(f.a,{name:"trackCargoForm",method:"POST"},l.a.createElement("div",{className:"form-item"},l.a.createElement(y.a,null,l.a.createElement(C.a,null,"Track Your Cargo"),l.a.createElement(f.a.Control,{type:"text",name:"trackingCode",placeholder:"Enter Tracking Code",required:!0}))),l.a.createElement(y.a,null,l.a.createElement(f.a.Control,{type:"submit",name:"trackCargo",id:"btn-book",value:"Proceed"})))),l.a.createElement(v.a,{md:3}))))},M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:10,className:"middle-content"},l.a.createElement("h1",null,"Our Terminals")),l.a.createElement(v.a,{md:1}))))},L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:10,className:"middle-content"},l.a.createElement("h1",null,"InterState Travels")),l.a.createElement(v.a,{md:1}))))},R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:10,className:"middle-content"},l.a.createElement("h1",null,"Cargo & Parcel Transport")),l.a.createElement(v.a,{md:1}))))},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:10,className:"middle-content"},l.a.createElement("h1",null,"About Us"),l.a.createElement("p",null,"Croc-City Shuttle is a transport company whoses goal is to provide a safe, swift and comfortable way to travel and deliver courier across Nigeria."),l.a.createElement("p",null,"We aim to become Nigeria's leading transport and courier service provider.")),l.a.createElement(v.a,{md:1}))))},U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement(b.a,null,l.a.createElement(v.a,{md:1}),l.a.createElement(v.a,{md:10,className:"middle-content"},l.a.createElement("h1",null,"Contact Us"),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.b}),"\xa0 Head Office: No. 2, Sabon-Tasha, Mando, Kaduna, Kaduna State."),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.c}),"\xa0 (+234) 08027643043, 08051300974"),l.a.createElement("p",null,l.a.createElement(P.a,{icon:A.a}),"\xa0 info@croccity.com")),l.a.createElement(v.a,{md:1}))))};var Y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(K,null,l.a.createElement(p,null),l.a.createElement(F.c,null,l.a.createElement(F.a,{path:"/",element:l.a.createElement(T,null)}),l.a.createElement(F.a,{path:"/booking",element:l.a.createElement(D,null)}),l.a.createElement(F.a,{path:"/cargo",element:l.a.createElement(q,null)}),l.a.createElement(F.a,{path:"/terminals",element:l.a.createElement(M,null)}),l.a.createElement(F.a,{path:"/interstate",element:l.a.createElement(L,null)}),l.a.createElement(F.a,{path:"/cargo-transport",element:l.a.createElement(R,null)}),l.a.createElement(F.a,{path:"/about",element:l.a.createElement(J,null)}),l.a.createElement(F.a,{path:"/contact",element:l.a.createElement(U,null)}),l.a.createElement(F.a,{path:"*",element:l.a.createElement(j,null)})),l.a.createElement(I,null))))},H=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,103)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};t(90);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null))),H()}},[[69,3,2]]]);
//# sourceMappingURL=main.4233e57e.chunk.js.map
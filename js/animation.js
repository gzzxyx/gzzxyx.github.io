!function(){function o(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}o("body > .navbar, body > .section, body > .footer").forEach((o=>{o.style.transition="0s",o.style.opacity="0"})),document.querySelector("body > .navbar").style.transform="translateY(-100px)",[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach((t=>{o(t).forEach((o=>{o.style.transition="0s",o.style.opacity="0",o.style.transform="scale(0.8)",o.style.transformOrigin="center top"}))})),setTimeout((()=>{o("body > .navbar, body > .section, body > .footer").forEach((o=>{o.style.opacity="1",o.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-in-out"})),document.querySelector("body > .navbar").style.transform="translateY(0)",[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach((t=>{let a=1;o(t).forEach((o=>{setTimeout((()=>{o.style.opacity="1",o.style.transform="",eelement.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-in-out"}),100*a),a++}))}))}))}();
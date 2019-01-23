"use strict";
define([], function() {
  return function (api) {
        return {
            avance: api.fd,
            recule: api.bk,
            tourneAGauche: api.lt,
            tourneADroite: api.rt,
            leveLeCrayon: api.penup,
            pauseLeCrayon: api.pendown,
            bouge: api.spin,
            epaisseur: api.penwidth,
            changeForme: api.setshape,
            font: api.bg,
            couleur: api.color,
            nettoie: api.clear
            // boucle: function(nbr, action, param) {
            //     for(var i = 0; i < nbr; i++) {
            //         action(param);
            //     }
            // }
        };
    }
});

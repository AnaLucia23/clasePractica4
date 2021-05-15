$(document).ready(function ()
{let listadoTarjetas = [{'tit':'Café molido',
                         'srcIni': 'recursos/images/cafe_molido.png',
                         'srcFin': 'recursos/images/molido_mini.png'},
                        {'tit': 'Capuchino', 
                        'srcIni': 'recursos/images/capuchino.png',
                        'srcFin': 'recursos/images/capuchino_mini.png'},
                        {'tit': 'Café Mocca', 
                        'srcIni': 'recursos/images/cafe_mocca.png',
                        'srcFin': 'recursos/images/mocca_mini.png'},
                        {'tit': 'Bebida', 
                        'srcIni': 'recursos/images/cafe_bebida.png',
                        'srcFin': 'recursos/images/cafe_bebida_mini.png'},
                        {'tit': 'Capuchino', 
                        'srcIni': 'recursos/images/cafe_negro.png',
                        'srcFin': 'recursos/images/cafe_negro_mini.png'},]

    let textoHtml = '<article>'+
                    '<figure><img src="recursos/images/cafe_molido.png" alt=""></figure>'+
                    '<figcaption>Caf&eacute</figcaption>'+
                    '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sint qui voluptatum mollitia sequi, laboriosam magni culpa, <br>consequatur similique a nobis magnam accusamus ducimus dicta suscipit, ratione eaque placeat commodi.</p>'+
                    '</article>'
})

for (let i=0; i < listadoTarjetas.length; i++){
let imagenIni = listadoTarjetas[i].srcIni;
let titArticle = listadoTarjetas[i].tit;

let textoHtml = '<article>'+
'<figure><img src="recursos/images/cafe_molido.png" alt=""></figure>'+
'<figcaption>Caf&eacute</figcaption>'+
'<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sint qui voluptatum mollitia sequi, laboriosam magni culpa, <br>consequatur similique a nobis magnam accusamus ducimus dicta suscipit, ratione eaque placeat commodi.</p>'+
'</article>';
$('#listadoTarjetas').append(textoHtml);
}
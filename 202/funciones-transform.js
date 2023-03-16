//Los vertices se obtienen con el vector vx Para aplicar la geometría se una el THREE.Vector 
function Geometria(vx){

    geom = new THREE.Geometry();
      var largoVertice = vx.length;
     for (i = 0; i < largoVertice; i++){
       [x,y,z]=[vx[i][0],vx[i][1],vx[i][2]]
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
      }
      return geom;

}
// vt es  el vector traslación
function Traslation(vt) {
    var matriz = new THREE.Matrix4();
    matriz.set(1, 0, 0, vt[0],
               0, 1, 0, vt[1],
               0, 0, 1, vt[2],
               0, 0, 0, 1);
    return matriz;
}
//vs es  el vector escalado
function Escalado(vs) {
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
               0, vs[1], 0, 0,
               0, 0, vs[2], 0,
               0, 0, 0, 1);
    return matrizS;
}
/**
 * EscaladoReal:
 * Entrada: obj=objeto obj de tipo THREE.line a ser escalado
 *           vp=vector de posicion inicial de obj(arreglo de 3 enteros)
 *           vs=vector escala(arreaglo 3 enteros)
 * Salida: obj actualizacion
 */
function EscaladoReal(obj,vt,vs){
    vp=[-vt[0],-vt[1],-vt[2]];
    obj.applyMatrix(Traslation(vp));
    obj.applyMatrix(Escalado (vs));
    obj.applyMatrix(Traslation(vt));
 }
 //an es el angulo para rotar sobre el eje
//rotacion x
 function Rotacionx(an){
    var matrizRx = new THREE.Matrix4();
    
    var angulo = THREE.Math.degToRad(an);
    var cs = Math.cos(angulo);
    var ss = Math.sin(angulo);

    matrizRx.set(1,  0, 0, 0, 
            0,  cs, -ss, 0, 
            0, ss, cs, 0,
            0, 0, 0, 1);
    return matrizRx
}
// an es el angulo para rotar sobre el eje y

 function Rotaciony(an){
    var matrizRy = new THREE.Matrix4();
    var angulo = THREE.Math.degToRad(an);
    var cs = Math.cos(angulo);
    var ss = Math.sin(angulo);

    matrizRy.set(cs,  0, ss, 0, 
                0,  1, 0, 0, 
                -ss, 0, cs, 0,
                0, 0, 0, 1);
    return matrizRy
}
// an es el angulo para rotar sobre el eje z
 
function Rotacionz(an){
    var matrizRz = new THREE.Matrix4();
    var angulo = THREE.Math.degToRad(an);
    var cs = Math.cos(angulo);
    var ss = Math.sin(angulo);

    matrizRz.set(cs,  -ss, 0, 0,
                ss,  cs, 0, 0, 
                0, 0, 1, 0,
                0, 0, 0, 1);
    return matrizRz
}
//Objeto tipo THREE.line a ser rotado, 
//ar=(angulo para rotar en radiandes),
//vp=(posicion inicial)
//traslacin
//rotarlo
//escalarlo 
//Volver al punto inicial

function RotacionRealx(obj,vp,an){
    vt= [-vp[0],-vp[1],-vp[2]]; 
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(Rotacionx(an));//Rotacion del obj
    obj.applyMatrix(Traslation(vp));
}
function RotacionRealy(obj,vp,an){
    vt= [-vp[0],-vp[1],-vp[2]]; 
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(Rotaciony(an));//Rotacion  y
    obj.applyMatrix(Traslation(vp));
}
function RotacionRealz(obj,vp,an){
    vt= [-vp[0],-vp[1],-vp[2]]; 
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(Rotacionz(an));//Rotacion z
    obj.applyMatrix(Traslation(vp));
}
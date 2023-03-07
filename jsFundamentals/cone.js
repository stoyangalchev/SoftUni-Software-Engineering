function cone(r,h) {
    
    let volume =(Math.PI*r*r*h)/3
    let totalArea= 4*Math.PI*r
    let  s = Math.sqrt(r * r + h * h);
    let area=Math.PI * r * (r + s)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
    
}
cone(3,5)
//(pi * r * r * h) / 3
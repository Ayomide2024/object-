// // // Object

// // // how to create object
// // const car = {
// //     color: 'white',
// //     door: 4,
// //     weight: '300kg',
// //     model: 'L330',
// //     name: 'Lexus',
// //     start:function(){
// //         alert(`The price of this ${this.name}, ${this.model} is 2.5 millions `)
// //     }
// // }
// // car.tyres=4
// // car.headLight = 'white'
// // car.headLight = 'yellow'
// // delete car.headLight
// // // console.log(car);

// // // Transversing and destructuring of an object
// // //Transversing (for in loop)

// // for(let key in car){
// //     // console.log(key, car[key]);
// // }

// // // Destructuring
// // const {color, name, model, start, door, weight}=car
// // console.log(start());






























// // how to create object

// let jpo = {
// Nigeria: 'sapa',
// Uk: 'better',
// America: 'best',
// Asia: 'worse',
// start: function(){
// alert('Do u know that Asia is the worst of them all that was mentioned');
// }
// }
// jpo.india= 'do u know that india is in asia and do u know that asia is known for their elephants'
// console.log(jpo);





// for(let key in jpo){
//     console.log(key, jpo[key]);
// }














// const {Nigeria, Uk, America, Asia, start}=jpo
// console.log(start());













let jpo = {
    toyota: 'fair enough',
    lexus: 'powerful',
    nissan: 'grosss',
    lamborgini: 'my favourite',
    ferrari: 'speeed',
    mitsubishi: 'fair enough',
    porche: 'classy',
    tesla: 'technology',
    Mclaren:'speedy and classy',
    Buggati: 'fastest car in world and very modern',
    start:function(){
        alert(`Do u know that bugatti is the fastest car in the world`)
        prompt(`Type in your favourite car brand`)
        prompt(`confirm your opttion`)
        alert(`if na Buggati u choose my brother u get brain ooo`)
    }
}
console.log(jpo.start());
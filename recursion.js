
function suma_arr (arr, pos) {
  if (pos <arr.length) {
 return arr [pos] + suma_arr (arr, pos+1);
 } else { 
  return 0 ;   } }
suma_arr ([2,3,4,5], 0)

var pos = 0    // si se quiere empezar de arriba para abajo pos sería arr.lenght (el valor total del arreglo)
function sumar (arr) {
	if (pos<arr.lenght) {
		 let valor = arr[pos];
		 pos++; (pos = pos+1)   //y aquí se le iría restando en vez de sumar
		 return valor + sumar(arr);
		} else {
			pos=0;
			return 0;
		}
	}
 sumar([2,3,4])

var pos = 0;
function sumar(arr) {
	if (pos < arr.length) {
		 let valor = arr[pos];
		 pos++; 
		 return valor+sumar(arr);
		} else {
			pos= 0;
			return 0;
		}
	}
	sumar ([2,3,4,5,6])














	 																	  }
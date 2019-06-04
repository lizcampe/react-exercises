class Figura {
	constructor (nombre, NumeroDelados, altura, base, diametro) {

	this.nombre = nombre;
	this.NumeroDelados = NumeroDelados;
	this.altura =altura;
	this.base =base;
	this.diametro=diametro;
	}

	areaTriangulo () {
		return this.base*this.altura/2};

	areaCuadrado () {
		return this.base*4 };

	areaRectangulo () {
		return this.base*this.altura };

	};
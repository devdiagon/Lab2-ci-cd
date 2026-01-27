import { maximo, promedio } from './math.js';

describe('Promedio', () => {
	test('calcula el promedio de enteros', () => {
		expect(promedio([2, 4, 6])).toBe(4);
	});

	test('calcula el promedio con negativos y decimales', () => {
		expect(promedio([2, -2, 4.5])).toBeCloseTo(1.5);
	});

	test('retornar cero si esta vacia', () => {
		expect(promedio([])).toBe(0);
	});
});

describe('Maximo', () => {
	test('encuentra el mayor en una lista de enteros', () => {
		expect(maximo([1, 9, 3])).toBe(9);
	});

	test('manejo de valores negativos', () => {
		expect(maximo([-5, -1, -7])).toBe(-1);
	});

	test('retornar cero si esta vacia', () => {
		expect(maximo([])).toBe(0);
	});
});

let notas = [8.0, 6.5, 7.0, 9.5, 5.0];

// Acesso aos Elementos
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

// Adicionar nova nota
notas.push(7.5);

// Remover a primeira nota
notas.shift();

// Exibir o array resultante
console.log("Array resultante:", notas);

// Iteração com forEach
notas.forEach(nota => {
    console.log("Nota:", nota);
});

// Cálculo da média
const media = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
console.log("Média das notas:", media);

// Filtro de notas
const notasMaioresQue7 = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQue7);

// Ordenação
notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

// Busca de elementos
const notaPresente = notas.includes(6.5);
console.log("Nota 6.5 está presente:", notaPresente);

// Encontre o índice
const indiceNota8 = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNota8);

// Mapeamento
const notasQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasQuadrado);

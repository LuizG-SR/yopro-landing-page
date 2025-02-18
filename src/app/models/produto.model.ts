export interface Produto {
  id: number;
  descricao: string;
  nome: string;
  preco: number;
  imagens: string[]; // Agora os produtos podem ter múltiplas imagens
  favorito: boolean;
}

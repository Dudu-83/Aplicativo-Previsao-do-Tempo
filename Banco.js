import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('clima.db');

// Criar tabela
export function criarTabela() {
  db.execSync(`
    DROP TABLE IF EXISTS clima;
    
    CREATE TABLE IF NOT EXISTS clima (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      descricao TEXT,
      imagem TEXT 
    );
  `);
}

// Inserir dados iniciais
export function inserirDadosIniciais() {
  const dados = [
    {
      titulo: 'Cariacica',
      descricao: 'Clima: Ensolarado - 30° graus',
      imagem: 'ensolarado',
    },
    {
      titulo: 'Vila Velha',
      descricao: 'Clima: Chuvoso - 17° graus',
      imagem: 'chuva',
    },
    {
      titulo: 'Vitória',
      descricao: 'Clima: Chuvoso - 20° graus',
      imagem: 'chuva',
    },
    {
      titulo: 'Viana',
      descricao: 'Clima: Ensolarado - 30° graus',
      imagem: 'ensolarado',
    },
    {
      titulo: 'Domingo Martins',
      descricao: 'Clima: Ensolarado - 28° graus',
      imagem: 'ensolarado',
    },
    {
      titulo: 'Guarapari',
      descricao: 'Clima: Chuvoso - 29° graus',
      imagem: 'chuva',
    },
    {
      titulo: 'Venda Nova do Imigrante',
      descricao: 'Clima: Ensolarado - 25° graus',
      imagem: 'ensolarado',
    }
  ];

  dados.forEach(item => {
    db.runSync(
      'INSERT INTO clima (titulo, descricao, imagem) VALUES (?, ?, ?)',
      [item.titulo, item.descricao, item.imagem]
    );
  });
}

export function buscarDados() {
  return db.getAllSync('SELECT * FROM clima');
}

export function limparTabela() {
  db.execSync('DELETE FROM clima');
}
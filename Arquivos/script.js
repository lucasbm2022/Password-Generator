const gerarSenha = () => {
  let aleatoria = '!@#$%¨&*+=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let senha = "";
  let cont = aleatoria.length;
  for (i = 0; i < 8; i++) {
    senha += aleatoria[Math.floor(Math.random() * cont)]
    let resultado = document.getElementById('resultado').innerHTML = senha;
  }
  return senha;
}
gerarSenha();
console.log(gerarSenha());
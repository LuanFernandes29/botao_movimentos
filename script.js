const botao = document.getElementById('botao');
const div = document.getElementById('texto')
const textFund = document.getElementById('fundoTela')
const ultimobotao = document.getElementById("ultimobotao")
const botaoS = document.getElementById('S')
const botaoN = document.getElementById('N')
let i = 10;

botao.addEventListener('mouseover', () => {
  textFund.innerHTML = `Passe o mouse em cima do botão ${i} vezes`
  if(i> 0){
   
    const topRandom = Math.random() * 550;
    const leftRandom = Math.random() * 680; 
    
  
    // Define os valores gerados como as novas posições
    botao.style.top = `${topRandom}px`;
    botao.style.left = `${leftRandom}px`;
    i--
    
  }
  
  else{
    ultimobotao.style.display = `grid`
    ultimobotao.style.position = `relative`
    textFund.style.display = `none`
    botao.style.display = `none`
    div.innerHTML=`Julia vai se fuder`
  }
});
function xingar(){
  botaoS.style.display = `grid`
  botaoN.style.display = `grid`
  botaoN.style.position = `relative`
  textFund.innerHTML = `Julia vai se foder`
  textFund.style.display = `grid`
}
 botaoN.addEventListener('mouseover', () => {
  topRandom = Math.random() * 230;
  leftRandom = Math.random() * 630;
    
  
    // Define os valores gerados como as novas posições
    botaoN.style.top = `${topRandom}px`;
    botaoN.style.left = `${leftRandom}px`;
 });  


 
Esse é o meu projeto em resposta ao desafio do [BemPaggo](https://www.bempaggo.com.br/desafio-frontend/)  

## Para rodar em desenvolvimento:

```bash
npm run dev
```  
## Projeto está online no vercel
[Bem Paggo Form](https://bem-pago-form.vercel.app/)  

## Escolha de tecnologia:  
Aproveitei esse desafio para estudar Typescript que eu não tenho tanta experiência.  
O Nextjs passou a ser minha escolha pela facilidade de deploy, routing e as vantagens naturais do Server Side Rendering.  
Usei o MUI (material ui do react) porque vejo nessa biblioteca um equilíbrio entre componentes feitos e a possibilidade de estiliza-los.  
Usei essa estilização (styled-component) no meu componente Título para adicionar a ellipse, por exemplo.  

## Testes  
Tentei implementar meus testes em Cypress, mas não consegui pois fiquei engasgado em um erro:  
[6476:0322/152528.038535:ERROR:gpu_init.cc(453)] Passthrough is not supported, GL is swiftshader, ANGLE is  
[6476:0322/152528.049789:ERROR:sandbox_linux.cc(374)] InitializeSandbox() called with multiple threads in process gpu-process.  
Infelizmente não consegui desembaraçar esse erro em tempo hábil.  
Fiz apenas um teste básico de route que iria usar pra testar, mas fiquei preso aí.  
Essa é a primeira vez que iria usar o cypress. Tenho um pouco mais de experiência com o Jest.  


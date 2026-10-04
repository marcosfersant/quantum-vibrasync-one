import React from 'react';
import {createRoot} from 'react-dom/client';
import {Home,Database,Activity,ScanLine,Radio,Mic,Video,Image,FolderOpen,Settings,User,RotateCw,ZoomIn,ZoomOut,Layers,RefreshCw,Play,Star} from 'lucide-react';
import './style.css';

const menu=[[Home,'Início'],[Database,'Programas de Tratamento'],[Activity,'Leitura / Bioimpedância'],[ScanLine,'Órgãos e Sistemas'],[Radio,'Frequência Livre'],[Mic,'Voz'],[Video,'Vídeo'],[Image,'Foto'],[FolderOpen,'Arquivos'],[Settings,'Configurações']];
const programs=['Função da tireoide','Hipotireoidismo','Hipertireoidismo','Tireoidite','Doença de Graves','Bócio','Nódulos tireoidianos','Câncer de tireoide','Paratireoide','Equilíbrio hormonal'];
function App(){
 const [sex,setSex]=React.useState('Masculino');
 return <main className="app">
  <header><div className="brand"><b>⚛</b><strong>Quantum <span>VibraSync</span> One</strong></div><div className="top"><i>● Conectado</i><b>▣ Banco de Programas<br/><span>90.893</span></b><User/><Settings/></div></header>
  <div className="workspace">
   <aside>{menu.map(([I,t],i)=><button key={t} className={i===3?'active':''}><I/>{t}</button>)}</aside>
   <section className="content">
    <section className="atlas panel">
      <div className="atlas-title"><h1>Atlas de Tratamento</h1><p>Atlas anatômico sincronizado com a frequência em execução</p></div>
      <div className="sex"><button className={sex==='Masculino'?'on':''} onClick={()=>setSex('Masculino')}>Masculino</button><button className={sex==='Feminino'?'on':''} onClick={()=>setSex('Feminino')}>Feminino</button></div>
      <div className="bodies">
       <div className="body male"><div className="head"/><div className="torso"/><div className="limbs"/><span>Masculino</span></div>
       <div className="body female"><div className="head"/><div className="torso"/><div className="limbs"/><span>Feminino</span></div>
       <div className="target"/><div className="ring r1"/><div className="ring r2"/>
      </div>
      <div className="tools">{[[RotateCw,'Girar'],[ZoomIn,'Aproximar'],[ZoomOut,'Afastar'],[Layers,'Isolar órgão'],[Layers,'Visão interna'],[RefreshCw,'Restaurar']].map(([I,t])=><button key={t}><I/>{t}</button>)}</div>
      <nav className="layers">{['Órgão','Sistema','Esqueleto','Vasos','Nervos','Linfático','Muscular'].map(x=><button key={x}>{x}</button>)}</nav>
    </section>
    <section className="related panel"><h3>Programas Relacionados <b>10</b></h3>{programs.map(x=><div key={x}><span>• {x}</span><button><Play/></button><Star/></div>)}</section>
    <section className="reading panel"><h3>Leitura / Bioimpedância</h3><div className="mini-body">♙</div><b>Status</b><p>Aguardando leitura</p><button className="start">▥ Iniciar Leitura</button><div className="checks">✓ Eletrodos conectados<br/>✓ Sinal estável<br/>✓ Calibração OK<br/>✓ Pronto para leitura</div></section>
    <section className="player panel"><h3>Player de Frequência</h3><div className="wave">∿∿∿∿∿</div><b>Programa selecionado</b><div className="bar"/><div className="transport">◀ ■ <button>▶</button> ▶ ↻</div></section>
    <section className="generators panel"><div><h3>Gerador A</h3><b>432,00 Hz</b><small>Senoidal • Ativo</small></div><div><h3>Gerador B</h3><b>528,00 Hz</b><small>Senoidal • Independente</small></div></section>
    <section className="waves panel"><h3>Tipo de Onda</h3><div>{['∿ Senoidal','▱ Quadrada','△ Triangular','⌁ Serra','⁙ Ruído Branco','≋ Ruído Rosa','≋ Ruído Marrom','⚙ Personalizada'].map(x=><button key={x}>{x}</button>)}</div></section>
    <section className="vol panel"><h3>Controles de Volume</h3>{['Frequência Original 70%','Ruído Branco 30%','Ruído Rosa 25%','Ruído Marrom 20%'].map(x=><label key={x}>{x}<input type="range" defaultValue="50"/></label>)}</section>
    <section className="status panel"><h3>Status Global</h3><b>● PRONTO</b><p>Projeto novo • interface limpa</p></section>
   </section>
  </div>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);
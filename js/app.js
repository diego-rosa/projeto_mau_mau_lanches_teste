window.createMauMauComponent = function (DCLogic) {
class Component extends DCLogic {
  static CATS = [{id:1,name:'Xis'},{id:2,name:'Cachorro-quente'},{id:3,name:'Espetos & Porções'},{id:4,name:'Bebidas'}];
  static BAIRROS = [['Parque 35',4],['Centro',5],['Colina',7],['Ermo',6],['Cohab',7],['Fátima',8],['Santa Rita',9],['Jardim dos Lagos',8]];
  state = {
    tab:'pedido', phone:'', fiadoName:'', fiadoTried:false, bairrosList: Component.BAIRROS.map(([name,fee],i) => ({id:i+1, name, fee, active:true})), nbName:'', nbFee:'', nbQ:'', nbTried:false, feeTxt:{}, wait:'40', street:'', detail:null, toast:null, printCfg: JSON.parse(JSON.stringify(Component.PRINT_DEF)), stockFilter:'all', stepTxt:{}, paid:{}, period:'hoje',
    inventory:[
      {id:1,name:'Pão de Xis',unit:'un',current:38,min:20},{id:2,name:'Hambúrguer bovino',unit:'kg',current:7.4,min:5},
      {id:3,name:'Coração de frango',unit:'kg',current:2.1,min:4},{id:4,name:'Bacon fatiado',unit:'kg',current:1.8,min:3},
      {id:5,name:'Pão de cachorro-quente',unit:'un',current:40,min:15},{id:6,name:'Salsicha',unit:'kg',current:4.2,min:3},
      {id:7,name:'Queijo prato',unit:'kg',current:3.5,min:4},{id:8,name:'Batata congelada',unit:'kg',current:12,min:6},
      {id:9,name:'Refrigerante lata',unit:'un',current:52,min:24}], dragNum:null, overCol:null,
    motoboys:[{id:1,name:'Cleber Ribeiro',phone:'(51) 99812-4410'},{id:2,name:'Rodrigo Silveira',phone:''}], daily:40, dailyTxt:null, mbName:'', mbPhone:'', mbTried:false,
    orders:[
      {num:101,time:'19:02',type:'delivery',bairro:'Centro',street:'R. Sete de Setembro, 410',phone:'(51) 99654-2210',items:[{t:'2x Xis Salada',mod:'sem tomate',v:56},{t:'1x Refrigerante Lata 350ml',mod:'',v:6}],total:67,pay:'PIX',status:'done',moto:1},
      {num:102,time:'19:15',type:'balcao',bairro:'',items:[{t:'2x Espeto de Carne com Queijo',mod:'',v:32}],total:32,pay:'Débito',status:'ready',moto:null},
      {num:103,time:'19:21',type:'delivery',bairro:'Colina',street:'R. Pinheiro Machado, 88',phone:'(51) 98123-7745',cash:'100',items:[{t:'1x Xis Coração com Bacon',mod:'+ ovo',v:37},{t:'1x Porção Batata Frita',mod:'',v:28}],total:72,pay:'Dinheiro',status:'ready',moto:null},
      {num:104,time:'19:30',type:'delivery',bairro:'Parque 35',street:'Av. Nestor de Moura Jardim, 1200',items:[{t:'2x Cachorro-quente Especial',mod:'sem ervilha',v:44}],total:48,pay:'PIX',status:'prod',moto:2},
      {num:105,time:'19:34',type:'balcao',bairro:'',fiadoName:'Tia Neusa',fiadoPaid:false,items:[{t:'1x Xis Salada',mod:'+ bacon, sem milho',v:33}],total:33,pay:'Fiado',status:'prod',moto:null},
    ],
    cat:0, cats:Component.CATS.map(c => ({...c, active:true})), cf:null, nf:null, q:'', cart:[], editLine:null, openRow:null, newIng:'', newEx:'', newExP:'', type:'delivery', bairro:'Parque 35', pay:'PIX', cash:'', done:false, num:106,
    prods:[
      {id:1,catId:1,name:'Xis Salada',price:28,desc:'Pão prensado, hambúrguer artesanal 200g, queijo, presunto, alface, tomate e maionese',ings:['Hambúrguer','Queijo','Presunto','Alface','Tomate','Maionese','Milho','Ervilha'],extras:[['Bacon',5],['Ovo',3],['Cheddar',4],['Hambúrguer extra',8]],active:true},
      {id:2,catId:1,name:'Xis Coração com Bacon',price:34,desc:'Pão prensado, coração de frango, bacon, queijo duplo e maionese',ings:['Coração','Bacon','Queijo','Alface','Tomate','Maionese'],extras:[['Ovo',3],['Cheddar',4],['Coração extra',7]],active:true},
      {id:3,catId:2,name:'Cachorro-quente Especial',price:22,desc:'Pão, 2 salsichas, molho especial, queijo e batata palha',ings:['Salsicha','Molho','Queijo','Batata palha','Milho','Ervilha'],extras:[['Salsicha extra',4],['Cheddar',4],['Bacon',5]],active:true},
      {id:4,catId:3,name:'Espeto de Carne com Queijo',price:16,desc:'Alcatra grelhada com queijo coalho e farofa',ings:['Queijo coalho','Farofa'],extras:[['Queijo coalho extra',4]],active:true},
      {id:5,catId:3,name:'Porção Batata Frita',price:28,desc:'500g de batata frita com queijo e bacon',ings:['Queijo','Bacon'],extras:[['Cheddar',5],['Calabresa',6]],active:true},
      {id:6,catId:4,name:'Refrigerante Lata 350ml',price:6,desc:'Coca-Cola, Guaraná Antarctica ou Fanta',ings:[],extras:[],active:true},
      {id:7,catId:4,name:'Cerveja Long Neck',price:9,desc:'Heineken ou Stella Artois',ings:[],extras:[],active:false},
    ]
  };
  static PRINT_DEF = {
    cliente:{paper:'80', size:13, bold:true, footer:'Obrigado pela preferência!', show:{loja:true,endereco:true,datahora:true,tipo:true,cliente:true,precos:true,mods:true,totais:true,pagamento:true,motoboy:true,rodape:true}},
    cozinha:{paper:'80', size:16, bold:true, footer:'', show:{loja:false,endereco:false,datahora:true,tipo:true,cliente:false,precos:false,mods:true,totais:false,pagamento:false,motoboy:false,rodape:false}}
  };
  static SHOW_LABELS = [['loja','Nome da loja'],['endereco','Endereço da loja'],['datahora','Data e hora'],['tipo','Entrega ou balcão'],['cliente','Endereço e telefone do cliente'],['precos','Preço dos itens'],['mods','Adicionais e remoções'],['totais','Subtotal, taxa e total'],['pagamento','Pagamento e troco'],['rodape','Mensagem de rodapé']];
  componentWillUnmount() { document.removeEventListener('pointerdown', this._outside, true); document.removeEventListener('keydown', this._esc); }
  componentDidMount() {
    this._outside = e => { if (this.state.editLine != null && !e.target.closest('[data-line-open="true"]')) this.setState({editLine:null}); };
    this._esc = e => { if (e.key === 'Escape' && this.state.editLine != null) this.setState({editLine:null}); };
    document.addEventListener('pointerdown', this._outside, true); document.addEventListener('keydown', this._esc); try { const c = JSON.parse(localStorage.getItem('maumau-print-cfg')); if (c && c.cliente && c.cozinha) this.setState({printCfg:c}); } catch (e) {} }
  detailView(s, f, cartDoc) {
    const d = s.detail; if (!d) return {open:false};
    const C = Component, set = o => this.setState(o), up = o => set({detail:{...d, ...o}});
    const isCart = d.src === 'cart';
    const o = isCart ? cartDoc : s.orders.find(x => x.num === d.src);
    if (!o) return {open:false};
    const del = o.type === 'delivery';
    const fee = del ? ((s.bairrosList.find(b => b.name===o.bairro) || {fee:0}).fee) : 0;
    const cfg = s.printCfg.cliente, sh = cfg.show, fs = cfg.size;
    const saveCfg = nc => { const all = {...s.printCfg, cliente: nc}; try { localStorage.setItem('maumau-print-cfg', JSON.stringify(all)); } catch (e) {} set({printCfg: all}); };
    const updO = patch => this.setState(st => ({orders: st.orders.map(x => x.num===o.num ? {...x, ...patch} : x)}));
    const moto = s.motoboys.find(m => m.id === o.moto);
    const change = o.pay === 'Dinheiro' && Number(o.cash) > 0 ? Math.max(0, Number(o.cash) - o.total) : null;
    const seg = on => ({bg: on ? '#fff' : 'transparent', fg: on ? '#1F1A17' : '#7A7068', sh: on ? '0 1px 2px rgba(31,26,23,.12)' : 'none'});
    const chip = on => ({bg: on ? '#1F1A17' : '#fff', fg: on ? '#fff' : '#1F1A17', bd: on ? '#1F1A17' : '#E2DBD3'});
    const sent = n => { set({detail:null, toast: n}); setTimeout(() => set({toast:null}), 2500); };
    const stName = {prod:'Produção', ready:'Pronto p/ retirada ou entrega', done:'Concluído'};
    return {
      open:true, isCart, num:o.num, time:o.time, typeLabel: del ? 'Entrega · ' + o.bairro : 'Balcão',
      statusLabel: isCart ? 'Ainda não enviado' : stName[o.status],
      items: o.items.map(it => ({t:it.t, mod:it.mod, hasMod:!!it.mod, v: f(it.v || 0)})),
      addr: del ? (o.street || 'Rua não informada') + ' · ' + o.bairro : 'Retirada no balcão', cliPhone: o.phone || 'Telefone não informado',
      sub: f(o.total - fee), fee: f(fee), total: f(o.total), pay: o.pay==='Fiado' ? 'Fiado · ' + (o.fiadoName || 'sem nome') + (o.fiadoPaid ? ' · pago' : ' · a receber') : o.pay + (change != null ? ' · troco ' + f(change) : ''),
      showFiadoBtn: o.pay==='Fiado' && !isCart, fiadoBtn: o.fiadoPaid ? 'Desfazer recebimento' : 'Marcar fiado como recebido', fiadoToggle: () => updO({fiadoPaid: !o.fiadoPaid}),
      fiadoBtnBg: o.fiadoPaid ? '#fff' : '#2F9E44', fiadoBtnFg: o.fiadoPaid ? '#4A423C' : '#fff', fiadoBtnBd: o.fiadoPaid ? '1px solid #E2DBD3' : '0',
      hasStatuses: !isCart, showMotos: del && !isCart,
      statuses: [['prod','Produção'],['ready','Pronto'],['done','Concluído']].map(([id,label]) => ({label, go:()=>updO({status:id}), ...chip(o.status===id)})),
      motos: s.motoboys.map(m => ({name:m.name, go:()=>updO({moto: o.moto===m.id ? null : m.id}), ...chip(o.moto===m.id)})),
      close: () => set({detail:null}), stop: e => e.stopPropagation(),
      vias: [['cliente','Via do cliente'],['cozinha','Via da cozinha']].map(([id,label]) => ({label, go:()=>up({via:id}), ...seg(d.via===id)})),
      papers: ['58','80'].map(p => ({label:p + ' mm', go:()=>saveCfg({...cfg, paper:p}), ...seg(cfg.paper===p)})),
      size: fs + ' px', sizeDown: () => saveCfg({...cfg, size:Math.max(10, fs-1)}), sizeUp: () => saveCfg({...cfg, size:Math.min(22, fs+1)}),
      adv: d.adv, advLabel: d.adv ? 'Fechar ajustes' : 'Ajustar impressão', toggleAdv: () => up({adv:!d.adv}),
      toggles: [...C.SHOW_LABELS.map(([k,label]) => ({label, on:sh[k], go:()=>saveCfg({...cfg, show:{...sh, [k]:!sh[k]}})})), {label:'Itens em negrito', on:cfg.bold, go:()=>saveCfg({...cfg, bold:!cfg.bold})}].map(t => ({...t, tg: t.on ? '#2F9E44' : '#D6CFC7', kx: t.on ? '16px' : '2px'})),
      footer: cfg.footer, onFooter: e => saveCfg({...cfg, footer:e.target.value}),
      obs: d.obs, onObs: e => up({obs:e.target.value}),
      reset: () => saveCfg(JSON.parse(JSON.stringify(C.PRINT_DEF.cliente))),
      print: () => sent('Comanda enviada para a impressora'),
      printBoth: () => sent('2 vias enviadas para a impressora'),
      r: { w: cfg.paper==='58' ? '232px' : '310px', fs: fs + 'px', fsBig: (fs + 8) + 'px', fsSm: Math.max(9, fs - 2) + 'px', fsItem: (fs + 4) + 'px', fsTotal: (fs + 3) + 'px', itemW: cfg.bold ? '700' : '400',
        via: d.via==='cliente' ? 'VIA DO CLIENTE' : 'VIA DA COZINHA', date: '24/09/2026  ' + o.time, tipo: del ? 'ENTREGA' : 'BALCÃO',
        sLoja:sh.loja, sEnd:sh.endereco, sData:sh.datahora, sTipo:sh.tipo, sCli: sh.cliente && del, sPreco:sh.precos, sTot:sh.totais, sPag:sh.pagamento,
        sMoto: sh.motoboy && del, motoName: moto ? moto.name : 'a definir', sRod: sh.rodape && !!cfg.footer.trim(), footer: cfg.footer,
        cliAddr: (o.street || 'Rua não informada'), sPhone: sh.cliente && !!o.phone, phone: o.phone || '', cliBairro: o.bairro, sub: f(o.total - fee), fee: f(fee), total: f(o.total), pay: o.pay==='Fiado' ? 'FIADO' : o.pay, isFiado: o.pay==='Fiado', fiadoName: o.fiadoName || '', hasChange: change != null && sh.pagamento, change: change != null ? f(change) : '',
        hasObs: !!d.obs.trim(), obs: d.obs.trim(),
        items: o.items.map(it => ({t:it.t, v: f(it.v || 0), showMod: sh.mods && !!it.mod, mod: it.mod})) },
    };
  }
  bairrosView(s, f) {
    const set = o => this.setState(o);
    const upd = (id, patch) => this.setState(st => ({bairrosList: st.bairrosList.map(b => b.id===id ? {...b, ...patch} : b)}));
    const fv = parseFloat(String(s.nbFee).replace(',','.'));
    const dup = s.bairrosList.some(b => b.name.toLowerCase() === s.nbName.trim().toLowerCase());
    const add = () => { if (!s.nbName.trim() || isNaN(fv) || fv < 0 || dup) return set({nbTried:true});
      const id = Math.max(0, ...s.bairrosList.map(b=>b.id)) + 1;
      set({bairrosList:[...s.bairrosList, {id, name:s.nbName.trim(), fee:fv, active:true}], nbName:'', nbFee:'', nbTried:false}); };
    const ql = s.nbQ.toLowerCase();
    const list = s.bairrosList.filter(b => !ql || b.name.toLowerCase().includes(ql)).sort((a,b) => a.name.localeCompare(b.name));
    const fees = s.bairrosList.filter(b=>b.active).map(b=>b.fee);
    return {
      count: s.bairrosList.filter(b=>b.active).length, range: fees.length ? f(Math.min(...fees)) + ' a ' + f(Math.max(...fees)) : '—',
      name: s.nbName, fee: s.nbFee, q: s.nbQ,
      onName: e => set({nbName:e.target.value}), onFee: e => set({nbFee:e.target.value}), onQ: e => set({nbQ:e.target.value}),
      onKey: e => { if (e.key === 'Enter') add(); }, add,
      nameBd: s.nbTried && (!s.nbName.trim() || dup) ? '#C41F27' : '#E2DBD3', feeBd: s.nbTried && (isNaN(fv) || fv < 0) ? '#C41F27' : '#E2DBD3',
      err: s.nbTried && dup ? 'Esse bairro já está cadastrado.' : '', hasErr: s.nbTried && dup,
      empty: !list.length,
      rows: list.map(b => { const n = s.orders.filter(o => o.type==='delivery' && o.bairro===b.name).length; return {
        name:b.name, feeN: s.feeTxt[b.id] ?? b.fee.toFixed(2).replace('.',','), deliveries: n ? n + (n>1?' entregas':' entrega') : '—',
        onFee: e => { const t = e.target.value; const v = parseFloat(t.replace(',','.')); this.setState(st => ({feeTxt:{...st.feeTxt, [b.id]:t}, bairrosList: isNaN(v) ? st.bairrosList : st.bairrosList.map(x => x.id===b.id ? {...x, fee:v} : x)})); },
        onName: e => upd(b.id, {name:e.target.value}),
        op: b.active ? 1 : .55, tg: b.active ? '#2F9E44' : '#D6CFC7', kx: b.active ? '23px' : '3px', toggle: () => upd(b.id, {active:!b.active}),
        del: () => this.setState(st => ({bairrosList: st.bairrosList.filter(x => x.id !== b.id)})),
      }; }),
    };
  }
  stock(s) {
    const set = o => this.setState(o);
    const n = (v, u) => (u==='kg' ? v.toFixed(1).replace('.',',') : String(Math.round(v))) + ' ' + u;
    const adj = (id, d) => this.setState(st => ({inventory: st.inventory.map(i => i.id===id ? {...i, current: Math.max(0, Math.round((i.current + d)*10)/10)} : i)}));
    const low = s.inventory.filter(i => i.current <= i.min);
    const rows = s.inventory.filter(i => s.stockFilter==='all' || i.current <= i.min);
    return {
      lowCount: low.length,
      filters: [['all','Todos'],['low','Repor ('+low.length+')']].map(([id,name]) => { const on = s.stockFilter===id; return {name, go:()=>set({stockFilter:id}), bg:on?'#1F1A17':'#fff', fg:on?'#fff':'#1F1A17', bd:on?'#1F1A17':'#E2DBD3'}; }),
      rows: rows.map(i => { const isLow = i.current <= i.min; const def = i.unit==='kg' ? '0,5' : '1'; const stepTxt = s.stepTxt[i.id] ?? def; const step = Math.max(0, parseFloat(String(stepTxt).replace(',','.')) || 0); return {
        stepTxt, unit: i.unit, onStep: e => this.setState(st => ({stepTxt: {...st.stepTxt, [i.id]: e.target.value.replace(/[^0-9.,]/g,'')}})),
        name:i.name, cur:n(i.current,i.unit), min:n(i.min,i.unit), pct: Math.min(100, Math.round(i.current / (i.min*2.5) * 100)) + '%',
        barBg: isLow ? '#C41F27' : '#2F9E44', status: isLow ? 'Repor' : 'OK', sBg: isLow ? '#FDECEC' : '#EAF6EC', sFg: isLow ? '#C41F27' : '#237A33',
        inc:()=>adj(i.id, step), dec:()=>adj(i.id, -step)}; }),
    };
  }
  motoPay(s, f) {
    const BASE = s.daily, set = o => this.setState(o);
    const add = () => { const n = s.mbName.trim(); if (!n) return set({mbTried:true}); const id = Math.max(0, ...s.motoboys.map(m=>m.id)) + 1; set({motoboys:[...s.motoboys, {id, name:n, phone:s.mbPhone.trim()}], mbName:'', mbPhone:'', mbTried:false}); };
    const extra = {
      dailyTxt: s.dailyTxt ?? BASE.toFixed(2).replace('.',','),
      onDaily: e => { const t = e.target.value; const v = parseFloat(t.replace(',','.')); set(isNaN(v) ? {dailyTxt:t} : {dailyTxt:t, daily:v}); },
      newName: s.mbName, newPhone: s.mbPhone, onNewName: e => set({mbName:e.target.value}), onNewPhone: e => set({mbPhone:e.target.value}),
      onKey: e => { if (e.key === 'Enter') add(); }, add, nameBd: s.mbTried && !s.mbName.trim() ? '#C41F27' : '#E2DBD3', empty: !s.motoboys.length,
    };
    const fee = b => (s.bairrosList.find(x => x.name===b) || {fee:0}).fee;
    const stLabel = {prod:'Produção', ready:'Aguardando', done:'Entregue'};
    return { ...extra, base: f(BASE), cards: s.motoboys.map(m => {
      const trips = s.orders.filter(o => o.moto===m.id && o.type==='delivery');
      const fees = trips.reduce((a,o) => a + fee(o.bairro), 0); const total = BASE + fees; const paid = !!s.paid[m.id];
      const onRoute = trips.filter(o => o.status!=='done').length;
      return { remove: () => this.setState(st => ({motoboys: st.motoboys.filter(x => x.id !== m.id), orders: st.orders.map(o => o.moto===m.id && o.status!=='done' ? {...o, moto:null} : o)})),
        name:m.name, ini:m.name.split(' ').map(x=>x[0]).join(''), sub: m.phone || '', hasSub: !!m.phone, nLabel: trips.length + (trips.length===1 ? ' entrega' : ' entregas'),
        trips: trips.map(o => ({num:o.num, bairro:o.bairro, st:stLabel[o.status], fee:f(fee(o.bairro))})), noTrips: !trips.length, n: trips.length,
        base: f(BASE), fees: f(fees), total: f(total), status: paid ? 'Pago' : 'Em aberto', sBg: paid ? '#EAF6EC' : '#FFF6DB', sFg: paid ? '#237A33' : '#7A5A00',
        btn: paid ? 'Desfazer' : 'Marcar como pago', btnBg: paid ? '#fff' : '#C41F27', btnFg: paid ? '#4A423C' : '#fff', btnBd: paid ? '1px solid #E2DBD3' : '0',
        pay: () => this.setState(st => ({paid: {...st.paid, [m.id]: !st.paid[m.id]}})) };
    }) };
  }
  reports(s, f) {
    const set = o => this.setState(o);
    const mult = {hoje:1, ontem:0.86, '7dias':6.3}[s.period];
    const rev = s.orders.reduce((a,o) => a + o.total, 0) * mult; const count = Math.round(s.orders.length * mult);
    const tally = {}; s.orders.forEach(o => o.items.forEach(it => { const m = it.t.match(/^(\d+)x (.+)$/); if (m) tally[m[2]] = (tally[m[2]]||0) + Number(m[1]); }));
    const top = Object.entries(tally).sort((a,b) => b[1]-a[1])[0] || ['—',0];
    const payT = {}; s.orders.forEach(o => payT[o.pay] = (payT[o.pay]||0) + o.total); const sum = Object.values(payT).reduce((a,b)=>a+b,0) || 1;
    const typeOf = o => o.type==='delivery' ? 'Entrega · ' + o.bairro : 'Balcão';
    return {
      periods: [['hoje','Hoje'],['ontem','Ontem'],['7dias','7 dias']].map(([id,label]) => ({label, go:()=>set({period:id}), bg:s.period===id?'#1F1A17':'transparent', fg:s.period===id?'#fff':'#6E655E'})),
      kpis: [{label:'Faturamento', value:f(rev)}, {label:'Pedidos', value:String(count)}, {label:'Ticket médio', value:f(count ? rev/count : 0)}, {label:'Fiado a receber', value: f(s.orders.filter(o => o.pay==='Fiado' && !o.fiadoPaid).reduce((a,o)=>a+o.total,0))}, {label:'Mais vendido', value: top[0] + ' (' + Math.round(top[1]*mult) + ')'}],
      pays: ['PIX','Crédito','Débito','Dinheiro','Fiado'].map(p => ({name:p, value:f((payT[p]||0)*mult), share: Math.round((payT[p]||0)/sum*100) + '%'})),
      usage: [['Pão de Xis','4 un','38 un'],['Hambúrguer bovino','0,8 kg','7,4 kg'],['Pão de cachorro-quente','2 un','40 un'],['Salsicha','0,4 kg','4,2 kg'],['Coração de frango','0,2 kg','2,1 kg'],['Batata congelada','0,5 kg','12 kg'],['Refrigerante lata','3 un','52 un']].map(([name,out,left]) => ({name, out, left:'resta ' + left})),
      rows: [...s.orders].reverse().map(o => ({num:o.num, time:o.time, type:typeOf(o), items:o.items.map(i=>i.t).join(', '), pay: o.pay==='Fiado' ? 'Fiado' + (o.fiadoPaid ? ' ✓' : '') : o.pay, total:f(o.total)})),
    };
  }
  board(s, f) {
    const set = o => this.setState(o);
    const COLS = [['prod','Produção','#F5B800','#FFFBEE'],['ready','Pronto p/ retirada ou entrega','#C41F27','#FFF5F5'],['done','Concluído','#2F9E44','#F3FAF4']];
    const move = (num, status) => this.setState(st => ({orders: st.orders.map(o => o.num===num ? {...o, status} : o), dragNum:null, overCol:null}));
    const setMoto = (num, id) => this.setState(st => ({orders: st.orders.map(o => o.num===num ? {...o, moto: o.moto===id ? null : id} : o)}));
    const first = n => n.split(' ')[0];
    return {
      motoStrip: s.motoboys.map(m => { const n = s.orders.filter(o => o.moto===m.id && o.status!=='done').length; return {name:first(m.name), ini:m.name.split(' ').map(x=>x[0]).join(''), load: n ? n + (n>1?' entregas':' entrega') : 'livre'}; }),
      cols: COLS.map(([id,name,dot,tint]) => { const cards = s.orders.filter(o => o.status===id); const over = s.overCol===id; return {
        name, dot, count:cards.length, empty:!cards.length, bg: over ? tint : '#F1EDE8', bd: over ? dot : 'transparent',
        over: e => { e.preventDefault(); if (s.overCol!==id) set({overCol:id}); },
        leave: e => { if (!e.currentTarget.contains(e.relatedTarget)) set({overCol:null}); },
        drop: e => { e.preventDefault(); const n = Number(e.dataTransfer.getData('text/plain')) || s.dragNum; if (n) move(n, id); },
        cards: cards.map(o => { const del = o.type==='delivery'; const nextIdx = COLS.findIndex(c=>c[0]===id) + 1; const needMoto = del && !o.moto && id!=='done'; return {
          num:o.num, time:o.time, total:f(o.total), pay: o.pay==='Fiado' ? 'Fiado · ' + o.fiadoName + (o.fiadoPaid ? ' (pago)' : '') : o.pay, op: s.dragNum===o.num ? .4 : 1,
          typeLabel: del ? 'Entrega · ' + o.bairro : 'Balcão', typeBg: del ? '#FDECEC' : '#F4F0EB', typeFg: del ? '#C41F27' : '#4A423C',
          items: o.items.map(it => ({t:it.t, mod:it.mod, hasMod:!!it.mod})),
          isDelivery: del, motoLabel: needMoto ? 'Escolher motoboy' : 'Motoboy', motoLabelFg: needMoto ? '#C41F27' : '#7A7068',
          motos: s.motoboys.map(m => { const on = o.moto===m.id; return {name:first(m.name), go:e=>{ e.stopPropagation(); setMoto(o.num, m.id); }, bg:on?'#1F1A17':'#fff', fg:on?'#fff':'#1F1A17', bd:on?'#1F1A17':'#E2DBD3'}; }),
          canNext: nextIdx < COLS.length, nextLabel: id==='prod' ? 'Marcar pronto' : 'Concluir', next: e => { e.stopPropagation(); move(o.num, COLS[nextIdx][0]); },
          open: () => set({detail:{src:o.num, via:'cliente', adv:false, obs:''}}),
          print: e => { e.stopPropagation(); set({detail:{src:o.num, via:'cliente', adv:true, obs:''}}); },
          dragStart: e => { e.dataTransfer.setData('text/plain', String(o.num)); e.dataTransfer.effectAllowed = 'move'; setTimeout(()=>set({dragNum:o.num}), 0); },
          dragEnd: () => set({dragNum:null, overCol:null}),
        }; }),
      }; }),
    };
  }
  renderVals() {
    const s = this.state, C = Component;
    const f = v => 'R$ ' + v.toFixed(2).replace('.', ',');
    const set = o => this.setState(o);
    const catName = id => (s.cats.find(c => c.id === id) || {name:'Sem categoria'}).name;
    const addProd = id => this.setState(st => { const i = st.cart.findIndex(l => l.id === id && !l.removed.length && !l.added.length); if (i < 0) return {cart:[...st.cart, {key:Date.now(), id, qty:1, removed:[], added:[]}]}; return {cart: st.cart.map((l,j) => j===i ? {...l, qty:l.qty+1} : l)}; });
    const lineQty = (key, d) => this.setState(st => ({cart: st.cart.map(l => l.key===key ? {...l, qty:l.qty+d} : l).filter(l => l.qty > 0)}));
    const toggleRem = (key, ing) => this.setState(st => ({cart: st.cart.map(l => l.key===key ? {...l, removed: l.removed.includes(ing) ? l.removed.filter(x=>x!==ing) : [...l.removed, ing]} : l)}));
    const toggleAdd = (key, n) => this.setState(st => ({cart: st.cart.map(l => l.key===key ? {...l, added: l.added.includes(n) ? l.added.filter(x=>x!==n) : [...l.added, n]} : l)}));
    const unitPrice = l => { const p = pById(l.id); return p.price + l.added.reduce((a,n) => a + ((p.extras.find(e=>e[0]===n)||[0,0])[1]), 0); };
    const qtyOf = id => s.cart.filter(l => l.id===id).reduce((a,l)=>a+l.qty,0);
    const updP = (id, fn) => this.setState(st => ({prods: st.prods.map(x => x.id===id ? fn(x) : x)}));
    const ql = s.q.toLowerCase();
    const filt = p => (!s.cat || p.catId === s.cat) && (!ql || p.name.toLowerCase().includes(ql));
    const activeCategoryIds = new Set(s.cats.filter(c => c.active !== false).map(c => c.id));
    const pById = id => s.prods.find(p => p.id === id);
    const sub = s.cart.reduce((a, l) => a + l.qty * unitPrice(l), 0);
    const fee = s.type === 'delivery' ? ((s.bairrosList.find(b => b.name === s.bairro) || {fee:0}).fee) : 0;
    const total = sub + fee;
    const lines = s.cart.map(l => { const p = pById(l.id); const open = s.editLine === l.key; return {
      name:p.name, qty:l.qty, total:f(unitPrice(l)*l.qty), inc:()=>lineQty(l.key,1), dec:()=>lineQty(l.key,-1),
      hasAdd: l.added.length > 0, addText: l.added.map(n => '+ ' + n.toLowerCase()).join(', '), hasIngs: p.ings.length > 0, hasExtras: p.extras.length > 0,
      extras: p.extras.map(([n,v]) => { const on = l.added.includes(n); return {name:n, price:'+'+f(v), go:()=>toggleAdd(l.key, n), bg:on?'#EAF6EC':'#fff', fg:on?'#237A33':'#4A423C', bd:on?'#9BD3A6':'#E2DBD3'}; }),
      hasRem: l.removed.length > 0, remText: l.removed.map(r => 'sem ' + r.toLowerCase()).join(', '),
      canEdit: p.ings.length > 0 || p.extras.length > 0, open, editLabel: open ? 'Fechar' : 'Personalizar',
      openStr: open ? 'true' : 'false', bg: open ? '#FFFBF0' : 'transparent', ring: open ? 'inset 0 0 0 1.5px #F5D77A' : 'none', padX: open ? '10px' : '0', mX: open ? '-10px' : '0',
      edit: () => set({editLine: open ? null : l.key}),
      ings: p.ings.map(ing => { const off = l.removed.includes(ing); return {name:ing, go:()=>toggleRem(l.key, ing), bg:off?'#FDECEC':'#fff', fg:off?'#C41F27':'#4A423C', bd:off?'#F3B9BC':'#E2DBD3', deco:off?'line-through':'none'}; }),
    }; });
    const now = new Date();
    const cartDoc = {num:s.num, time: String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0'), type:s.type, bairro:s.bairro, street:s.street, phone:s.phone, cash:s.cash, pay:s.pay, fiadoName: s.pay==='Fiado' ? s.fiadoName.trim() : '', fiadoPaid:false, total, moto:null,
      items: s.cart.map(l => { const p = pById(l.id); return {t: l.qty + 'x ' + p.name, v: unitPrice(l)*l.qty, mod: [...l.added.map(n=>'+ '+n.toLowerCase()), ...l.removed.map(r=>'sem '+r.toLowerCase())].join(', ')}; })};
    const moveCategory = (id, offset) => this.setState(st => {
      const index = st.cats.findIndex(c => c.id === id);
      const target = index + offset;
      if (index < 0 || target < 0 || target >= st.cats.length) return {};
      const cats = [...st.cats];
      [cats[index], cats[target]] = [cats[target], cats[index]];
      return {cats};
    });
    const categoryRows = s.cats.map((c, index) => {
      const active = c.active !== false;
      const productCount = s.prods.filter(p => p.catId === c.id).length;
      return {
        name:c.name, status:active?'Ativa':'Inativa',
        statusBg:active?'#EAF6EC':'#F4F0EB', statusFg:active?'#237A33':'#7A7068',
        products:productCount + (productCount === 1 ? ' produto' : ' produtos'),
        canUp:index > 0, canDown:index < s.cats.length - 1,
        up:()=>moveCategory(c.id,-1), down:()=>moveCategory(c.id,1),
        edit:()=>set({cf:{id:c.id,name:c.name,tried:false}}),
        toggle:()=>this.setState(st => {
          const category = st.cats.find(item => item.id === c.id);
          if (!category) return {};
          const nextActive = category.active === false;
          return {
            cats:st.cats.map(item => item.id === c.id ? {...item,active:nextActive} : item),
            cat:!nextActive && st.cat === c.id ? 0 : st.cat,
          };
        }),
        toggleLabel:active?'Desativar':'Ativar',
      };
    });
    const catalogCategories = s.cats
      .filter(category => category.active !== false)
      .map(category => ({
        name:category.name,
        products:s.prods
          .filter(product => product.active && product.catId === category.id && (!ql || product.name.toLocaleLowerCase('pt-BR').includes(ql)))
          .map(product => ({
            name:product.name,
            description:product.desc,
            hasDescription:!!product.desc,
            price:f(product.price),
          })),
      }))
      .filter(category => category.products.length > 0);
    const catalogProductCount = catalogCategories.reduce((count, category) => count + category.products.length, 0);
    const navDef = [['pedido','Novo pedido','F1'],['quadro','Pedidos',String(s.orders.filter(o=>o.status!=='done').length)],['cardapio','Cardápio','F2'],['consulta','Consultar cardápio',''],['categorias','Categorias',''],['estoque','Estoque',''],['motoboy','Motoboys',''],['bairros','Bairros & taxas',''],['caixa','Caixa & Relatórios','']];
    return {
      wait: s.wait, onWait: e => set({wait: e.target.value}), selectAll: e => e.target.select(),
      nav: navDef.map(([id,label,key]) => ({label,key,go:()=>set({tab:id,q:'',cf:null}),bg:s.tab===id?'#C41F27':'transparent',fg:s.tab===id?'#fff':'#4A423C'})),
      catalog:{
        categories:catalogCategories,
        productCount:catalogProductCount,
        empty:catalogProductCount===0,
        searching:!!ql,
      },
      categories: {
        rows:categoryRows, count:s.cats.length,
        activeCount:s.cats.filter(c => c.active !== false).length,
        inactiveCount:s.cats.filter(c => c.active === false).length,
        empty:s.cats.length === 0,
        openNew:()=>set({cf:{id:null,name:'',tried:false}}),
      },
      cf: (() => {
        const form = s.cf;
        if (!form) return {open:false};
        const name = form.name.trim();
        const duplicate = s.cats.some(c => c.id !== form.id && c.name.trim().toLocaleLowerCase('pt-BR') === name.toLocaleLowerCase('pt-BR'));
        const error = !form.tried ? '' : !name ? 'Informe o nome da categoria.' : duplicate ? 'Já existe uma categoria com esse nome.' : '';
        return {
          open:true, title:form.id == null?'Nova categoria':'Editar categoria',
          name:form.name, nameBd:error?'#C41F27':'#E2DBD3', error,
          onName:e=>set({cf:{...form,name:e.target.value}}),
          close:()=>set({cf:null}),
          save:()=>this.setState(st => {
            const current = st.cf;
            if (!current) return {};
            const cleanName = current.name.trim();
            const exists = st.cats.some(c => c.id !== current.id && c.name.trim().toLocaleLowerCase('pt-BR') === cleanName.toLocaleLowerCase('pt-BR'));
            if (!cleanName || exists) return {cf:{...current,tried:true}};
            if (current.id == null) {
              const id = Math.max(0,...st.cats.map(c=>c.id)) + 1;
              return {cats:[...st.cats,{id,name:cleanName,active:true}],cf:null,cat:0};
            }
            return {cats:st.cats.map(c=>c.id===current.id?{...c,name:cleanName}:c),cf:null};
          }),
        };
      })(),
      isPedido: s.tab==='pedido', isMenu: s.tab==='cardapio', isCatalog: s.tab==='consulta', isCategories: s.tab==='categorias', isBoard: s.tab==='quadro', isStock: s.tab==='estoque', isMoto: s.tab==='motoboy', isReport: s.tab==='caixa', isBairros: s.tab==='bairros', nb: this.bairrosView(s, f),
      ...this.board(s, f), st: this.stock(s), mb: this.motoPay(s, f), rp: this.reports(s, f),
      q: s.q, onQ: e => set({q:e.target.value}),
      cats: [{id:0,name:'Todos'}, ...s.cats.filter(c => c.active !== false)].map(c => { const on = s.cat===c.id; return {name:c.name, go:()=>set({cat:c.id}), bg:on?'#1F1A17':'#fff', fg:on?'#fff':'#1F1A17', bd:on?'#1F1A17':'#E2DBD3'}; }),
      grid: s.prods.filter(p => p.active && activeCategoryIds.has(p.catId) && filt(p)).map(p => ({name:p.name, cat:catName(p.catId), price:f(p.price), qty:qtyOf(p.id), has:qtyOf(p.id)>0, bd:qtyOf(p.id)?'#C41F27':'#ECE6DF', add:()=>addProd(p.id)})),
      num: s.num, lines, empty: !lines.length,
      types: [['delivery','Entrega'],['balcao','Balcão']].map(([id,label]) => ({label, go:()=>set({type:id}), bg:s.type===id?'#fff':'transparent', fg:s.type===id?'#1F1A17':'#7A7068'})),
      isDelivery: s.type==='delivery', bairro: s.bairro, onBairro: e => set({bairro:e.target.value}),
      bairros: s.bairrosList.filter(b => b.active || b.name === s.bairro).map(b => ({name:b.name, label:b.name+' · '+f(b.fee)})),
      isFiado: s.pay==='Fiado', fiadoName: s.fiadoName, onFiadoName: e => set({fiadoName:e.target.value, fiadoTried:false}), fiadoBd: s.fiadoTried && !s.fiadoName.trim() ? '#C41F27' : '#E9D18A',
      pays: ['PIX','Crédito','Débito','Dinheiro','Fiado'].map(m => ({label:m, go:()=>set({pay:m}), bg:s.pay===m?'#FFF6DB':'#fff', bd:s.pay===m?'#F5B800':'#E2DBD3'})),
      isCash: s.pay==='Dinheiro', cash: s.cash, onCash: e => set({cash:e.target.value}),
      change: f(Math.max(0, Number(s.cash) - total)),
      subtotal: f(sub), fee: f(fee), total: f(total),
      finishLabel: lines.length ? 'Enviar pedido' : 'Adicione itens',
      finish: () => { if (!lines.length) return; if (s.pay==='Fiado' && !s.fiadoName.trim()) return set({fiadoTried:true});
        set({orders:[...s.orders, {...cartDoc, status:'prod'}], cart:[], editLine:null, cash:'', street:'', phone:'', fiadoName:'', fiadoTried:false, done:true, num:s.num+1}); setTimeout(()=>set({done:false}), 2500); },
      street: s.street, onStreet: e => set({street:e.target.value}),
      phone: s.phone, onPhone: e => { const d = e.target.value.replace(/\D/g,'').slice(0,11); const m = d.length > 10 ? d.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,'($1) $2-$3') : d.length > 6 ? d.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3') : d.length > 2 ? d.replace(/^(\d{2})(\d*)/,'($1) $2') : d; set({phone:m}); },
      canPreview: lines.length > 0, openPreview: () => set({detail:{src:'cart', via:'cliente', adv:true, obs:''}}),
      dt: this.detailView(s, f, cartDoc), toast: s.toast, hasToast: !!s.toast,
      done: s.done,
      activeCount: s.prods.filter(p=>p.active).length, pausedCount: s.prods.filter(p=>!p.active).length,
      openNew: () => { const firstCat = s.cats.find(c => c.active !== false); const selectedCat = s.cats.find(c => c.id === s.cat && c.active !== false); set({nf:{id:null,name:'', desc:'', price:'', catId:(selectedCat || firstCat || {}).id || 0, newCat:!firstCat, catName:'', tried:false}}); },
      openEdit: id => {
        const product = s.prods.find(p => p.id === id);
        if (product) set({nf:{id:product.id,name:product.name,desc:product.desc,price:String(product.price).replace('.',','),catId:product.catId,newCat:false,catName:'',tried:false}});
      },
      closeNew: () => set({nf:null}), stop: e => e.stopPropagation(),
      nf: (() => { const n = s.nf; if (!n) return {open:false}; const up = o => this.setState(st => st.nf ? {nf:{...st.nf,...o}} : {}); const pv = Number(String(n.price).trim().replace(',','.'));
        const editProduct = n.id != null;
        const selectedCategory = s.cats.find(c => c.id === n.catId);
        const nameError = n.tried && !n.name.trim();
        const priceError = n.tried && (isNaN(pv) || pv <= 0);
        const categoryError = n.tried && (n.newCat ? !n.catName.trim() : !selectedCategory || (selectedCategory.active === false && !(editProduct && s.prods.some(p => p.id === n.id && p.catId === n.catId))));
        return { open:true, title:editProduct?'Editar produto':'Novo item no cardápio', saveLabel:editProduct?'Salvar alterações':'Salvar item', name:n.name, desc:n.desc, price:n.price, catName:n.catName, creatingCat:n.newCat,
          onName:e=>up({name:e.target.value}), onDesc:e=>up({desc:e.target.value}), onPrice:e=>up({price:e.target.value}), onCatName:e=>up({catName:e.target.value}),
          nameError:nameError?'Informe o nome do produto.':'', priceError:priceError?'Informe um preço maior que zero.':'', catError:categoryError?(n.newCat?'Informe o nome da categoria.':'Selecione uma categoria ativa.'):'',
          nameBd: nameError?'#C41F27':'#E2DBD3', priceBd: priceError?'#C41F27':'#E2DBD3', catBd: categoryError?'#C41F27':'#F5B800',
          cats: s.cats.filter(c => c.active !== false || (editProduct && c.id === n.catId)).map(c => { const on = !n.newCat && n.catId === c.id; return {name:c.name+(c.active===false?' (inativa)':''), go:()=>up({catId:c.id, newCat:false}), bg:on?'#1F1A17':'#fff', fg:on?'#fff':'#1F1A17', bd:on?'#1F1A17':'#E2DBD3'}; }),
          startCat: () => up({newCat:true}), newCatBd: n.newCat?'#C41F27':'#E2C2C3', newCatBg: n.newCat?'#FDECEC':'#fff',
          save: () => this.setState(st => {
            const form = st.nf;
            if (!form) return {};
            const product = form.id == null ? null : st.prods.find(p => p.id === form.id);
            const cleanName = form.name.trim();
            const parsedPrice = Number(String(form.price).trim().replace(',','.'));
            let cats = st.cats, catId = form.catId;
            if (form.newCat) {
              const categoryName = form.catName.trim();
              const existing = categoryName && cats.find(c => c.name.trim().toLocaleLowerCase('pt-BR') === categoryName.toLocaleLowerCase('pt-BR'));
              if (!categoryName) return {nf:{...form,tried:true}};
              if (existing) {
                catId = existing.id;
                cats = cats.map(c => c.id === existing.id ? {...c,active:true} : c);
              } else {
                catId = Math.max(0,...cats.map(c=>c.id)) + 1;
                cats = [...cats,{id:catId,name:categoryName,active:true}];
              }
            }
            const category = cats.find(c => c.id === catId);
            const validCategory = category && (category.active !== false || (product && product.catId === catId));
            if (!cleanName || isNaN(parsedPrice) || parsedPrice <= 0 || !validCategory) return {nf:{...form,tried:true}};
            if (product) {
              return {cats,prods:st.prods.map(p => p.id === product.id ? {...p,name:cleanName,desc:form.desc.trim(),price:parsedPrice,catId} : p),nf:null};
            }
            const id = Math.max(0,...st.prods.map(p=>p.id)) + 1;
            return {cats,nf:null,cat:0,q:'',openRow:id,prods:[...st.prods,{id,catId,name:cleanName,price:parsedPrice,desc:form.desc.trim(),ings:[],extras:[],active:true}]};
          }),
        };
      })(),
      newIng: s.newIng, onNewIng: e => set({newIng:e.target.value}), newEx: s.newEx, onNewEx: e => set({newEx:e.target.value}), newExP: s.newExP, onNewExP: e => set({newExP:e.target.value}),
      menu: s.prods.filter(filt).map(p => { const open = s.openRow === p.id; const addIng = () => { const v = s.newIng.trim(); if (!v || p.ings.includes(v)) return; updP(p.id, x => ({...x, ings:[...x.ings, v]})); set({newIng:''}); }; return {
        open, expand: () => set({openRow: open ? null : p.id, newIng:''}), arrow: open ? '▴' : '▾',
        edit:()=>set({nf:{id:p.id,name:p.name,desc:p.desc,price:String(p.price).replace('.',','),catId:p.catId,newCat:false,catName:'',tried:false}}),
        ingCount: (p.ings.length ? p.ings.length + ' acomp.' : 'Nenhum') + (p.extras.length ? ' · ' + p.extras.length + ' adic.' : ''),
        ings: p.ings.map(ing => ({name:ing, del:()=>updP(p.id, x => ({...x, ings:x.ings.filter(i=>i!==ing)}))})),
        exCount: p.extras.length ? ' · ' + p.extras.length + ' adic.' : '',
        extras: p.extras.map(([n,v]) => ({name:n, price:f(v), del:()=>updP(p.id, x => ({...x, extras:x.extras.filter(e=>e[0]!==n)}))})),
        noExtras: !p.extras.length, addEx: () => { const n = s.newEx.trim(); const v = parseFloat(String(s.newExP).replace(',','.')); if (!n || isNaN(v) || p.extras.some(e=>e[0]===n)) return; updP(p.id, x => ({...x, extras:[...x.extras, [n,v]]})); set({newEx:'', newExP:''}); },
        noIngs: !p.ings.length, addIng, onIngKey: e => { if (e.key === 'Enter') addIng(); },
        name:p.name, desc:p.desc, cat:catName(p.catId), priceN:p.price.toFixed(2).replace('.',','), op:p.active?1:.55, tg:p.active?'#2F9E44':'#D6CFC7', kx:p.active?'23px':'3px', toggle:()=>updP(p.id, x => ({...x, active:!x.active}))}; }),
    };
  }
}
  return Component;
};

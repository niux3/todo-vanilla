(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(){this.todos=[],this.nextId=1}add(e,t=``){let n={id:this.nextId++,title:e,description:t,completed:!1,createdAt:new Date};return this.todos.push(n),n}toggleAll(e){this.todos=[...this.todos.map(t=>({...t,completed:e}))]}remove(e){this.todos=[...this.todos.filter(t=>t.id!==parseInt(e,10))]}update(e,t){let n=this.todos.find(t=>t.id===e);return n?(Object.assign(n,t),n):null}toggle(e){this.todos=[...this.todos.map(t=>t.id===parseInt(e,10)?{...t,completed:!t.completed}:t)]}get(e){return this.todos.find(t=>t.id===e)||null}getAll(){return[...this.todos]}getCompleted(){return[...this.todos.filter(e=>e.completed)]}getPending(){return[...this.todos.filter(e=>!e.completed)]}clear(){this.todos=[...this.todos.filter(e=>!e.completed)]}save(e=`todos`){try{let t=JSON.stringify({todos:this.todos,nextId:this.nextId});return localStorage.setItem(e,t),!0}catch(e){return console.error(`Failed to save todos:`,e),!1}}load(e=`todos`){let t=localStorage.getItem(e);if(!t)return!1;try{let e=JSON.parse(t);return this.todos=e.todos||[],this.nextId=e.nextId||1,!0}catch(e){return console.error(e),!1}}getCount(){return this.todos.length}},t=`<header>
    <form id="todo-form" aria-label="Formulaire d'ajout de tâche">
        <div class="grid-x grid-margin-x align-middle">
            <div class="cell shrink">
                <input type="checkbox" name="toggleAll" aria-label="Cocher ou décocher toutes les tâches" />
            </div>
            <div class="cell auto">
                <input type="text" name="newTask" placeholder="Nouvelle tâche…" aria-required="true" />
            </div>
            <div class="cell shrink">
                <button type="submit" disabled class="button expanded" aria-label="Ajouter la tâche">Ajouter</button>
            </div>
        </div>
    </form>
</header>
`,n=class extends HTMLElement{constructor(){super()}connectedCallback(){let e=document.createRange().createContextualFragment(t);e&&(this.appendChild(e),this.form=this.querySelector(`#todo-form`),this.input=this.querySelector(`input[name="newTask"]`),this.toggleAll=this.querySelector(`input[name="toggleAll"]`),this.button=this.querySelector(`button[type="submit"]`),this.input.addEventListener(`input`,()=>this.validate()),this.form.addEventListener(`submit`,e=>this.handleSubmit(e)),this.toggleAll.addEventListener(`change`,()=>this.handleToggleAll()))}validate(){let e=this.input.value.trim().length>0;this.button.disabled=!e}handleToggleAll(){let e=this.toggleAll.checked;this.dispatchEvent(new CustomEvent(`toggleAll`,{detail:{checked:e},bubbles:!0}))}handleSubmit(e){e.preventDefault();let t=this.input.value.trim();t&&(this.dispatchEvent(new CustomEvent(`add`,{detail:{title:t},bubbles:!0,composed:!0})),this.input.value=``,this.validate())}},r=`<section id="todo-list" role="list" aria-label="Liste des tâches">
    [[if(todos.length){]]
    <ul>
        [[todos.forEach(function(todo){]]
            [[if(todo.completed){]]
            <li role="listitem" class="completed" data-id="[[=todo.id]]">
                <label>
                    <input type="checkbox" checked aria-label="Tâche [[=todo.title]] terminée" />
                    <span>[[=todo.title]]</span>
                </label>
                <button type="button" class="button alert" aria-label="Supprimer la tâche [[=todo.title]]">&cross;</button>
            </li>
            [[}else{]]
            <li data-id="[[=todo.id]]">
                <label>
                    <input type="checkbox" aria-label="Tâche [[=todo.title]] en cours" />
                    <span>[[=todo.title]]</span>
                </label>
                <button type="button" class="button alert" aria-label="Supprimer la tâche [[=todo.title]]">&cross;</button>
            </li>
            [[}]]
        [[})]]
    </ul>
    [[}else{]]
    <p role="status" aria-live="polite">Aucune tâche</p>
    [[}]]
</section>
`,i=e=>{throw TypeError(e)},a=(e,t,n)=>t.has(e)||i(`Cannot `+n),o=(e,t,n)=>(a(e,t,`read from private field`),n?n.call(e):t.get(e)),s=(e,t,n)=>t.has(e)?i(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),c=(e,t,n)=>(a(e,t,`access private method`),n),l,u,d,f,p,m,h,g,_,v=class{constructor(){s(this,g),s(this,l,new Map),s(this,u,100),s(this,d,{"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`}),s(this,f,/[&<>"']/g),s(this,p,e=>String(e).replace(o(this,f),e=>o(this,d)[e])),s(this,m,[]),s(this,h,{})}use(e){return e(this,o(this,h)),o(this,m).push(e),this}render(e,t={}){if(!e)throw Error(`Template required`);try{let n=[t,o(this,p),...o(this,h).extraArgs||[]];return c(this,g,_).call(this,e)(...n)}catch(e){throw Error(`Template render failed: ${e.message}`)}}clear(){return o(this,l).clear(),this}};l=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakSet,_=function(e){let t=e;if(o(this,l).has(t))return o(this,l).get(t);let n=e;o(this,h).preprocessors&&o(this,h).preprocessors.forEach(e=>{n=e(n)});let r=/\[\[=?-?([\s\S]+?)\]\]|([^\[]+)/g,i,a=`let output="";
`;for(;i=r.exec(n);)if(i[1]){let e=i[1].trim(),t=i[0].slice(0,3);a+=t===`[[=`?`output+=escapeHTML(${e});
`:t===`[[-`?`output+=${e};
`:`${e}
`}else i[2]&&(a+=`output+=${JSON.stringify(i[2])};
`);a+=`return output;`;let s=`with(data) { ${a} }`;o(this,h).wrappers&&o(this,h).wrappers.forEach(e=>{s=e(s,a)});try{let e=[`data`,`escapeHTML`,...o(this,h).extraParams||[]],n=Function(...e,s);return o(this,l).size>=o(this,u)&&o(this,l).delete(o(this,l).keys().next().value),o(this,l).set(t,n),n}catch(e){throw Error(`Template compilation failed: ${e.message}`)}};var y=class extends HTMLElement{constructor(){super(),this.engine=new v,this.li=null,this._todos=[]}connectedCallback(){this.render()}render(){let e={todos:this._todos};this.innerHTML=this.engine.render(r,e),this.li=this.querySelectorAll(`li`),this.li.forEach(e=>{e.querySelector(`button`).addEventListener(`click`,this.handleRemove.bind(this)),e.addEventListener(`change`,this.handleToggle.bind(this))})}disconnectedCallback(){this.li.forEach(e=>{e.querySelector(`button`).removeEventListener(`click`,this.handleRemove.bind(this)),e.querySelector(`input[type="checkbox"]`).removeEventListener(`click`,this.handleToggle.bind(this))})}handleRemove(e){let t=e.target;if(t){e.preventDefault();let n=t.closest(`li`);if(n){let e=n.dataset.id;this.dispatchEvent(new CustomEvent(`remove`,{detail:{id:e},bubbles:!0,composed:!0}))}}}handleToggle(e){if(e.target){let t=e.target.closest(`li`).dataset.id;this.dispatchEvent(new CustomEvent(`toggle`,{detail:{id:t},bubbles:!0}))}}set data(e){this._todos=e||[],this.render()}},b=`[[if(data_len > 0){]]
<footer>
    <span>[[= filtered_data_len ]] tâche[[= filtered_data_len > 1 ? 's' : '']]</span>
    <nav role="navigation">
        <a href="#/all" class="button[[= url === '#/all'? ' warning' : '']] ">toutes</a>
        <a href="#/pending" class="button[[= url === '#/pending'? ' warning' : '']]">en cours</a>
        <a href="#/completed" class="button[[= url === '#/completed'? ' warning' : '']]">complétées</a>
        <a href="#/clear" class="button[[= url === '#/clear'? ' warning' : '']]">effacer</a>
    </nav> 
</footer>
[[}]]
`,x=class extends HTMLElement{constructor(){super(),this.engine=new v,this._filtered_data_len=0,this._url=``,this._data_len=0,this._updateScheduled=!1}set filtered_data_len(e){this._filtered_data_len=e,this.scheduleRender()}set data_len(e){this._data_len=e,this.scheduleRender()}set url(e){this._url=e,this.scheduleRender()}scheduleRender(){this._updateScheduled||(this._updateScheduled=!0,requestAnimationFrame(()=>{this._updateScheduled=!1,this.render()}))}render(){let e={data_len:this._data_len,filtered_data_len:this._filtered_data_len,url:this._url};this.innerHTML=this.engine.render(b,e)}},S=class extends HTMLElement{constructor(){super(),customElements.define(`todo-form`,n),customElements.define(`todo-list`,y),customElements.define(`todo-footer`,x),this.todoManager=new e,this.url=``}connectedCallback(){this.todoManager.load(),this.insertAdjacentHTML(`beforeend`,`<todo-form />`),this.todoForm=this.querySelector(`todo-form`),this.todoForm.addEventListener(`add`,this.handleAdd.bind(this)),this.todoForm.addEventListener(`toggleAll`,this.handleToggleAll.bind(this)),this.insertAdjacentHTML(`beforeend`,`<todo-list />`),this.todoList=this.querySelector(`todo-list`),this.todoList.addEventListener(`remove`,this.handleRemove.bind(this)),this.todoList.addEventListener(`toggle`,e=>this.handleToggle(e)),this.insertAdjacentHTML(`beforeend`,`<todo-footer />`),this.todoFooter=this.querySelector(`todo-footer`),this.handleRoute()}disconnectedCallback(){window.removeEventListener(`load`,this._onLoad),window.removeEventListener(`hashchange`,this._onHashChange)}handleRoute(){this._onLoad=()=>this.updateListWithCurrentFilter(),this._onHashChange=()=>this.updateListWithCurrentFilter(),window.addEventListener(`load`,this._onLoad),window.addEventListener(`hashchange`,this._onHashChange),this.updateListWithCurrentFilter()}handleToggleAll(e){this.todoManager.toggleAll(e.detail.checked),this.todoManager.save(),this.updateListWithCurrentFilter()}handleAdd(e){this.todoManager.add(e.detail.title),this.todoManager.save(),this.updateListWithCurrentFilter()}handleRemove(e){let t=e.detail.id;this.todoManager.remove(t),this.todoManager.save(),this.updateListWithCurrentFilter()}handleToggle(e){let t=e.detail.id;this.todoManager.toggle(t),this.todoManager.save(),this.updateListWithCurrentFilter()}updateListWithCurrentFilter(){this.url=window.location.hash||`#/all`;let e;switch(this.url){case`#/all`:e=this.todoManager.getAll();break;case`#/pending`:e=this.todoManager.getPending();break;case`#/completed`:e=this.todoManager.getCompleted();break;case`#/clear`:this.todoManager.clear(),this.todoManager.save(),e=this.todoManager.getAll();break;default:e=this.todoManager.getAll()}this.updateList(e)}updateList(e){this.todoList.data=e,this.todoFooter.filtered_data_len=e.length,this.todoFooter.data_len=this.todoManager.getAll().length,this.todoFooter.url=this.url}};customElements.define(`todo-component`,S);
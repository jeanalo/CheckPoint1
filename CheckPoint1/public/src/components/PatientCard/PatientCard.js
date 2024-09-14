class PatientCard extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(){
    return ['nombre','especie','fechaIngreso','sintomas','estado']

    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        if (oldValue !== newValue) {
            this[propName] = newValue
            this.render();
    }}

    taskChange(){
        this.state != this.state
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        
        <li class=${this.estado ? "pendiente" : "atendido"}>
        <h3>${this.nombre}</h3>
        <h3>${this.especie}</h3>
        <h3>${this.fechaIngreso}</h3>
        <h3>${this.sintomas}</h3>
        <input type="checkbox" ${this.estado ? "pendiente" : "atendido"} class="pet-state">
    </li>`;

    const checkbox = this.shadowRoot.querySelector('.pet-state')
    checkbox.addEventListener('change', () => this. taskChange())


}

}

customElements.define('patient-card', PatientCard)
export default PatientCard
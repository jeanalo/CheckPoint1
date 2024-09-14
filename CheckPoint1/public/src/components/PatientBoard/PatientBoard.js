import '../PatientCard/PatientCard.js'

class PatientBoard extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.patients = []
        
    }

    connectedCallback(){
        this.render()

        const form = this.shadowRoot.querySelector('.patients-form')
        form.addEventListener("submit", (e)=>{
           
            e.preventDefault()

            const namee = this.shadowRoot.querySelector('.input-name').value
            const especie = this.shadowRoot.querySelector('.input-especie').value
            const raza = this.shadowRoot.querySelector('.input-raza').value
            const fecha = this.shadowRoot.querySelector('.input-fechaDeIngreso').value

            this.patients.push({namee, especie, raza, fecha, state: false})

          
            this.addTask({namee, especie, raza, fecha, state: false})
            
        
            form.reset()
    } )}

    render(){
        this.shadowRoot.innerHTML = `
    
        <H1>USERS FORM<H1>
        <form class="patients-form">
            <input type="text" placeholder="Nombre" class="input-name" required>
            <input type="text" placeholder="Especie" class="input-especie" required>
            <input type="text" placeholder="Raza" class="input-raza" required>
            <input type="date" placeholder="Fecha de ingreso" class="input-fechaDeIngreso" required>
            <input type="text" placeholder="Sintomas" class="input-sintomas" required>
            <button>Añadir</button>
        </form>
        <ul class="tasks-container">
        </ul>`;    

        this.patients.forEach(task => this.addTask(task))
    }

    addTask({title, description, state}){
        
        const tasksContainer = this.shadowRoot.querySelector('.tasks-container')
        tasksContainer.innerHTML += `
        <task-item 
            nombre="${nombre}" 
            especie="${especie}" 
            fechaIngeso="${fechaIngreso}" 
            sintomas="${sintomas}" 
           estado="${estado}" 
            
    
            
        ></patient-card>
        `
    }
}

customElements.define('patients-board', PatientBoard)
export default PatientBoard
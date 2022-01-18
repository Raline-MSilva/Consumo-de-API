import react, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Header from "../../componentes";

export default class Landing extends Component {

    /*state = {
        model: {
            nome: "",
            email: "",
            observacoes: "",
        }
    }

    setValues = (e, field) => {
        const {model} = this.state;
        model[field] = e.target.value;
        this.setState({model})
    }

    save = (lead) =>{
        const url = "http://localhost:8080/leads";
        let data = {
            nome: lead.nome,
            email: lead.email,
            observacoes: lead.observacoes
        }
        const requestInfo = {
            method: "POST",
            body: "",
        }
        fetch(url, requestInfo)
    }
    */

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    }   

    signLead = () => {
        const url = "http://localhost:8080/leads";
        const data = {
            nome: this.nome,
            email: this.email,
            observacoes: this.observacoes,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then(response => {
            if(!response.ok){
               throw new Error ("Alguma coisa errada com seus dados")
            }
            console.log("Tudo ok! Em breve cê já vai ficar ligado!")
    })

}

    render() {
        return(
                <div className="page">
                <Header title="Receba nossa Newsletter!"/>
                <hr></hr>
                <Form>
                <FormGroup>
                    <Label for ="nome">Nome</Label>
                    <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Informe o seu nome: "/>
                    </FormGroup>
                <FormGroup>
                    <Label for ="email">Email</Label>
                    <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe o seu email: "/>
                </FormGroup>
                <FormGroup>
                    <Label for ="observacoes">Observações</Label>
                    <Input type="text" id="observacoes" onChange={e => this.observacoes = e.target.value} placeholder="Informe seu gosto literário: "/>
                    </FormGroup>
                    <Button color="danger" block onClick={this.signLead}> Enviar </Button>
            </Form>
                </div>
        );
    }
}
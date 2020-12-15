import { uuid } from 'uuidv4'

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    //basicamente omite o ID, deixa oculto
    //ID opcional, verifica se tem um ID ou não, para não criar um novo.
    constructor(props: Omit<User, 'id'>, id?: string) { 
        Object.assign(this, props); //Passa todas propriedades props para o this
        
        if (!id) {
            this.id = uuid() // Todo usuário dentro da aplicação vai ter um ID
        }
   
    } 
}
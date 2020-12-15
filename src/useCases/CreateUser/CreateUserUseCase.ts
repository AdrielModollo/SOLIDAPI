//Ações que determinado usuários pode fazer dentro da API
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";
//Não tem responsabilidade de saber onde será salvo o usuário, apenas verifica se usuário existe ou não e cria caso solicitado
export class CreateUserUseCase {  
    constructor(
        //recebe metódos, não importa qual.
        private usersRepository: IUsersRepository, 
        private mailProvider: IMailProvider,
    ){}

    //depende de uma abstração de uma interface de uma implementação
    async execute(data: ICreateUserRequestDTO) {
       const userAlreadyExists = await this.usersRepository.findByEmail(data.email) //verifica existência de usuário
    

        if(userAlreadyExists){
            throw new Error("User Already exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user); //salva nosso usuário
        
        await this.mailProvider.sendMail({
            to: {
              name: data.name,
              email: data.email,
            },
            from: {
              name: 'Equipe do Meu App',
              email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
          })
        }
      }
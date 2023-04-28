import { Component, Input} from '@angular/core';
interface Pessoa{
  nome:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo-app';
  mostraInput: boolean=true;
  usuarios: Pessoa[]=[];
    pessoa: Pessoa ={
      nome:''

    }
    cadastrarUsuario():void{
      
      

      const usuario: Pessoa={
        nome:this.pessoa.nome
      }

      
      this.usuarios.push(usuario);
      this.salvar();
      this.pessoa.nome=''
      console.log(this.usuarios);
    }
    remover(indice:number){
      this.usuarios.splice(indice,1);
      this.salvar()
    }
    salvar(){
      localStorage.setItem('tarefa',JSON.stringify(this.usuarios));

    }
    
    
  
    
  
}

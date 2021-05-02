import {
  Injectable,
  OnInit
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService implements OnInit {




  constructor() {}
  emp: string
  jobid: number
  ngOnInit() {}

  login(mail: string, pwd: string) {
    let log = {
      mail: "",
      pwd: ""
    }
    log.mail = mail
    log.pwd = pwd
    const url = 'http://127.0.0.1:8000/login';

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(log)

      })
      .then(response => response.json())
      .then(data => {
        sessionStorage.clear()
        localStorage.logged = data.login;
        sessionStorage.emailuser = mail
        if (data.login) {
          if (data.recruteur == 1) {
            sessionStorage.setItem("routerlink", '/postedoffers')
          }
          if (data.recruteur == 0) {
            sessionStorage.setItem("routerlink", '/offers')
          }
        } else {
          sessionStorage.clear()
          localStorage.clear()
        }

      });
  }

  async alloffers() {

    const url = 'http://127.0.0.1:8000/emploi/all';
    const response = await fetch(url);

    return response.json();



  }
  async getFields() {
    const mail = sessionStorage.emailuser

    const url = 'http://127.0.0.1:8000/fields?mail=' + mail;
    const response = await fetch(url);

    return response.json();



  }

  async getAllFields() {
    const url = 'http://127.0.0.1:8000/allFfields';
    const response = await fetch(url);

    return response.json();



  }

  async getEmpF(idf) {
    const url = 'http://127.0.0.1:8000/emploi?id_field=' + idf;

    const response = await fetch(url);

    return response.json();


  }

  postuler(des: string, id_emploi: number) {
    let log = {
      id_emploi: 0,
      mail: "",
      description: ""
    }
    log.mail = sessionStorage.emailuser
    log.id_emploi = id_emploi
    log.description = des


    const url = 'http://127.0.0.1:8000/postuler';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)

    })

  }
  async getPostulations() {
    const mail = sessionStorage.emailuser

    const url = 'http://127.0.0.1:8000/postulations?mail=' + mail;
    const response = await fetch(url);

    return response.json()



  }
  async getJobPosted() {
    const mail = sessionStorage.emailuser

    const url = 'http://127.0.0.1:8000/jobposted?mail=' + mail;
    const response = await fetch(url);

    return response.json();



  }
  addJob(JobTitle: string, JobPrice: number) {
    let job = {
      title: JobTitle,
      mail: sessionStorage.emailuser,
      price: JobPrice
    }



    const url = 'http://127.0.0.1:8000/nvEmp';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)

    })

  }
  async getPerPos() {
    const url = 'http://127.0.0.1:8000/jobpostulation?id_emploi=' + sessionStorage.empid;
    const response = await fetch(url);
    console.log(url);
    
    return response.json();



  }
  changeResponse(mail: string, res: string) {
    let response = {
      id_emploi: sessionStorage.empid,
      mail: mail,
      response: res
    }



    const url = 'http://127.0.0.1:8000/changeResponse ';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)

    })

  }
  async signup(mail: string,first_name: string,last_name: string,phone: string,CIN: string,age: string,password: string,photo: string,recruteur: boolean) {
    let nv = {
      mail: mail,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      CIN: CIN,
      age: age,
      password: password,
      photo: photo,
      recruteur: recruteur
    }
    


    const url = 'http://127.0.0.1:8000/signup';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nv)

    })
    return response.json();

  }
  AddFA(mail: string,field:number) {
    let nv = {
      mail: mail,
      id_field:field
    }
    


    const url = 'http://127.0.0.1:8000/setUField';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nv)

    })
    

  }


}
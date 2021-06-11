function Alumnos_1(){
    var usuarios=[
    {
        usuarioNmbre:'Esteban',
        contrasena: 'Epz97'             
    },
    {
        usuarioNmbre:'juan',
        contrasena:'abc'
    }
];

var notas=[
    {
        nombre: 'Esteban',
        nota: 5
    },
    {
        nombre: 'juan',
        nota: 3
    }

];
var nombrePrompt=prompt('ingese nombre de usuario');
var contrasenaPrompt=prompt('ingrese contraseña');

function IniciarSesion(user, pass){
    if(user=== usuarios[0].usuarioNmbre && pass === usuarios[0].contrasena){
        console.log(notas[0].nota);
    }else if(user=== usuarios[1].usuarioNmbre && pass === usuarios[1].contrasena){
        console.log(notas[1].nota);
    }else{
        alert('Usuario o contraseña incorrecta');
    }
}
IniciarSesion(nombrePrompt,contrasenaPrompt);
}
function Alumnos_2(){
    var usuarios=[
    {
        usuarioNmbre:'Esteban',
        contrasena: 'Epz97'             
    },
    {
        usuarioNmbre:'juan',
        contrasena:'abc'
    },
    {
        usuarioNmbre:'Laura',
        contrasena:'12345'
    },
    {
        usuarioNmbre:'Natalia',
        contrasena:'abc123'
    }
];

var notas=[
    {
        nombre: 'Esteban',
        nota: 5
    },
    {
        nombre: 'juan',
        nota: 3
    },
    {
        nombre: 'Laura',
        nota: 6
    },
    {
        nombre: 'Natalia',
        nota: 2
    }

];
var nombrePrompt=prompt('ingese nombre de usuario');
var contrasenaPrompt=prompt('ingrese contraseña');
function UsuarioValido(user, pass){
    for (var i=0; i<usuarios.length; i++){
        if(user=== usuarios[0].usuarioNmbre && pass === usuarios[0].contrasena){
            return true;
        }else if(user=== usuarios[1].usuarioNmbre && pass === usuarios[1].contrasena){
            return true;
        }else if(user=== usuarios[2].usuarioNmbre && pass === usuarios[2].contrasena){
            return true;
        }else if(user=== usuarios[2 ].usuarioNmbre && pass === usuarios[2].contrasena){
            return true;
        }
    }return false;
}
function IniciarSesion(user, pass){
    if (UsuarioValido(user, pass)){
        console.log(notas);
    }else{
        alert('Usuario o contraseña incorrecta');
    }
}
IniciarSesion(nombrePrompt,contrasenaPrompt);
}
function compra(){
    var boton = document.getElementById('boton');
var input = document.getElementById('input');
var ul = document.querySelector('ul');

boton.addEventListener('click', function(){
    if (input.value.length > 0) {
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
        var botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn-danger')
        botonEliminar.appendChild(document.createTextNode('Eliminar'));
        botonEliminar.onclick = Eliminar;
        li.appendChild(botonEliminar);
    } 
})

function Eliminar(e) {
    e.target.parentNode.remove();
}
}
function preguntas(){
    var james = document.getElementById('james');
    var falcao = document.getElementById('falcao');
    var valenciano = document.getElementById('valenciano');
    
    var preguntaUno = document.getElementById('uno');
    var preguntaDos = document.getElementById('dos');
    var preguntaTres = document.getElementById('tres');
    
    var bogota = document.getElementById('bogota');
    var cali = document.getElementById('cali');
    var medellin = document.getElementById('medellin');
    
    var futbol = document.getElementById('futbol');
    var baloncesto = document.getElementById('baloncesto');
    var ciclismo = document.getElementById('ciclismo');
    
    var buenosaires = document.getElementById('buenosaires');
    var laplata = document.getElementById('laplata');
    var laboca = document.getElementById('laboca');
    
    var correcto = document.getElementById('correcto');
    var incorrecto = document.getElementById('incorrecto');
    var correcto2 = document.getElementById('correcto2');
    var incorrecto2 = document.getElementById('incorrecto2');
    var correcto3= document.getElementById('correcto3');
    var incorrecto3 = document.getElementById('incorrecto3');
    var puntaje = 0;
    
    james.addEventListener("click", function(e){
        e.preventDefault();
        james.style.background = "red";
        incorrecto.style.display = "block";
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "block";
            preguntaTres.style.display = "none";
        }, 1000);
    })
    
    falcao.addEventListener("click", function(e){
        e.preventDefault();
        falcao.style.background = "green";
        correcto.style.display = "block";
        puntaje++;
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "block";
            preguntaTres.style.display = "none";
        }, 1000)
    })
    
    valenciano.addEventListener("click", function(e){
        e.preventDefault();
        valenciano.style.background = "red";
        incorrecto.style.display = "block";
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "block";
            preguntaTres.style.display = "none";
        }, 1000);
    })
    
    bogota.addEventListener("click", function(e){
        e.preventDefault();
        bogota.style.background = "green";
        correcto2.style.display = "block";
        puntaje++;
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "none";
            preguntaTres.style.display = "block";
        }, 1000)
    })
    
    cali.addEventListener("click", function(e){
        e.preventDefault();
        cali.style.background = "red";
        incorrecto2.style.display = "block";
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "none";
            preguntaTres.style.display = "block";
        }, 1000)
    })
    
    medellin.addEventListener("click", function(e){
        e.preventDefault();
        medellin.style.background = "red";
        incorrecto2.style.display = "block";
        setTimeout(function(){
            preguntaUno.style.display = "none";
            preguntaDos.style.display = "none";
            preguntaTres.style.display = "block";
        }, 1000)
    })
    
    
    futbol.addEventListener("click", function(e){
        e.preventDefault();
        futbol.style.background = "red";
        incorrecto3.style.display = "block";
        setTimeout(function(){
            alert('Tu puntaje es ' + puntaje );
            location.reload();
        }, 1000)
    })
    
    baloncesto.addEventListener("click", function(e){
        e.preventDefault();
        baloncesto.style.background = "red";
        incorrecto3.style.display = "block";
        setTimeout(function(){
           alert('Tu puntaje es ' + puntaje );
            location.reload();
        }, 1000)
    })
    ciclismo.addEventListener("click", function(e){
        e.preventDefault();
        ciclismo.style.background = "green";
        correcto3.style.display = "block";
        puntaje++;
        setTimeout(function(){
           alert('Tu puntaje es ' + puntaje );
            location.reload();
        }, 1000)
    })
    
    }
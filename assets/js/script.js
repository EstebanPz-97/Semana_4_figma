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
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
        var botonEliminar = document.createElement('button');
        botonEliminar.appendChild(document.createTextNode('Eliminar'));
        botonEliminar.onclick = Eliminar;
        li.appendChild(botonEliminar);
    } 
})

function Eliminar(e) {
    e.target.parentNode.remove();
}
}

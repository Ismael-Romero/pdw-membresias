# Proyecto membresia veterinaria
Proyectos desarrollados durante la materia -Desarrollo Web-

### Ver online

https://membership.404backup.com/

### Probar offline
Este repositorio cuenta con un directorio nomabrado dist que permite probar el formulario sin necesidad de un servidor web.

### Colaboradores: 
- Gustavo Isamel Romero Morales
- Yohan Uriel Arce Ortiz


### ¿Cómo usar el repositorio?

1- Instala las dependencias node
<pre>  npm install  </pre>

2- Crea la base de datos membership
``` sql 
  CREATE DATABASE membership
```

3- Importa la base de datos
``` sql 
mysql -u username -p  membership < ./db/db.sql
```

4- Ejecuta la aplicación
``` node
npm run dev
```

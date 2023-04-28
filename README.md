# Proyecto membresia veterinaria
Proyectos desarrollados durante la materia -Desarrollo Web-

### ver

https://membership.404backup.com/

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

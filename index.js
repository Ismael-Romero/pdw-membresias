const cors = require('cors');
const mysql = require('mysql2/promise');
const express = require('express')
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb){
		cb(null, 'public/images')
	},
	filename: function (req, file, cb){
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + '-' + uniqueSuffix + ext);
	}
});

const upload = multer({storage: storage});
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/api/cliente', upload.single('file'), async (req, res) => {
	const cliente_nombre = req.body.fnombre;
	const cliente_email = req.body.fcorreo;
	const cliente_telefono = req.body.ftelefono;
	const cliente_direccion = req.body.fdireccion;
	const cliente_fecha_registro = req.body.fdate;
	const masc_nombre = req.body.fnombre_mascota;
	const masc_nacimiento = req.body.fnacimiento_mascota;
	const masc_especie  = req.body.fespecie_mascota;
	const masc_raza = req.body.fraza_mascota;
	const masc_sexo = req.body.fsexo_mascota;
	const masc_file = req.file.filename;
	const mem_tipo = req.body.ftipo_membresia;
	const mem_date_ini = req.body.fdate_inicio;
	const mem_date_fin = req.body.fdate_vencimiento;
	const mem_costo = parseFloat(req.body.fcosto);
	
	try {
		const connection = await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '(@)9176Avrmx',
			database: 'membership'
		});
		
		const [rows, fields] = await connection.execute(`CALL create_cliente('${cliente_nombre}','${cliente_email}','${cliente_telefono}','${cliente_direccion}','${cliente_fecha_registro}','${masc_nombre}','${masc_nacimiento}','${masc_especie}','${masc_raza}','${masc_sexo}','${masc_file}','${mem_tipo}', '${mem_date_ini}', '${mem_date_fin}', ${mem_costo})`);
		console.log(rows);
		
	} catch (error){
		console.log(error)
	}
	
	res.send('ok');
});

app.listen(3000,()=> {
	console.log('Server On')
})
import { pool } from "../config/database"

class ClientesConsultas {
  async buscarClientes() {
    //consulta a la db
    try {
      const query = "select * from customers ORDER BY id";
      const response = await pool.query(query);
      return response.rows;
    } catch (error) {
      console.error('Error en la consulta buscarClientes:', error);
      throw new Error('Error en la consulta a la base de datos');
    }
  }

  async eliminarCliente(id: any) {
    const query = "delete from customers where id = " + id;
    await pool.query(query);

    return {
      message: "Eliminado correctamente",
    };
  }

  async crearCliente(name: any, age: any) {
    const query = 'insert into customers(name, age) values($1, $2)';
    await pool.query(query, [name, age]);
    return {
      message: "Añadido correctamente",
    };
  }

  async actualizarCliente(id: any, name: any, age?: any) {
    // Verifica si hay un valor proporcionado para la edad
    const ageUpdate = age ? `, age='${age}'` : '';
  
    const query = `UPDATE customers SET name='${name}'${ageUpdate} WHERE id = ${id}`;
    await pool.query(query);
  
    return {
      message: "Actualizacion correcta",
    };
  }
  
}

export const clientesConsulta = new ClientesConsultas();
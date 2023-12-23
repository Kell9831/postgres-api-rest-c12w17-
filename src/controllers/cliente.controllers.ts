import { Request, Response } from "express";
import { clientesConsulta } from "../services/cliente.service";

export async function BuscarDatosController(req: Request, res: Response) {
    const response = await clientesConsulta.buscarClientes();
    res.status(200).json({
        data: response,
    })
}

export async function deleteController(req: Request, res: Response) {
    const id = req.params.id;
    //   const data = req.body;
    const response = await clientesConsulta.eliminarCliente(id);
    res.status(200).json(response);
}

export async function createController(req: Request, res: Response) {
    const data = req.body;
    const response = await clientesConsulta.crearCliente(
        data.name,
        data.age
    );
    const updatedList = await clientesConsulta.buscarClientes();

    res.status(200).json({
        message: "creado correctamente",
        updatedList: updatedList,
    });
}

export async function editController(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;
    const response = await clientesConsulta.actualizarCliente(
        id,
        data.name,
        data.age
    );

    const updatedList = await clientesConsulta.buscarClientes();

    res.status(200).json({
        message: "Actualizacion correcta",
        updatedList: updatedList,
    });
}
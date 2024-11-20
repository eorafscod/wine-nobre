"use client";

import React, { use } from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaPlusSquare, FaTrashAlt } from "react-icons/fa";
import Pagina from "../components/Pagina";

export default function VinhosInicialPage() {
  const [vinhos, setVinhos] = useState([]);

  useEffect(() => {
    const vinhosLocalStorage = JSON.parse(localStorage.getItem("vinhos")) || [];
    setVinhos(vinhosLocalStorage);
    console.log(vinhosLocalStorage);
  }, []);

  function apagar(vinho) {
    if (window.confirm(`Deseja mesmo excluir o vinho ${vinho.vrinho}?`)) {
      const novaLista = vinhos.filter((item) => item.id !== vinho.id);
      localStorage.setItem("vinhos", JSON.stringify(novaLista));
      setVinhos(novaLista);
      alert("Vinho excluído com sucesso!!");
    }
  }

  return (
    <Pagina titulo="vinhos">
      <div className="text-end my-2">
        <Button href="/vinhos/form">
          <FaPlusSquare /> Novo
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vinho:</th>
            <th>Tipo:</th>
            <th>Safra:</th>
            <th>Teor Alcoólico:</th>
            <th>Fornecedor:</th>
            <th>Preço:</th>
            <th>Estoque:</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vinhos.map((vinho) => {
            return (
              <tr key={vinho.id} className="text-center">
                <td>{vinho.vinho}</td>
                <td>{vinho.tipo}</td>
                <td>{vinho.safra}</td>
                <td>{vinho.teorAlco}</td>
                <td>{vinho.fornecedor}</td>
                <td>{vinho.precoUnico}</td>
                <td>{vinho.estoque}</td>
                <td className="text-center">
                  <Button className="me-2" href={`/vinhos/form?id=${vinho.id}`}>
                    <FaEdit />
                  </Button>
                  <Button variant="danger" onClick={() => apagar(vinho)}>
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Pagina>
  );
}

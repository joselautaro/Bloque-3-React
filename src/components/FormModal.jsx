import React, { use, useState } from "react";

export default function FormModal() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Control de modal y datos enviados

    const [modalAbierto, setModalAbierto] = useState(false);

    const [datosEnviados, setDatosEnviados] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            nombre: nombre.trim(),
            email: email.trim(),
            mensaje: mensaje.trim(),
            fecha: new Date().toISOString(),
        };

        setDatosEnviados(payload);
        setModalAbierto(true);
    };

    const cerrarModal = () => setModalAbierto(false);


    return (
        <div className="app-container">
            <div className="card">
                <h2 className="title">Formulario de contacto</h2>

                <form onSubmit={handleSubmit} className="form">
                    <label className="label">Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        className="input"
                        onChange={(e) => setNombre(e.target.value)} />
                    <label className="label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        className="input"
                        onChange={(e) => setEmail(e.target.value)} />
                    <label className="label">Mensaje:</label>
                    <input
                        type="text"
                        value={mensaje}
                        className="textarea"
                        onChange={(e) => setMensaje(e.target.value)} />
                    <div className="actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                                setNombre('');
                                setEmail('');
                                setMensaje('');
                            }}
                        >
                            Limpiar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Enviar</button>
                    </div>
                </form>
            </div>

            {modalAbierto && (
                <div className="modal-overlay" role="dialog" aria-modal="true">
                    <div className="modal-backdrop" onClick={cerrarModal}>
                        <div className="modal">
                            <h3 className="modal-title">Datos enviados</h3>
                            {datosEnviados ? (
                                <div className="modal-body">
                                    <p>
                                        <strong>Nombre:</strong>{datosEnviados.nombre}
                                    </p>
                                    <p>
                                        <strong>Email:</strong>{datosEnviados.email}                                    </p>
                                    <p>
                                        <strong>Mensaje:</strong>{datosEnviados.mensaje}
                                    </p>
                                    <p className="meta">Enviado: {new Date(datosEnviados.fecha).toLocaleString()}</p>
                                </div>
                            ) : (
                                <div className="modal-body">No hay datos para mostrar</div>
                            )}
                            <div className="modal-actions">
                                <button onClick={cerrarModal}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
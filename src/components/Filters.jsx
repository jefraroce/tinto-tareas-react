function Filters() {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <button className="btn btn-primary btn-sm me-1">Todas</button>
                    <button className="btn btn-outline-primary btn-sm me-1">Pendientes</button>
                    <button className="btn btn-outline-primary btn-sm">Completadas</button>
                </div>

                <button className="btn btn-link btn-sm">
                    <span className="material-icons">
                        clear
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Filters;
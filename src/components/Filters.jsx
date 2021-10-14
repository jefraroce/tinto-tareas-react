function Filters(props) {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <button className="btn btn-primary btn-sm me-1" onClick={ ()=>{ props.filterAll() } }>Todas</button>
                    <button className="btn btn-outline-primary btn-sm me-1" onClick={ ()=>{ props.filter('pending') } } >Pendientes</button>
                    <button className="btn btn-outline-primary btn-sm" onClick={ ()=>{ props.filter('completed') } }>Completadas</button>
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
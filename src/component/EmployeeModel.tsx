import "./EmployeeModel.style.css"
type Props = {
    onClose: () => void;
    data: any
}
const EmployeeModel = (props: Props) => {
    const { onClose, data } = props;

    return <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Employee Data</h3>
                {data && <div>
                    <div>
                        <label>First Name: {data[0].firstName}</label>
                    </div>
                    <div>
                        <label>Last Name: {data[0].lastName}</label>
                    </div>
                    <div>
                        <label>Email Add.: {data[0].email}</label>
                    </div>
                </div>}
            </div>

        </div>

    </>
}
export default EmployeeModel;